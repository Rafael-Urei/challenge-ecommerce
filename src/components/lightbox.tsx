import { Products } from "@/types/products";
import { useState } from "react";
import { Next } from "./icons/next";
import { Previous } from "./icons/previous";
import { Close } from "./icons/close";
import { useModal } from "@/contexts/modal-context";
import Image from "next/image";

type Props = {
  product: Products;
  isModal?: boolean;
};

export default function LightBox({ product, isModal }: Props) {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const { setIsOpen } = useModal();

  function selectPhoto(newIndex: number) {
    setCurrentPhoto((previous) => newIndex);
  }

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
    <div className="items-center md:flex hidden">
      {isModal && (
        <button
          className="bg-white h-14 w-14 rounded-full flex items-center justify-center"
          onClick={PreviousPhoto}
        >
          <Previous />
        </button>
      )}
      <div className="relative flex flex-col gap-3 items-center h-[500px] w-[500px] rounded-lg">
        {isModal && (
          <button
            className="absolute right-0 top-[-40px]"
            onClick={() => setIsOpen(false)}
          >
            {" "}
            <Close />
          </button>
        )}
        <Image
          src={product.image[currentPhoto]}
          alt="product"
          width={450}
          height={500}
          className="rounded-lg cursor-zoom-in"
          onClick={() => setIsOpen(true)}
          priority
        ></Image>
        <ul className="flex gap-2 ">
          {product.image.map((image, index) => {
            return (
              <div key={index} className="relative h-[84px] w-[84px]">
                <div
                  className={
                    currentPhoto === index
                      ? "before:absolute before:h-full before:w-full before:rounded-lg before:bg-white before:opacity-70 cursor-pointer"
                      : "before:duration-200 before:absolute before:h-full before:w-full before:rounded-lg hover:before:bg-white before:opacity-40 cursor-pointer"
                  }
                  onClick={() => selectPhoto(index)}
                ></div>
                <Image
                  key={index}
                  src={image}
                  alt="product"
                  className="rounded-lg w-[85px]"
                  width={85}
                  height={85}
                />
              </div>
            );
          })}
        </ul>
      </div>
      {isModal && (
        <button
          className="bg-white h-14 w-14 rounded-full flex items-center justify-center"
          onClick={NextPhoto}
        >
          <Next />
        </button>
      )}
    </div>
  );
}
