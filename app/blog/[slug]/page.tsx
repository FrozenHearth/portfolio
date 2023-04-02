import ViewCounter from '@/components/ViewCounter';
import { allPosts } from 'contentlayer/generated';
import MarkdownContent from '@/components/MDXComponents';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

type Params = {
  params: {
    slug: string;
  };
};

export default function PostPage({ params }: Params) {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }
  return (
    <>
      <div className="prose prose-slate dark:prose-invert prose-a:text-sky-500 dark:prose-p:text-slate-400 md:text-lg sm:mx-auto py-4 md:p-0">
        <header className="flex items-center mb-4">
          <span className="text-slate-600 dark:text-slate-400 rounded text-sm inline-block">
            {post.publishedAtFormatted}
          </span>
          <span className="mx-3">·</span>
          <ViewCounter trackView slug={post.slug} />
        </header>
        <h1 className="mb-0 dark:text-zinc-100 text-3xl md:text-4xl font-bold tracking-tight">
          {post.title}
        </h1>
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
