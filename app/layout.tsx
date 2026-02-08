import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/app/components/shared/Header'
import CartProvider from '@/app/contexts/CartContext'
import { ThemeProvider } from '@/app/contexts/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mansão Maromba - Depósito Digital Premium',
  description: 'Depósito digital de bebidas com combos exclusivos, energia máxima e experiência diferenciada.',
  keywords: 'bebidas, cocktails, whisky, vodka, nightlife, sp, mansão maromba',
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
  openGraph: {
    title: 'Mansão Maromba - Depósito Digital Premium',
    description: 'O depósito digital mais brabo de São Paulo. Experiência premium, combos exclusivos e entrega veloz.',
    images: ['/images/logo.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} antialiased overflow-x-hidden`}>
        <ThemeProvider>
          <CartProvider>
            <Header />
            <main className="relative">
              {children}
            </main>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
