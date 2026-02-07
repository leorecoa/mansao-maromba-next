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

// Contexts & Data
import { useTheme } from '@/app/contexts/ThemeContext'
import { PRODUCTS } from '@/app/data/products'

export default function Home() {
  const { setTheme } = useTheme()

  const [activeProduct, setActiveProduct] = useState(() => PRODUCTS[0])

  useEffect(() => {
    if (activeProduct?.theme) {
      setTheme(activeProduct.theme)
    }
  }, [activeProduct, setTheme])

  if (!activeProduct) return null

  return (
    <>
      {/* Background dinâmico */}
      <div
        className="fixed inset-0 -z-10 transition-all duration-1000"
        style={{ background: activeProduct.theme.bg }}
      />

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

        <AboutSection />
        <LocationSection />
        <ReviewsSection />
      </main>

      {/* Carrinho */}
      <CartModal />
    </>
  )
}
