import { loraFont } from "@/assets/fonts";
import NavbarWrapper from "@/components/Navbar/NavbarWrapper";
import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className={loraFont.className}>
      <body className=" bg-[#F8F9FA]">
        <NavbarWrapper />
        {children}
      </body>
    </html>
  );
}
