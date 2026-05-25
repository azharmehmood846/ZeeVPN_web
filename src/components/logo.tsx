import Link from 'next/link';
import Image from 'next/image';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="Zee VPN Home">
      <Image
        src="https://minograd.sirv.com/logo%20Zee%20VPN.png"
        width={150}
        height={39}
        alt="Zee VPN Logo"
        className="h-auto"
      />
    </Link>
  );
}
