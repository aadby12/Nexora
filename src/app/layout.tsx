import type { Metadata, Viewport } from "next";
import { Instrument_Sans, Space_Grotesk } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { getSiteUrl } from "@/lib/site";
import { Analytics } from "@vercel/analytics/react";
import { StructuredData } from "@/components/seo/StructuredData";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#060816",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/brand-icon.png", type: "image/png" }],
    shortcut: "/brand-icon.png",
    apple: [{ url: "/brand-icon.png", sizes: "180x180", type: "image/png" }],
  },
  title: {
    default: "Avenor Tech | Premium Web Development Agency in Ghana",
    template: "%s | Avenor Tech",
  },
  description:
    "Avenor Tech builds premium, high-performance websites for businesses in Ghana and beyond, with modern design, responsive development, and scalable content management.",
  keywords: [
    "web development Ghana",
    "website design Ghana",
    "responsive website developer",
    "e-commerce website developer",
    "digital agency Ghana",
    "Avenor Tech",
  ],
  openGraph: {
    title: "Avenor Tech | Futuristic High-Performance Websites",
    description:
      "Premium, conversion-focused websites for ambitious businesses that want to look credible and win better clients.",
    type: "website",
    locale: "en_GH",
    siteName: "Avenor Tech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avenor Tech | Premium Web Development Agency",
    description:
      "Modern websites, premium design, and scalable content management for growing businesses.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${spaceGrotesk.variable} h-full scroll-smooth antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        <ScrollProgress />
        <Navbar />
        <StructuredData />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
