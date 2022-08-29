import React, { createContext, useEffect, useState } from 'react';
import {
  createUserDocument,
  onAuthStateChangedListener,
} from '../utils/firebase/firebase.utils';

type AppUserProviderProps = { children: React.ReactNode };
type UserContext = {
  currentUser: null;
  setCurrentUser: React.Dispatch<React.SetStateAction<any | null>>;
};

export const AppUserContext = createContext<UserContext>({
  currentUser: null,
  setCurrentUser: () => null,
});

export const AppUserProvider = ({ children }: AppUserProviderProps) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user: any) => {
      if (user) {
        createUserDocument(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return (
    <AppUserContext.Provider value={value}>{children}</AppUserContext.Provider>
  );
};
