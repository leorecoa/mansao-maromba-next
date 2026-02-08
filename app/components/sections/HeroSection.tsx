'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronLeft,
  ChevronRight,
  Zap,
  Crown,
} from 'lucide-react'

import { PRODUCTS } from '@/app/data/products'
import type { Product } from '@/app/types'
import { useCart } from '@/app/contexts/CartContext'

interface HeroSectionProps {
  activeProduct: Product
  onProductChange: (product: Product) => void
}

export default function HeroSection({
  activeProduct,
  onProductChange,
}: HeroSectionProps) {
  const { addItem } = useCart()

  const [activeIndex, setActiveIndex] = useState(
    PRODUCTS.findIndex(p => p.id === activeProduct.id)
  )

  const [isTransitioning, setIsTransitioning] = useState(false)
  const [showFlash, setShowFlash] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  const prevIndexRef = useRef(activeIndex)

  /* 🔁 sync com pai */
  useEffect(() => {
    setActiveIndex(PRODUCTS.findIndex(p => p.id === activeProduct.id))
  }, [activeProduct])

  /* ⚡ preload real */
  useEffect(() => {
    PRODUCTS.forEach(p => {
      const img = new window.Image()
      img.src = p.image
    })
  }, [])

  /* 🎥 scroll parallax */
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const triggerChange = (index: number) => {
    if (isTransitioning) return
    prevIndexRef.current = activeIndex
    setIsTransitioning(true)
    setShowFlash(true)
    setActiveIndex(index)
    onProductChange(PRODUCTS[index])

    setTimeout(() => setShowFlash(false), 500)
    setTimeout(() => setIsTransitioning(false), 900)
  }

  const next = () =>
    triggerChange((activeIndex + 1) % PRODUCTS.length)

  const prev = () =>
    triggerChange(
      (activeIndex - 1 + PRODUCTS.length) % PRODUCTS.length
    )

  const product = PRODUCTS[activeIndex]

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black flex items-center justify-center">

      {/* TEXTO GIGANTE FUNDO */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      >
        <h2
          className="text-[25vw] font-black tracking-[-0.05em] uppercase"
          style={{
            color: product.theme.primary,
            filter: `blur(${isTransitioning ? 12 : 3}px)`,
            transition: 'filter 0.5s ease-out',
          }}
        >
          {product.name.split(' ')[0]}
        </h2>
      </div>

      {/* FLASH */}
      {showFlash && (
        <div
          className="absolute inset-0 z-50 pointer-events-none animate-pulse"
          style={{
            background: `radial-gradient(circle, ${product.theme.primary}45 0%, transparent 75%)`,
            mixBlendMode: 'screen',
          }}
        />
      )}

      <div className="relative z-10 w-full max-w-[1600px] px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* TEXTO */}
        <div className="space-y-8">
          <motion.div
            key={`badge-${product.id}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 backdrop-blur-xl"
            style={{
              backgroundColor: 'rgba(0,0,0,0.3)',
              color: product.theme.primary,
            }}
          >
            <Crown size={18} style={{ filter: `drop-shadow(0 0 6px ${product.theme.primary})` }} />
            <span className="text-xs font-bold tracking-[0.3em] uppercase">VIBE MANSÃO MAROMBA</span>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.h1
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-6xl md:text-[8rem] lg:text-[9rem] font-black leading-[0.85] tracking-[-0.03em]"
            >
              {product.name.split(' ').map((word, i) => (
                <span
                  key={i}
                  className="block"
                  style={{
                    color: i === 0 ? '#fff' : product.theme.primary,
                    textShadow: i === 0 ? 'none' : `0 0 30px ${product.theme.primary}70, 0 0 60px ${product.theme.primary}40`,
                  }}
                >
                  {word}
                </span>
              ))}
            </motion.h1>
          </AnimatePresence>

          <p className="text-xl md:text-2xl max-w-xl text-gray-400 leading-relaxed border-l-4 pl-6"
            style={{ borderColor: product.theme.primary }}
          >
            {product.description}
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-4">
            <button
              onClick={() => addItem(product)}
              className="px-12 py-6 rounded-2xl font-black text-base uppercase tracking-wide text-black transition-all duration-300 hover:scale-105 active:scale-95"
              style={{
                background: product.theme.primary,
                boxShadow: `0 10px 40px ${product.theme.primary}50`,
              }}
            >
              GARANTIR COMBO
            </button>

            <div className="flex items-center gap-3 text-sm font-bold text-white/70">
              <Zap size={20} className="text-yellow-400" />
              Entrega Relâmpago
            </div>
          </div>

          <div className="flex items-center gap-12 pt-6">
            <div>
              <div className="text-4xl font-black" style={{ color: product.theme.primary, textShadow: `0 0 20px ${product.theme.primary}60` }}>
                {product.volume}
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Volume</div>
            </div>
            <div>
              <div className="text-4xl font-black" style={{ color: product.theme.primary, textShadow: `0 0 20px ${product.theme.primary}60` }}>
                R$ {product.price.toFixed(2)}
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Preço</div>
            </div>
          </div>
        </div>

        {/* GARRAFAS 3D */}
        <div className="relative h-[800px] lg:h-[850px] flex items-center justify-center" style={{ perspective: '1400px' }}>

          {/* SILHUETA DA PRÓXIMA (PRÉ-CARREGADA, INVISÍVEL) */}
          <motion.div
            key={`ghost-${PRODUCTS[(activeIndex + 1) % PRODUCTS.length].id}`}
            className="absolute opacity-0"
            initial={{ opacity: 0, x: 180, scale: 0.8 }}
            animate={{ opacity: 0.15, x: 120, scale: 0.85 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            style={{ filter: 'blur(10px)' }}
          >
            <Image
              src={PRODUCTS[(activeIndex + 1) % PRODUCTS.length].image}
              alt=""
              width={650}
              height={850}
              className="brightness-50 object-contain"
            />
          </motion.div>

          {/* GARRAFA ATIVA */}
          <AnimatePresence mode="wait">
            <motion.div
              key={product.id}
              initial={{
                opacity: 0,
                y: 150,
                scale: 0.85,
                rotateY: -30,
                filter: 'blur(25px)',
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1.2,
                rotateY: 0,
                filter: 'blur(0px)',
              }}
              exit={{
                opacity: 0,
                y: -130,
                rotateY: 30,
                filter: 'blur(25px)',
              }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative z-20"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* NEON CONTROLADO */}
              <div
                className="absolute inset-0 blur-[120px] rounded-full"
                style={{
                  background: product.theme.primary,
                  opacity: 0.35,
                }}
              />
              <div
                className="absolute inset-0 blur-[60px] rounded-full animate-pulse"
                style={{
                  background: product.theme.primary,
                  opacity: 0.4,
                }}
              />

              {/* IDLE MOTION CONTÍNUO */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotateZ: [0, 1, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: 'easeInOut',
                }}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={700}
                  height={900}
                  priority
                  className="object-contain"
                  style={{
                    filter: `drop-shadow(0 0 50px ${product.theme.primary}80) drop-shadow(0 0 80px ${product.theme.primary}50) brightness(1.15) contrast(1.08) saturate(1.1)`,
                  }}
                />
              </motion.div>

              {/* REFLEXO NO CHÃO */}
              <div className="absolute top-full mt-10 opacity-12 blur-2xl scale-y-[-0.6]">
                <Image
                  src={product.image}
                  alt=""
                  width={700}
                  height={900}
                  className="object-contain"
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* CONTROLES */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 pointer-events-none z-40">
            <button
              onClick={prev}
              disabled={isTransitioning}
              className="pointer-events-auto w-16 h-16 lg:w-20 lg:h-20 rounded-full backdrop-blur-xl border border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-white/30 disabled:opacity-50"
              style={{
                backgroundColor: 'rgba(0,0,0,0.4)',
                boxShadow: `0 0 20px ${product.theme.primary}30`,
              }}
            >
              <ChevronLeft size={36} style={{ color: product.theme.primary }} />
            </button>
            <button
              onClick={next}
              disabled={isTransitioning}
              className="pointer-events-auto w-16 h-16 lg:w-20 lg:h-20 rounded-full backdrop-blur-xl border border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-white/30 disabled:opacity-50"
              style={{
                backgroundColor: 'rgba(0,0,0,0.4)',
                boxShadow: `0 0 20px ${product.theme.primary}30`,
              }}
            >
              <ChevronRight size={36} style={{ color: product.theme.primary }} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 
