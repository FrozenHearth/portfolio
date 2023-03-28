import HomePage from '@/components/HomePage';
import { createOgImage } from '@/lib/createOGImage';
import randomFiveDigitNumber from '@/utils/generateFiveDigitNumber';
import { NextSeo } from 'next-seo';

export default function Home() {
  const ogImage = createOgImage({
    title: 'Vishwanath B.',
    meta: ['frozenhearth.vercel.app'].join(' · '),
  });
  return (
    <>
      <NextSeo
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
          url: 'https://frozenhearth.vercel.app',
        }}
        twitter={{
          handle: '@frozeninretro',
          cardType: 'summary_large_image',
        }}
        title="Vishwanath B."
        description="Welcome to my personal website"
      />
      <div className="py-4 md:p-0">
        <HomePage />
      </div>
    </>
  );
}
