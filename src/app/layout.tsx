import type { Metadata } from "next";
import { Cormorant_Garamond, Geologica, Unbounded } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["cyrillic"],
  weight: ["300", "400", "600"],
  variable: "--font-cormorant",
});

const geologica = Geologica({
  subsets: ["cyrillic"],
  weight: ["300", "400", "500"],
  variable: "--font-geologica",
});

const unbounded = Unbounded({
  subsets: ["cyrillic"],
  weight: ["300", "700"],
  variable: "--font-unbounded",
});

export const metadata: Metadata = {
  title: "Калмыкия Тур — Путешествие в страну степей и буддизма",
  description:
    "Уникальные экскурсии по Калмыкии: хурулы, степные просторы, сайгаки, поющие барханы, тибетская медицина и кочевая культура",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${cormorant.variable} ${geologica.variable} ${unbounded.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}