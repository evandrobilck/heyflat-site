import dividirContasSemBrigar from './posts/dividir-contas-sem-brigar'
import quantoCustaMorarEmShareHouse from './posts/quanto-custa-morar-em-share-house'
import moradorSaiNoMeioDoMes from './posts/morador-sai-no-meio-do-mes'
import escalaDeLimpezaQueFunciona from './posts/escala-de-limpeza-que-funciona'
import listaDeComprasCompartilhada from './posts/lista-de-compras-compartilhada'
import checklistPrimeiraRepublica from './posts/checklist-primeira-republica'
import inspecaoDeSaidaSemPerderOBond from './posts/inspecao-de-saida-sem-perder-o-bond'
import planilhaVsAppDividirContas from './posts/planilha-vs-app-dividir-contas'
import melhoresAppsCasaCompartilhada2026 from './posts/melhores-apps-casa-compartilhada-2026'

// Ordered to match the original content calendar's funnel logic (bill
// splitting fundamentals first, comparison/decision content last), not
// strictly by publishedAt — add a new post file under ./posts and register
// it here. Routes (list + /:slug, all 3 locales), the prerender route
// list, and the generated sitemap.xml all derive from this array, so
// nothing else needs to change to publish one.
export const POSTS = [
  dividirContasSemBrigar,
  quantoCustaMorarEmShareHouse,
  moradorSaiNoMeioDoMes,
  escalaDeLimpezaQueFunciona,
  listaDeComprasCompartilhada,
  checklistPrimeiraRepublica,
  inspecaoDeSaidaSemPerderOBond,
  planilhaVsAppDividirContas,
  melhoresAppsCasaCompartilhada2026,
]

export function getPost(slug) {
  return POSTS.find((post) => post.slug === slug)
}
