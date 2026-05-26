import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";
import ScrollToTop from "@/components/ScrollToTop";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "NEST Equipment Rental | Powering Operations Across UAE",
  description: "Nest Equipment Rental provides dependable power generation, lighting tower, distribution, and support equipment rental solutions across the UAE.",
  keywords: ["equipment rental", "generators", "lighting towers", "power distribution", "nest rental", "abu dhabi", "dubai", "uae"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`} suppressHydrationWarning>
      <body>
        <ScrollToTop />
        <PageLoader />
        <Header />
        <main style={{ flex: 1, minHeight: "80vh" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

