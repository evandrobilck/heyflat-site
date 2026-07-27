import dividirContasSemBrigar from './posts/dividir-contas-sem-brigar'

// Newest first. Add a new post file under ./posts and register it here —
// routes (list + /:slug, all 3 locales) and the prerender route list both
// derive from this array, so nothing else needs to change to publish one.
export const POSTS = [dividirContasSemBrigar]

export function getPost(slug) {
  return POSTS.find((post) => post.slug === slug)
}
