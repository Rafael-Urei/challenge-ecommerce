import useProducts from "./useProducts";

export default function useProduct(id: string) {
  const { products } = useProducts();
  const product = products.filter((product) => product.id == Number(id));
  return { product };
}
