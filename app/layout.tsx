import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

const description =
  "Eskişehir Osmangazi Üniversitesi Sağlık Yönetimi öğrencilerinin akademik, sosyal ve mesleki gelişimini destekleyen öğrenci topluluğu.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Liderlik Kulübü | Eskişehir Osmangazi Üniversitesi Sağlık Yönetimi",
  description,
  openGraph: {
    type: "website",
    locale: "tr_TR",
    title: "Liderlik Kulübü | Eskişehir Osmangazi Üniversitesi Sağlık Yönetimi",
    description,
    images: [
      {
        url: "/images/07-acibadem-kariyer-bulusmasi-kucuk-grup.png",
        width: 1170,
        height: 868,
        alt: "Liderlik Kulübü üyeleri Acıbadem Kariyer Buluşması'nda",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#0A1D45",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <a
          href="#icerik"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-paper focus:px-4 focus:py-3 focus:text-ink"
        >
          İçeriğe geç
        </a>
        {children}
      </body>
    </html>
  );
}
