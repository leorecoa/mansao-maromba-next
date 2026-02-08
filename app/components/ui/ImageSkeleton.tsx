'use client'

import { motion } from 'framer-motion'

export default function ImageSkeleton() {
  return (
    <div className="absolute inset-0 bg-white/5 rounded-xl overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  )
}
