import HomePage from '@/components/HomePage';
import { createOgImage } from '@/lib/createOGImage';
import Head from 'next/head';

export default function Home() {
  const ogImage = createOgImage({
    title: 'Vishwanath B.',
    meta: ['frozenhearth.vercel.app'].join(' · '),
  });
  return (
    <>
      <Head>
        <title>Vishwanath B.</title>
        <meta name="description" content="Welcome to my personal website." />
        <meta property="og:title" content="Vishwanath B." />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1600" />
        <meta property="og:image:height" content="836" />
        <meta property="og:image:alt" content="Vishwanath B." />
        <meta name="twitter:title" content="Vishwanath B." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImage} />
        <meta
          name="twitter:description"
          content="Welcome to my personal website."
        />
        <meta
          property="og:description"
          content="Welcome to my personal website."
        />
        <meta
          property="og:url"
          content={`https://frozenhearth.vercel.app${router.asPath}`}
        />
      </Head>
      <div className="py-4 md:p-0">
        <HomePage />
      </div>
    </>
  );
}
