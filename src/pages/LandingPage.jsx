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

export default function LandingPage() {
  return (
    <>
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
    </>
  )
}
