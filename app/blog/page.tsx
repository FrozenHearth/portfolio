import { allPosts } from 'contentlayer/generated';
import Link from 'next/link';
import ViewCounter from '@/components/common/ViewCounter';
import Image from 'next/image';
import { createOgImage } from '@/lib/createOGImage';
import type { Metadata } from 'next';
import randomFiveDigitNumber from '@/lib/generateFiveDigitNumber';

const ogImage = createOgImage({
  title: 'Vishwanath B. | Blog',
  meta: ['Passionate frontend engineer'].join(''),
});
export const metadata: Metadata = {
  title: 'Vishwanath B. | Blog',
  description: 'Welcome to my blog. I write mainly about frontend stuff.',
  openGraph: {
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
  },
  twitter: {
    title: 'Vishwanath B. | Blog',
    description: 'Welcome to my blog. I write mainly about frontend stuff.',
    card: 'summary_large_image',
  },
};

export default function BlogListPage() {
  return (
    <>
      <div className="mt-4 md:mt-10">
        <h1 className="text-4xl md:text-7xl text-slate-900 dark:text-white font-bold leading-tight md:mt-4">
          I write mainly about frontend on my blog.
        </h1>
        <h2 className="text-slate-600 dark:text-slate-300 max-w-2xl text-lg md:text-xl my-0 mt-4 md:mt-8">
          Always up for a convo about web dev and tech in general. Feel free to
          connect with me on{' '}
          <a
            href="https://linkedin.com/in/vishwanath-bhetanabhotla"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-400 hover:underline"
          >
            Linkedin.
          </a>
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 gap-y-6 mt-8">
        {allPosts
          .sort(
            (a, b) =>
              new Date(b.publishedAtFormatted).valueOf() -
              new Date(a.publishedAtFormatted).valueOf()
          )
          .map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="hover:cursor-pointer group hover:rounded-lg my-4 overflow-hidden flex flex-col"
            >
              <div className="rounded-lg border-transparent border-2 group-hover:border-sky-500 p-1 overflow-hidden">
                <Image
                  src={post.imageSrc as string}
                  alt="debounce"
                  width={373}
                  height={600}
                  style={{ width: '100%' }}
                  className="rounded-lg"
                />
              </div>
              <div className="mt-3 sm:mt-6 p-1">
                <span className="text-slate-400 font-semibold dark:text-slate-400 text-lg sm:text-xl my-2">
                  {post.publishedAtFormatted}
                  <span className="mx-3"> — </span>
                  <ViewCounter trackView={false} slug={post.slug} />
                </span>
                <header className="text-slate-900 dark:text-white font-semibold leading-tight text-2xl sm:text-3xl mt-4">
                  {post.title}
                </header>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
}
