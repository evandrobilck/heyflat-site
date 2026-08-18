import { motion, useReducedMotion } from 'framer-motion'
import { House } from '@phosphor-icons/react'
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
      <div aria-hidden="true" className="bg-technical-grid pointer-events-none absolute inset-0 -z-10 h-[640px]" />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-8 md:pb-20 md:pt-16">
        <div className="grid items-center gap-14 md:grid-cols-2 md:gap-10">
          <motion.div
            variants={reduceMotion ? undefined : container}
            initial={reduceMotion ? undefined : 'hidden'}
            animate={reduceMotion ? undefined : 'show'}
          >
            <motion.span
              variants={reduceMotion ? undefined : item}
              className="inline-flex items-center gap-1.5 rounded-full border border-brand-200 bg-white px-3 py-1.5 text-xs font-semibold text-brand-700"
            >
              <House weight="fill" className="h-3.5 w-3.5" />
              {t.eyebrow}
            </motion.span>
            <motion.h1
              variants={reduceMotion ? undefined : item}
              className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight text-zinc-900 md:text-5xl lg:text-6xl"
            >
              {t.titleStart} <span className="text-brand-600">{t.titleHighlight}</span>
            </motion.h1>
            <motion.p variants={reduceMotion ? undefined : item} className="mt-5 max-w-md text-lg text-zinc-600">
              {t.subtitle}
            </motion.p>

            <motion.div variants={reduceMotion ? undefined : item} className="mt-8 flex flex-wrap items-center gap-3">
              <motion.a
                href={SIGNUP_URL}
                whileHover={reduceMotion ? undefined : { y: -2 }}
                whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className="rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-brand-600/20 hover:bg-brand-700"
              >
                {t.ctaPrimary}
              </motion.a>
              <motion.a
                href={href('recursos')}
                whileHover={reduceMotion ? undefined : { y: -2 }}
                whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className="rounded-lg border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-700 hover:border-zinc-400"
              >
                {t.ctaSecondary}
              </motion.a>
            </motion.div>
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
              <TiltCard className="w-full max-w-[440px]" maxTilt={5}>
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
