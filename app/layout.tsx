import Navbar from '@/components/Navbar';
import './global.css';
import { Providers } from './providers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="dark:bg-gradient-to-r dark:from-gray-900 dark:to-slate-800 bg-white antialiased min-h-screen flex flex-col">
        <Providers>
          <Navbar />
          <main className="flex-auto min-w-0 md:mt-0 flex flex-col md:pt-12 mx-[6vw] md:mx-[10vw] 2xl:mx-[20vw] justify-center">
            {children}
          </main>
          <footer className="mt-12 mb-4" />
        </Providers>
      </body>
    </html>
  );
}
