'use client'

import { motion } from 'framer-motion'
import { ShoppingCart, Star } from 'lucide-react'
import { PRODUCTS } from '@/app/data/products'
import { useCart } from '@/app/contexts/CartContext'
import Image from 'next/image'
import { useState } from 'react'
import type { Product } from '@/app/types'
import ImageSkeleton from '@/app/components/ui/ImageSkeleton'

interface ProductsSectionProps {
  activeProduct: Product
  onProductChange: (product: Product) => void
}

export default function ProductsSection({ activeProduct, onProductChange }: ProductsSectionProps) {
  const { addItem } = useCart()
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({})

  return (
    <section id="produtos" className="py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-4 tracking-tight">
            <span className="text-glow" style={{ color: activeProduct.theme.primary }}>
              NOSSOS COMBOS
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
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
              className="relative group cursor-pointer"
              onClick={() => onProductChange(product)}
            >
              <div 
                className="relative backdrop-blur-xl bg-black/40 border rounded-2xl p-6 h-full transition-all duration-500 hover:scale-[1.02]"
                style={{
                  borderColor: activeProduct.id === product.id ? product.theme.primary : 'rgba(255,255,255,0.1)',
                  boxShadow: activeProduct.id === product.id 
                    ? `0 0 30px ${product.theme.glow}40, inset 0 0 20px ${product.theme.glow}10`
                    : 'none'
                }}
              >
                {/* Product Image */}
                <div className="relative h-72 mb-6 overflow-hidden">
                  {!loadedImages[product.id] && <ImageSkeleton />}
                  <div 
                    className="absolute inset-0 blur-3xl opacity-30 rounded-full transition-opacity duration-500 group-hover:opacity-50"
                    style={{ backgroundColor: product.theme.primary }}
                  />
                  <Image
                    src={product.image}
                    alt={`${product.name} - ${product.description}`}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-110"
                    style={{
                      filter: `drop-shadow(0 0 25px ${product.theme.glow}80)`,
                      opacity: loadedImages[product.id] ? 1 : 0,
                    }}
                    onLoad={() => setLoadedImages(prev => ({ ...prev, [product.id]: true }))}
                    loading="lazy"
                    quality={85}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>

                {/* Product Info */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4" style={{ color: product.theme.primary }} />
                    <span className="text-sm text-gray-400">{product.type}</span>
                  </div>
                  
                  <h3 className="text-2xl font-black tracking-tight" style={{ color: product.theme.primary }}>
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-400 text-sm line-clamp-2">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <div>
                      <div className="text-3xl font-black text-white">
                        R$ {product.price.toFixed(2)}
                      </div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider">{product.volume}</div>
                    </div>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        addItem(product)
                      }}
                      className="p-3 rounded-xl transition-all duration-300 hover:scale-110"
                      style={{
                        backgroundColor: product.theme.primary,
                        boxShadow: `0 4px 20px ${product.theme.glow}40`,
                      }}
                      aria-label={`Adicionar ${product.name} ao carrinho`}
                    >
                      <ShoppingCart className="w-5 h-5" style={{ color: product.theme.text }} />
                    </button>
                  </div>
                </div>


              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}