import type { Metadata } from "next";
import { StoreProvider } from "./context/StoreContext";
import { Montserrat, Oswald } from "next/font/google";
import "./styles/globals.css";
import Navbar from "./components/Navbar";

const MontSerratSans = Montserrat({
  variable: "--font-montserrat-sans",
  subsets: ["latin"],
});

const OswaldSans = Oswald({
  variable: "--font-oswald-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wu Dao",
  description: "Tradicional Kung Fu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${MontSerratSans.variable} ${OswaldSans.variable} antialiased`}>
        <section style={{ display: 'flex', justifyContent: 'center' }}>
          <StoreProvider>
            <Navbar />
            <main>{children}</main>
          </StoreProvider>
        </section>
      </body>
    </html>
  );
}
