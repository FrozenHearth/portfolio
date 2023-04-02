'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import BrandLogo from './BrandLogo';
import Switch from './ToggleSwitch';
import { useEffect, useRef, useState } from 'react';

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

  const [isSticky, setIsSticky] = useState(false);
  const navbarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
        setIsSticky(navbarRef?.current.getBoundingClientRect().top <= 0);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <aside
      ref={navbarRef}
      className={clsx(
        `sticky top-0 md:top-0 z-40 w-full backdrop-blur flex-none 
        transition-colors duration-500 lg:z-50
        lg:border-slate-900/10 dark:border-slate-50/[0.06]      
      md:flex-shrink-0 md:mx-0 my-6 md:my-0 md:py-4 md:mt-16 px-[2vw] 
      sm:px-0 md:px-[10vw]`,
        {
          'lg:border-b bg-white supports-backdrop-blur:bg-white/95 dark:bg-slate-900/75':
            isSticky,
          'bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent':
            !isSticky,
        }
      )}
    >
      <nav
        className="flex relative px-4 md:px-0 pb-0 fade scroll-pr-6 items-center"
        id="nav"
      >
        <Link
          href="/"
          className="dark:text-white text-slate-800 hidden items-center md:flex gap-3 font-bold 
          md:font-bold hover:underline hover:cursor-pointer text-xl md:text-3xl"
        >
          <BrandLogo height="48" width="48" />
          Vishwanath B.
        </Link>
        <Link
          href="/"
          className="text-white md:hidden font-bold md:font-bold hover:underline hover:cursor-pointer text-xl sm:text-3xl"
        >
          <BrandLogo height="36" width="36" />
        </Link>
        <div className="flex items-center md:gap-8 pr-0 mb-2 mt-2 md:mt-0 ml-auto">
          {Object.entries(navItems).map(([path, { name }]) => {
            const isActive = path === pathname;

            return (
              <Link
                key={path}
                href={path}
                className={clsx(
                  'transition-all text-sm md:text-lg dark:hover:text-neutral-200 hover:text-gray-600 md:hover:underline py-[5px] px-[10px]',
                  {
                    'dark:text-slate-300 text-slate-800': !isActive,
                    'font-bold dark:text-white text-slate-800': isActive,
                  }
                )}
              >
                {name}
              </Link>
            );
          })}
          <Switch />
        </div>
      </nav>
    </aside>
  );
}
