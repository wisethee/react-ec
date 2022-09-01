import { useState } from 'react';

// JSS
import { createUseStyles } from 'react-jss';
import { useDispatch } from 'react-redux';
import { userActions } from '../../store/reducers/user/user.reducer';
import { Theme } from '../../types/theme.type';

// Utils
import {
  createUserAuthWithEmailAndPassword,
  createUserDocument,
} from '../../utils/firebase/firebase.utils';

// Components
import AppButton from '../button/button.component';
import AppFormInput from '../form-input/formInput.component';

// Component Styles
const useSignUpStyles = createUseStyles(
  ({ colors, typography, spacing, screens }: Theme) => ({
    signUp: {
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
  })
);

// Default Form Fields
const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

// @Component
// TODO: Alert user when user/email exists
const AppSignUp = () => {
  const dispatch = useDispatch();

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const { signUp, h2, span, marginFormInput } = useSignUpStyles();

  const hadleChange = (event: any) => {
    const { name, value } = event.target;
    setFormFields((prevFormFields) => ({ ...prevFormFields, [name]: value }));
  };

  const resetFormFileds = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const { displayName, email, password } = formFields;

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const response = await createUserAuthWithEmailAndPassword(
        email,
        password
      );
      dispatch(userActions.setCurrentUser(response?.user));
      await createUserDocument(response?.user, { displayName });

      resetFormFileds();
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <div className={signUp}>
      <h2 className={h2}>Don't have an account?</h2>
      <span className={span}>Sign up with your email and password.</span>
      <form onSubmit={(event) => handleSubmit(event)}>
        <AppFormInput
          label="Display Name"
          type="text"
          onChange={hadleChange}
          name="displayName"
          value={displayName}
        />

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

        <AppFormInput
          label="Confirm Password"
          type="password"
          onChange={hadleChange}
          name="confirmPassword"
          value={confirmPassword}
          modifier={marginFormInput}
        />

        <AppButton type="submit">Sign Up</AppButton>
      </form>
    </div>
  );
};

export default AppSignUp;
