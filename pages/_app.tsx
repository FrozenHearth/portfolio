import Layout from '@/components/layout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <DefaultSeo
          openGraph={{
            type: 'website',
            url: process.env.NEXT_PUBLIC_URL,
            siteName: 'Vishwanath B.',
          }}
          twitter={{
            handle: '@frozeninretro',
            cardType: 'summary_large_image',
          }}
        />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
