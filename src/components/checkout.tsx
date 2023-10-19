import { useCartProducts } from "@/contexts/product-cart-context";
import { Trash } from "./icons/trash";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useModal } from "@/contexts/modal-context";
import { DeletedItemSuccess } from "@/layouts/toast";
import Image from "next/image";
import { formatPrice } from "@/utils/format-price";

export function Checkout() {
  const { cartProducts } = useCartProducts();
  const { isCartOpen } = useModal();
  const { cartProducts: value, updateLocalStorage } = useLocalStorage(
    "cart-items",
    []
  );

  function handleDelete(id: number) {
    const newValue = value.filter((item) => item.id !== id);
    updateLocalStorage(newValue);
    DeletedItemSuccess("Successfully deleted!");
  }

  return (
    <>
      {isCartOpen && (
        <div className="absolute top-[220px] max-h-[300px] md:left-full md:translate-x-[-270px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-between bg-white rounded-md w-[350px] shadow-2xl divide-y z-20">
          <h1 className="px-5 py-5 font-bold text-slate-800 text-lg divide-y">
            Cart
          </h1>
          <ul className="flex flex-col items-center justify-center w-full px-5 overflow-scroll">
            {cartProducts.length > 0 ? (
              cartProducts.map((product) => {
                return (
                  <div
                    key={product.id}
                    className="flex gap-3 items-center h-20 w-full text-slate-600 text-sm rounded-md"
                  >
                    <Image
                      src={product.thumbnails[0]}
                      className="rounded-md h-12 w-12"
                      alt="product"
                      height={48}
                      width={48}
                    ></Image>
                    <div className="flex flex-col gap-1 flex-1 max-h-[48px] text-[15px]">
                      <h1>{product.title}</h1>
                      <div className="flex gap-2">
                        <span>{`$${product.price}.00 x ${product.quantity}`}</span>
                        <span className="font-bold text-zinc-700">{`$${
                          product.price * product.quantity
                        }.00`}</span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleDelete(product.id)}
                    >
                      <Trash />
                    </button>
                  </div>
                );
              })
            ) : (
              <p className="font-semibold text-center py-20 text-slate-500">
                Your cart is empty.
              </p>
            )}
          </ul>
          {cartProducts.length > 0 && (
            <button
              type="button"
              className="bg-orange-400 h-14 mx-5 mb-8 rounded-xl text-white font-bold"
            >
              Checkout
            </button>
          )}
        </div>
      )}
    </>
  );
}
