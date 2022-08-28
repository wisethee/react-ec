// JSS
import { createUseStyles } from 'react-jss';
import { Theme } from '../../types/theme.type';

// Utils
import {
  createUserDocuemnt,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';
import AppButton from '../button/button.component';

// Component Styles
const useSignInStyles = createUseStyles((theme: Theme) => ({
  signIn: {
    display: 'flex',
    width: '50%',
  },
}));

// @Component
const AppSignIn = () => {
  const { signIn } = useSignInStyles();

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocuemnt(user);
  };

  return (
    <div className={signIn}>
      <AppButton onClick={logGoogleUser} color="primary">
        Sign in with Google
      </AppButton>
    </div>
  );
};

export default AppSignIn;
