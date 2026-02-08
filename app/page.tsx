'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

// Sections
import HeroSection from '@/app/components/sections/HeroSection'

// Lazy load sections
const ProductsSection = dynamic(() => import('@/app/components/sections/ProductsSection'), {
  loading: () => <div className="py-32 flex items-center justify-center"><div className="animate-spin w-8 h-8 border-2 border-yellow-400 border-t-transparent rounded-full" /></div>
})
const AboutSection = dynamic(() => import('@/app/components/sections/AboutSection'))
const LocationSection = dynamic(() => import('@/app/components/sections/LocationSection'))
const ReviewsSection = dynamic(() => import('@/app/components/sections/ReviewsSection'))

// Shared / UI
import Header from '@/app/components/shared/Header'
import CartModal from '@/app/components/shared/CartModal'
import LightStreaks from '@/app/components/animations/LightStreaks'
import Footer from '@/app/components/layout/Footer'

// Contexts & Data
import { useTheme } from '@/app/contexts/ThemeContext'
import { useCart } from '@/app/contexts/CartContext'
import { PRODUCTS } from '@/app/data/products'

export default function Home() {
  const { setTheme } = useTheme()
  const { itemCount } = useCart()

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

      {/* Header */}
      <Header onCartOpen={() => setIsCartOpen(true)} />

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
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 group"
          aria-label={`Abrir carrinho${itemCount > 0 ? ` com ${itemCount} ${itemCount === 1 ? 'item' : 'itens'}` : ''}`}
        >
          <div 
            className="relative p-4 md:p-5 rounded-xl md:rounded-2xl backdrop-blur-2xl border transition-all duration-500 hover:scale-110 active:scale-95"
            style={{
              backgroundColor: activeProduct.theme.primary,
              borderColor: activeProduct.theme.primary,
              boxShadow: `0 20px 60px ${activeProduct.theme.glow}70, 0 0 0 1px ${activeProduct.theme.primary}20`,
            }}
          >
            {/* Glow effect */}
            <div 
              className="absolute inset-0 rounded-xl md:rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity"
              style={{ backgroundColor: activeProduct.theme.primary }}
            />
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-black relative z-10 md:w-7 md:h-7"
              aria-hidden="true"
            >
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            
            {itemCount > 0 && (
              <span 
                className="absolute -top-1.5 -right-1.5 md:-top-2 md:-right-2 min-w-[24px] md:min-w-[28px] h-6 md:h-7 px-1.5 md:px-2 rounded-full flex items-center justify-center text-[10px] md:text-xs font-black text-white shadow-2xl animate-pulse border-2 border-black/20"
                style={{ 
                  backgroundColor: '#ef4444',
                  boxShadow: '0 4px 20px #ef444480'
                }}
              >
                {itemCount}
              </span>
            )}
          </div>
        </button>
      )}
    </>
  )
}
