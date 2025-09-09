import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import HeaderNew from "@/components/layout/HeaderNew";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "sonner";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} - ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: [
    "Long Beach SEO agency",
    "SEO services Long Beach CA",
    "local SEO Long Beach",
    "SEO company near me",
    "Belmont Shore SEO",
    "Signal Hill SEO",
    "Lakewood SEO",
    "AI SEO Long Beach",
    "SEO agency 90803",
    "California SEO services",
    "Los Angeles County SEO",
    "small business SEO Long Beach"
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
    creator: "@goalseo",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon-32.svg", sizes: "32x32", type: "image/svg+xml" },
      { url: "/icon-16.svg", sizes: "16x16", type: "image/svg+xml" }
    ],
    shortcut: "/favicon.svg",
    apple: "/icon-180.svg",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} ${jakarta.variable} font-jakarta antialiased bg-white text-gray-900`}>
        <HeaderNew />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Analytics />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}