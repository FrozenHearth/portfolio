import Navbar from '@/components/Navbar';
import './global.css';
import { Providers } from './providers';
import Footer from '@/components/Footer';
import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Vishwanath B. - Frontend Engineer',
    template: '%s | Vishwanath B.',
  },
  description:
    'Senior Frontend Engineer and passionate guitarist. Welcome to my portfolio.',
  keywords: [
    'Senior Frontend Engineer',
    'React',
    'Next.js',
    'Typescript',
    'Web Development',
  ],
  authors: [{ name: 'Vishwanath B.' }],
  creator: 'Vishwanath B.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Vishwanath B.',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@vishwanathb',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1f2028' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link rel="dns-prefetch" href="https://github.com" />
        <link rel="dns-prefetch" href="https://linkedin.com" />
      </head>
      <body className="dark:bg-[#1f2028] bg-white antialiased min-h-screen flex flex-col relative">
        <div className="fixed inset-0 pointer-events-none -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sky-400/20 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-400/20 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-pink-600/20 via-transparent to-transparent" />
        </div>
        <Providers>
          <Navbar />
          <main className="flex-auto min-w-0 md:mt-0 flex flex-col md:pt-12 mx-[6vw] md:mx-[10vw] 2xl:mx-[20vw] justify-center">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
