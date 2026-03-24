import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Deni Nuryadin — Akademisi & Profesional Perbankan Syariah",
    template: "%s | Deni Nuryadin",
  },
  description:
    "Website profil profesional Deni Nuryadin, M.Si, S.E — Dosen UHAMKA, Dewan Pengawas Syariah, dan praktisi perbankan syariah dengan pengalaman lebih dari 25 tahun.",
  keywords: [
    "Deni Nuryadin",
    "Ekonomi Syariah",
    "Perbankan Syariah",
    "UHAMKA",
    "Shariah Audit",
    "Dewan Pengawas Syariah",
  ],
  authors: [{ name: "Deni Nuryadin" }],
  openGraph: {
    title: "Deni Nuryadin — Akademisi & Profesional Perbankan Syariah",
    description:
      "Dosen UHAMKA, Dewan Pengawas Syariah, dan praktisi perbankan syariah dengan pengalaman lebih dari 25 tahun.",
    url: "https://padenur.com",
    siteName: "Deni Nuryadin",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
