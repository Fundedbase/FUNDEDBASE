import "./globals.css";
import "./app.css";
import logo from "@/assets/icons/logo.jpeg";

export const metadata = {
  metadataBase: new URL('https://fundedbase.com'),
  title: "FundedBase - Empowering Cryptocurrency Traders Worldwide",
  description: "FundedBase provides cryptocurrency traders with access to funded accounts and professional trading opportunities. Join our community and start trading today.",
  keywords: "cryptocurrency trading, funded accounts, crypto trading, trading platform, FundedBase, trader funding",
  openGraph: {
    title: "FundedBase - Empowering Cryptocurrency Traders Worldwide",
    description: "FundedBase provides cryptocurrency traders with access to funded accounts and professional trading opportunities. Join our community and start trading today.",
    url: "https://fundedbase.com",
    siteName: "FundedBase",
    images: [
      {
        url: logo.src,
        width: 1200,
        height: 630,
        alt: "FundedBase - Cryptocurrency Trading Platform",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FundedBase - Empowering Cryptocurrency Traders Worldwide",
    description: "FundedBase provides cryptocurrency traders with access to funded accounts and professional trading opportunities. Join our community and start trading today.",
    images: [logo.src],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  canonical: "https://fundedbase.com",
};

import { Navbar } from "@/containers";
import { Footer } from "@/components";
import Breadcrumb from "@/components/Breadcrumb";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="Geist bg-[#000713] text-[#FFFFFF]">
        <Navbar />
        <Breadcrumb />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
