import ViewCounter from '@/components/ViewCounter';
import { allPosts } from 'contentlayer/generated';
import MarkdownContent from '@/components/MDXComponents';
import { notFound } from 'next/navigation';
import { createOgImage } from '@/lib/createOGImage';
import randomFiveDigitNumber from '@/utils/generateFiveDigitNumber';
import type { Metadata } from 'next';

type Params = {
  slug: string;
};

const ogImage = createOgImage({
  title: 'Vishwanath B. | Blog',
  meta: ['frozenhearth.vercel.app/blog'].join(' · '),
});

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const post = allPosts.find((post) => post.slug === params.slug);
  return {
    title: `${post?.title} | Vishwanath B.`,
    description: `${post?.summary}`,
    openGraph: {
      images: [
        {
          url: `${ogImage}?${randomFiveDigitNumber()}`,
          width: 1600,
          height: 836,
          alt: post?.title,
        },
      ],
      title: post?.title,
      description: post?.summary,
      url: `${process.env.NEXT_PUBLIC_URL}/${post?.slug}`,
      type: 'article',
    },
    twitter: {
      title: 'Vishwanath B. | Blog',
      description: `${post?.summary}`,
      card: 'summary_large_image',
    },
  };
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function PostPage({ params }: { params: Params }) {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }
  return (
    <>
      <div className="prose prose-slate dark:prose-invert prose-a:text-sky-500 dark:prose-p:text-slate-400 md:text-lg sm:mx-auto py-4 md:p-0">
        <header className="mb-4">
          <h1 className="mb-0 dark:text-zinc-100 text-3xl md:text-4xl font-semibold tracking-tight">
            {post.title}
          </h1>
          <div className="flex items-center mt-2">
            <span className="text-slate-600 dark:text-slate-400 rounded text-base inline-block">
              {post.publishedAtFormatted}
            </span>
            <span className="mx-3">-</span>
            <ViewCounter trackView slug={post.slug} />
          </div>
        </header>

        <article className="m-auto mb-4 sm:mb-8">
          <MarkdownContent code={post.body.code} />
        </article>

        <footer>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://github.com/FrozenHearth/portfolio/blob/main/content/posts/${post.slug}.mdx`}
          >
            View on Github
          </a>
        </footer>
      </div>
    </>
  );
}
