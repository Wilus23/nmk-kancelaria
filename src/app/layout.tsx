import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";

import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "NMK Kancelaria",
    template: "%s | NMK Kancelaria",
  },
  description: "Szkielet strony kancelarii adwokackiej oparty na Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={cormorantGaramond.variable}>
      <body>{children}</body>
    </html>
  );
}
