import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

export const LOGO_SRC = '/zee_logo.png';
export const LOGO_WIDTH = 164;
export const LOGO_HEIGHT = 200;

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
  tone?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
};

const sizeClasses = {
  sm: 'h-7 w-auto',
  md: 'h-9 w-auto sm:h-10',
  lg: 'h-11 w-auto sm:h-12',
};

export function Logo({
  className,
  showWordmark = false,
  tone = 'dark',
  size = 'md',
}: LogoProps) {
  const isLight = tone === 'light';

  return (
    <Link
      href="/"
      className={cn('flex min-w-0 items-center gap-2.5', className)}
      aria-label="Zee VPN Home"
    >
      <Image
        src={LOGO_SRC}
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        alt="Zee VPN"
        priority
        className={cn('shrink-0 object-contain object-left', sizeClasses[size])}
      />
      <span
        className={cn(
          'overflow-hidden whitespace-nowrap text-[18px] font-semibold tracking-[-0.02em] transition-[max-width,opacity,margin] duration-500 ease-in-out',
          isLight ? 'text-white' : 'text-[#111111]',
          showWordmark ? 'ml-0 max-w-[8rem] opacity-100' : 'ml-0 max-w-0 opacity-0'
        )}
        aria-hidden={!showWordmark}
      >
        Zee VPN
      </span>
    </Link>
  );
}
