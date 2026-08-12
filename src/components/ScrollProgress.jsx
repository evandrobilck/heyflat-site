import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion'

// Thin brand-gradient bar tracking scroll position. Skipped entirely under
// prefers-reduced-motion since it's an ambient/decorative cue, not information.
export default function ScrollProgress() {
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 })

  if (reduceMotion) return null

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-50 h-[3px] origin-left bg-gradient-to-r from-brand-400 via-brand-600 to-brand-800"
    />
  )
}
