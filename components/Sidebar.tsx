'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';

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
      className="sticky top-4 w-full z-40 backdrop-blur-md flex-none 
    transition-colors duration-500 lg:z-50 lg:border-b 
    lg:border-slate-900/10 border-slate-50/[0.06] 
    supports-backdrop-blur:bg-white/95 
    bg-transparent 
    md:flex-shrink-0 md:mx-0 pl-4 my-6 md:my-0 md:py-4 md:mt-16 sm:px-[10vw]"
    >
      <nav
        className="flex md:items-start relative px-4 md:px-0 pb-0 fade scroll-pr-6 md:relative items-center"
        id="nav"
      >
        <Link
          href="/"
          className="text-white font-bold md:font-semibold hover:underline hover:cursor-pointer text-xl sm:text-3xl"
        >
          Vishwanath B.
        </Link>
        <div className="flex flex-row md:gap-8 space-x-0 pr-0 mb-2 mt-2 md:mt-0 ml-auto">
          {navItems[pathname] ? (
            <>
              <div className="block">
                <motion.div
                  className="absolute z-[-1] "
                  initial={{ opacity: 0, x: navItems[pathname].x }}
                  animate={{
                    opacity: 1,
                    x: navItems[pathname].x,
                    width: navItems[pathname].w,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 350,
                    damping: 30,
                  }}
                />
              </div>
            </>
          ) : null}

          {Object.entries(navItems).map(([path, { name }]) => {
            const isActive = path === pathname;

            return (
              <Link
                key={path}
                href={path}
                className={clsx(
                  'transition-all text-sm md:text-lg hover:text-neutral-200 md:hover:underline py-[5px] px-[10px]',
                  {
                    'text-slate-400': !isActive,
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
