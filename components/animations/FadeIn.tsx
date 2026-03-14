'use client'

import { motion, useReducedMotion } from 'motion/react'

interface FadeInProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function FadeIn({ children, className, delay = 0 }: FadeInProps) {
  const shouldReduce = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={{ opacity: shouldReduce ? 1 : 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 'some' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}
