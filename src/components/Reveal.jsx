import { createElement } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

// Fades and slides an element in the first time it scrolls into view.
// Respects prefers-reduced-motion by skipping the animation entirely.
export default function Reveal({ children, delay = 0, y = 24, x = 0, as = 'div', className, ...rest }) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return createElement(as, { className, ...rest }, children)
  }

  const MotionTag = motion[as]

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
