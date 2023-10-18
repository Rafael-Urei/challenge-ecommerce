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
        "https://gist.githubusercontent.com/Rafael-Urei/b2710fdfe6d250f1c46ca08f4caff6ce/raw/3aeb6c15afa16af1c26a9da6dde8bb944bd98104/products.json"
      );
      if (!res.ok) throw new Error("Failed to fetch data...");
      const data: Products[] = await res.json();
      setProducts(data);
    }
    getData();
  }, []);

  return { products, womenProducts, menProducts };
}
