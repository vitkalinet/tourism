import type { Metadata } from "next";
import { Literata, Inter } from "next/font/google";
import "./globals.css";

const literata = Literata({
  subsets: ["cyrillic"],
  weight: ["300", "400", "600"],
  variable: "--font-cormorant",
});

const inter = Inter({
  subsets: ["cyrillic"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Зурган — Ваш гид по Калмыкии | Экскурсии и туры",
  description:
    "Официальный аттестованный гид по Калмыкии. Уникальные экскурсии: хурулы, степные просторы, сайгаки, поющие барханы, тибетская медицина и кочевая культура. С 2019 года.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${literata.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
