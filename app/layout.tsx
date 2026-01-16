import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Radhe Raj Enterprises | Solar Energy Solutions Gajraula",
  description: "Official partner for PM Surya Ghar Muft Bijli Yojana. Solar Panel Lagwaye, Bijli Bachaye! Get up to ₹1,08,000 subsidy. Contact Hemandra Gautam: +91 9410297051",
  keywords: "Solar Panel, PM Surya Ghar, Subsidy, Gajraula, Radhe Raj Enterprises, Clean Energy, Solar Subsidy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/images/logo.png" />
      </head>
      <body className={`${inter.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
