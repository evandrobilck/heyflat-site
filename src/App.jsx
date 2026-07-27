import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LocaleLayout from './components/LocaleLayout'
import LandingPage from './pages/LandingPage'
import GuidePage from './pages/GuidePage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'
import BlogIndexPage from './pages/BlogIndexPage'
import BlogPostPage from './pages/BlogPostPage'

// Split out from App so the SSR prerender entry can render these routes
// under a StaticRouter without also pulling in BrowserRouter (which touches
// the browser History API and isn't usable during static generation).
export function AppRoutes() {
  return (
    <div className="min-h-svh bg-[#fffdf9]">
      <Routes>
        <Route
          path="/"
          element={
            <LocaleLayout locale="en">
              <LandingPage />
            </LocaleLayout>
          }
        />
        <Route
          path="/pt"
          element={
            <LocaleLayout locale="pt">
              <LandingPage />
            </LocaleLayout>
          }
        />
        <Route
          path="/es"
          element={
            <LocaleLayout locale="es">
              <LandingPage />
            </LocaleLayout>
          }
        />
        <Route
          path="/guia"
          element={
            <LocaleLayout locale="en">
              <GuidePage />
            </LocaleLayout>
          }
        />
        <Route
          path="/pt/guia"
          element={
            <LocaleLayout locale="pt">
              <GuidePage />
            </LocaleLayout>
          }
        />
        <Route
          path="/es/guia"
          element={
            <LocaleLayout locale="es">
              <GuidePage />
            </LocaleLayout>
          }
        />
        <Route
          path="/blog"
          element={
            <LocaleLayout locale="en">
              <BlogIndexPage />
            </LocaleLayout>
          }
        />
        <Route
          path="/pt/blog"
          element={
            <LocaleLayout locale="pt">
              <BlogIndexPage />
            </LocaleLayout>
          }
        />
        <Route
          path="/es/blog"
          element={
            <LocaleLayout locale="es">
              <BlogIndexPage />
            </LocaleLayout>
          }
        />
        <Route
          path="/blog/:slug"
          element={
            <LocaleLayout locale="en">
              <BlogPostPage />
            </LocaleLayout>
          }
        />
        <Route
          path="/pt/blog/:slug"
          element={
            <LocaleLayout locale="pt">
              <BlogPostPage />
            </LocaleLayout>
          }
        />
        <Route
          path="/es/blog/:slug"
          element={
            <LocaleLayout locale="es">
              <BlogPostPage />
            </LocaleLayout>
          }
        />
        <Route
          path="/privacidade"
          element={
            <LocaleLayout locale="en">
              <PrivacyPage />
            </LocaleLayout>
          }
        />
        <Route
          path="/termos"
          element={
            <LocaleLayout locale="en">
              <TermsPage />
            </LocaleLayout>
          }
        />
      </Routes>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
