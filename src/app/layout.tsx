import type { Metadata } from "next";
import "./globals.css";
import { LoraFont } from "@/assets/fonts";
import NavbarWrapper from "@/components/Navbar/NavbarWrapper";

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
      <body className={`${LoraFont.className} container mx-auto bg-[#F8F9FA]`}>
        <NavbarWrapper />
        {children}
      </body>
    </html>
  );
}
