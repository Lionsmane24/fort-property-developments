'use client'

import { FadeIn } from './FadeIn'

interface FadeInGroupProps {
  children: React.ReactNode[]
  className?: string
}

export function FadeInGroup({ children, className }: FadeInGroupProps) {
  return (
    <div className={className}>
      {children.map((child, i) => (
        <FadeIn key={i} delay={i * 0.1}>
          {child}
        </FadeIn>
      ))}
    </div>
  )
}
