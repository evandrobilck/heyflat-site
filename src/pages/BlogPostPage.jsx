import { useParams } from 'react-router-dom'
import Seo, { SITE_URL } from '../components/Seo'
import Reveal from '../components/Reveal'
import { useLocale, guidePath, blogIndexPath, blogPostPath } from '../i18n/LocaleContext'
import { getPost } from '../content/blog/registry'

const DATE_LOCALE = { en: 'en-AU', pt: 'pt-BR', es: 'es-ES' }

function formatDate(iso, locale) {
  return new Intl.DateTimeFormat(DATE_LOCALE[locale] ?? 'en-AU', { dateStyle: 'long' }).format(new Date(iso))
}

const BACK_LABEL = { en: 'Back to blog', pt: 'Voltar pro blog', es: 'Volver al blog' }
const MIN_LABEL = { en: 'min read', pt: 'min de leitura', es: 'min de lectura' }

export default function BlogPostPage() {
  const { slug } = useParams()
  const { locale } = useLocale()
  const post = getPost(slug)

  // Only reachable for slugs registered in content/blog/registry.js — every
  // real link in the app (index cards, sitemap, prerender routes) is
  // generated from that same registry, so this only guards a typo'd URL.
  if (!post) return null

  const content = post[locale] ?? post.en

  const alternates = [
    { lang: 'en', path: blogPostPath('en', post.slug) },
    { lang: 'pt', path: blogPostPath('pt', post.slug) },
    { lang: 'es', path: blogPostPath('es', post.slug) },
    { lang: 'x-default', path: blogPostPath('en', post.slug) },
  ]

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: content.title,
    description: content.description,
    datePublished: post.publishedAt,
    author: { '@type': 'Organization', name: 'HeyFlat' },
    publisher: {
      '@type': 'Organization',
      name: 'HeyFlat',
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo-purple.svg` },
    },
    mainEntityOfPage: `${SITE_URL}${blogPostPath(locale, post.slug)}`,
  }

  return (
    <>
      <Seo
        title={content.title}
        description={content.description}
        path={blogPostPath(locale, post.slug)}
        alternates={alternates}
      />
      <article className="mx-auto max-w-2xl px-4 py-16 md:px-8 md:py-24">
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>

        <a href={blogIndexPath(locale)} className="text-sm font-medium text-brand-600 hover:underline">
          ← {BACK_LABEL[locale]}
        </a>

        <Reveal>
          <p className="mt-6 text-xs font-medium uppercase tracking-wide text-gray-400">
            {formatDate(post.publishedAt, locale)} · {post.readingMinutes} {MIN_LABEL[locale]}
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">{content.title}</h1>
        </Reveal>

        <div className="mt-10 space-y-10">
          {content.sections.map((section, index) => (
            <Reveal key={section.heading} delay={Math.min(index * 0.04, 0.24)} y={16}>
              <section>
                <h2 className="text-xl font-bold text-gray-900">{section.heading}</h2>
                <div className="mt-3 space-y-3 text-sm leading-relaxed text-gray-600 md:text-base">
                  {section.paragraphs?.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                  {section.list && (
                    <ul className="list-disc space-y-2 pl-5">
                      {section.list.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-16 rounded-2xl bg-brand-600 px-6 py-10 text-center text-white md:px-10">
            <p className="text-xl font-bold">{content.cta.title}</p>
            <p className="mt-2 text-sm text-brand-100">{content.cta.subtitle}</p>
            <a
              href={`${guidePath(locale)}#${post.ctaAnchor}`}
              className="mt-5 inline-block rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-brand-700 shadow-sm hover:bg-brand-50"
            >
              {content.cta.button}
            </a>
          </div>
        </Reveal>
      </article>
    </>
  )
}
