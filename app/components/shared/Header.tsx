'use client'

import { useState } from 'react'
import { Menu, X, ShoppingCart } from 'lucide-react'
import { useCart } from '@/app/contexts/CartContext'
import { NAVIGATION } from '@/app/lib/constants'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { itemCount } = useCart()

  return (
    <header className="fixed top-0 w-full z-50 glass-morphism">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#hero" className="flex items-center gap-3">
              <div className="relative w-10 h-10">
                <Image
                  src="https://i.imgur.com/2CMQ6GJ.png"
                  alt="Mansão Maromba Logo"
                  fill
                  className="object-contain"
                  style={{
                    filter: 'contrast(1.2) brightness(1.1) saturate(1.3) drop-shadow(0 0 8px var(--primary, #facc15))',
                  }}
                />
              </div>
              <h1 className="text-xl font-black tracking-tighter uppercase text-glow" style={{ color: 'var(--primary, #facc15)' }}>
                MANSÃO MAROMBA
              </h1>
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {NAVIGATION.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-primary transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-white hover:text-primary transition-colors">
              <ShoppingCart className="w-6 h-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>

            <button
              className="md:hidden p-2 text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4">
              {NAVIGATION.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-primary transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}