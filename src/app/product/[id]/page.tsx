"use client";

import LightBox from "@/components/lightbox";
import { LightBoxModal } from "@/components/lightbox-modal";
import { useModal } from "@/contexts/modal-context";
import { useCartProducts } from "@/contexts/product-cart-context";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import useProduct from "@/hooks/useProduct";
import { formatPrice } from "@/utils/format-price";
import { Suspense, useState } from "react";
import { SuccessItemAdded } from "@/layouts/toast";
import Loading from "@/app/loading";
import LightBoxMobile from "@/components/lightbox-mobile";

export default function ProductPage({ params }: { params: { id: string } }) {
  const { addToLocalCart } = useCartProducts();
  const { isOpen, setIsOpen } = useModal();
  const { updateLocalStorage } = useLocalStorage("cart-items", []);
  const { product } = useProduct(params.id);
  const [counter, setCounter] = useState(1);
  const [currentPhoto, setCurrentPhoto] = useState(0);

  function selectPhoto(newIndex: number) {
    setCurrentPhoto((previous) => newIndex);
  }

  function handleIncrementOrDecrementCounter(value: boolean) {
    if (value) {
      setCounter((previous) => previous + 1);
    } else {
      setCounter((previous) => previous - 1);
    }
  }

  function addToCart() {
    let cartItems = localStorage.getItem("cart-items");
    if (cartItems) {
      let cartItemsArray = JSON.parse(cartItems);
      let productRepeat = cartItemsArray.findIndex(
        (item: { id: number }) => item.id === product[0]?.id
      );
      if (productRepeat !== -1) {
        cartItemsArray[productRepeat].quantity += counter;
        SuccessItemAdded(
          `Added ${counter} more successfully!`,
          product[0].image[0]
        );
      } else {
        cartItemsArray.push({
          ...product[0],
          price: formatPrice(product[0]?.price, product[0]?.descount),
          quantity: counter,
        });
        SuccessItemAdded("Added with success!", product[0].image[0]);
      }
      addToLocalCart(cartItemsArray);
      updateLocalStorage(cartItemsArray);
      localStorage.setItem("cart-items", JSON.stringify(cartItemsArray));
    }
  }

  return (
    <main className="flex items-center justify-center md:p-10 md:m-10">
      <Suspense fallback={<Loading />}>
        {isOpen && <LightBoxModal product={product[0]} />}
        <div className="md:flex md:w-3/5 items-center gap-20">
          {product[0] && <LightBox product={product[0]} />}
          {product[0] && <LightBoxMobile product={product[0]} />}
          <div className="flex flex-col bg-white p-5 m-5 rounded-lg md:h-[500px] md:w-[600px] justify-between gap-6">
            <div className="flex items-center justify-center bg-orange-100 text-orange-400 font-semibold rounded-full h-6 w-6">
              {product[0]?.gender}
            </div>
            <span className="font-semibold text-orange-400 text-sm">
              {product[0]?.category}
            </span>
            <h1 className="md:text-4xl text-2xl font-bold text-slate-800">
              {product[0]?.title}
            </h1>
            <p className="font-medium text-slate-600 md:text-base text-sm">
              {product[0]?.description}
            </p>
            <div className="flex md:flex-col flex-row md:items-start md:gap-4 items-center justify-between">
              <div className="flex gap-4 items-center">
                <span className="font-bold text-slate-800 text-3xl">{`$${formatPrice(
                  product[0]?.price,
                  product[0]?.descount
                )}.00`}</span>
                <div className="flex items-center justify-center h-5 px-2 rounded-md bg-orange-50 text-orange-400 font-bold">{`${product[0]?.descount}%`}</div>
              </div>
              <span className="text-slate-400 text-sm line-through font-semibold">{`$${product[0]?.price}.00`}</span>
            </div>
            <div className="flex md:flex-row flex-col gap-6">
              <div className="h-14 md:w-44 w-full flex bg-zinc-100 items-center text-center rounded-md">
                <button
                  type="button"
                  disabled={counter === 1}
                  className={
                    counter !== 1
                      ? "flex-1 h-full rounded-tl-md rounded-bl-md font-bold text-lg text-orange-400"
                      : "flex-1 h-full rounded-tl-md rounded-bl-md font-bold text-lg text-orange-400 opacity-25"
                  }
                  onClick={() => handleIncrementOrDecrementCounter(false)}
                >
                  -
                </button>
                <span className="flex-1 font-bold text-zinc-700">
                  {counter}
                </span>
                <button
                  type="button"
                  className="flex-1 h-full rounded-tl-md rounded-bl-md font-bold text-lg text-orange-400"
                  onClick={() => handleIncrementOrDecrementCounter(true)}
                >
                  +
                </button>
              </div>
              <button
                className="bg-orange-400 text-white font-semibold items-center justify-center py-3 w-full rounded-lg"
                onClick={addToCart}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </Suspense>
    </main>
  );
}
