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
import { useLocale, localeHome } from '../i18n/LocaleContext'

const ALTERNATES = [
  { lang: 'en', path: localeHome('en') },
  { lang: 'pt', path: localeHome('pt') },
  { lang: 'es', path: localeHome('es') },
  { lang: 'x-default', path: localeHome('en') },
]

export default function LandingPage() {
  const { dict, locale } = useLocale()

  return (
    <>
      <Seo
        title={dict.seo.title}
        description={dict.seo.description}
        path={localeHome(locale)}
        alternates={ALTERNATES}
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
