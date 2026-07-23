import { useEffect } from 'react'

const SITE_URL = 'https://heyflat.com.au'

// Keeps <title>, meta description and canonical in sync per route.
// Google's crawler executes JS and reads these, so this is enough for
// search — social-share crawlers use the static tags in index.html instead.
export default function Seo({ title, description, path = '/' }) {
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
  }, [title, description, path])

  return null
}
