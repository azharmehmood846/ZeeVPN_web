import type { Metadata } from 'next';

import {
  LegalCallout,
  LegalPageLayout,
  LegalSection,
  type TocEntry,
} from '@/components/legal-page-layout';
import { breadcrumbJsonLd, SITE_URL } from '@/lib/seo';

const EFFECTIVE_DATE = '01 Jun 2026';
const LAST_UPDATED = '01 Jun 2026';
const COMPANY = 'ONION TECH LIMITED';
const ADDRESS = '13 Freeland Park Lytchett House, Wareham Road, Poole, England, BH16 6FA';
const CONTACT = 'hi@zeevpn.com';

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description:
    'The terms that govern your use of ZeeVPN: eligibility, acceptable use, free tier, Premium subscriptions, disclaimers, and limitation of liability.',
  alternates: { canonical: '/terms' },
  openGraph: {
    title: 'Terms and Conditions — ZeeVPN',
    description: 'The terms that govern your use of the ZeeVPN service.',
    url: `${SITE_URL}/terms`,
    type: 'article',
  },
  robots: { index: true, follow: true },
};

const toc: TocEntry[] = [
  { number: '01', label: 'About the Service', id: 'about' },
  { number: '02', label: 'Eligibility', id: 'eligibility' },
  { number: '03', label: 'Account & guest access', id: 'account' },
  { number: '04', label: 'License to use the App', id: 'license' },
  { number: '05', label: 'Acceptable use', id: 'acceptable-use' },
  { number: '06', label: 'Free tier & rewarded ads', id: 'free-tier' },
  { number: '07', label: 'Premium features', id: 'premium' },
  { number: '08', label: 'Connection & anonymity', id: 'anonymity' },
  { number: '09', label: 'Third-party services', id: 'third-parties' },
  { number: '10', label: 'Privacy', id: 'privacy' },
  { number: '11', label: 'Intellectual property', id: 'ip' },
  { number: '12', label: 'Service availability', id: 'availability' },
  { number: '13', label: 'Disclaimers', id: 'disclaimers' },
  { number: '14', label: 'Limitation of liability', id: 'liability' },
  { number: '15', label: 'Indemnification', id: 'indemnification' },
  { number: '16', label: 'Termination', id: 'termination' },
  { number: '17', label: 'Changes to these Terms', id: 'changes' },
  { number: '18', label: 'Governing law', id: 'governing-law' },
  { number: '19', label: 'Severability', id: 'severability' },
  { number: '20', label: 'Contact', id: 'contact' },
];

