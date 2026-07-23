import { useEffect } from 'react'

const SITE_URL = 'https://heyflat.com.au'

// Keeps <title>, meta description, canonical and hreflang alternates in
// sync per route. Google's crawler executes JS and reads these, so this
// is enough for search — social-share crawlers use the static tags in
// index.html instead.
export default function Seo({ title, description, path = '/', alternates = [] }) {
  useEffect(() => {
    if (title) document.title = title

    if (description) {
      let meta = document.querySelector('meta[name="description"]')
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute('name', 'description')
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', description)
    }

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', `${SITE_URL}${path}`)

    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => el.remove())
    alternates.forEach(({ lang, path: altPath }) => {
      const link = document.createElement('link')
      link.setAttribute('rel', 'alternate')
      link.setAttribute('hreflang', lang)
      link.setAttribute('href', `${SITE_URL}${altPath}`)
      document.head.appendChild(link)
    })
  }, [title, description, path, alternates])

  return null
}
