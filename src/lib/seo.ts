// Central SEO/GEO/AEO configuration.
// Replace SITE_URL with the production origin before launching.

export const SITE_URL = "https://zeevpn.com";
export const SITE_NAME = "Zee VPN";
export const SITE_TAGLINE = "Free Android VPN — One Ad Unlocks Hours";
export const SITE_DESCRIPTION =
  "Zee VPN is a free Android VPN. Watch one short ad to unlock hours of unlimited, encrypted VPN access — no subscription, no signup, just privacy on your terms.";

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
