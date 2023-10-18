import { useModal } from "@/contexts/modal-context";
import { Products } from "@/types/products";
import { useState } from "react";
import { Previous } from "./icons/previous";
import { Next } from "./icons/next";
import Image from "next/image";

type Props = {
  product: Products;
  isModal?: boolean;
};

export default function LightBoxMobile({ product }: Props) {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  function NextPhoto() {
    if (currentPhoto >= product.image.length - 1) {
      setCurrentPhoto(0);
    } else {
      setCurrentPhoto((previous) => previous + 1);
    }
  }

  function PreviousPhoto() {
    if (currentPhoto <= 0) {
      setCurrentPhoto(product.image.length - 1);
    } else {
      setCurrentPhoto((previous) => previous - 1);
    }
  }

  return (
    <div className="flex items-center md:hidden relative">
      <button
        className="bg-white h-10 w-10 rounded-full flex items-center justify-center absolute left-2 z-10"
        onClick={PreviousPhoto}
      >
        <Previous />
      </button>
      <div className="relative flex flex-col gap-3 items-center rounded-lg w-full h-[375px]">
        <Image
          src={product.image[currentPhoto]}
          alt="product-mobile"
          className="cursor-zoom-in"
          fill
          priority
        ></Image>
      </div>
      <button
        className="bg-white h-10 w-10 rounded-full flex items-center justify-center absolute right-2"
        onClick={NextPhoto}
      >
        <Next />
      </button>
    </div>
  );
}
