import Hero from '../components/Hero'
import PartnersBar from '../components/PartnersBar'
import LanguagesStrip from '../components/LanguagesStrip'
import FeaturesSection from '../components/FeaturesSection'
import PriceSection from '../components/PriceSection'
import FaqSection from '../components/FaqSection'
import ContactSection from '../components/ContactSection'

export default function LandingPage() {
  return (
    <>
      <Hero />
      <PartnersBar />
      <LanguagesStrip />
      <FeaturesSection />
      <PriceSection />
      <FaqSection />
      <ContactSection />
    </>
  )
}
