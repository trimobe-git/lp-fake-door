import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import GoogleTagManager, { GoogleTagManagerNoscript } from "./components/GoogleTagManager";
import StructuredData from "./components/StructuredData";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  colorScheme: 'light dark',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://trimobe.com'),
  title: {
    default: "Trimobe - AI Document Generator for Verra VCS Carbon Credits",
    template: "%s | Trimobe"
  },
  description: "Generate and validate Verra/VCS carbon credit documentation with AI. Transform 3-6 weeks and $5,000+ into 2 minutes and $19. Support for VCS, REDD+, ARR, AFOLU methodologies. Free document validation.",
  applicationName: 'Trimobe',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Trimobe',
  },
  keywords: [
    "Verra documentation",
    "VCS carbon credits",
    "carbon credit documentation",
    "PDD generator",
    "Project Description Document",
    "REDD+ documentation",
    "ARR methodology",
    "AFOLU carbon projects",
    "carbon credit validation",
    "Verra VCS AI",
    "carbon project documentation",
    "VCU verification",
    "CCBS documentation",
    "SD VISta",
    "carbon offset documentation"
  ],
  authors: [{ name: "Trimobe" }],
  creator: "Trimobe",
  publisher: "Trimobe",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://trimobe.com",
    siteName: "Trimobe",
    title: "Trimobe - AI Document Generator for Verra VCS Carbon Credits",
    description: "Generate and validate Verra/VCS carbon credit documentation with AI. Transform 3-6 weeks and $5,000+ into 2 minutes and $19. Support for VCS, REDD+, ARR, AFOLU methodologies.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Trimobe - Verra Documentation AI Assistant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trimobe - AI Document Generator for Verra VCS Carbon Credits",
    description: "Generate and validate Verra/VCS carbon credit documentation with AI. Transform weeks into minutes, save 99% in costs.",
    images: ["/twitter-image.png"],
    creator: "@trimobe",
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
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://trimobe.com",
  },
  category: "technology",
  classification: "SaaS, Carbon Credits, AI Document Generation",
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
        <StructuredData />
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
