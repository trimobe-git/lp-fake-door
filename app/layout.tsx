import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import GoogleTagManager, { GoogleTagManagerNoscript } from "./components/GoogleTagManager";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: "Trimobe - AI Document Assistant",
  description: "Generate or validate Verra / VCS documents with AI. Save 99% in cost and weeks of work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || '';

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <GoogleTagManager gtmId={gtmId} />
      </head>
      <body
        className={`${plusJakartaSans.variable} bg-background-light text-gray-900 antialiased overflow-x-hidden transition-colors duration-300`}
      >
        <GoogleTagManagerNoscript gtmId={gtmId} />
        {children}
      </body>
    </html>
  );
}
