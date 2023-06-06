'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import BrandLogo from './common/BrandLogo';
import Switch from './common/ToggleSwitch';
import { useEffect, useRef, useState } from 'react';

type NavItems = {
  [key: string]: {
    name: string;
  };
};

const navItems: NavItems = {
  '/': {
    name: 'Home',
  },
  '/about': {
    name: 'About',
  },
  '/blog': {
    name: 'Blog',
  },
};

export default function Navbar() {
  let pathname = usePathname() || '/';

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
      sm:px-0 md:px-[10vw] 2xl:px-[20vw]`,
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
          className="hidden items-center lg:flex gap-3 font-bold 
          lg:font-bold text-sky-400 hover:cursor-pointer text-xl lg:text-3xl"
        >
          <BrandLogo height="48" width="48" />
          Vishwanath
        </Link>
        <Link
          href="/"
          className="text-white lg:hidden font-bold lg:font-bold hover:underline hover:cursor-pointer text-xl sm:text-3xl"
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
                  'transition-all text-sm md:text-lg dark:hover:text-neutral-200 hover:text-sky-500  py-[5px] px-[10px]',
                  {
                    'dark:text-slate-300 text-slate-800': !isActive,
                    'font-semibold dark:text-white text-sky-500': isActive,
                  }
                )}
              >
                {name}
              </Link>
            );
          })}
          <Switch />
          <a
            href="https://github.com/FrozenHearth/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 ml-2 mr-1 sm:ml-4"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_9914_10)">
                <path
                  d="M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0Z"
                  fill="currentColor"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_9914_10">
                  <rect width="24" height="24" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
      </nav>
    </aside>
  );
}
