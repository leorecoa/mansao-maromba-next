'use client'

import { motion } from 'framer-motion'
import { MapPin, Clock, Phone, Instagram } from 'lucide-react'
import { COMPANY_INFO } from '@/app/lib/constants'

export default function LocationSection() {
  return (
    <section id="localizacao" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-glow" style={{ color: 'var(--primary, #facc15)' }}>
              Localização
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Venha conhecer nossa casa no coração de São Paulo
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="glass-morphism rounded-2xl p-8 space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 mt-1" style={{ color: 'var(--primary, #facc15)' }} />
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Endereço</h3>
                  <p className="text-gray-300">{COMPANY_INFO.address}</p>
                  <p className="text-sm text-gray-400 mt-1">{COMPANY_INFO.plusCode}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 mt-1" style={{ color: 'var(--primary, #facc15)' }} />
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Horário</h3>
                  <p className="text-gray-300">Segunda a Domingo</p>
                  <p className="text-gray-300">{COMPANY_INFO.hours}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 mt-1" style={{ color: 'var(--primary, #facc15)' }} />
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Contato</h3>
                  <p className="text-gray-300">{COMPANY_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Instagram className="w-6 h-6 mt-1" style={{ color: 'var(--primary, #facc15)' }} />
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Instagram</h3>
                  <a 
                    href={COMPANY_INFO.instagram}
                    className="text-gray-300 hover:text-primary transition-colors"
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
            <div className="glass-morphism rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 mx-auto mb-4" style={{ color: 'var(--primary, #facc15)' }} />
                <h3 className="text-xl font-bold text-white mb-2">Mapa Interativo</h3>
                <p className="text-gray-300">
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