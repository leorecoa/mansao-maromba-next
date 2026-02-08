'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const reviews = [
  {
    id: 1,
    user: 'Carlos M.',
    rating: 5,
    comment: 'O Combo Tigrinho é insano! Energia pura para a balada. Melhor investimento que já fiz.',
    date: '2024-01-15',
    avatar: '🐯'
  },
  {
    id: 2,
    user: 'Ana P.',
    rating: 5,
    comment: 'Double Darkness tem um sabor único, perfeito para o rolê. Viciante demais!',
    date: '2024-01-10',
    avatar: '🌙'
  },
  {
    id: 3,
    user: 'Bruno S.',
    rating: 5,
    comment: 'Combo Pink é viciante! Já virou minha bebida oficial. Recomendo muito!',
    date: '2024-01-08',
    avatar: '💪'
  },
  {
    id: 4,
    user: 'Mariana L.',
    rating: 5,
    comment: 'Atendimento top e entrega rápida. Os combos são incríveis, vale cada centavo!',
    date: '2024-01-05',
    avatar: '⚡'
  }
]

export default function ReviewsSection() {
  return (
    <section id="avaliacoes" className="py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-4 tracking-tight">
            <span className="text-glow" style={{ color: 'var(--primary, #facc15)' }}>
              AVALIAÇÕES
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            O que nossos marombers estão falando
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="backdrop-blur-xl bg-black/40 border border-white/10 rounded-2xl p-6 relative hover:border-white/20 transition-all duration-300"
            >
              <Quote 
                className="absolute top-4 right-4 w-10 h-10 opacity-10" 
                style={{ color: 'var(--primary, #facc15)' }}
              />
              
              <div className="space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-4 h-4 fill-current" 
                      style={{ color: 'var(--primary, #facc15)' }}
                    />
                  ))}
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  "{review.comment}"
                </p>
                
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-xl">
                    {review.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">{review.user}</div>
                    <div className="text-xs text-gray-500">
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
          className="grid grid-cols-3 gap-8 mt-20"
        >
          <div className="text-center">
            <div className="text-5xl font-black mb-2" style={{ color: 'var(--primary, #facc15)' }}>
              10k+
            </div>
            <div className="text-gray-500 text-sm uppercase tracking-wider">Marombers</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-black mb-2" style={{ color: 'var(--primary, #facc15)' }}>
              4.9
            </div>
            <div className="text-gray-500 text-sm uppercase tracking-wider">Avaliação</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-black mb-2" style={{ color: 'var(--primary, #facc15)' }}>
              50k+
            </div>
            <div className="text-gray-500 text-sm uppercase tracking-wider">Combos Vendidos</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}