import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Twitter, Facebook, Linkedin } from 'lucide-react';
import { blogPosts } from '@/lib/data';

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
];

export function Footer() {
  return (
    <footer className="bg-card/30 border-t border-border/40">
      <div className="container py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">
          <div className="space-y-4">
            <Logo />
            <p className="text-muted-foreground max-w-xs">
              Secure, fast, and reliable VPN service for everyone.
            </p>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">123 VPN Street, Internet City, 10101</p>
              <p className="text-sm text-muted-foreground">contact@zeevpn.com</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 xl:col-span-2">
            <div>
              <h3 className="text-sm font-semibold text-foreground">Company</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">About</Link></li>
                <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-primary">Blog</Link></li>
                <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">Product</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="/download" className="text-sm text-muted-foreground hover:text-primary">Download</Link></li>
                <li><Link href="/#pricing" className="text-sm text-muted-foreground hover:text-primary">Pricing</Link></li>
                <li><Link href="/what-is-a-vpn" className="text-sm text-muted-foreground hover:text-primary">What is a VPN?</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">Recent Blog Posts</h3>
              <ul className="mt-4 space-y-2">
                {blogPosts.slice(0, 3).map((post) => (
                  <li key={post.id}>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-primary">{post.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border/40 pt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Zee VPN. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            {socialLinks.map((social) => (
              <Button key={social.name} variant="ghost" size="icon" asChild>
                <Link href={social.href}>
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
