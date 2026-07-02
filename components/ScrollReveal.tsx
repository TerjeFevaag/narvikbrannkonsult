'use client'

import { useEffect, useRef, ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  delay?: number
  variant?: 'up' | 'fade' | 'scale'
  threshold?: number
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  variant = 'up',
  threshold = 0.12,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay) {
            setTimeout(() => el.classList.add('in'), delay)
          } else {
            el.classList.add('in')
          }
          observer.unobserve(el)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay, threshold])

  const base =
    variant === 'fade' ? 'reveal-fade' : variant === 'scale' ? 'reveal-scale' : 'reveal'

  return (
    <div ref={ref} className={`${base} ${className}`}>
      {children}
    </div>
  )
}
