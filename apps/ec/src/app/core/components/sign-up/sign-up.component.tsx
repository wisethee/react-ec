import { useState } from 'react';

// JSS
import { createUseStyles } from 'react-jss';
import { Theme } from '../../types/theme.type';
import {
  createUserAuthWithEmailAndPassword,
  createUserDocuemnt,
} from '../../utils/firebase/firebase.utils';
import AppButton from '../button/button.component';
import AppFormInput from '../form-input/formInput.component';

// Component Styles
const useSignUpStyles = createUseStyles(({ spacing }: Theme) => ({
  signUp: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    marginLeft: spacing[3],
  },
}));

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

// @Component
// TODO: Alert user when user/email exists
const AppSignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

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
      await createUserDocuemnt(response?.user, { displayName });
      resetFormFileds();
    } catch (error: any) {
      console.log(error);
    }
  };

  const { signUp } = useSignUpStyles();

  return (
    <div className={signUp}>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password.</span>
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
        />

        <AppButton type="submit">Sign Up</AppButton>
      </form>
    </div>
  );
};

export default AppSignUp;
