import { useCartProducts } from "@/contexts/product-cart-context";
import { Trash } from "./icons/trash";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useModal } from "@/contexts/modal-context";
import { DeletedItemSuccess } from "@/layouts/toast";
import Image from "next/image";

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
        <div className="absolute top-[235px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col bg-white rounded-md w-[350px] shadow-2xl divide-y pb-4 z-20">
          <h1 className="px-5  py-5 font-bold text-slate-800 text-lg divide-y">
            Cart
          </h1>
          <ul className="flex flex-col w-full gap-2">
            {cartProducts.length > 0 ? (
              cartProducts.map((product) => {
                return (
                  <div
                    key={product.id}
                    className="flex gap-3 items-center h-20 w-full text-slate-600 text-sm px-5 rounded-md"
                  >
                    <Image
                      src={product.thumbnails[0]}
                      className="rounded-md h-12 w-12"
                      alt="product"
                      height={48}
                      width={48}
                    ></Image>
                    <div className="flex-1 overflow-hidden">
                      <h1>{product.title}</h1>
                      <div className="flex gap-2">
                        <span>{`$${product.price}  x${product.quantity}`}</span>
                        <span className="font-semibold text-zinc-700">{`$${
                          product.price * product.quantity
                        }`}</span>
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
              className="bg-orange-400 h-14 mx-5 rounded-lg text-white font-bold"
            >
              Checkout
            </button>
          )}
        </div>
      )}
    </>
  );
}
