import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import { useLocale, blogIndexPath, blogPostPath } from '../i18n/LocaleContext'
import { POSTS } from '../content/blog/registry'

const DATE_LOCALE = { en: 'en-AU', pt: 'pt-BR', es: 'es-ES' }

function formatDate(iso, locale) {
  return new Intl.DateTimeFormat(DATE_LOCALE[locale] ?? 'en-AU', { dateStyle: 'long' }).format(new Date(iso))
}

const COPY = {
  en: {
    seoTitle: 'Blog — HeyFlat',
    seoDescription: 'Practical guides on splitting bills, organizing chores, and living well in a shared house.',
    title: 'Blog',
    subtitle: 'Practical guides on splitting bills, organizing chores, and living well in a shared house.',
  },
  pt: {
    seoTitle: 'Blog — HeyFlat',
    seoDescription: 'Guias práticos pra dividir contas, organizar tarefas e morar bem numa casa compartilhada.',
    title: 'Blog',
    subtitle: 'Guias práticos pra dividir contas, organizar tarefas e morar bem numa casa compartilhada.',
  },
  es: {
    seoTitle: 'Blog — HeyFlat',
    seoDescription: 'Guías prácticas para dividir cuentas, organizar tareas y vivir bien en una casa compartida.',
    title: 'Blog',
    subtitle: 'Guías prácticas para dividir cuentas, organizar tareas y vivir bien en una casa compartida.',
  },
}

export default function BlogIndexPage() {
  const { locale } = useLocale()
  const t = COPY[locale] ?? COPY.en

  const alternates = [
    { lang: 'en', path: blogIndexPath('en') },
    { lang: 'pt', path: blogIndexPath('pt') },
    { lang: 'es', path: blogIndexPath('es') },
    { lang: 'x-default', path: blogIndexPath('en') },
  ]

  return (
    <>
      <Seo title={t.seoTitle} description={t.seoDescription} path={blogIndexPath(locale)} alternates={alternates} />
      <div className="mx-auto max-w-3xl px-4 py-16 md:px-8 md:py-24">
        <Reveal>
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">{t.title}</h1>
          <p className="mt-3 max-w-2xl text-base text-gray-500">{t.subtitle}</p>
        </Reveal>

        <div className="mt-12 space-y-6">
          {POSTS.map((post, index) => {
            const content = post[locale] ?? post.en
            return (
              <Reveal key={post.slug} delay={Math.min(index * 0.04, 0.24)} y={16}>
                <a
                  href={blogPostPath(locale, post.slug)}
                  className="block rounded-2xl border border-gray-200 bg-white p-6 transition-colors hover:border-brand-300 hover:shadow-sm"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                    {formatDate(post.publishedAt, locale)}
                  </p>
                  <h2 className="mt-2 text-xl font-bold text-gray-900">{content.title}</h2>
                  <p className="mt-2 text-sm text-gray-500">{content.excerpt}</p>
                </a>
              </Reveal>
            )
          })}
        </div>
      </div>
    </>
  )
}
