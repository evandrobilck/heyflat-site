import { LocaleProvider } from '../i18n/LocaleContext'
import Header from './Header'
import Footer from './Footer'

export default function LocaleLayout({ locale, children }) {
  return (
    <LocaleProvider locale={locale}>
      <Header />
      {children}
      <Footer />
    </LocaleProvider>
  )
}
