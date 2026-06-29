import type { Metadata } from 'next';

import {
  LegalCallout,
  LegalPageLayout,
  LegalSection,
  LegalSubsection,
  LegalTable,
  type TocEntry,
} from '@/components/legal-page-layout';
import { breadcrumbJsonLd, SITE_URL } from '@/lib/seo';

const EFFECTIVE_DATE = '29 Jun 2026';
const LAST_UPDATED = '29 Jun 2026';
const COMPANY = 'ONION TECH LIMITED';
const ADDRESS = '13 Freeland Park Lytchett House, Wareham Road, Poole, England, BH16 6FA';
const CONTACT = 'hi@zeevpn.com';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How ZeeVPN handles your data: what we collect, why, who we share with, your rights under GDPR/CCPA, and how to contact us.',
  alternates: { canonical: '/privacy' },
  openGraph: {
    title: 'Privacy Policy — ZeeVPN',
    description: 'How ZeeVPN handles your data and respects your privacy.',
    url: `${SITE_URL}/privacy`,
    type: 'article',
  },
  robots: { index: true, follow: true },
};

const toc: TocEntry[] = [
  { number: '01', label: 'Who we are', id: 'who-we-are' },
  { number: '02', label: 'Scope', id: 'scope' },
  { number: '03', label: 'Information we collect', id: 'information' },
  { number: '04', label: 'How we use information', id: 'use' },
  { number: '05', label: 'Legal bases (EU/UK)', id: 'legal-bases' },
  { number: '06', label: 'Sharing & disclosure', id: 'sharing' },
  { number: '07', label: 'Data retention', id: 'retention' },
  { number: '08', label: 'Third-party services', id: 'third-parties' },
  { number: '09', label: 'International transfers', id: 'transfers' },
  { number: '10', label: 'Your rights', id: 'rights' },
  { number: '11', label: 'Children’s privacy', id: 'children' },
  { number: '12', label: 'Security', id: 'security' },
  { number: '13', label: 'Cookies', id: 'cookies' },
  { number: '14', label: 'Changes to this Policy', id: 'changes' },
  { number: '15', label: 'Contact', id: 'contact' },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: 'Home', path: '/' },
              { name: 'Privacy Policy', path: '/privacy' },
            ])
          ),
        }}
      />
      <LegalPageLayout
        eyebrow="Legal"
        title="Privacy Policy"
        effectiveDate={EFFECTIVE_DATE}
        lastUpdated={LAST_UPDATED}
        toc={toc}
        intro={
          <p>
            This Privacy Policy explains how <strong>{COMPANY}</strong>{' '}
            (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), operator
            of the <strong>ZeeVPN</strong> Android application (the
            &ldquo;App&rdquo;) and related websites (collectively, the
            &ldquo;Service&rdquo;), collects, uses, shares, and protects
            information about you.
          </p>
        }
      >
        <LegalCallout>
          <p className="text-foreground/95">
            <strong>VPN service disclosure.</strong> ZeeVPN is a virtual
            private network (VPN) app, and providing a VPN is its{' '}
            <strong>core functionality</strong>. To deliver it, the App uses
            Android&apos;s{' '}
            <code className="rounded bg-white/[0.04] px-1.5 py-0.5 text-[0.85em] text-foreground/85">VpnService</code>{' '}
            API to establish a secure, device-level tunnel between your device
            and a remote server we operate or contract for. While you are
            connected, your device&apos;s internet traffic is routed through
            this tunnel and{' '}
            <strong>encrypted from your device to the VPN tunnel endpoint</strong>.
          </p>
          <p className="mt-3 text-muted-foreground">
            ZeeVPN does <strong>not</strong> redirect or manipulate traffic
            from other apps on your device for monetization; does{' '}
            <strong>not</strong> inject, modify, or insert advertising into the
            traffic carried through the tunnel; and does <strong>not</strong>{' '}
            route, share, or resell your device&apos;s bandwidth to third
            parties. We do not collect personal or sensitive user data without
            the prominent disclosure and consent described in this Policy.
          </p>
        </LegalCallout>

        <LegalSection number="01" id="who-we-are" title="Who we are">
          <p>
            We are <strong>{COMPANY}</strong>, registered at{' '}
            <strong>{ADDRESS}</strong>. For the purposes of the EU/UK General
            Data Protection Regulation (GDPR), we are the{' '}
            <strong>data controller</strong> of personal data processed through
            the Service, except where we act as a processor on behalf of a third
            party (in which case the third party&apos;s policy governs).
          </p>
        </LegalSection>

        <LegalSection number="02" id="scope" title="Scope">
          <p>This Policy applies to information processed in connection with:</p>
          <ul>
            <li>
              the ZeeVPN Android application (<code className="rounded bg-white/[0.04] px-1.5 py-0.5 text-[0.85em] text-foreground/85">com.zeevpn.secure.proxy</code>);
            </li>
            <li>
              the ZeeVPN website at <strong>zeevpn.com</strong> and any
              subdomains we operate;
            </li>
            <li>support communications you send to us.</li>
          </ul>
          <p>
            It does <strong>not</strong> cover websites, apps, or services that
            you access <em>through</em> the VPN, nor third-party services we
            integrate (we link to their policies in Section 08).
          </p>
        </LegalSection>

        <LegalSection number="03" id="information" title="Information we collect">
          <LegalSubsection title="3.1 Information you provide">
            <ul>
              <li>
                <strong>Support communications.</strong> If you email us, the
                content of your message and your email address.
              </li>
              <li>
                <strong>Payment information</strong> (if you buy a Premium
                subscription). Payments are processed by{' '}
                <strong>Google Play Billing</strong>; we receive a purchase
                token and entitlement status, but{' '}
                <strong>we do not receive your card or bank details</strong>.
              </li>
            </ul>
          </LegalSubsection>

          <LegalSubsection title="3.2 Information collected automatically by the App">
            <ul>
              <li>
                <strong>Device-bound identifier.</strong> When you continue as a
                guest, we generate an identifier tied to your device install.
                Used to deliver configuration, enforce free-tier limits, and
                provide support. Not your name, email, or government ID.
              </li>
              <li>
                <strong>Approximate geographic region.</strong> On launch
                (before any VPN tunnel is established) the App queries a public
                IP-geolocation service to display your origin location on the
                in-app map. Used client-side only.
              </li>
              <li>
                <strong>App configuration and preferences.</strong> Selected
                server, auto-connect, kill-switch, per-app routing, language,
                onboarding completion — stored locally on your device.
              </li>
              <li>
                <strong>Free-tier balance.</strong> Daily allowance, watches
                today, banked time, boost / pro-pass expirations — stored
                locally on your device only.
              </li>
              <li>
                <strong>VPN session events.</strong> Connect / disconnect
                events, selected server&apos;s country and city, time-to-connect,
                session duration, and disconnect reason, sent to Firebase
                Analytics.
              </li>
              <li>
                <strong>Ad events.</strong> Whether an interstitial / rewarded /
                app-open ad was shown, dismissed, or earned a reward, and the
                placement (e.g. &ldquo;post_disconnect&rdquo;).
              </li>
              <li>
                <strong>In-app update events.</strong> Update available /
                started / cancelled / failed / completed, and the version code
                offered.
              </li>
              <li>
                <strong>Diagnostic information.</strong> Crash reports, error
                codes, app version, OS version, device model, language, and
                screen views.
              </li>
            </ul>
          </LegalSubsection>

          <LegalSubsection title="3.3 Information collected by third parties through the App">
            <p>
              When ads are enabled, <strong>Google AdMob</strong> and its
              measurement partners may collect:
            </p>
            <ul>
              <li>your <strong>advertising ID</strong> (Android&apos;s resettable AAID);</li>
              <li>your <strong>IP address</strong> (visible to Google when ads are requested);</li>
              <li>coarse device and locale information;</li>
              <li>ad-interaction events (impressions, clicks).</li>
            </ul>
            <p>
              This collection is governed by Google&apos;s policies and the
              consent you provide through the User Messaging Platform (UMP)
              prompt on first launch. You can reset your advertising ID and
              limit ad personalization in your device settings
              (<strong>Settings → Privacy → Ads</strong>).
            </p>
          </LegalSubsection>

          <LegalSubsection title="3.4 What we do NOT collect">
            <ul>
              <li>
                We do <strong>not</strong> retain logs of the websites you
                visit, DNS queries you make, or the contents of any traffic
                carried over the VPN tunnel.
              </li>
              <li>
                We do <strong>not</strong> sell or rent personal information to
                third parties.
              </li>
              <li>
                We do <strong>not</strong> scan, monitor, or share the contents
                of your VPN traffic for advertising purposes.
              </li>
              <li>
                We do <strong>not</strong> redirect, intercept, or manipulate
                traffic from other apps on your device for monetization, and we
                do <strong>not</strong> inject advertising into your VPN
                traffic.
              </li>
              <li>
                We do <strong>not</strong> route, share, or resell your
                device&apos;s bandwidth to other users or third parties.
              </li>
            </ul>
          </LegalSubsection>
        </LegalSection>

        <LegalSection number="04" id="use" title="How we use information">
          <p>We use the information described above to:</p>
          <ul>
            <li>
              <strong>Provide the Service</strong> — establish VPN tunnels,
              deliver server configurations, enforce the free-tier daily
              allowance and ad caps, deliver in-app updates.
            </li>
            <li>
              <strong>Measure and improve the App</strong> — understand which
              features are used, diagnose crashes, prioritize improvements.
            </li>
            <li>
              <strong>Serve and measure ads</strong> (only when ads are enabled
              and you have consented where required).
            </li>
            <li>
              <strong>Communicate with you</strong> — respond to support
              requests and notify you of important changes.
            </li>
            <li>
              <strong>Prevent abuse and ensure security</strong> — detect
              fraudulent activity, abuse of the free tier, unauthorized access.
            </li>
            <li>
              <strong>Comply with law</strong> — fulfill our legal obligations
              and enforce our Terms.
            </li>
          </ul>
        </LegalSection>

        <LegalSection
          number="05"
          id="legal-bases"
          title="Legal bases for processing (EU/UK users)"
        >
          <p>
            For users in the EU, EEA, UK, and Switzerland, we rely on the
            following lawful bases under GDPR Article 6:
          </p>
          <LegalTable
            head={['Activity', 'Legal basis']}
            rows={[
              [
                'Providing the VPN service (tunnel, server config, allowance)',
                <><strong>Performance of a contract</strong> (Art. 6(1)(b))</>,
              ],
              [
                'Premium subscription billing',
                <><strong>Performance of a contract</strong> (Art. 6(1)(b))</>,
              ],
              [
                'Crash reporting, security, abuse prevention',
                <><strong>Legitimate interests</strong> (Art. 6(1)(f))</>,
              ],
              [
                'Product analytics (Firebase Analytics)',
                <><strong>Consent</strong> (Art. 6(1)(a)) where required</>,
              ],
              [
                'Personalized advertising (AdMob)',
                <><strong>Consent</strong> (Art. 6(1)(a)) collected via UMP</>,
              ],
              [
                'Non-personalized advertising',
                <><strong>Legitimate interests</strong> (Art. 6(1)(f))</>,
              ],
              [
                'Responding to legal requests',
                <><strong>Legal obligation</strong> (Art. 6(1)(c))</>,
              ],
            ]}
          />
          <p className="mt-6">
            You can withdraw your consent at any time via the in-app{' '}
            <strong>Settings → Privacy Options</strong> entry (where available)
            or by adjusting your device-level ad settings.
          </p>
        </LegalSection>

        <LegalSection number="06" id="sharing" title="Sharing and disclosure">
          <p>We share information only in the limited circumstances below:</p>
          <ul>
            <li>
              <strong>Service providers</strong> (processors acting on our
              behalf): cloud hosting, error monitoring, content delivery,
              customer support tooling.
            </li>
            <li>
              <strong>Google LLC</strong> (Firebase Analytics, Firebase Remote
              Config, AdMob, Google Play Services, Google Play Billing, Play
              In-App Updates) — see Section 08.
            </li>
            <li>
              <strong>Legal authorities</strong>, when legally compelled (e.g.
              court order, subpoena) or to prevent fraud, security, or
              technical issues. We review each request and challenge those that
              are overbroad or unlawful.
            </li>
            <li>
              <strong>Successors in interest</strong>, in the event of a
              merger, acquisition, financing, or sale of assets, subject to
              standard confidentiality protections.
            </li>
          </ul>
          <p className="mt-6">
            We do <strong>not</strong> sell personal information for monetary
            consideration. Depending on your jurisdiction (e.g. California&apos;s
            CCPA/CPRA), some advertising activity may constitute &ldquo;sharing&rdquo;
            for cross-context behavioral advertising — when so, you can opt out
            via the in-app privacy options.
          </p>
        </LegalSection>

        <LegalSection number="07" id="retention" title="Data retention">
          <LegalTable
            head={['Category', 'Retention']}
            rows={[
              ['Local app state (preferences, free-time balance)', 'On-device until you uninstall or clear app data'],
              ['Guest device identifier', <>Until you uninstall, or up to <strong>24 months</strong> of inactivity</>],
              ['Analytics events (Firebase)', <>Per Firebase default retention (currently up to <strong>14 months</strong>)</>],
              ['Crash reports', <>Up to <strong>90 days</strong></>],
              ['Support correspondence', <>Up to <strong>24 months</strong> after the case is closed</>],
              ['Billing records', <>As required by applicable tax and accounting law (typically <strong>7 years</strong>)</>],
            ]}
          />
          <p className="mt-6">
            Where we have no continuing lawful basis to keep your data, we
            delete or anonymize it.
          </p>
        </LegalSection>

        <LegalSection number="08" id="third-parties" title="Third-party services">
          <p>
            The App integrates the following third-party services. Each operates
            under its own privacy policy:
          </p>
          <ul>
            <li>
              <strong>Google Play Services &amp; Google Play Billing</strong> —
              distribution, in-app purchases.{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>
            </li>
            <li>
              <strong>Google AdMob</strong> — advertising.{' '}
              <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">policies.google.com/technologies/ads</a>
            </li>
            <li>
              <strong>Google User Messaging Platform (UMP)</strong> — consent capture.{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>
            </li>
            <li>
              <strong>Firebase (Google LLC)</strong> — Analytics and Remote Config.{' '}
              <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">firebase.google.com/support/privacy</a>
            </li>
            <li>
              <strong>Google Play Core / In-App Updates</strong> — over-the-air updates.
            </li>
          </ul>
          <p className="mt-4">
            These services may process your data in jurisdictions outside your
            own, including the United States. They are responsible for their
            own compliance with applicable data-protection law.
          </p>
        </LegalSection>

        <LegalSection number="09" id="transfers" title="International data transfers">
          <p>
            We are based in <strong>the United Kingdom</strong>. The
            third-party services listed in Section 08 process data in the
            United States and other countries. When personal data of
            EU/UK/EEA/Swiss users is transferred outside that region, we and
            our providers rely on appropriate safeguards such as the{' '}
            <strong>EU Standard Contractual Clauses (SCCs)</strong>, the{' '}
            <strong>UK International Data Transfer Addendum</strong>, and
            adequacy decisions where available.
          </p>
        </LegalSection>

        <LegalSection number="10" id="rights" title="Your rights">
          <p>
            Depending on where you live, you have the following rights regarding
            your personal data:
          </p>
          <ul>
            <li><strong>Access</strong> — request a copy of the personal data we hold about you.</li>
            <li><strong>Correction</strong> — ask us to correct inaccurate or incomplete data.</li>
            <li><strong>Deletion</strong> — ask us to delete your data.</li>
            <li><strong>Restriction</strong> — ask us to restrict processing in certain cases.</li>
            <li><strong>Portability</strong> — receive your data in a portable format.</li>
            <li><strong>Objection</strong> — object to processing based on our legitimate interests.</li>
            <li><strong>Withdraw consent</strong> — where processing is based on consent.</li>
            <li>
              <strong>Opt out of sale/sharing</strong> for advertising
              (California, Colorado, Connecticut, Virginia and other US-state
              residents).
            </li>
            <li>
              <strong>Lodge a complaint</strong> with your local
              data-protection authority.
            </li>
          </ul>
          <p className="mt-4">
            To exercise these rights, email us at{' '}
            <a href={`mailto:${CONTACT}`}>{CONTACT}</a>. We will respond within
            the timeframes required by applicable law (typically 30 days under
            GDPR, 45 days under CCPA).
          </p>
        </LegalSection>

        <LegalSection number="11" id="children" title="Children's privacy">
          <p>
            ZeeVPN is intended for users <strong>18 years of age or older</strong>.
            We do not knowingly collect personal data from anyone under 18. If
            you believe a person under 18 has provided us with personal data,
            contact us at <a href={`mailto:${CONTACT}`}>{CONTACT}</a> and we
            will delete it.
          </p>
        </LegalSection>

        <LegalSection number="12" id="security" title="Security">
          <p>
            We use industry-standard technical and organizational measures to
            protect personal data, including encryption in transit (TLS),
            encryption of traffic from your device to the VPN tunnel endpoint,
            access controls, and audit logging. No
            internet service is 100% secure; we cannot guarantee absolute
            security and you use the Service at your own risk.
          </p>
          <p className="mt-4">
            If we become aware of a personal-data breach that poses a risk to
            your rights, we will notify the relevant supervisory authority
            within the timeframe required by law (72 hours under GDPR) and,
            where required, notify you directly.
          </p>
        </LegalSection>

        <LegalSection number="13" id="cookies" title="Cookies and similar technologies">
          <p>
            Our <strong>App</strong> does not use HTTP cookies. The App uses
            local storage (Android SharedPreferences) and local databases to
            remember your preferences and authentication state.
          </p>
          <p className="mt-4">
            Our <strong>website</strong> at <strong>zeevpn.com</strong> may use
            cookies and similar technologies for essential site functionality
            and aggregate analytics. Where required, we present a cookie banner
            and process non-essential cookies only after you consent.
          </p>
        </LegalSection>

        <LegalSection number="14" id="changes" title="Changes to this Policy">
          <p>
            We may update this Policy from time to time. When we make material
            changes we will update the &ldquo;Last updated&rdquo; date above
            and, where appropriate, provide additional notice (e.g., in-app
            notification or email to subscribers). Your continued use of the
            Service after the changes take effect constitutes acceptance of the
            revised Policy.
          </p>
        </LegalSection>

        <LegalSection number="15" id="contact" title="Contact">
          <LegalCallout>
            <p className="text-foreground/95">
              <strong>{COMPANY}</strong>
            </p>
            <p className="mt-1 text-muted-foreground">
              <strong>Email:</strong>{' '}
              <a href={`mailto:${CONTACT}`}>{CONTACT}</a>
              <br />
              <strong>Address:</strong> {ADDRESS}
            </p>
          </LegalCallout>
          <p className="mt-6">
            If you are in the EU/UK and feel we have not adequately addressed
            your concerns, you have the right to contact your national
            supervisory authority. A list of EU supervisory authorities is
            available at{' '}
            <a
              href="https://edpb.europa.eu/about-edpb/about-edpb/members_en"
              target="_blank"
              rel="noopener noreferrer"
            >
              edpb.europa.eu/about-edpb/about-edpb/members_en
            </a>
            .
          </p>
        </LegalSection>
      </LegalPageLayout>
    </>
  );
}
