import type { Metadata } from "next";
import { Noto_Serif_TC, Playfair_Display, Roboto } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "vietnamese"],
  style: ["normal", "italic"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "700"],
});

// Chữ Hán (龍陵, 塔位...): Google tự chia theo unicode-range, chỉ tải phần chữ có trên trang.
const notoSerifTC = Noto_Serif_TC({
  variable: "--font-han",
  weight: ["400", "700"],
  preload: false,
});

export const metadata: Metadata = {
  title: `${site.name} - ${site.slogan}`,
  description: site.about.body[0],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${playfair.variable} ${roboto.variable} ${notoSerifTC.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-neutral-800">{children}</body>
    </html>
  );
}
