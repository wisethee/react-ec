// JSS
import { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { Theme } from '../../types/theme.type';

// Utils
import {
  createUserDocuemnt,
  signInAuthUSerWithEmailAndPassword,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';

// Components
import AppButton from '../button/button.component';
import AppFormInput from '../form-input/formInput.component';

// Component Styles
const useSignInStyles = createUseStyles(
  ({ colors, typography, spacing, screens }: Theme) => ({
    signIn: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      [`${screens['@lg']}`]: { width: '50%' },
    },
    h2: {
      fontSize: typography.fontSize.displaySmall,
      lineHeight: typography.leading.displaySmall,
      color: colors.grey[700],
      marginBottom: spacing[2],
    },
    span: {
      fontSize: typography.fontSize.bodyMedium,
      color: colors.grey[500],
      marginBottom: spacing[16],
    },
  })
);

// Default Form Fields
const defaultFormFields = {
  email: '',
  password: '',
};

// @Component
// TODO: Alert user when user/email not found
const AppSignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const { signIn, h2, span } = useSignInStyles();

  const hadleChange = (event: any) => {
    const { name, value } = event.target;
    setFormFields((prevFormFields) => ({ ...prevFormFields, [name]: value }));
  };

  const resetFormFileds = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const { email, password } = formFields;

    try {
      await signInAuthUSerWithEmailAndPassword(email, password);
      resetFormFileds();
    } catch (error: any) {
      console.log(error);
    }
  };

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocuemnt(user);
  };

  return (
    <div className={signIn}>
      <h2 className={h2}>Already have an account?</h2>
      <span className={span}>Sign in with your email and password.</span>
      <form onSubmit={(event) => handleSubmit(event)}>
        <AppFormInput
          label="Email"
          type="text"
          onChange={hadleChange}
          name="email"
          value={email}
        />

        <AppFormInput
          label="Password"
          type="password"
          onChange={hadleChange}
          name="password"
          value={password}
        />

        <AppButton type="submit">Sign In</AppButton>
        <AppButton onClick={logGoogleUser} color="primary">
          Sign in with Google
        </AppButton>
      </form>
    </div>
  );
};

export default AppSignIn;
