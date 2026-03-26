import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { getSiteUrl } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#050a18",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: {
    default: "Nexora · Future-Ready Digital Experiences",
    template: "%s · Nexora",
  },
  description:
    "Nexora designs and develops high-performance, responsive websites and web applications that help brands stand out and scale with confidence.",
  keywords: [
    "web development",
    "digital agency",
    "Next.js",
    "UI/UX",
    "responsive design",
    "Nexora",
  ],
  openGraph: {
    title: "Nexora · Next-Level Web Experiences",
    description:
      "Premium digital products, engineered for clarity, speed, and lasting impact.",
    type: "website",
    locale: "en_US",
    siteName: "Nexora",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexora · Next-Level Web Experiences",
    description:
      "Premium digital products, engineered for clarity, speed, and lasting impact.",
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
      className={`${inter.variable} ${spaceGrotesk.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        <ScrollProgress />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
