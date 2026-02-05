'use client'

import { motion } from 'framer-motion'
import { ShoppingCart, Star } from 'lucide-react'
import { Button } from '@/app/components/ui/Button'
import { PRODUCTS } from '@/app/data/products'
import { useCart } from '@/app/contexts/CartContext'
import Image from 'next/image'
import type { Product } from '@/app/types'

interface ProductsSectionProps {
  activeProduct: Product
  onProductChange: (product: Product) => void
}

export default function ProductsSection({ activeProduct, onProductChange }: ProductsSectionProps) {
  const { addItem } = useCart()

  return (
    <section id="produtos" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-glow" style={{ color: activeProduct.theme.primary }}>
              Nossos Combos
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Cada combo tem sua própria personalidade e energia única
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative group cursor-pointer ${
                activeProduct.id === product.id ? 'scale-105' : ''
              }`}
              onClick={() => onProductChange(product)}
            >
              <div className="glass-morphism rounded-2xl p-6 h-full transition-all duration-300 hover:scale-105">
                {/* Product Image */}
                <div className="relative h-64 mb-6">
                  <div 
                    className="absolute inset-0 blur-2xl opacity-20 rounded-full"
                    style={{ backgroundColor: product.theme.primary }}
                  />
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain drop-shadow-lg"
                    style={{
                      filter: `drop-shadow(0 0 20px ${product.theme.glow})`,
                    }}
                  />
                </div>

                {/* Product Info */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4" style={{ color: product.theme.primary }} />
                    <span className="text-sm text-gray-400">{product.type}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold" style={{ color: product.theme.primary }}>
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-300 text-sm line-clamp-2">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4">
                    <div>
                      <div className="text-2xl font-bold text-white">
                        R$ {product.price.toFixed(2)}
                      </div>
                      <div className="text-sm text-gray-400">{product.volume}</div>
                    </div>
                    
                    <Button
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation()
                        addItem(product)
                      }}
                      style={{
                        backgroundColor: product.theme.primary,
                        color: product.theme.text,
                      }}
                    >
                      <ShoppingCart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Active Indicator */}
                {activeProduct.id === product.id && (
                  <div 
                    className="absolute -inset-1 rounded-2xl opacity-50 blur-sm"
                    style={{ backgroundColor: product.theme.primary }}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}