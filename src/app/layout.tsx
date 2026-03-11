import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import Script from "next/script";

import { SiteHeader } from "@/components/layout/site-header";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-ui",
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
    <html lang="pl" className={`${cormorantGaramond.variable} ${manrope.variable}`}>
      <body>
        {process.env.NODE_ENV === "development" ? (
          <Script src="https://mcp.figma.com/mcp/html-to-design/capture.js" strategy="afterInteractive" />
        ) : null}
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
