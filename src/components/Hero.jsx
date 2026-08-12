import { motion, useReducedMotion } from 'framer-motion'
import PhoneMockup from './PhoneMockup'
import WebMockup from './WebMockup'
import TiltCard from './TiltCard'
import { useLocale } from '../i18n/LocaleContext'

const SIGNUP_URL = import.meta.env.VITE_APP_SIGNUP_URL

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] } },
}

export default function Hero() {
  const { dict, href } = useLocale()
  const t = dict.hero
  const reduceMotion = useReducedMotion()

  return (
    <section id="topo" className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="motion-safe:animate-drift absolute -left-24 top-0 h-72 w-72 rounded-full bg-brand-200/50 blur-3xl" />
        <div className="motion-safe:animate-drift-slow absolute -right-16 top-24 h-80 w-80 rounded-full bg-brand-100/60 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-12 md:px-8 md:pb-24 md:pt-20">
        <div className="grid items-center gap-14 md:grid-cols-2 md:gap-8">
          <motion.div
            variants={reduceMotion ? undefined : container}
            initial={reduceMotion ? undefined : 'hidden'}
            animate={reduceMotion ? undefined : 'show'}
          >
            <motion.span
              variants={reduceMotion ? undefined : item}
              className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700"
            >
              {t.eyebrow}
            </motion.span>
            <motion.h1
              variants={reduceMotion ? undefined : item}
              className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-5xl"
            >
              {t.titleStart}{' '}
              <span className="motion-safe:animate-shimmer bg-[linear-gradient(90deg,var(--color-brand-400),var(--color-brand-600),var(--color-brand-400))] bg-[length:200%_auto] bg-clip-text text-transparent">
                {t.titleHighlight}
              </span>
            </motion.h1>
            <motion.p variants={reduceMotion ? undefined : item} className="mt-4 max-w-md text-lg text-gray-600">
              {t.subtitle}
            </motion.p>

            <motion.div variants={reduceMotion ? undefined : item} className="mt-8 flex flex-wrap items-center gap-3">
              <motion.a
                href={SIGNUP_URL}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className="rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
              >
                {t.ctaPrimary}
              </motion.a>
              <motion.a
                href={href('recursos')}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 hover:border-gray-400"
              >
                {t.ctaSecondary}
              </motion.a>
            </motion.div>
            <motion.p variants={reduceMotion ? undefined : item} className="mt-3 text-xs text-gray-600">
              {t.finePrint}
            </motion.p>
            <motion.p variants={reduceMotion ? undefined : item} className="mt-4 text-xs font-medium text-gray-500">
              {t.trustBar}
            </motion.p>
          </motion.div>

          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, x: 24 }}
            animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <div className="flex justify-center md:hidden">
              <PhoneMockup />
            </div>
            <div className="relative hidden justify-end pb-10 pl-10 md:flex">
              <TiltCard className="w-full max-w-[440px]" maxTilt={6}>
                <WebMockup />
              </TiltCard>
              <div className="absolute -bottom-2 -left-4 origin-bottom-left scale-[0.48] drop-shadow-2xl">
                <PhoneMockup />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
