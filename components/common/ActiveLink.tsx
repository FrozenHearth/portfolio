'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function ActiveLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  return (
    <Link href={href} className={(pathName === href ? className : undefined)}>
      {children}
    </Link>
  );
}
