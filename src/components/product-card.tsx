"use client";

import { useCartProducts } from "@/contexts/product-cart-context";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { SuccessItemAdded } from "@/layouts/toast";
import { Products } from "@/types/products";
import { formatPrice } from "@/utils/format-price";
import Image from "next/image";
import Link from "next/link";
import { WhiteCart } from "./icons/white-cart";

type Props = {
  product: Products;
};

export default function ProductCard({ product }: Props) {
  const { addToLocalCart } = useCartProducts();
  const { cartProducts, updateLocalStorage } = useLocalStorage(
    "cart-items",
    []
  );

  function addToCart() {
    let cartItems = localStorage.getItem("cart-items");
    if (cartItems) {
      console.log("work");
      let cartItemsArray = JSON.parse(cartItems);
      let productRepeat = cartItemsArray.findIndex(
        (item: { id: number }) => item.id === product.id
      );
      if (productRepeat !== -1) {
        cartItemsArray[productRepeat].quantity += 1;
        SuccessItemAdded(`Added ${1} more successfully!`, product.image[0]);
      } else {
        cartItemsArray.push({
          ...product,
          price: formatPrice(product.price, product.descount),
          quantity: 1,
        });
        SuccessItemAdded("Added with success!", product.image[0]);
      }
      addToLocalCart(cartItemsArray);
      updateLocalStorage(cartItemsArray);
      localStorage.setItem("cart-items", JSON.stringify(cartItemsArray));
    }
  }

  return (
    <div className="flex flex-col md:justify-between rounded-md shadow-md md:w-96 p-4 gap-6 mb-4">
      <Image
        src={product.image[0]}
        alt={`product-${0}`}
        height={384}
        width={384}
      ></Image>
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-slate-800 text-2xl">
          <Link
            href={`/product/${product.id}`}
            className="duration-200 hover:underline hover:duration-200"
          >
            {product.title}
          </Link>
        </h1>
        <p className="font-medium text-slate-400 text-sm p-4">
          {product.description}
        </p>
        <p className="bg-orange-300 w-24 text-center rounded-md text-slate-50 font-semibold text-sm">
          {product.gender === "F"
            ? "For Women"
            : product.gender === "M"
            ? "For Men"
            : "Unisex"}
        </p>
      </div>
      <div className="px-6">
        <div className="flex gap-3">
          <span className="text-slate-700 font-bold text-3xl">
            $ {formatPrice(product.price, product.descount)}
          </span>
          <div className="py-1 px-2 rounded-md bg-orange-100 flex items-center justify-center font-bold text-orange-500">{`${product.descount}%`}</div>
        </div>
        <span className="line-through text-slate-400 font-semibold">
          {`$ ${product.price}`}
        </span>
      </div>
      <button
        type="button"
        onClick={addToCart}
        className="flex items-center justify-center gap-5 bg-orange-400 rounded-md h-14 font-bold text-white duration-200 hover:bg-orange-500"
      >
        <WhiteCart />
        Add to Cart
      </button>
    </div>
  );
}
