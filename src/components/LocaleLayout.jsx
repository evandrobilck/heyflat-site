import { LocaleProvider } from '../i18n/LocaleContext'
import Header from './Header'
import Footer from './Footer'
import ScrollProgress from './ScrollProgress'

export default function LocaleLayout({ locale, children }) {
  return (
    <LocaleProvider locale={locale}>
      <ScrollProgress />
      <Header />
      <main>{children}</main>
      <Footer />
    </LocaleProvider>
  )
}
