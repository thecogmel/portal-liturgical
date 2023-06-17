import Footer from "@/components/Footer";
import "./globals.css";
import { Inter } from "next/font/google";

import localFont from "next/font/local";
import Navbar from "@/components/Navbar";

const myFont = localFont({
  src: "../../public/fonts/PoetsenOne-Regular.ttf",
  display: "swap",
});

export const metadata = {
  title: "Portal Litúrgico",
  description: "Equipe da Liturgia - XXIV Segue-me Sant'Ana",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
