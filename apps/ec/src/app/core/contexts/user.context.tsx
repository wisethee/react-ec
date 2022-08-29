import React, { createContext, useState } from 'react';

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

  return (
    <AppUserContext.Provider value={value}>{children}</AppUserContext.Provider>
  );
};