export default function TermsAndConditionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: 'Home', path: '/' },
              { name: 'Terms and Conditions', path: '/terms' },
            ])
          ),
        }}
      />
      <LegalPageLayout
        eyebrow="Legal"
        title="Terms and Conditions"
        effectiveDate={EFFECTIVE_DATE}
        lastUpdated={LAST_UPDATED}
        toc={toc}
        intro={
          <>
            <p>
              Welcome to <strong>ZeeVPN</strong> (the &ldquo;App&rdquo;,
              &ldquo;Service&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or
              &ldquo;our&rdquo;), operated by <strong>{COMPANY}</strong>,
              registered at <strong>{ADDRESS}</strong>. These Terms and
              Conditions form a binding agreement between you and us governing
              your use of the ZeeVPN Android application and any related
              websites, services, and content.
            </p>
            <p className="mt-3">
              <strong>
                By downloading, installing, or using the Service you agree to
                these Terms.
              </strong>{' '}
              If you do not agree, do not install or use the Service.
            </p>
          </>
        }
      >
        <LegalSection number="01" id="about" title="About the Service">
          <p>
            ZeeVPN is a virtual private network application that routes your
            internet traffic through encrypted tunnels to servers we operate or
            contract for. The Service is provided &ldquo;as is&rdquo; and may
            include free and paid features, advertising, and reward mechanics
            described below.
          </p>
        </LegalSection>

        <LegalSection number="02" id="eligibility" title="Eligibility">
          <p>
            You must be at least <strong>18 years old</strong> to use the
            Service. By using the App you represent that you are 18 or older
            and have the legal capacity to enter into these Terms. ZeeVPN is
            not directed to, designed for, or marketed to anyone under 18, and
            we do not knowingly accept users under 18.
          </p>
          <p className="mt-4">
            You must not use the Service in any jurisdiction where the use of
            VPN software is prohibited, restricted, or requires a license you
            do not hold. You are solely responsible for ensuring your use of
            the Service complies with the laws applicable to you.
          </p>
        </LegalSection>

        <LegalSection number="03" id="account" title="Account and guest access">
          <p>
            The Service may be used without creating a named account
            (&ldquo;Continue as Guest&rdquo;). When you continue as a guest we
            generate a device-bound identifier so we can serve configuration,
            enforce abuse limits, and provide support. You are responsible for
            safeguarding the device on which the App is installed and for any
            activity that occurs through it.
          </p>
        </LegalSection>

        <LegalSection number="04" id="license" title="License to use the App">
          <p>
            Subject to your compliance with these Terms, we grant you a
            personal, limited, non-exclusive, non-transferable,
            non-sublicensable, revocable license to download and use the App on
            Android devices you own or control, solely for your personal,
            non-commercial use.
          </p>
          <p className="mt-4">You may not, and may not allow any third party to:</p>
          <ul>
            <li>
              copy, modify, reverse-engineer, decompile, or disassemble the
              App, except to the extent expressly permitted by applicable law;
            </li>
            <li>
              rent, lease, sell, sublicense, or otherwise transfer the App or
              any rights in it;
            </li>
            <li>
              circumvent or attempt to circumvent any usage limits, frequency
              caps, time allowances, or ad-related controls;
            </li>
            <li>
              use the App to build a competing product or to scrape, harvest,
              or otherwise collect data about our infrastructure;
            </li>
            <li>remove or alter any proprietary notices contained in the App.</li>
          </ul>
        </LegalSection>

        <LegalSection number="05" id="acceptable-use" title="Acceptable use">
          <p>
            You agree <strong>not</strong> to use the Service to:
          </p>
          <ul>
            <li>
              engage in any unlawful activity, or any activity that violates the
              rights of others;
            </li>
            <li>
              transmit, distribute, or store material that is illegal,
              infringing, defamatory, obscene, or harmful;
            </li>
            <li>
              attempt to gain unauthorized access to any system, account, or
              data, including ours;
            </li>
            <li>
              engage in port scanning, network probing, spam, phishing,
              distribution of malware, denial-of-service activity, fraud, or
              circumvention of geo-restrictions in violation of a third
              party&apos;s terms;
            </li>
            <li>
              distribute child sexual abuse material or any content sexualizing
              minors;
            </li>
            <li>
              launch, support, or coordinate attacks against any person,
              system, or network;
            </li>
            <li>
              evade content-licensing controls, sanctions, or export controls
              applicable to you.
            </li>
          </ul>
          <p className="mt-4">
            We reserve the right to investigate suspected violations and to
            suspend or terminate access at our discretion. Where required, we
            may cooperate with law-enforcement requests in accordance with
            applicable law and our Privacy Policy.
          </p>
        </LegalSection>

        <LegalSection
          number="06"
          id="free-tier"
          title="Free tier, time allowance, and rewarded ads"
        >
          <p>
            The free tier of the Service provides a limited amount of
            connection time per day (the &ldquo;Daily Allowance&rdquo;). The
            default Daily Allowance, daily ad-watch cap, time-bank cap, and
            reward amounts are configured in the App and may be changed by us
            at any time, with or without notice, including via remote
            configuration.
          </p>
          <p className="mt-4">
            You may earn additional connection time by viewing rewarded
            advertisements (&ldquo;Rewarded Ads&rdquo;). Time earned through
            Rewarded Ads is subject to the caps configured in the App and has
            no cash value, is non-transferable, and cannot be exchanged for any
            other consideration.
          </p>
          <p className="mt-4">
            We do not guarantee the availability, fill rate, type, or content
            of any advertisement. Ads are served by third-party networks (see
            Section 09) and are subject to those networks&apos; policies in
            addition to these Terms.
          </p>
        </LegalSection>

        <LegalSection number="07" id="premium" title="Premium / paid features">
          <p>
            If we offer a paid tier (&ldquo;Premium&rdquo;) at the time you use
            the Service, additional terms apply to your purchase:
          </p>
          <ul>
            <li>
              Purchases are processed by <strong>Google Play Billing</strong>{' '}
              under Google Play&apos;s terms; you must have a valid Google Play
              account in good standing.
            </li>
            <li>
              Subscription fees are billed in advance on a recurring basis at
              the interval shown at purchase, until cancelled.
            </li>
            <li>
              You may cancel a subscription at any time through Google Play;
              cancellation takes effect at the end of the current billing
              period.
            </li>
            <li>
              Except where required by law, payments are non-refundable.
              Refunds, if any, are governed by Google Play&apos;s refund
              policy.
            </li>
            <li>
              Premium features, pricing, regional availability, and benefits
              may change. We will give reasonable notice of material adverse
              changes.
            </li>
            <li>
              Use of Premium does not exempt you from these Terms (including
              Section 05 — Acceptable Use).
            </li>
          </ul>
        </LegalSection>

        <LegalSection
          number="08"
          id="anonymity"
          title="Connection, logging, and no guarantee of anonymity"
        >
          <p>
            The Service routes your traffic through tunnels but{' '}
            <strong>does not make you anonymous</strong>. Your activity may
            still be visible to the websites and services you connect to, to
            your ISP (in the form of encrypted VPN traffic), and to any party
            with lawful access to the endpoints you communicate with. The scope
            and retention of operational logging is described in our Privacy
            Policy.
          </p>
          <LegalCallout>
            <strong>You are responsible for the activity conducted through
            your VPN session.</strong> Using the Service does not grant you any
            right to violate the law or any third party&apos;s rights.
          </LegalCallout>
        </LegalSection>

        <LegalSection number="09" id="third-parties" title="Third-party services">
          <p>
            The Service integrates the following third-party services, each
            governed by its own terms and privacy policy:
          </p>
          <ul>
            <li><strong>Google Play Services / Google Play Billing</strong> — distribution and payments.</li>
            <li><strong>Google AdMob</strong> — advertising delivery and measurement.</li>
            <li><strong>Google User Messaging Platform (UMP)</strong> — consent collection for ads.</li>
            <li><strong>Firebase Analytics and Firebase Remote Config</strong> — usage analytics and feature configuration.</li>
            <li><strong>In-App Updates (Google Play Core)</strong> — delivery of app updates.</li>
          </ul>
          <p className="mt-4">
            We are not responsible for the practices of these third parties.
            Your use of those services through the App is also subject to
            their respective terms.
          </p>
        </LegalSection>

        <LegalSection number="10" id="privacy" title="Privacy">
          <p>
            Your use of the Service is also governed by our{' '}
            <a href="/privacy">Privacy Policy</a>. By using the Service you
            acknowledge that you have read and understood the Privacy Policy.
          </p>
        </LegalSection>

        <LegalSection number="11" id="ip" title="Intellectual property">
          <p>
            The App and all of its content (excluding open-source components
            governed by their own licenses) are owned by us or our licensors
            and are protected by copyright, trademark, and other
            intellectual-property laws. Nothing in these Terms transfers any
            ownership rights to you. The ZeeVPN name, logo, and any related
            marks are our trademarks. You may not use them without our prior
            written consent.
          </p>
          <p className="mt-4">
            Open-source components included in the App are distributed under
            their respective licenses; a list of such components and their
            license texts may be made available within the App.
          </p>
        </LegalSection>

        <LegalSection number="12" id="availability" title="Service availability and changes">
          <p>
            We strive to keep the Service operational but do not warrant
            uninterrupted availability. We may, at any time and without
            liability to you:
          </p>
          <ul>
            <li>modify, suspend, or discontinue any feature or the Service as a whole;</li>
            <li>add, remove, or change servers, regions, configurations, and limits;</li>
            <li>
              update the App, including via mandatory updates that require you
              to install the latest version before continuing to use the
              Service.
            </li>
          </ul>
        </LegalSection>

        <LegalSection number="13" id="disclaimers" title="Disclaimer of warranties">
          <p>
            To the maximum extent permitted by applicable law, the Service is
            provided <strong>&ldquo;AS IS&rdquo;</strong> and{' '}
            <strong>&ldquo;AS AVAILABLE&rdquo;</strong> without warranty of any
            kind, whether express, implied, statutory, or otherwise, including
            any warranty of merchantability, fitness for a particular purpose,
            non-infringement, accuracy, uninterrupted service, or freedom from
            defects, viruses, or errors.
          </p>
          <p className="mt-4">
            We do not warrant that the Service will meet your requirements,
            that any defects will be corrected, that the Service will be
            compatible with any particular device or service, or that the
            Service will provide anonymity, security, or privacy against any
            specific threat.
          </p>
        </LegalSection>

        <LegalSection number="14" id="liability" title="Limitation of liability">
          <p>
            To the maximum extent permitted by applicable law, in no event will
            we, our affiliates, officers, employees, agents, or licensors be
            liable for any indirect, incidental, special, consequential,
            exemplary, or punitive damages, or for any loss of profits,
            revenue, data, goodwill, or business opportunity, arising out of or
            in connection with your use of (or inability to use) the Service,
            even if we have been advised of the possibility of such damages.
          </p>
          <p className="mt-4">
            To the maximum extent permitted by law, our aggregate liability for
            any claims arising out of or relating to these Terms or the
            Service is limited to the greater of (a) the amount you paid us
            for the Service in the twelve (12) months preceding the event
            giving rise to the claim, or (b) <strong>USD 50</strong>.
          </p>
          <p className="mt-4">
            Some jurisdictions do not allow certain warranty disclaimers or
            liability limitations; in those jurisdictions, our liability is
            limited to the extent permitted by law.
          </p>
        </LegalSection>

        <LegalSection number="15" id="indemnification" title="Indemnification">
          <p>
            You agree to indemnify, defend, and hold harmless us, our
            affiliates, and their respective officers, employees, and agents
            from and against any claims, liabilities, damages, losses, and
            expenses (including reasonable legal fees) arising out of or in
            any way connected with: (a) your access to or use of the Service;
            (b) your breach of these Terms; or (c) your violation of any law
            or third-party right.
          </p>
        </LegalSection>

        <LegalSection number="16" id="termination" title="Termination">
          <p>
            We may suspend or terminate your access to the Service at any
            time, with or without notice, for any reason, including if we
            believe you have violated these Terms. You may stop using the
            Service at any time by uninstalling the App. Sections that by their
            nature should survive termination (including Sections 11–17) will
            survive.
          </p>
        </LegalSection>

        <LegalSection number="17" id="changes" title="Changes to these Terms">
          <p>
            We may update these Terms from time to time. When we make material
            changes we will update the &ldquo;Last updated&rdquo; date and,
            where appropriate, provide additional notice (such as an in-app
            notification). Your continued use of the Service after changes
            take effect constitutes your acceptance of the revised Terms.
          </p>
        </LegalSection>

        <LegalSection number="18" id="governing-law" title="Governing law and disputes">
          <p>
            These Terms are governed by the laws of{' '}
            <strong>England and Wales</strong>, without regard to its
            conflict-of-laws principles. The exclusive jurisdiction for any
            dispute arising from these Terms or the Service lies with the
            competent courts of <strong>London, England</strong>, except where
            mandatory local consumer-protection law provides otherwise.
          </p>
          <p className="mt-4">
            If you reside in a jurisdiction whose mandatory laws override this
            section, those laws apply to that extent and nothing in these
            Terms removes rights granted to you by them.
          </p>
        </LegalSection>

        <LegalSection
          number="19"
          id="severability"
          title="Severability and entire agreement"
        >
          <p>
            If any provision of these Terms is held invalid or unenforceable,
            the remaining provisions remain in full force and effect. Our
            failure to enforce any provision is not a waiver of that or any
            other provision. These Terms, together with the Privacy Policy and
            any policies referenced from within the App, constitute the entire
            agreement between you and us regarding the Service and supersede
            any prior agreements.
          </p>
        </LegalSection>

        <LegalSection number="20" id="contact" title="Contact">
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
        </LegalSection>
      </LegalPageLayout>
    </>
  );
}
