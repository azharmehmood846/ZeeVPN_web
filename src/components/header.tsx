"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, Smartphone, X } from 'lucide-react';

import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/what-is-a-vpn', label: 'What is a VPN?' },
  { href: '/download', label: 'Download' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

const headerEase = '[transition-duration:650ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]';

const stickyPillStyles =
  'border border-white/10 bg-[rgba(8,12,22,0.72)] shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_8px_32px_rgba(0,0,0,0.42)] backdrop-blur-xl';

function NavLink({
  href,
  label,
  onNavigate,
  className,
  light = true,
}: {
  href: string;
  label: string;
  onNavigate?: () => void;
  className?: string;
  light?: boolean;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={cn(
        'inline-flex h-10 items-center whitespace-nowrap rounded-full px-3.5 text-[15px] font-medium leading-none tracking-[-0.01em] transition-colors',
        headerEase,
        light
          ? isActive
            ? 'text-white'
            : 'text-white/70 hover:text-white'
          : isActive
            ? 'text-[#111111]'
            : 'text-[rgba(0,0,0,0.7)] hover:text-[#111111]',
        className
      )}
    >
      {label}
    </Link>
  );
}

function GetAppButton({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href="/download"
      onClick={onClick}
      className={cn(
        'group inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-full border border-primary/40 bg-primary px-4 text-[15px] font-medium tracking-[-0.2px] text-primary-foreground shadow-[0_4px_14px_-4px_rgba(37,99,235,0.45)] transition-[transform,box-shadow,background-color,border-color]',
        headerEase,
        'hover:-translate-y-0.5 hover:border-primary/60 hover:bg-primary/92 hover:shadow-[0_12px_30px_-6px_rgba(37,99,235,0.65)] active:translate-y-0 active:scale-[0.98]',
        className
      )}
    >
      <Smartphone
        className="h-[18px] w-[18px] transition-transform duration-300 group-hover:-rotate-6"
        strokeWidth={2}
        aria-hidden
      />
      Get App
    </Link>
  );
}

export function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const enterThreshold = 28;
    const exitThreshold = 12;
    const onScroll = () => {
      const y = window.scrollY;
      setIsScrolled((prev) => (prev ? y > exitThreshold : y > enterThreshold));
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed left-0 right-0 z-50 w-full bg-transparent [will-change:top,padding] transition-[top,padding,background-color,backdrop-filter]',
        headerEase,
        isScrolled
          ? 'top-3 px-3 sm:top-4 sm:px-4'
          : 'top-11 !border-0 !bg-transparent !shadow-none !backdrop-blur-none'
      )}
    >
      <div
        className={cn(
          'mx-auto flex items-center gap-3 [will-change:max-width,height,padding] transition-[max-width,height,padding,background-color,border-radius,box-shadow,border-color,backdrop-filter,gap]',
          headerEase,
          isScrolled
            ? cn('h-14 max-w-[920px] rounded-full px-3 sm:px-4', stickyPillStyles)
            : 'h-[72px] max-w-none gap-6 rounded-none !border-0 !bg-transparent px-4 !shadow-none !backdrop-blur-none sm:px-6 lg:container'
        )}
      >
        <Logo
          showWordmark={!isScrolled}
          tone="light"
          size="sm"
          className={cn('shrink-0 transition-[gap]', headerEase, isScrolled && 'gap-0')}
        />

        <span
          className={cn(
            'hidden h-6 w-px shrink-0 transition-[background-color,opacity,width]',
            headerEase,
            isScrolled ? 'w-px bg-white/10 opacity-100 lg:block' : 'w-0 bg-transparent opacity-0'
          )}
          aria-hidden
        />

        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} light />
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <GetAppButton className="hidden sm:inline-flex max-[420px]:px-3 max-[420px]:text-sm" />

          <Sheet open={isMenuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  'h-10 w-10 rounded-full bg-transparent text-white transition-colors hover:bg-white/10',
                  headerEase
                )}
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[min(100vw,320px)] border-white/10 bg-[rgba(10,14,24,0.98)] p-0 text-white backdrop-blur-xl"
            >
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                  <Logo showWordmark size="sm" tone="light" />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 rounded-full text-white hover:bg-white/10"
                    onClick={() => setMenuOpen(false)}
                  >
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>

                <nav className="flex flex-col gap-1 px-3 py-4">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.href}
                      {...link}
                      onNavigate={() => setMenuOpen(false)}
                      className="h-11 w-full justify-start px-4"
                    />
                  ))}
                </nav>

                <div className="mt-auto border-t border-white/10 p-5">
                  <GetAppButton className="w-full" onClick={() => setMenuOpen(false)} />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
