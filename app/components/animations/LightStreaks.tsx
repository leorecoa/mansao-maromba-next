'use client'

import { motion } from 'framer-motion'

interface LightStreaksProps {
  color: string
}

export default function LightStreaks({ color }: LightStreaksProps) {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Horizontal Streaks */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`h-${i}`}
          className="absolute h-px opacity-30"
          style={{
            background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
            top: `${20 + i * 30}%`,
            width: '200%',
            left: '-100%',
          }}
          animate={{
            x: ['0%', '100%'],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: 'linear',
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Vertical Streaks */}
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={`v-${i}`}
          className="absolute w-px opacity-20"
          style={{
            background: `linear-gradient(180deg, transparent, ${color}, transparent)`,
            left: `${30 + i * 40}%`,
            height: '200%',
            top: '-100%',
          }}
          animate={{
            y: ['0%', '100%'],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: 'linear',
            delay: i * 0.7,
          }}
        />
      ))}

      {/* Diagonal Streaks */}
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={`d-${i}`}
          className="absolute opacity-10"
          style={{
            background: `linear-gradient(45deg, transparent, ${color}, transparent)`,
            width: '2px',
            height: '200px',
            right: `${20 + i * 30}%`,
            top: `${10 + i * 20}%`,
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}

      {/* Floating Particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`p-${i}`}
          className="absolute w-1 h-1 rounded-full opacity-40"
          style={{
            backgroundColor: color,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  )
}