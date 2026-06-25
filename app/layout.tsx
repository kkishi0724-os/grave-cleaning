import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata: Metadata = {
  title: "関西お墓サポート | 学生によるお墓清掃代行",
  description:
    "大阪・京都・兵庫エリアで、関西の大学生が心を込めてお墓の清掃・お参り代行を行います。遠方の方・お体の不自由な方にご利用いただいています。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={geist.variable}>
      <body className="min-h-screen bg-white text-gray-800 antialiased">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VJD5654HST"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VJD5654HST');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
