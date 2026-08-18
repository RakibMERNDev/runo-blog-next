import { leagueSpartanFont, loraFont, robotoFont } from "@/assets/fonts";
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
    <html lang="en">
      <body
        className={`${loraFont.variable} ${leagueSpartanFont.variable} ${robotoFont.variable} bg-[#F8F9FA]`}
      >
        <NavbarWrapper />
        {children}
      </body>
    </html>
  );
}
