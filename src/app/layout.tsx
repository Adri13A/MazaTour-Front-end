import type { Metadata } from "next";
import { Aboreto, Gantari } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

const aboreto = Aboreto({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-aboreto",
  display: "swap",
});

const gantari = Gantari({
  subsets: ["latin"],
  variable: "--font-gantari",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MazaTour",
  description: "Descubre la perla del Pacífico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`!scroll-smooth ${aboreto.variable} ${gantari.variable} antialiased`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Header/>
        {children}

        <Footer/>
      </body>
    </html>
  );
}
