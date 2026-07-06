import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Secure Guard Security Services || Financial Institution Security",
  description:
    "Professional financial institution security officers, lobby presence, access control, and ATM area monitoring designed to protect banks, credit unions, and financial offices.",
  keywords: [
    "financial institution security",
    "bank security",
    "ATM area monitoring",
    "lobby security guards",
    "credit union security",
    "corporate finance security",
    "secure guard",
    "access control",
  ],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/Favicon.png",
  },
  openGraph: {
    title: "Secure Guard Security Services || Financial Institution Security",
    description:
      "Professional financial institution security officers, lobby presence, access control, and ATM area monitoring designed to protect banks, credit unions, and financial offices.",
    type: "website",
  },
};

import { ScrollToTop } from "@/components/ScrollToTop";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
