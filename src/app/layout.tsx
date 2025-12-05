import type { Metadata } from "next";
import "./globals.css";
import { LoraFont } from "@/assets/fonts";

export const metadata: Metadata = {
  title: "Runo Blog",
  description: "Welcome to Runo Blog!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${LoraFont.className}`}>{children}</body>
    </html>
  );
}
