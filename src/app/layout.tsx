import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Manrope, Poppins } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://florza.com'),
  title: {
    default: "FLORZA | Ultra Premium Luxury Sanitary Ware",
    template: "%s | FLORZA",
  },
  description: "Florza offers premium sanitary ware, luxury bathroom fittings, and wash basins. The best bathroom products and sanitary shop in Malappuram, Wandoor, and Kerala.",
  keywords: [
    "sanitary ware", 
    "luxury bathroom fittings", 
    "premium sanitary", 
    "bathroom products in Malappuram", 
    "bathroom products in Wandoor", 
    "sanitary shop Kerala", 
    "wash basins", 
    "water closets", 
    "Florza"
  ],
  authors: [{ name: "Florza" }],
  creator: "Florza",
  publisher: "Florza",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "FLORZA | Premium Luxury Sanitary Ware",
    description: "Discover the best bathroom products and sanitary ware. Florza brings you premium wash basins, closets, and luxury fittings.",
    url: "https://florza.com",
    siteName: "FLORZA",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FLORZA - Luxury Sanitary Ware in Kerala",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FLORZA | Premium Luxury Sanitary Ware",
    description: "Discover the best bathroom products and sanitary ware. Florza brings you premium wash basins, closets, and luxury fittings.",
    creator: "@florza",
    images: ["/og-image.jpg"],
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
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.json",
};

import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "FLORZA Sanitary Ware",
    "url": "https://florza.com",
    "logo": "https://florza.com/icon.png",
    "image": "https://florza.com/og-image.jpg",
    "description": "Best bathroom products and sanitary shop in Malappuram and Wandoor. We offer premium sanitary ware, wash basins, and luxury bathroom fittings.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Wandoor, Malappuram",
      "addressRegion": "Kerala",
      "addressCountry": "IN"
    },
    "areaServed": ["Malappuram", "Wandoor", "Kerala"],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": "info@florza.com"
    }
  };

  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${manrope.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Preloader />
        <SmoothScroll>
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
