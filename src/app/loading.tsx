import { Loader2Icon } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center fixed h-full w-full bg-slate-100 bg-opacity-80">
      <Loader2Icon className="text-orange-300 h-20 w-20 animate-spin"></Loader2Icon>
    </div>
  );
}
