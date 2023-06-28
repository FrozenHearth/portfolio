import { GithubButton, ResumeButton } from '@/components/common/Buttons';
import { createOgImage } from '@/lib/createOGImage';
import randomFiveDigitNumber from '@/lib/generateFiveDigitNumber';
import type { Metadata } from 'next';

const ogImage = createOgImage({
  title: 'Vishwanath B.',
  meta: ['Passionate frontend engineer'].join(''),
});

export const metadata: Metadata = {
  title: 'Vishwanath B.',
  description: 'Welcome to my personal website',
  openGraph: {
    images: [
      {
        url: `${ogImage}?${randomFiveDigitNumber()}`,
        width: 1600,
        height: 836,
        alt: 'Vishwanath B.',
      },
    ],
    title: 'Vishwanath B.',
    description: 'Welcome to my personal website',
    url: process.env.NEXT_PUBLIC_URL,
  },
  twitter: {
    title: 'Vishwanath B.',
    card: 'summary_large_image',
    description: 'Welcome to my personal website',
  },
};

export default function Home() {
  return (
    <>
      <div className="py-4 md:p-0">
        <header className="mt-0 pt-2 md:pt-6 md:flex md:flex-col md:items-center">
          <h1 className="text-4xl md:text-7xl text-slate-900 dark:text-white md:text-center font-bold leading-tight mt-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
              Frontend
            </span>{' '}
            engineer,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              hobbyist
            </span>{' '}
            guitarist and a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-slate-600">
              space
            </span>{' '}
            lover.
          </h1>
          <h2 className="md:max-w-2xl text-slate-600 dark:text-slate-300 mt-4 md:mt-6 text-lg md:text-xl">
            Welcome to my portfolio. Feel free to browse my website, and drop
            your suggestions on my{' '}
            <a
              className="text-sky-500"
              target="_blank"
              href="https://github.com/FrozenHearth/portfolio/discussions"
            >
              Github repo
            </a>
            . Thank you for visiting!
          </h2>
          <div className="block mt-8 md:mt-0 md:flex gap-3">
            <ResumeButton />
            <GithubButton />
          </div>
        </header>
      </div>
    </>
  );
}
