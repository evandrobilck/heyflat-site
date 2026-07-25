import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LocaleLayout from './components/LocaleLayout'
import LandingPage from './pages/LandingPage'
import GuidePage from './pages/GuidePage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'

export default function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  )
}
