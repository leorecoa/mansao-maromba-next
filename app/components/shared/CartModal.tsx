'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Plus, Minus, ShoppingBag, Trash2, CreditCard } from 'lucide-react'
import { useCart } from '@/app/contexts/CartContext'
import Image from 'next/image'
import type { Product } from '@/app/types'

interface CartModalProps {
  isOpen: boolean
  onClose: () => void
  activeTheme: { primary: string; glow: string }
}

export default function CartModal({ isOpen, onClose, activeTheme }: CartModalProps) {
  const { items, removeItem, updateQuantity, total } = useCart()

  const handleCheckout = () => {
    alert('Finalizando pedido...')
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Slide */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
        className="relative w-full max-w-md bg-[#0a0a0a] h-full shadow-2xl flex flex-col border-l border-white/5"
      >
        {/* Header */}
        <div className="p-6 flex justify-between items-center border-b border-white/10">
          <h2 className="text-2xl font-black uppercase tracking-wider">Carrinho</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/5 transition-colors"
            aria-label="Fechar carrinho"
          >
            <X size={24} aria-hidden="true" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-grow overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-40">
              <div className="w-20 h-20 rounded-full border-2 border-dashed border-white/30 flex items-center justify-center">
                <ShoppingBag size={32} />
              </div>
              <p className="font-bold uppercase tracking-widest text-sm">Seu carrinho está vazio</p>
            </div>
          ) : (
            items.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -100 }}
                className="flex gap-4 backdrop-blur-xl bg-white/5 p-4 rounded-2xl relative overflow-hidden border border-white/5"
              >
                {/* Accent bar */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-1"
                  style={{ backgroundColor: item.theme?.primary || activeTheme.primary }}
                />

                {/* Image */}
                <div className="w-20 h-20 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>

                {/* Info */}
                <div className="flex-grow flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-sm leading-tight">{item.name}</h4>
                    <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mt-0.5">
                      {item.volume}
                    </p>
                  </div>

                  <div className="flex justify-between items-end">
                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 bg-white/5 rounded-lg px-2 py-1" role="group" aria-label="Controle de quantidade">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:text-white/70 transition-colors"
                        aria-label="Diminuir quantidade"
                      >
                        <Minus size={14} aria-hidden="true" />
                      </button>
                      <span className="font-bold text-sm min-w-[20px] text-center" aria-live="polite">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:text-white/70 transition-colors"
                        aria-label="Aumentar quantidade"
                      >
                        <Plus size={14} aria-hidden="true" />
                      </button>
                    </div>

                    {/* Price */}
                    <div className="text-right">
                      <p className="text-xs text-gray-500">R$ {item.price.toFixed(2)}</p>
                      <p className="font-bold text-lg">
                        R$ {(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Remove button */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="absolute top-2 right-2 text-red-500/40 hover:text-red-500 transition-colors"
                  aria-label={`Remover ${item.name} do carrinho`}
                >
                  <Trash2 size={16} aria-hidden="true" />
                </button>
              </motion.div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 bg-white/5 border-t border-white/10 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-400 font-bold uppercase tracking-[0.2em] text-xs">
                Total do Pedido
              </span>
              <span className="text-3xl font-black">
                R$ {total.toFixed(2).replace('.', ',')}
              </span>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full py-5 rounded-2xl font-black uppercase tracking-wide flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-2xl"
              style={{
                backgroundColor: activeTheme.primary,
                color: '#000',
                boxShadow: `0 10px 40px ${activeTheme.glow}80`,
              }}
              aria-label="Finalizar pedido"
            >
              <CreditCard size={20} aria-hidden="true" />
              Finalizar Pedido
            </button>
          </div>
        )}
      </motion.div>
    </div>
  )
}