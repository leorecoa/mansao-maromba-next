'use client'

import { motion } from 'framer-motion'
import { MapPin, Clock, Phone, Instagram } from 'lucide-react'
import { COMPANY_INFO } from '@/app/lib/constants'

export default function LocationSection() {
  return (
    <section id="localizacao" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-4xl md:text-7xl font-black mb-4 tracking-tight">
            <span className="text-glow" style={{ color: 'var(--primary, #facc15)' }}>
              LOCALIZAÇÃO
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
            Venha conhecer nossa casa no coração de São Paulo
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 md:space-y-8"
          >
            <div className="backdrop-blur-xl bg-black/40 border border-white/10 rounded-2xl p-6 md:p-8 space-y-6">
              <div className="flex items-start gap-3 md:gap-4">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 mt-1 shrink-0" style={{ color: 'var(--primary, #facc15)' }} />
                <div>
                  <h3 className="text-base md:text-lg font-bold text-white mb-2">Endereço</h3>
                  <p className="text-sm md:text-base text-gray-400">{COMPANY_INFO.address}</p>
                  <p className="text-xs md:text-sm text-gray-500 mt-1">{COMPANY_INFO.plusCode}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <Clock className="w-5 h-5 md:w-6 md:h-6 mt-1 shrink-0" style={{ color: 'var(--primary, #facc15)' }} />
                <div>
                  <h3 className="text-base md:text-lg font-bold text-white mb-2">Horário</h3>
                  <p className="text-sm md:text-base text-gray-400">Segunda a Domingo</p>
                  <p className="text-sm md:text-base text-gray-400">{COMPANY_INFO.hours}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <Phone className="w-5 h-5 md:w-6 md:h-6 mt-1 shrink-0" style={{ color: 'var(--primary, #facc15)' }} />
                <div>
                  <h3 className="text-base md:text-lg font-bold text-white mb-2">Contato</h3>
                  <p className="text-sm md:text-base text-gray-400">{COMPANY_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <Instagram className="w-5 h-5 md:w-6 md:h-6 mt-1 shrink-0" style={{ color: 'var(--primary, #facc15)' }} />
                <div>
                  <h3 className="text-base md:text-lg font-bold text-white mb-2">Instagram</h3>
                  <a 
                    href={COMPANY_INFO.instagram}
                    className="text-sm md:text-base text-gray-400 hover:text-primary transition-colors"
                  >
                    @mansaomaromba
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="backdrop-blur-xl bg-black/40 border border-white/10 rounded-2xl p-6 md:p-8 h-80 md:h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4" style={{ color: 'var(--primary, #facc15)' }} />
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">Mapa Interativo</h3>
                <p className="text-sm md:text-base text-gray-400">
                  Em breve, mapa interativo com localização exata
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}