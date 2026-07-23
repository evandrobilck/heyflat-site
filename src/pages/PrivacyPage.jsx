import LegalLayout, { LegalSection } from '../components/LegalLayout'
import Seo from '../components/Seo'

const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL

export default function PrivacyPage() {
  return (
    <>
      <Seo
        title="Privacy Policy — HeyFlat"
        description="See what data HeyFlat collects, what it's used for, and what choices you have over your information."
        path="/privacidade"
      />
      <LegalLayout title="Privacy Policy" updatedAt="July 20, 2026">
      <p className="text-sm leading-relaxed">
        This policy explains what data HeyFlat collects, what it's used for, and what choices you
        have over it. We keep it plain, no legalese — if anything isn't clear, write to us at{' '}
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand-600 hover:underline">
          {CONTACT_EMAIL}
        </a>
        .
      </p>

      <LegalSection id="coleta" title="1. What data we collect">
        <p>We only collect what's needed to make HeyFlat work for you and your house:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Account data: name, email and password (used only for authentication — we never see your password in plain text).</li>
          <li>Optional profile data: photo, phone number and payment information (e.g. PayID) that you enter yourself.</li>
          <li>House data: address, roommates, bills, chores, shopping items and House Vault entries that you and your roommates add.</li>
          <li>Basic technical/session data needed to keep you securely logged in.</li>
          <li>Billing data: once a house subscription is active, payment is processed by a third-party provider (e.g. Stripe) — HeyFlat never stores your card number.</li>
        </ul>
      </LegalSection>

      <LegalSection id="uso" title="2. How we use this data">
        <ul className="list-disc space-y-1 pl-5">
          <li>Making the app work: splitting bills, organizing chores, and showing your house's calendar and reports.</li>
          <li>Authenticating your login and keeping your account secure.</li>
          <li>Sending notifications you've turned on (e.g. a bill or chore reminder on its due date).</li>
          <li>Processing the house subscription charge, when applicable.</li>
          <li>Providing support when you reach out to us.</li>
        </ul>
      </LegalSection>

      <LegalSection id="compartilhamento" title="3. Sharing with third parties">
        <p>
          We don't sell your data. It's only shared with service providers strictly necessary for
          HeyFlat to work — today that's Supabase (database and authentication) and, once a
          subscription is active, a payment processor like Stripe. Each of these partners only
          receives the minimum data needed to provide its service.
        </p>
        <p>
          Within your house, your bills, chores and shopping data are visible to your other
          roommates — it's a shared tool, after all. House Vault information (Wi-Fi, PayID, bank
          details) is likewise visible only to people who live in that house.
        </p>
      </LegalSection>

      <LegalSection id="cookies" title="4. Cookies and local storage">
        <p>
          We only use the browser's local storage (localStorage) needed to keep you logged in
          between visits. We don't use advertising tracking cookies or sell browsing data to third
          parties.
        </p>
      </LegalSection>

      <LegalSection id="seguranca" title="5. Security">
        <p>
          Your data is hosted with encryption in transit and at rest by our database provider.
          Access to your house's data is restricted to you and your roommates — house admins have
          extra permissions (like removing roommates or deleting data), but only within their own
          house.
        </p>
      </LegalSection>

      <LegalSection id="direitos" title="6. Your rights and control over your data">
        <p>You have direct control over most of your data, right in the app:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Edit your profile and payment information at any time.</li>
          <li>Leave a house whenever you want.</li>
          <li>If you're an admin, permanently delete all of a house's data, or delete the house entirely.</li>
        </ul>
        <p>
          For any other request about your data — like exporting your information — write to{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand-600 hover:underline">
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection id="exclusao" title="7. Requesting account deletion">
        <p>
          To request deletion of your HeyFlat account and personal data, email{' '}
          <a href={`mailto:${CONTACT_EMAIL}?subject=Account%20deletion%20request`} className="text-brand-600 hover:underline">
            {CONTACT_EMAIL}
          </a>{' '}
          from the address registered on your account, asking us to delete it. We'll confirm and
          process the request within 30 days.
        </p>
        <p>Once processed:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li><strong>Deleted:</strong> your name, email, password, profile photo, and phone number.</li>
          <li>
            <strong>Retained:</strong> bills, chores, shopping items and other house records you
            created stay visible to your former roommates, since that data is shared and co-owned
            by the whole house — the same way it would if you simply left the house from inside
            the app. If you were the sole member or the house's admin, you can instead delete the
            entire house yourself from the House tab, which removes all of it, including your own
            records.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="mudancas" title="8. Changes to this policy">
        <p>
          If we make a material update to this policy, we'll let you know by email or with a
          notice inside the app before the change takes effect.
        </p>
      </LegalSection>
    </LegalLayout>
    </>
  )
}
