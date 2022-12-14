import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  setDoc,
} from 'firebase/firestore';

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

// Add collections and documents
// Used to import dummy data

// export const addCollectionAndDocument = async (
//   collectioKey: string,
//   objectsToAdd: any
// ) => {
//   const collectionRef = collection(db, collectioKey);
//   const batch = writeBatch(db);

//   objectsToAdd.forEach((object: any) => {
//     const docRef = doc(collectionRef, object.title.toLowerCase());
//     batch.set(docRef, object);
//   });

//   await batch.commit();
//   console.log('done');
// };

export const getCategoriesAndDocument = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);

  const categoryMap = querySnapshot.docs.reduce((acc: any, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  return categoryMap;
};

// Sign in user with google popup window
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

// Create user document from auth
export const createUserDocument = async (
  userAuth: any,
  aditionalInformation: any = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...aditionalInformation,
      });
    } catch (error) {
      console.log(error);
    }
  }
};

// Create user auth with email and password
export const createUserAuthWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

// Sign in with user and passwords
export const signInAuthUSerWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

// Sign out user
export const signOutUser = async () => await signOut(auth);

// User state obesrvable
export const onAuthStateChangedListener = (callback: any) =>
  onAuthStateChanged(auth, callback);
