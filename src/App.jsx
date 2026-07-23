import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LocaleLayout from './components/LocaleLayout'
import LandingPage from './pages/LandingPage'
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
            path="/privacidade"
            element={
              <LocaleLayout locale="pt">
                <PrivacyPage />
              </LocaleLayout>
            }
          />
          <Route
            path="/termos"
            element={
              <LocaleLayout locale="pt">
                <TermsPage />
              </LocaleLayout>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
