import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ANIMA Group | The House of Asset Transformation",
  description: "ANIMA Group transforms spaces into value and creates legacy through time.",
  keywords: ["ANIMA Group", "Asset Transformation", "Interior", "Development", "Investment"],
  openGraph: {
    title: "ANIMA Group",
    description: "The House of Asset Transformation",
    url: "https://animagroup.vn",
    siteName: "ANIMA Group",
    locale: "vi_VN",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
