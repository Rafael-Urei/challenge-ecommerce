"use client";

import { Products } from "@/types/products";
import { useEffect, useState } from "react";

export default function useProducts() {
  const [products, setProducts] = useState<Products[]>([]);
  const womenProducts = products.filter((product) => product.gender === "F");
  const menProducts = products.filter((product) => product.gender === "M");
  useEffect(() => {
    async function getData() {
      const res = await fetch(
        "https://gist.githubusercontent.com/Rafael-Urei/b2710fdfe6d250f1c46ca08f4caff6ce/raw/bbc0b6fe8431b99e9e8f480b9fe0e775da83871d/products.json"
      );
      if (!res.ok) throw new Error("Failed to fetch data...");
      const data: Products[] = await res.json();
      setProducts(data);
    }
    getData();
  }, []);

  return { products, womenProducts, menProducts };
}
