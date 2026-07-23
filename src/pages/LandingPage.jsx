import Seo from '../components/Seo'
import Hero from '../components/Hero'
import ProblemSection from '../components/ProblemSection'
import LanguagesStrip from '../components/LanguagesStrip'
import FeaturesSection from '../components/FeaturesSection'
import RoommateOfMonthSection from '../components/RoommateOfMonthSection'
import HowItWorksSection from '../components/HowItWorksSection'
import ComparisonSection from '../components/ComparisonSection'
import PriceSection from '../components/PriceSection'
import FaqSection from '../components/FaqSection'
import FinalCtaSection from '../components/FinalCtaSection'
import ContactSection from '../components/ContactSection'
import StickyMobileCta from '../components/StickyMobileCta'

export default function LandingPage() {
  return (
    <>
      <Seo
        title="HeyFlat — Sua casa compartilhada, organizada"
        description="Divida contas, organize tarefas e cuide da sua casa compartilhada num app só. AU$15/mês por casa, moradores ilimitados. Grátis por 30 dias."
        path="/"
      />
      <div className="pb-20 md:pb-0">
        <Hero />
        <ProblemSection />
        <LanguagesStrip />
        <FeaturesSection />
        <RoommateOfMonthSection />
        <HowItWorksSection />
        <ComparisonSection />
        <PriceSection />
        <FaqSection />
        <FinalCtaSection />
        <ContactSection />
      </div>
      <StickyMobileCta />
    </>
  )
}
