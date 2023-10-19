import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "E-commerce contact page",
  description:
    "In this challenge, you'll build a beautiful product page. We'll be putting your JS skills to the test with a lightbox product gallery and cart functionality!",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
