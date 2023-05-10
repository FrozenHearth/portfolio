'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PropsWithChildren } from 'react';

type ActiveLinkProps = {
  href: string;
  className?: string;
};

export default function ActiveLink({
  href,
  className,
  children,
  ...props
}: PropsWithChildren<ActiveLinkProps>) {
  const pathName = usePathname();
  function isCurrentPath() {
    return pathName?.toLowerCase() === href.toLowerCase();
  }
  return (
    <>
      <Link href={href} className={isCurrentPath() ? className : undefined}>
        {children}
      </Link>
    </>
  );
}
