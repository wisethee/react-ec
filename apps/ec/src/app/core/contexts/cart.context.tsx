import { createContext, useState } from 'react';

type CartContext = {
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type CartContextProps = {
  children: React.ReactNode;
};

export const AppCartContext = createContext<CartContext>({
  isCartOpen: false,
  setIsCartOpen: () => false,
});

export const AppCartProvider = ({ children }: CartContextProps) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const value = { isCartOpen, setIsCartOpen };
  return (
    <AppCartContext.Provider value={value}>{children}</AppCartContext.Provider>
  );
};
