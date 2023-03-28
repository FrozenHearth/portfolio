'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import BrandLogo from './BrandLogo';

type NavItems = {
  [key: string]: {
    name: string;
    x: number;
    y: number;
    w: string;
  };
};

const navItems: NavItems = {
  '/': {
    name: 'Home',
    x: 0,
    y: 0,
    w: '65px',
  },
  '/about': {
    name: 'About',
    x: 64,
    y: 35,
    w: '65px',
  },
  '/blog': {
    name: 'Blog',
    x: 128,
    y: 70,
    w: '56px',
  },
};

export default function Navbar() {
  let pathname = usePathname() || '/';
  if (pathname.includes('/blog/')) {
    pathname = '/blog';
  }

  return (
    <aside
      className="sticky top-1 md:top-0 w-full z-40 backdrop-blur-md flex-none 
    transition-colors duration-500 lg:z-50 lg:border-b 
    lg:border-slate-900/10 border-slate-50/[0.06] 
    supports-backdrop-blur:bg-white/95 
    bg-transparent 
    md:flex-shrink-0 md:mx-0 my-6 md:my-0 md:py-4 md:mt-16 px-[2vw] sm:px-0 md:px-[10vw]"
    >
      <nav
        className="flex relative px-4 md:px-0 pb-0 fade scroll-pr-6 items-center"
        id="nav"
      >
        <Link
          href="/"
          className="text-white hidden items-center md:flex gap-3 font-bold 
          md:font-semibold hover:underline hover:cursor-pointer text-xl md:text-3xl"
        >
          <BrandLogo height="48" width="48" />
          Vishwanath B.
        </Link>
        <Link
          href="/"
          className="text-white md:hidden font-bold md:font-semibold hover:underline hover:cursor-pointer text-xl sm:text-3xl"
        >
          <BrandLogo height="36" width="36" />
        </Link>
        <div className="flex flex-row md:gap-8 space-x-0 pr-0 mb-2 mt-2 md:mt-0 ml-auto">
          {Object.entries(navItems).map(([path, { name }]) => {
            const isActive = path === pathname;

            return (
              <Link
                key={path}
                href={path}
                className={clsx(
                  'transition-all text-sm md:text-lg hover:text-neutral-200 md:hover:underline py-[5px] px-[10px]',
                  {
                    'text-slate-300': !isActive,
                    'font-bold text-white': isActive,
                  }
                )}
              >
                {name}
              </Link>
            );
          })}
        </div>
      </nav>
    </aside>
  );
}
