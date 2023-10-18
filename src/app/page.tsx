import ProductsList from "@/components/products-list";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <ProductsList type="ALL" />
    </main>
  );
}
