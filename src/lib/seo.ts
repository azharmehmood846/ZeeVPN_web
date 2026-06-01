// Central SEO/GEO/AEO configuration.
//
// SITE_URL resolution order:
//   1. NEXT_PUBLIC_SITE_URL (set this in Vercel project settings → Environment Variables)
//   2. VERCEL_PROJECT_PRODUCTION_URL (auto-injected by Vercel on production deploys)
//   3. Fallback placeholder — update before launch if not deploying to Vercel.
//
// This ensures canonicals, sitemap, robots, and JSON-LD always emit URLs matching
// the real production origin instead of the placeholder.

const resolvedSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://zeevpn.com");

export const SITE_URL = resolvedSiteUrl.replace(/\/$/, "");

export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.zeevpn.secure.proxy";

export const CONTACT_EMAIL = "hi@zeevpn.com";
export const SITE_NAME = "Zee VPN";
export const SITE_TAGLINE = "Free Android VPN — One Ad Unlocks Hours";
// Keep meta descriptions <= 155 chars (Google SERP limit ~158 chars / 985 px).
export const SITE_DESCRIPTION =
  "Free Android VPN. Watch one short ad to unlock hours of unlimited, encrypted access. No subscription, no signup, just privacy on your terms.";

export const SITE_KEYWORDS = [
  "free VPN",
  "Android VPN",
  "free Android VPN",
  "unlimited VPN",
  "ad-supported VPN",
  "no signup VPN",
  "privacy VPN",
  "secure WiFi",
  "Zee VPN",
];

export const SOCIAL = {
  twitter: "@zeevpn",
  twitterUrl: "https://twitter.com/zeevpn",
  facebookUrl: "https://facebook.com/zeevpn",
  linkedinUrl: "https://linkedin.com/company/zeevpn",
};

export const ORGANIZATION_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/zee_logo.png`,
  description: SITE_DESCRIPTION,
  sameAs: [SOCIAL.twitterUrl, SOCIAL.facebookUrl, SOCIAL.linkedinUrl],
};

export const WEBSITE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  },
};

export function breadcrumbJsonLd(
  crumbs: { name: string; path: string }[]
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: `${SITE_URL}${crumb.path}`,
    })),
  };
}
