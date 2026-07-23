import PhoneMockup from './PhoneMockup'
import WebMockup from './WebMockup'
import Reveal from './Reveal'
import { useLocale } from '../i18n/LocaleContext'

const SIGNUP_URL = import.meta.env.VITE_APP_SIGNUP_URL

export default function Hero() {
  const { dict, href } = useLocale()
  const t = dict.hero

  return (
    <section id="topo" className="mx-auto max-w-6xl px-4 pb-16 pt-12 md:px-8 md:pb-24 md:pt-20">
      <div className="grid items-center gap-14 md:grid-cols-2 md:gap-8">
        <Reveal>
          <div>
            <span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
              {t.eyebrow}
            </span>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-5xl">
              {t.titleStart} <span className="text-brand-600">{t.titleHighlight}</span>
            </h1>
            <p className="mt-4 max-w-md text-lg text-gray-600">{t.subtitle}</p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={SIGNUP_URL}
                className="rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
              >
                {t.ctaPrimary}
              </a>
              <a
                href={href('recursos')}
                className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 hover:border-gray-400"
              >
                {t.ctaSecondary}
              </a>
            </div>
            <p className="mt-3 text-xs text-gray-400">{t.finePrint}</p>
            <p className="mt-4 text-xs font-medium text-gray-500">{t.trustBar}</p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="flex justify-center md:hidden">
            <PhoneMockup />
          </div>
          <div className="relative hidden justify-end pb-10 pl-10 md:flex">
            <div className="w-full max-w-[440px]">
              <WebMockup />
            </div>
            <div className="absolute -bottom-2 -left-4 origin-bottom-left scale-[0.48] drop-shadow-2xl">
              <PhoneMockup />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
