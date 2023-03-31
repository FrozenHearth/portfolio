import Navbar from '@/components/Navbar';
import { NextSeo } from 'next-seo';
import './global.css';
import { twitterSEODefaults } from '@/utils/seoDefaults';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
      </head>
      <NextSeo useAppDir={true} twitter={twitterSEODefaults} />
      <body className="bg-gray-900 antialiased">
        <Navbar />
        <main className="flex-auto min-w-0 md:mt-0 flex flex-col md:pt-12 mx-[6vw] md:mx-[10vw]">
          <section>{children}</section>
        </main>
        <footer className="mt-12 mb-4" />
      </body>
    </html>
  );
}
