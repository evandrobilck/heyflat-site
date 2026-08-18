import { ShieldCheck, AppleLogo, GooglePlayLogo } from '@phosphor-icons/react'
import Reveal from './Reveal'
import StoreBadge from './StoreBadge'
import { useLocale } from '../i18n/LocaleContext'

export default function ProofStrip() {
  const { dict } = useLocale()
  const t = dict.hero

  return (
    <Reveal as="section" y={12} className="border-y border-zinc-100 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-4 md:flex-row md:px-8">
        <p className="flex items-center gap-2 text-sm text-zinc-500">
          <ShieldCheck weight="fill" className="h-4 w-4 shrink-0 text-brand-600" />
          {t.finePrint}
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <StoreBadge
            theme="light"
            icon={AppleLogo}
            sublabel={dict.footer.storeBadges.comingSoon}
            label={dict.footer.storeBadges.appStore}
          />
          <StoreBadge
            theme="light"
            icon={GooglePlayLogo}
            sublabel={dict.footer.storeBadges.getIt}
            label={dict.footer.storeBadges.googlePlay}
            href="https://play.google.com/store/apps/details?id=au.com.heyflat"
          />
        </div>
      </div>
    </Reveal>
  )
}
