"use client";

import AppMenuProvider from "@/contexts/menu-context";
import { AppModalProvider } from "@/contexts/modal-context";
import { AppCartProvider } from "@/contexts/product-cart-context";

export function Providers({ children }: any) {
  return (
    <AppMenuProvider>
      <AppModalProvider>
        <AppCartProvider>{children}</AppCartProvider>
      </AppModalProvider>
    </AppMenuProvider>
  );
}
