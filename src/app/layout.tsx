import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import type { ReactNode } from "react";
import { Header } from "@/app/Header";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SmartSip",
  description: "Snygga och miljövänliga sugrör",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="sv">
      <body className={montserrat.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
