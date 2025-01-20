import { Montserrat } from "next/font/google";
import "@/styles/globals.css";

const MontSerratSans = Montserrat({
  variable: "--font-montserrat-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${MontSerratSans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
