import { createOgImage } from '@/lib/createOGImage';
import randomFiveDigitNumber from '@/utils/generateFiveDigitNumber';
import { NextSeo } from 'next-seo';

export default async function Head() {
  const ogImage = createOgImage({
    title: 'Vishwanath B.',
    meta: ['frozenhearth.vercel.app'].join(' · '),
  });
  return (
    <NextSeo
      useAppDir={true}
      openGraph={{
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
      }}
      title="Vishwanath B."
      description="Welcome to my personal website"
    />
  );
}
