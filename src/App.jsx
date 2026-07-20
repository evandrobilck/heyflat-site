import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import LandingPage from './pages/LandingPage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-svh bg-[#fffdf9]">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/privacidade" element={<PrivacyPage />} />
          <Route path="/termos" element={<TermsPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
