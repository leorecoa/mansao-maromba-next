'use client'

import { useEffect, useState } from 'react'

// Sections
import HeroSection from '@/app/components/sections/HeroSection'
import ProductsSection from '@/app/components/sections/ProductsSection'
import AboutSection from '@/app/components/sections/AboutSection'
import LocationSection from '@/app/components/sections/LocationSection'
import ReviewsSection from '@/app/components/sections/ReviewsSection'

// Shared / UI
import CartModal from '@/app/components/shared/CartModal'
import LightStreaks from '@/app/components/animations/LightStreaks'
import Footer from '@/app/components/layout/Footer'

// Contexts & Data
import { useTheme } from '@/app/contexts/ThemeContext'
import { PRODUCTS } from '@/app/data/products'

export default function Home() {
  const { setTheme } = useTheme()

  const [activeProduct, setActiveProduct] = useState(() => PRODUCTS[0])
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    if (activeProduct?.theme) {
      setTheme(activeProduct.theme)
    }
  }, [activeProduct, setTheme])

  if (!activeProduct) return null

  return (
    <>
      {/* 🌌 FUNDO DINÂMICO INSANO */}
      <div className="fixed inset-0 -z-10 overflow-hidden transition-all duration-1000">

        {/* GRADIENTE BASE */}
        <div
          className="absolute inset-0 transition-all duration-1000"
          style={{ background: activeProduct.theme.bg }}
        />

        {/* NEON ATRÁS DA GARRAFA */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(
                circle at center,
                ${activeProduct.theme.glow} 0%,
                transparent 60%
              )
            `,
            filter: 'blur(120px)',
            opacity: 0.9,
            transform: 'translateZ(0)',
          }}
        />

        {/* FUMAÇA / ATMOSFERA */}
        <div
          className="absolute inset-0 mix-blend-screen pointer-events-none"
          style={{
            background: `
              radial-gradient(
                ellipse at 30% 70%,
                ${activeProduct.theme.primary}22 0%,
                transparent 60%
              ),
              radial-gradient(
                ellipse at 70% 30%,
                ${activeProduct.theme.primary}18 0%,
                transparent 65%
              )
            `,
            filter: 'blur(140px)',
          }}
        />

        {/* GRAIN CINEMATOGRÁFICO */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)"/%3E%3C/svg%3E")',
            backgroundRepeat: 'repeat',
            mixBlendMode: 'overlay',
          }}
        />
      </div>

      {/* Efeitos visuais */}
      <LightStreaks color={activeProduct.theme.primary} />

      {/* Conteúdo */}
      <main className="relative z-10">
        <HeroSection
          activeProduct={activeProduct}
          onProductChange={setActiveProduct}
        />

        <ProductsSection
          activeProduct={activeProduct}
          onProductChange={setActiveProduct}
        />

        <AboutSection
          activeTheme={{
            primary: activeProduct.theme.primary,
            glow: activeProduct.theme.glow,
          }}
        />
        <LocationSection />
        <ReviewsSection />
      </main>

      {/* Footer */}
      <Footer
        activeTheme={{
          primary: activeProduct.theme.primary,
          glow: activeProduct.theme.glow,
        }}
      />

      {/* Carrinho */}
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        activeTheme={{
          primary: activeProduct.theme.primary,
          glow: activeProduct.theme.glow,
        }}
      />

      {/* Cart Trigger Button */}
      {!isCartOpen && (
        <button
          onClick={() => setIsCartOpen(true)}
          className="fixed bottom-6 right-6 z-50 p-4 rounded-full backdrop-blur-xl border border-white/10 hover:scale-110 transition-all duration-300 shadow-2xl"
          style={{
            backgroundColor: activeProduct.theme.primary,
            boxShadow: `0 10px 40px ${activeProduct.theme.glow}60`,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-black"
          >
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
        </button>
      )}
    </>
  )
}
