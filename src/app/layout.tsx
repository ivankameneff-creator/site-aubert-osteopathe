import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Dancing_Script,
  Gilda_Display,
  Karla,
  Lato,
} from "next/font/google";
import "./globals.css";

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400"],
});

const gilda = Gilda_Display({
  variable: "--font-gilda",
  subsets: ["latin"],
  weight: "400",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ostéopathe Paris 16 | Bébé, grossesse & adulte – Charlotte Aubert",
  description: "Clone de la page d'accueil Ostéopathe Paris 16 Charlotte Aubert.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${karla.variable} ${lato.variable} ${gilda.variable} ${cormorant.variable} ${dancingScript.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
