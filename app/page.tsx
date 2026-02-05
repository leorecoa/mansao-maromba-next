'use client'

import { useState, useEffect } from 'react'
import HeroSection from '@/app/components/sections/HeroSection'
import ProductsSection from '@/app/components/sections/ProductsSection'
import AboutSection from '@/app/components/sections/AboutSection'
import LocationSection from '@/app/components/sections/LocationSection'
import ReviewsSection from '@/app/components/sections/ReviewsSection'
import CartModal from '@/app/components/shared/CartModal'
import LightStreaks from '@/app/components/animations/LightStreaks'
import { useTheme } from '@/app/contexts/ThemeContext'
import { PRODUCTS } from '@/app/data/products'

export default function Home() {
  const [activeProduct, setActiveProduct] = useState(PRODUCTS[0])
  const { setTheme } = useTheme()

  useEffect(() => {
    setTheme(activeProduct.theme)
  }, [activeProduct, setTheme])

  return (
    <>
      <div 
        className="fixed inset-0 -z-10 transition-all duration-1000"
        style={{
          background: activeProduct.theme.bg,
        }}
      />
      <LightStreaks color={activeProduct.theme.primary} />
      
      <div className="relative z-10">
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
      </div>
      
      <CartModal />
    </>
  )
}