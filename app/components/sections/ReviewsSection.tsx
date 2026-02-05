'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const reviews = [
  {
    id: 1,
    user: 'Carlos M.',
    rating: 5,
    comment: 'O Combo Tigrinho é insano! Energia pura para a balada.',
    date: '2024-01-15'
  },
  {
    id: 2,
    user: 'Ana P.',
    rating: 5,
    comment: 'Double Darkness tem um sabor único, perfeito para o rolê.',
    date: '2024-01-10'
  },
  {
    id: 3,
    user: 'Bruno S.',
    rating: 5,
    comment: 'Combo Pink é viciante! Já virou minha bebida oficial.',
    date: '2024-01-08'
  }
]

export default function ReviewsSection() {
  return (
    <section id="avaliacoes" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-glow" style={{ color: 'var(--primary, #facc15)' }}>
              Avaliações
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            O que nossos marombers estão falando
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-morphism rounded-2xl p-6 relative"
            >
              <Quote 
                className="absolute top-4 right-4 w-8 h-8 opacity-20" 
                style={{ color: 'var(--primary, #facc15)' }}
              />
              
              <div className="space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 fill-current" 
                      style={{ color: 'var(--primary, #facc15)' }}
                    />
                  ))}
                </div>
                
                <p className="text-gray-300 italic">
                  "{review.comment}"
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div>
                    <div className="font-bold text-white">{review.user}</div>
                    <div className="text-sm text-gray-400">
                      {new Date(review.date).toLocaleDateString('pt-BR')}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-3 gap-8 mt-16"
        >
          <div className="text-center">
            <div className="text-4xl font-bold" style={{ color: 'var(--primary, #facc15)' }}>
              10k+
            </div>
            <div className="text-gray-300">Marombers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold" style={{ color: 'var(--primary, #facc15)' }}>
              4.9
            </div>
            <div className="text-gray-300">Avaliação</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold" style={{ color: 'var(--primary, #facc15)' }}>
              50k+
            </div>
            <div className="text-gray-300">Combos Vendidos</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}