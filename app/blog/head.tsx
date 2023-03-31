import { createOgImage } from '@/lib/createOGImage';
import randomFiveDigitNumber from '@/utils/generateFiveDigitNumber';
import { NextSeo } from 'next-seo';

export default async function Head() {
  const ogImage = createOgImage({
    title: 'Vishwanath B. | Blog',
    meta: ['frozenhearth.vercel.app/blog'].join(' · '),
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
        title: 'Vishwanath B. | Blog',
        description: 'Welcome to my blog. I write mainly about frontend stuff.',
        url: `${process.env.NEXT_PUBLIC_URL}/blog`,
      }}
      title="Vishwanath B."
      description="Welcome to my blog. I write mainly about frontend stuff."
    />
  );
}
