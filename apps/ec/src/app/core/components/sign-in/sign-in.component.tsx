// JSS
import { createUseStyles } from 'react-jss';
import { Theme } from '../../types/theme.type';

// Utils
import {
  createUserDocuemnt,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';

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
      <button onClick={logGoogleUser}>Sign in with Google</button>
    </div>
  );
};

export default AppSignIn;
