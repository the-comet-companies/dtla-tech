import type { Metadata } from "next";
import { Poppins, Rubik } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
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
    <html lang="en" className={`${poppins.variable} ${rubik.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[#FFFFFF] text-[#181F30]">{children}</body>
    </html>
  );
}
