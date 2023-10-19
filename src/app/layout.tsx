import { Header } from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Kumbh_Sans } from "next/font/google";
import { AppCartProvider } from "@/contexts/product-cart-context";
import { Providers } from "@/components/providers";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";
import Loading from "./loading";

const kumb = Kumbh_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-commerce product page",
  description: "A simple e-commerce site.",
  applicationName: "E-commerce Product Page",
  creator: "Rafael-Urei",
  keywords:
    "typescript, nextjs, tailwindcss, Gist, LocalStorage, Front-Mentor, Rafael-Urei",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={kumb.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
