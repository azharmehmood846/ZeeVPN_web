import type { Metadata } from 'next';
import Image from 'next/image';

import { CDN_IMAGES } from '@/lib/cdn-images';
import { SITE_NAME, SITE_URL } from '@/lib/seo';

import { StickyNav } from './sticky-nav';

export const metadata: Metadata = {
  title: 'What is a VPN? An In-Depth Guide',
  description:
    'Learn what a VPN is, how it works, and why you should use one. A practical guide to encryption, IP masking, public WiFi safety, and choosing the right provider.',
  alternates: { canonical: '/what-is-a-vpn' },
  openGraph: {
    title: 'What is a VPN? An In-Depth Guide',
    description:
      'Encryption, IP masking, and public WiFi safety — explained simply.',
    url: `${SITE_URL}/what-is-a-vpn`,
    type: 'article',
  },
};

const articleSections = [
  { id: 'introduction', title: 'What is a VPN?' },
  { id: 'how-it-works', title: 'How Does a VPN Work?' },
  { id: 'why-use-vpn', title: 'Why Should You Use a VPN?' },
  { id: 'choosing-vpn', title: 'Choosing the Right VPN' },
];

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'What is a VPN? An In-Depth Guide',
  description:
    'Learn what a VPN is, how it works, and why you should use one. Covers encryption, IP masking, public WiFi safety, and choosing the right provider.',
  url: `${SITE_URL}/what-is-a-vpn`,
  inLanguage: 'en-US',
  author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
  publisher: {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: { '@type': 'ImageObject', url: `${SITE_URL}/zee_logo.png` },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/what-is-a-vpn` },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a VPN?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'A VPN is a service that creates a secure, encrypted connection between your device and the internet. It routes your traffic through a server operated by the VPN provider, masking your real IP address and encrypting your data so ISPs, networks, and third parties cannot read it.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does a VPN work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'A VPN works by authenticating your client with a VPN server, creating an encrypted tunnel between your device and that server, encrypting your traffic with standards like AES-256, and replacing your source IP with the server’s IP so your location and identity are hidden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why should I use a VPN?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'A VPN protects your privacy from ISPs and trackers, secures your traffic on public WiFi, helps bypass censorship and geo-restrictions, and can prevent price discrimination on sites that vary prices by location.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I choose the right VPN?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Look for strong encryption (AES-256), a strict no-logs policy, a kill switch, fast server performance, a geographically diverse server network, easy-to-use apps across devices, and reliable customer support.',
      },
    },
  ],
};

export default function WhatIsAVPNPage() {
  return (
    <div className="container pb-16 pt-[calc(5rem+4.5rem)] lg:pb-24 lg:pt-[calc(6rem+4.5rem)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="flex flex-col lg:flex-row lg:gap-12">
        <aside className="w-full lg:w-1/4 mb-8 lg:mb-0">
          <StickyNav sections={articleSections} />
        </aside>
        <article className="prose prose-invert prose-lg max-w-none lg:w-3/4">
          <section id="introduction">
            <h1 className="text-4xl font-bold font-headline tracking-tight text-foreground">What is a VPN? An In-Depth Guide</h1>
            <p className="lead text-muted-foreground">
              In an era where our lives are increasingly digital, online privacy and security have never been more important. A Virtual Private Network, or VPN, is one of the most powerful tools you can use to protect your online activities.
            </p>
            <Image
              src={CDN_IMAGES.productSpeed}
              alt="Diagram showing how a VPN works"
              data-ai-hint="VPN explanation"
              width={800}
              height={450}
              className="my-8 h-auto w-full object-contain"
            />
            <p>
              At its core, a VPN is a service that creates a secure, encrypted connection between your device (like a computer or smartphone) and the internet. This connection, often called a "tunnel," routes all your internet traffic through a server operated by the VPN provider. This process masks your real IP address and encrypts your data, making it unreadable to anyone who might try to intercept it, such as your Internet Service Provider (ISP), government agencies, or hackers on public Wi-Fi.
            </p>
          </section>

          <section id="how-it-works" className="mt-16">
            <h2 className="text-3xl font-bold font-headline text-foreground">How Does a VPN Work?</h2>
            <p>
              Understanding how a VPN functions can be broken down into a few key steps:
            </p>
            <ol>
              <li><strong>Authentication:</strong> When you connect to a VPN service, your client software authenticates with the VPN server.</li>
              <li><strong>Tunneling:</strong> Once authenticated, the VPN creates an encrypted tunnel between your device and the server. All data passing through this tunnel is encapsulated and encrypted. The protocols used for this, like OpenVPN or WireGuard, ensure the tunnel is secure.</li>
              <li><strong>Encryption:</strong> Your data is scrambled using advanced encryption standards (like AES-256). This means that even if someone intercepted your traffic, they wouldn't be able to read it without the decryption key.</li>
              <li><strong>IP Masking:</strong> When your traffic reaches the VPN server, it is decrypted and sent to its final destination on the internet. However, the source IP address is now that of the VPN server, not your own. Your real IP address is effectively hidden, protecting your location and identity.</li>
            </ol>
          </section>

          <section id="why-use-vpn" className="mt-16">
            <h2 className="text-3xl font-bold font-headline text-foreground">Why Should You Use a VPN?</h2>
            <p>
              There are numerous compelling reasons to use a VPN in your daily online life:
            </p>
            <ul>
              <li><strong>Enhance Privacy:</strong> Prevent your ISP, advertisers, and other third parties from tracking your online activities.</li>
              <li><strong>Boost Security:</strong> Protect yourself from hackers and data snoops, especially when using public Wi-Fi networks in cafes, airports, or hotels.</li>
              <li><strong>Bypass Censorship:</strong> Access websites and services that might be blocked in your country or on your local network (like at work or school).</li>
              <li><strong>Access Geo-Restricted Content:</strong> By connecting to a server in another country, you can access streaming libraries, news sites, and other content as if you were there.</li>
              <li><strong>Prevent Price Discrimination:</strong> Some e-commerce sites show different prices based on your location. A VPN can help you find the best deals on flights, hotels, and other products.</li>
            </ul>
          </section>

          <section id="choosing-vpn" className="mt-16">
            <h2 className="text-3xl font-bold font-headline text-foreground">Choosing the Right VPN</h2>
            <p>
              Not all VPNs are created equal. When selecting a provider like Zee VPN, consider the following factors:
            </p>
            <ul>
              <li><strong>Security Features:</strong> Look for strong encryption (AES-256), a strict no-logs policy, and features like a kill switch.</li>
              <li><strong>Speed and Performance:</strong> A good VPN should have minimal impact on your internet speed. Look for providers with optimized networks.</li>
              <li><strong>Server Network:</strong> A large and geographically diverse server network gives you more options for bypassing restrictions and finding fast connections.</li>
              <li><strong>Ease of Use:</strong> The software should be user-friendly and available on all your devices.</li>
              <li><strong>Customer Support:</strong> Reliable customer support is crucial in case you run into any issues.</li>
            </ul>
            <p>
              Zee VPN is built on these principles, offering a secure, fast, and easy-to-use service designed to protect your digital life.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
