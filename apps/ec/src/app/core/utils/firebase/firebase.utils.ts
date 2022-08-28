import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  User,
} from 'firebase/auth';
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCQHM-ZP35fGgbo6tKOv0qOGLOpEpnJtVU',
  authDomain: 'react-ec-bb78f.firebaseapp.com',
  projectId: 'react-ec-bb78f',
  storageBucket: 'react-ec-bb78f.appspot.com',
  messagingSenderId: '193287341864',
  appId: '1:193287341864:web:6e1e11e9103ded12a9721d',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Providers
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

// Auth
const auth = getAuth(firebaseApp);

// DB
const db = getFirestore(firebaseApp);

// Sign in user with google popup window
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

// Create user document from auth
export const createUserDocuemnt = async (userAuth: User) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log(error);
    }
  }
};
