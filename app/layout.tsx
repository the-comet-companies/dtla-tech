import type { Metadata } from "next";
import { Inter, Crimson_Pro, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const crimsonPro = Crimson_Pro({
  variable: "--font-crimson",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "License DTLA Print's Technology | Software for Decoration Shops",
  description:
    "Enterprise-grade business management software built by a real decoration shop. FileMaker systems, automated workflows, 78+ AI agents, and website solutions for screen printers, embroidery shops, and promotional product distributors.",
  openGraph: {
    title: "License DTLA Print's Technology | Software for Decoration Shops",
    description:
      "Enterprise-grade software for decoration shops, built by operators who process thousands of orders.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full", inter.variable, crimsonPro.variable, "font-sans", geist.variable)}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#FBFBFB] text-[#1D1D1F]">{children}</body>
    </html>
  );
}
