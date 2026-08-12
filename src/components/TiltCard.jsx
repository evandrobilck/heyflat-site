import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion'

// Pointer-driven 3D tilt, hand-rolled with the spring values we already ship
// (framer-motion) instead of pulling in vanilla-tilt as a separate dependency.
// Falls through to a plain wrapper for prefers-reduced-motion; touch devices
// simply never fire pointermove with meaningful deltas so it stays inert there.
export default function TiltCard({ children, className, maxTilt = 8 }) {
  const ref = useRef(null)
  const reduceMotion = useReducedMotion()

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 200, damping: 20, mass: 0.5 })
  const springY = useSpring(mouseY, { stiffness: 200, damping: 20, mass: 0.5 })

  const rotateX = useTransform(springY, [-0.5, 0.5], [maxTilt, -maxTilt])
  const rotateY = useTransform(springX, [-0.5, 0.5], [-maxTilt, maxTilt])
  const glowBackground = useTransform([springX, springY], ([sx, sy]) => {
    const gx = (sx + 0.5) * 100
    const gy = (sy + 0.5) * 100
    return `radial-gradient(circle at ${gx}% ${gy}%, rgba(255,255,255,0.35), transparent 55%)`
  })

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  function handlePointerMove(event) {
    const rect = ref.current.getBoundingClientRect()
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5)
  }

  function handlePointerLeave() {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className={`group relative ${className ?? ''}`}
    >
      {children}
      <motion.div
        aria-hidden="true"
        style={{ background: glowBackground }}
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
    </motion.div>
  )
}
