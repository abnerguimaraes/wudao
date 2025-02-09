import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./styles/globals.css";
import Navbar from "./components/Navbar";

const MontSerratSans = Montserrat({
  variable: "--font-montserrat-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wu Dao - Tradicional Kung Fu",
  description: "Created by Abner Guimarães",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${MontSerratSans.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
