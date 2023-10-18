import { ReactNode, createContext, useContext, useState } from "react";

type Props = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  isCartOpen: boolean;
  setIsCartOpen: (value: boolean) => void;
};

export const useModal = () => {
  return useContext(ModalContext);
};

const ModalContext = createContext({} as Props);

export function AppModalProvider({ children }: any) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  return (
    <ModalContext.Provider
      value={{ isOpen, setIsOpen, isCartOpen, setIsCartOpen }}
    >
      {children}
    </ModalContext.Provider>
  );
}
