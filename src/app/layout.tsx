import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

import localFont from "next/font/local";

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
        <Analytics />
      </body>
    </html>
  );
}
