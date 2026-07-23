import LegalLayout, { LegalSection } from '../components/LegalLayout'
import Seo from '../components/Seo'

const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL

export default function TermsPage() {
  return (
    <>
      <Seo
        title="Terms of Use — HeyFlat"
        description="HeyFlat's terms of use: how the per-house subscription works, cancellation, and your responsibilities when using the app."
        path="/termos"
      />
      <LegalLayout title="Terms of Use" updatedAt="July 20, 2026">
      <p className="text-sm leading-relaxed">
        By creating an account or using HeyFlat, you agree to these terms. Take your time reading
        them — and if you have a question, just reach out at{' '}
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand-600 hover:underline">
          {CONTACT_EMAIL}
        </a>
        .
      </p>

      <LegalSection id="servico" title="1. What HeyFlat is">
        <p>
          HeyFlat is an organization tool for shared houses: splitting bills, chores, a shopping
          list and a calendar between roommates. HeyFlat calculates and records who owes what to
          whom within the house, but it does not process or intermediate those payments between
          roommates — settling up happens outside the app.
        </p>
      </LegalSection>

      <LegalSection id="conta" title="2. Account, houses and subscription">
        <ul className="list-disc space-y-1 pl-5">
          <li>You need a valid account (with a verified email) to use HeyFlat.</li>
          <li>Each house is managed by whoever created it (or whoever was given the admin role), and is charged one monthly subscription per house — not per roommate.</li>
          <li>Every new subscription starts with a free trial period; you're only charged once that period ends, if you haven't cancelled.</li>
          <li>You can cancel the subscription at any time, directly in the house settings, with no penalty.</li>
        </ul>
      </LegalSection>

      <LegalSection id="uso-aceitavel" title="3. Acceptable use">
        <p>By using HeyFlat, you agree not to:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Use the app for illegal or fraudulent activity.</li>
          <li>Try to access data from a house you're not a member of.</li>
          <li>Try to interfere with the normal operation of the service (e.g. overloading, breaching, or reverse-engineering the system).</li>
        </ul>
      </LegalSection>

      <LegalSection id="dados-da-casa" title="4. Your data and content">
        <p>
          The information you and your roommates enter (bills, chores, Vault items, etc.) remains
          yours. HeyFlat only uses it to operate the service, as described in our{' '}
          <a href="/privacidade" className="text-brand-600 hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection id="cancelamento" title="5. Cancellation and termination">
        <p>
          You can leave a house, delete a house's data, or delete the whole house at any time,
          directly in the app (admin actions are permanent and cannot be undone). HeyFlat may
          suspend or terminate accounts that violate these terms.
        </p>
      </LegalSection>

      <LegalSection id="responsabilidade" title="6. Limitation of liability">
        <p>
          HeyFlat is provided "as is." We do our best to keep bill-splitting calculations and your
          house's data accurate and available, but we don't guarantee uninterrupted operation and
          we're not liable for financial decisions made based on the app's data — the split
          recorded is an agreement between roommates, not a financial transaction we intermediate.
        </p>
      </LegalSection>

      <LegalSection id="alteracoes" title="7. Changes to these terms">
        <p>
          We may update these terms as HeyFlat evolves. Material changes will be announced by
          email or inside the app before they take effect.
        </p>
      </LegalSection>
    </LegalLayout>
    </>
  )
}
