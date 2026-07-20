import Header from './components/Header'
import Hero from './components/Hero'
import PartnersBar from './components/PartnersBar'
import LanguagesStrip from './components/LanguagesStrip'
import FeaturesSection from './components/FeaturesSection'
import PlansSection from './components/PlansSection'
import FaqSection from './components/FaqSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-svh bg-[#fffdf9]">
      <Header />
      <Hero />
      <PartnersBar />
      <LanguagesStrip />
      <FeaturesSection />
      <PlansSection />
      <FaqSection />
      <Footer />
    </div>
  )
}
