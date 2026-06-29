import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const heading = Cormorant_Garamond({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600"],
  variable: "--font-heading",
  display: "swap",
});

const body = Inter({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://animagroup.vn"),
  title: "A.N.I.M.A Group | The House of Asset Transformation",
  description:
    "A.N.I.M.A creates trusted spaces for living, working and hospitality through strategy, design, build and operation.",
  keywords: [
    "A.N.I.M.A",
    "ANIMA Group",
    "Asset Transformation",
    "Interior",
    "Design",
    "Build",
    "Hospitality",
    "Real Estate Development",
  ],
  openGraph: {
    title: "A.N.I.M.A Group",
    description: "We create trusted spaces for living, working and hospitality.",
    url: "https://animagroup.vn",
    siteName: "A.N.I.M.A Group",
    locale: "vi_VN",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0F1113",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={`${heading.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
