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
    default: "Trimobe - Gerador de Documentos IA para Créditos de Carbono Verra VCS",
    template: "%s | Trimobe"
  },
  description: "Gere e valide documentação de créditos de carbono Verra/VCS com IA. Transforme 3-6 semanas e +R$ 25.000 em 2 minutos e R$ 95. Suporte para metodologias VCS, REDD+, ARR, AFOLU. Validação de documento grátis.",
  applicationName: 'Trimobe',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Trimobe',
  },
  keywords: [
    "documentação Verra",
    "créditos de carbono VCS",
    "documentação crédito de carbono",
    "gerador PDD",
    "Documento de Descrição de Projeto",
    "documentação REDD+",
    "metodologia ARR",
    "projetos de carbono AFOLU",
    "validação de crédito de carbono",
    "Verra VCS IA",
    "documentação projeto de carbono",
    "verificação VCU",
    "documentação CCBS",
    "SD VISta",
    "documentação compensação de carbono"
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
    locale: "pt_BR",
    url: "https://trimobe.com",
    siteName: "Trimobe",
    title: "Trimobe - Gerador de Documentos IA para Créditos de Carbono Verra VCS",
    description: "Gere e valide documentação de créditos de carbono Verra/VCS com IA. Transforme 3-6 semanas e +R$ 25.000 em 2 minutos e R$ 95. Suporte para metodologias VCS, REDD+, ARR, AFOLU.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Trimobe - Assistente IA de Documentação Verra",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trimobe - Gerador de Documentos IA para Créditos de Carbono Verra VCS",
    description: "Gere e valide documentação de créditos de carbono Verra/VCS com IA. Transforme semanas em minutos, economize 99% em custos.",
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
  classification: "SaaS, Créditos de Carbono, Geração de Documentos com IA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || '';

  return (
    <html lang="pt-BR" className="scroll-smooth">
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
