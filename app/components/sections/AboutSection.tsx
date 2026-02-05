'use client'

import { motion } from 'framer-motion'
import { Zap, Target, Users, Award } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Energia Máxima',
    description: 'Fórmulas exclusivas para noites intensas'
  },
  {
    icon: Target,
    title: 'Precisão',
    description: 'Cada combo desenvolvido para um momento específico'
  },
  {
    icon: Users,
    title: 'Comunidade',
    description: 'Mais de 10k marombers satisfeitos'
  },
  {
    icon: Award,
    title: 'Qualidade Premium',
    description: 'Ingredientes selecionados e processo artesanal'
  }
]

export default function AboutSection() {
  return (
    <section id="sobre" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-white">A Casa dos</span>
                <br />
                <span className="text-glow" style={{ color: 'var(--primary, #facc15)' }}>
                  Monstros
                </span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Na Mansão Maromba, cada combo é uma experiência única. 
                Desenvolvemos bebidas que combinam sabor, energia e atitude 
                para quem vive a noite com intensidade máxima.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Nossa Filosofia</h3>
              <p className="text-gray-300">
                Acreditamos que cada noite merece ser épica. Por isso, criamos 
                combos que não são apenas bebidas, mas experiências sensoriais 
                completas que elevam seu rolê a outro nível.
              </p>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-morphism rounded-xl p-6 text-center group hover:scale-105 transition-transform"
              >
                <div className="mb-4">
                  <feature.icon 
                    className="w-8 h-8 mx-auto group-hover:scale-110 transition-transform" 
                    style={{ color: 'var(--primary, #facc15)' }}
                  />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}