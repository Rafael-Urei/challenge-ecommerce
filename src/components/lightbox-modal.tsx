import { Products } from "@/types/products";
import LightBox from "./lightbox";

type Props = {
  product: Products;
};

export function LightBoxModal({ product }: Props) {
  return (
    <div className="h-full w-full bg-black bg-opacity-70 fixed flex items-center justify-center z-10">
      <LightBox product={product} isModal={true} />
    </div>
  );
}
