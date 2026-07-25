import { useEffect } from 'react'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import { useLocale, guidePath } from '../i18n/LocaleContext'

const SIGNUP_URL = import.meta.env.VITE_APP_SIGNUP_URL

// Real app screenshots, one per section, in the same order as the
// sections arrays below (identical across locales — only the dict text
// changes per language, the screenshots are shared).
const SECTION_IMAGES = [
  'primeiros-passos',
  'contas',
  'tarefas',
  'gastos',
  'compras',
  'calendario',
  'manutencao',
  'inspecao',
  'casa',
  'notificacoes',
  'assinatura',
]

const ALTERNATES = [
  { lang: 'en', path: guidePath('en') },
  { lang: 'pt', path: guidePath('pt') },
  { lang: 'es', path: guidePath('es') },
  { lang: 'x-default', path: guidePath('en') },
]

export default function GuidePage() {
  const { dict, locale } = useLocale()
  const t = dict.guide

  // The browser tries to jump to the URL hash before this page finishes
  // rendering (SPA route), so on a fresh load the anchor scroll is lost —
  // do it ourselves once the target section actually exists in the DOM.
  useEffect(() => {
    if (!window.location.hash) return
    const target = document.getElementById(window.location.hash.slice(1))
    target?.scrollIntoView()
  }, [locale])

  return (
    <>
      <Seo title={t.seo.title} description={t.seo.description} path={guidePath(locale)} alternates={ALTERNATES} />
      <div className="mx-auto max-w-5xl px-4 py-16 md:px-8 md:py-24">
        <Reveal>
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">{t.title}</h1>
          <p className="mt-3 max-w-2xl text-base text-gray-500">{t.subtitle}</p>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-[220px_1fr] md:gap-14">
          <nav className="hidden md:block">
            <div className="sticky top-24">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">{t.tocLabel}</p>
              <ul className="mt-3 space-y-2.5 border-l border-gray-200 pl-4 text-sm">
                {t.sections.map((section) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`} className="text-gray-500 hover:text-brand-600">
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <div className="space-y-14">
            {t.sections.map((section, index) => (
              <Reveal key={section.id} delay={Math.min(index * 0.04, 0.24)} y={16}>
                <section id={section.id} className="scroll-mt-24">
                  <div className="flex flex-col gap-6 md:flex-row md:gap-10">
                    <div className="min-w-0 flex-1">
                      <h2 className="text-xl font-bold text-gray-900 md:text-2xl">{section.title}</h2>
                      <div className="mt-3 space-y-3 text-sm leading-relaxed text-gray-600 md:text-base">
                        {section.paragraphs?.map((paragraph, i) => (
                          <p key={i}>{paragraph}</p>
                        ))}
                        {section.steps && (
                          <ol className="list-decimal space-y-2 pl-5">
                            {section.steps.map((step, i) => (
                              <li key={i}>{step}</li>
                            ))}
                          </ol>
                        )}
                        {section.list && (
                          <ul className="list-disc space-y-2 pl-5">
                            {section.list.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        )}
                        {section.note && (
                          <div className="rounded-xl border border-brand-200 bg-brand-50 p-4 text-sm text-brand-800">
                            {section.note}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="shrink-0 md:w-64">
                      <img
                        src={`/guide/${SECTION_IMAGES[index]}.png`}
                        alt={section.title}
                        loading="lazy"
                        className="mx-auto w-48 rounded-2xl border border-gray-200 shadow-md md:w-full"
                      />
                    </div>
                  </div>
                </section>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal>
          <div className="mt-16 rounded-2xl bg-brand-600 px-6 py-10 text-center text-white md:px-10">
            <p className="text-xl font-bold">{t.cta.title}</p>
            <p className="mt-2 text-sm text-brand-100">{t.cta.subtitle}</p>
            <a
              href={SIGNUP_URL}
              className="mt-5 inline-block rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-brand-700 shadow-sm hover:bg-brand-50"
            >
              {t.cta.button}
            </a>
          </div>
        </Reveal>
      </div>
    </>
  )
}
