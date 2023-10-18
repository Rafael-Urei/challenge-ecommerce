import { Products } from "@/types/products";
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";

type Props = {
  cartProducts: Products[];
  addToLocalCart: (value: Products[]) => void;
};

export const useCartProducts = () => {
  return useContext(CartProductsContext);
};

const CartProductsContext = createContext({} as Props);

export function AppCartProvider({ children }: any) {
  const [cartProducts, setCartProducts] = useState<Products[]>([]);

  const addToLocalCart = useCallback((value: Products[]) => {
    setCartProducts(value);
  }, []);

  return (
    <CartProductsContext.Provider value={{ cartProducts, addToLocalCart }}>
      {children}
    </CartProductsContext.Provider>
  );
}
