'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ShoppingCart, Star } from 'lucide-react'
import { Button } from '@/app/components/ui/Button'
import { PRODUCTS } from '@/app/data/products'
import { useCart } from '@/app/contexts/CartContext'
import Image from 'next/image'
import type { Product } from '@/app/types'

interface HeroSectionProps {
  activeProduct: Product
  onProductChange: (product: Product) => void
}

export default function HeroSection({ activeProduct, onProductChange }: HeroSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { addItem } = useCart()

  const nextSlide = () => {
    const nextIndex = (currentIndex + 1) % PRODUCTS.length
    setCurrentIndex(nextIndex)
    onProductChange(PRODUCTS[nextIndex])
  }

  const prevSlide = () => {
    const prevIndex = (currentIndex - 1 + PRODUCTS.length) % PRODUCTS.length
    setCurrentIndex(prevIndex)
    onProductChange(PRODUCTS[prevIndex])
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="relative z-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProduct.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-morphism">
                  <Star className="w-4 h-4" style={{ color: activeProduct.theme.primary }} />
                  <span className="text-sm font-medium">NOVO COMBO</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
                  <span className="block text-glow" style={{ color: activeProduct.theme.primary }}>
                    {activeProduct.name}
                  </span>
                  <span className="block text-white mt-2">
                    {activeProduct.type}
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 max-w-xl">
                  {activeProduct.description}
                </p>
                
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button 
                    className="group"
                    onClick={() => addItem(activeProduct)}
                    style={{
                      backgroundColor: activeProduct.theme.primary,
                      color: activeProduct.theme.text,
                    }}
                  >
                    <ShoppingCart className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    Pedir Agora
                  </Button>
                  <Button variant="outline" className="border-2">
                    Ver Sabores
                  </Button>
                </div>
                
                <div className="flex items-center gap-8 pt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold" style={{ color: activeProduct.theme.primary }}>
                      {activeProduct.volume}
                    </div>
                    <div className="text-sm text-gray-400">Volume</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold" style={{ color: activeProduct.theme.primary }}>
                      R$ {activeProduct.price.toFixed(2)}
                    </div>
                    <div className="text-sm text-gray-400">Preço</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Product Carousel */}
          <div className="relative">
            <div className="relative h-[600px] w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProduct.id}
                  initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.9, rotate: 5 }}
                  transition={{ duration: 0.7, type: "spring" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="relative w-full h-full">
                    <div 
                      className="absolute inset-0 blur-3xl opacity-20 rounded-full"
                      style={{ backgroundColor: activeProduct.theme.primary }}
                    />
                    <div className="relative z-10 flex items-center justify-center h-full">
                      <Image
                        src={activeProduct.image}
                        alt={activeProduct.name}
                        width={400}
                        height={600}
                        className="object-contain drop-shadow-2xl"
                        style={{
                          filter: `drop-shadow(0 0 50px ${activeProduct.theme.glow})`,
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Carousel Controls */}
            <div className="absolute top-1/2 left-4 right-4 -translate-y-1/2 flex justify-between z-20">
              <button
                onClick={prevSlide}
                className="p-3 rounded-full glass-morphism hover:scale-110 transition-transform"
                style={{ color: activeProduct.theme.primary }}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="p-3 rounded-full glass-morphism hover:scale-110 transition-transform"
                style={{ color: activeProduct.theme.primary }}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Product Indicators */}
            <div className="flex justify-center gap-3 mt-8">
              {PRODUCTS.map((product, index) => (
                <button
                  key={product.id}
                  onClick={() => {
                    setCurrentIndex(index)
                    onProductChange(product)
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? 'scale-125' : 'opacity-50'
                  }`}
                  style={{
                    backgroundColor: index === currentIndex 
                      ? product.theme.primary 
                      : 'rgba(255,255,255,0.3)',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 rounded-full border-white/30 flex justify-center">
          <div className="w-1 h-3 mt-2 rounded-full bg-white/50" />
        </div>
      </motion.div>
    </section>
  )
}