import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "吉興當鋪｜台北萬華當舖｜汽車借款・機車借款・黃金・名錶・精品",
    template: "%s｜吉興當鋪",
  },
  description:
    "吉興當鋪位於台北市萬華區環河南路二段，提供汽車借款、機車借款、黃金、名錶及精品等服務。歡迎來電洽詢。",
  keywords: [
    "吉興當鋪",
    "吉興當舖",
    "萬華當鋪",
    "萬華當舖",
    "台北當鋪",
    "汽車借款",
    "機車借款",
    "黃金借款",
    "名錶借款",
    "精品借款",
  ],
  openGraph: {
    title: "吉興當鋪｜台北萬華當舖",
    description:
      "吉興當鋪位於台北市萬華區，提供汽車借款、機車借款、黃金、名錶及精品服務。",
    locale: "zh_TW",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant-TW">
      <body>{children}</body>
    </html>
  );
}
