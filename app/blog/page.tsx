import { allPosts } from 'contentlayer/generated';
import Link from 'next/link';
import ViewCounter from '@/components/ViewCounter';

export default function BlogListPage() {
  return (
    <>
      <div className="mt-4 md:mt-10">
        <h1 className="text-4xl md:text-7xl text-slate-900 dark:text-white font-bold leading-tight md:mt-4">
          I write mainly about frontend engineering.
        </h1>
        <h2 className="text-slate-600 dark:text-slate-400 max-w-2xl text-lg md:text-xl my-0 mt-4 md:mt-8">
          It is a platform for me to share my knowledge and experiences related
          to my career and technical interests. For more information, check out
          my{' '}
          <a
            href="https://linkedin.com/in/vishwanath-bhetanabhotla"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-400 hover:underline"
          >
            Linkedin.
          </a>
        </h2>
        <hr className="h-px mt-8 mb-4 border-0 bg-gray-700"></hr>
      </div>
      {allPosts
        .sort(
          (a, b) =>
            new Date(b.publishedAtFormatted).valueOf() -
            new Date(a.publishedAtFormatted).valueOf()
        )
        .map((post) => (
          <div key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="hover:bg-zinc-100 dark:hover:bg-gray-800/60 hover:cursor-pointer hover:rounded-lg p-4 md:p-8 my-4 overflow-hidden flex flex-col"
            >
              <div className="text-slate-900 dark:text-sky-400 font-bold text-xl">
                {post.title}
              </div>
              <span className="text-slate-600 dark:text-slate-400 text-sm my-2">
                {post.publishedAtFormatted}
                <span className="mx-3">·</span>
                <ViewCounter trackView={false} slug={post.slug} />
              </span>
              <span className="text-slate-500 dark:text-white text-md">
                {post.summary}
              </span>
            </Link>
          </div>
        ))}
    </>
  );
}
