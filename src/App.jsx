import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import FeaturesPage from './pages/FeaturesPage'
import PlansPage from './pages/PlansPage'
import ContactPage from './pages/ContactPage'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-svh bg-[#fffdf9]">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recursos" element={<FeaturesPage />} />
          <Route path="/planos" element={<PlansPage />} />
          <Route path="/contato" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
