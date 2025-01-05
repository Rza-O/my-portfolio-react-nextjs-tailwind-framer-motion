import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { icons } from "lucide-react";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"]
});

export const metadata = {
  title: "Reza's Portfolio",
  description: "Your Next Door Developer",
  icons: {
    icon: "/favicon.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <Head>
        <link rel="icon" href="/favicon.png" type="image/png" /> 
      </Head>
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme
        dark:text-white
        `}
      >
        {children}
      </body>
    </html>
  );
}
