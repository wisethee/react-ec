import {
  createUserDocuemnt,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';

const AppSignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocuemnt(user);
  };

  return (
    <div>
      <button onClick={logGoogleUser}>Sign in with Google</button>
    </div>
  );
};

export default AppSignIn;
