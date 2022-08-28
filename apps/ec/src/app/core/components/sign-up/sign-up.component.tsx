import { useState } from 'react';

// JSS
import { createUseStyles } from 'react-jss';
import { Theme } from '../../types/theme.type';
import {
  createUserAuthWithEmailAndPassword,
  createUserDocuemnt,
} from '../../utils/firebase/firebase.utils';
import AppFormInput from '../form-input/formInput.component';

// Component Styles
const useSignUpStyles = createUseStyles((theme: Theme) => ({
  signUp: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
  },
}));

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

// @Component
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
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Email already in use!');
      } else {
        console.log(error);
      }
    }

    resetFormFileds();
  };

  const { signUp } = useSignUpStyles();

  return (
    <div className={signUp}>
      <h1>Sign up with your email and password</h1>
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

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default AppSignUp;
