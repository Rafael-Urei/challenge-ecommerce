import { useEffect, useState } from "react";
import { Products } from "@/types/products";
import { useCartProducts } from "@/contexts/product-cart-context";

export function useLocalStorage<T>(item: string, initialValue: Products[]) {
  const { cartProducts, addToLocalCart } = useCartProducts();
  useEffect(() => {
    addToLocalCart(initialValue);
    let value = localStorage.getItem(item);
    if (value) {
      addToLocalCart(JSON.parse(value));
    } else {
      localStorage.setItem(item, JSON.stringify([]));
    }
  }, [addToLocalCart]);

  const updateLocalStorage = (newValue: Products[]) => {
    addToLocalCart(newValue);
    localStorage.setItem(item, JSON.stringify(newValue));
  };

  return {
    cartProducts,
    updateLocalStorage,
  };
}
