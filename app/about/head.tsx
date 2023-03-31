import { createOgImage } from '@/lib/createOGImage';
import randomFiveDigitNumber from '@/utils/generateFiveDigitNumber';
import { NextSeo } from 'next-seo';

export default async function Head() {
  const ogImage = createOgImage({
    title: 'Vishwanath B. | About Me',
    meta: ['frozenhearth.vercel.app/about'].join(' · '),
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
        title: 'Vishwanath B. | About Me',
        description: 'Passionate front-end engineer',
        url: `${process.env.NEXT_PUBLIC_URL}/about`,
      }}
      title="Vishwanath B. | About Me"
      description="Passionate front-end engineer"
    />
  );
}
