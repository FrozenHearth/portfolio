import { allPosts } from 'contentlayer/generated';
import Link from 'next/link';
import ViewCounter from '@/components/common/ViewCounter';
import Image from 'next/image';
import { createOgImage } from '@/lib/createOGImage';
import type { Metadata } from 'next';
import randomFiveDigitNumber from '@/lib/generateFiveDigitNumber';
import { memo } from 'react';

export async function generateMetadata(): Promise<Metadata> {
  const ogImage = createOgImage({
    title: 'Vishwanath B. | Blog',
    meta: ['Welcome to my blog.'].join(''),
  });
  return {
    title: 'Vishwanath B. | Blog',
    description: 'I blog mostly about JS quirks.',
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'
    ),
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
      description: 'I blog mostly about JS quirks.',
      url: `${process.env.NEXT_PUBLIC_URL}/blog`,
    },
    twitter: {
      title: 'Vishwanath B. | Blog',
      description: 'I blog mostly about JS quirks.',
      card: 'summary_large_image',
    },
  };
}

const BlogPostCard = memo(function BlogPostCard({
  post,
  priority = false,
}: {
  post: (typeof allPosts)[0];
  priority?: boolean;
}) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="hover:cursor-pointer group hover:rounded-lg my-4 overflow-hidden flex flex-col"
    >
      <div className="h-[500px] relative rounded-lg border-transparent border-2 group-hover:border-sky-500 p-1 overflow-hidden">
        <Image
          src={post.imageSrc as string}
          alt={post.title}
          fill
          className="rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
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
  );
});

export default function BlogListPage() {
  const sortedPosts = allPosts.sort(
    (a, b) =>
      new Date(b.publishedAtFormatted).getTime() -
      new Date(a.publishedAtFormatted).getTime()
  );

  return (
    <>
      <div className="mt-4 md:mt-10">
        <h1 className="text-4xl md:text-6xl text-slate-900 dark:text-white font-medium leading-tight md:mt-4">
          I blog mostly about JS quirks.
        </h1>
        <h2 className="text-slate-600 dark:text-slate-300 max-w-2xl text-lg md:text-2xl my-0 mt-4 md:mt-8">
          Have a look at my writing.
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 gap-y-6 mt-8">
        {sortedPosts.map((post, index) => (
          <BlogPostCard key={post.slug} post={post} priority={index < 3} />
        ))}
      </div>
    </>
  );
}
