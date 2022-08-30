import { useState } from 'react';

// JSS
import { createUseStyles } from 'react-jss';
import { Theme } from '../../types/theme.type';

// Utils
import {
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
    marginFormInput: {
      marginBottom: spacing[6],
    },
    marginButton: {
      marginLeft: spacing[4],
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
// TODO: Fix types
const AppSignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const { signIn, h2, span, marginFormInput, marginButton } = useSignInStyles();

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

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
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
          modifier={marginFormInput}
        />

        <AppButton type="submit">Sign In</AppButton>
        <AppButton
          onClick={signInWithGoogle}
          color="primary"
          modifier={marginButton}
        >
          Sign in with Google
        </AppButton>
      </form>
    </div>
  );
};

export default AppSignIn;
