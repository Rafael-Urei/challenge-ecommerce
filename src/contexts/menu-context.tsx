import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";

type Props = {
  isOpen: boolean;
  handleMenu: () => void;
};

export const useMenu = () => {
  return useContext(MenuContext);
};

const MenuContext = createContext({} as Props);

export default function AppMenuProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleMenu = useCallback(() => {
    setIsOpen((previous) => !previous);
  }, []);
  return (
    <MenuContext.Provider value={{ isOpen, handleMenu }}>
      {children}
    </MenuContext.Provider>
  );
}
