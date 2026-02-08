import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/app/components/shared/Header'
import CartProvider from '@/app/contexts/CartContext'
import { ThemeProvider } from '@/app/contexts/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mansão Maromba - Depósito Digital Premium | Bebidas e Combos Exclusivos SP',
  description: 'O depósito digital mais brabo de São Paulo. Combos exclusivos, entrega relâmpago 24/7. Whisky, Vodka, Energéticos e muito mais. Experiência premium garantida.',
  keywords: 'depósito de bebidas sp, bebidas delivery, combos de bebidas, whisky, vodka, energético, mansão maromba, delivery 24h são paulo, bebidas premium',
  authors: [{ name: 'Mansão Maromba' }],
  creator: 'Mansão Maromba',
  publisher: 'Mansão Maromba',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://mansaomaromba.com.br',
    siteName: 'Mansão Maromba',
    title: 'Mansão Maromba - Depósito Digital Premium',
    description: 'O depósito digital mais brabo de São Paulo. Experiência premium, combos exclusivos e entrega veloz 24/7.',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Mansão Maromba - Depósito Digital Premium',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mansão Maromba - Depósito Digital Premium',
    description: 'O depósito digital mais brabo de São Paulo. Combos exclusivos e entrega 24/7.',
    images: ['/images/logo.png'],
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
  verification: {
    google: 'your-google-verification-code',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} antialiased overflow-x-hidden`}>
        <a href="#main-content" className="skip-to-main">
          Pular para o conteúdo principal
        </a>
        <ThemeProvider>
          <CartProvider>
            <Header />
            <main id="main-content" className="relative">
              {children}
            </main>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
