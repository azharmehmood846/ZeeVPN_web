import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from "@/components/ui/toaster"
import { TopBanners } from '@/components/top-banners';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Zee VPN',
  description: 'Secure, fast, and reliable VPN service.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <style>{`
          html { background: hsl(224 71% 4%); color: hsl(210 40% 98%); }
          body {
            margin: 0;
            background: hsl(224 71% 4%);
            color: hsl(210 40% 98%);
            font-family: var(--font-inter), Arial, Helvetica, sans-serif;
          }
          a { color: inherit; text-decoration: none; }
        `}</style>
      </head>
      <body className={`${inter.variable} font-body antialiased bg-background text-foreground`}>
        <div className="flex flex-col min-h-screen">
          <TopBanners />
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
