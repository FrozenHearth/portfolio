import HomePage from '@/components/HomePage';
import { createOgImage } from '@/lib/createOGImage';
import randomFiveDigitNumber from '@/utils/generateFiveDigitNumber';
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
        <HomePage />
      </div>
    </>
  );
}
