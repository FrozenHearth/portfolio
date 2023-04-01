import Navbar from '@/components/Navbar';
import { NextSeo } from 'next-seo';
import './global.css';
import { twitterSEODefaults } from '@/utils/seoDefaults';
import { Providers } from './providers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
      </head>
      <NextSeo useAppDir={true} twitter={twitterSEODefaults} />
      <body className="dark:bg-gray-900 bg-white antialiased min-h-screen">
        <Providers>
          <Navbar />
          <main className="flex-auto min-w-0 md:mt-0 flex flex-col md:pt-12 mx-[6vw] md:mx-[10vw]">
            {children}
          </main>
          <footer className="mt-12 mb-4" />
        </Providers>
      </body>
    </html>
  );
}
