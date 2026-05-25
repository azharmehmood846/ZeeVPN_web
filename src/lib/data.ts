import { Smartphone, Laptop, Tv, Apple, Bot, Ghost, ShieldCheck, Wifi } from 'lucide-react';

export const benefits = [
  {
    icon: Ghost,
    title: 'Stay Anonymous Online',
    description: 'A VPN hides your IP and browsing activity, protecting you from tracking by websites and ISPs.',
  },
  {
    icon: ShieldCheck,
    title: 'Protect Personal Data',
    description: 'It encrypts your connection, keeping passwords and sensitive info safe—especially on public Wi-Fi.',
  },
  {
    icon: Wifi,
    title: 'Secure Public Wi-Fi',
    description: 'Stay safe on open networks in cafes, airports, or hotels with encrypted connections.',
  },
];

export const features = [
  {
    title: 'Fast and Reliable Connection',
    description: 'Maximize Your Internet Experience with a VPN That Offers Fast and Reliable Connections, Protects Your Privacy, and Provides Unrestricted Access to the Global Web.',
    image: {
      src: "https://picsum.photos/seed/feat-reliable/800/600",
      hint: "VPN connection speed"
    }
  },
  {
    title: 'Unlimited Access',
    description: 'Get premium server access with a secure PIN generated from our website for fast and private browsing anytime.',
     image: {
      src: "https://picsum.photos/seed/feat-access/600/600",
      hint: "connect vpn pin"
    }
  },
    {
    title: 'Premium Locations',
    description: 'Access Global Premium Servers Without Paying Extra and Enjoy Seamless Online Freedom with Zee VPN.',
     image: {
      src: "https://picsum.photos/seed/feat-premium/600/600",
      hint: "vpn server locations"
    }
  },
];

export const testimonials = [
  {
    name: 'Sarah J.',
    handle: '@sarah_j',
    quote: 'Zee VPN is a game-changer. I can finally watch my favorite shows from back home without any buffering. The speed is incredible!',
    avatar: 'https://picsum.photos/seed/avatar1/100/100',
  },
  {
    name: 'Mike R.',
    handle: '@miker',
    quote: "As someone who frequently uses public Wi-Fi, security is my top priority. Zee VPN gives me peace of mind. Super easy to use, too.",
    avatar: 'https://picsum.photos/seed/avatar2/100/100',
  },
  {
    name: 'Chen W.',
    handle: '@chenw',
    quote: 'The customer support is fantastic. I had a small issue and they resolved it within minutes. Highly recommend this service!',
    avatar: 'https://picsum.photos/seed/avatar3/100/100',
  },
   {
    name: 'David L.',
    handle: '@dave_dev',
    quote: 'I\'ve tried many VPNs, and Zee VPN is by far the most reliable. The connection is stable and I\'ve never experienced any drops.',
    avatar: 'https://picsum.photos/seed/avatar4/100/100',
  },
];

export const premiumTiers = [
    {
        name: 'Basic',
        price: '4.99',
        description: 'Perfect for casual browsing and security.',
        features: [
            '10 GB of data per month',
            'Connect 1 device',
            'Servers in 10 countries',
            'Basic security features'
        ],
        featured: false,
    },
    {
        name: 'Pro',
        price: '9.99',
        description: 'For streamers, gamers, and power users.',
        features: [
            'Unlimited data',
            'Connect up to 5 devices',
            'Servers in 50+ countries',
            'Advanced security features',
            'Ad blocker included'
        ],
        featured: true,
    },
    {
        name: 'Family',
        price: '14.99',
        description: 'Protect your entire family online.',
        features: [
            'Unlimited data',
            'Connect up to 10 devices',
            'All Pro features',
            'Dedicated family support'
        ],
        featured: false,
    },
];

export const blogPosts = [
  {
    id: 1,
    title: 'The Ultimate Guide to Online Privacy in 2024',
    date: 'May 20, 2024',
    thumbnail: 'https://picsum.photos/seed/blog1/400/250',
    aiHint: 'technology security',
    excerpt: 'Learn how to protect your digital footprint with these essential tips and tools for the modern internet user.',
  },
  {
    id: 2,
    title: 'Why You Should Always Use a VPN on Public Wi-Fi',
    date: 'May 15, 2024',
    thumbnail: 'https://picsum.photos/seed/blog2/400/250',
    aiHint: 'internet privacy',
    excerpt: 'Public Wi-Fi is a hunting ground for hackers. Discover the risks and how a VPN can keep you safe.',
  },
  {
    id: 3,
    title: 'Bypass Geo-Restrictions: A World of Content Awaits',
    date: 'May 10, 2024',
    thumbnail: 'https://picsum.photos/seed/blog3/400/250',
    aiHint: 'cybersecurity tips',
    excerpt: 'Unlock streaming services, news sites, and more from around the globe with these simple steps.',
  },
  {
    id: 4,
    title: 'Zee VPN\'s New Server Expansion in Asia-Pacific',
    date: 'May 5, 2024',
    thumbnail: 'https://picsum.photos/seed/blog4/400/250',
    aiHint: 'digital freedom',
    excerpt: 'We\'re excited to announce new, faster servers in 5 new locations to better serve our users in the APAC region.',
  },
];

export const downloadPlatforms = [
  {
    name: 'Android',
    icon: Smartphone,
    description: 'Get our app on the Google Play Store.'
  },
  {
    name: 'iOS',
    icon: Apple,
    description: 'Download on the Apple App Store.'
  },
  {
    name: 'Windows',
    icon: Laptop,
    description: 'Powerful protection for your PC.'
  },
  {
    name: 'macOS',
    icon: Laptop,
    description: 'Secure your Mac with our native app.'
  },
  {
    name: 'Smart TV',
    icon: Tv,
    description: 'Stream securely on your big screen.'
  },
  {
    name: 'AI Assistant',
    icon: Bot,
    description: 'Integrate with your favorite AI.'
  }
];
