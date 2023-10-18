import { Toast } from "flowbite-react";
import toast from "react-hot-toast";
import { Check, X } from "lucide-react";
import Image from "next/image";

export function SuccessItemAdded(msg: string, img: string) {
  return toast.custom(
    () => (
      <Toast>
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 relative">
          <Image
            src={img}
            alt="product-miniature"
            className="rounded-lg"
            fill
          ></Image>
        </div>

        <div className="ml-3 text-sm font-semibold">{msg}</div>
        <div className="text-emerald-400 ml-2">
          <Check />
        </div>

        <Toast.Toggle />
      </Toast>
    ),
    { position: "bottom-right" }
  );
}

export function FailedItemAdded(msg: string) {
  return toast.custom(
    () => (
      <Toast>
        <div className="ml-3 text-sm font-semibold ">{msg}</div>
        <div className="ml-2">
          <X />
        </div>

        <Toast.Toggle />
      </Toast>
    ),
    { position: "bottom-right" }
  );
}

export function DeletedItemSuccess(msg: string) {
  return toast.custom(
    () => (
      <Toast>
        <div className="ml-3 text-sm font-semibold">{msg}</div>
        <div className="text-emerald-400 ml-2">
          <Check />
        </div>

        <Toast.Toggle />
      </Toast>
    ),
    { position: "bottom-right" }
  );
}
