"use client";

import useProducts from "@/hooks/useProducts";
import ProductCard from "./product-card";

type Props = {
  type: "MEN" | "WOMEN" | "ALL";
};

export default function ProductsList({ type }: Props) {
  const { products, menProducts, womenProducts } = useProducts();
  return (
    <>
      {type === "ALL" ? (
        <section className="md:flex md:flex-wrap gap-6 md:p-24 p-2">
          {products.map((product) => {
            return (
              <ProductCard key={product.id} product={product}></ProductCard>
            );
          })}
        </section>
      ) : type === "MEN" ? (
        <section className="md:flex md:flex-wrap gap-6 md:p-24 p-2">
          {menProducts.map((product) => {
            return (
              <ProductCard key={product.id} product={product}></ProductCard>
            );
          })}
        </section>
      ) : (
        <section className="md:flex md:flex-wrap gap-6 md:p-24 p-2">
          {womenProducts.map((product) => {
            return (
              <ProductCard key={product.id} product={product}></ProductCard>
            );
          })}
        </section>
      )}
    </>
  );
}
