import { BlogPostType } from '@/lib/types';
import Link from 'next/link';
import ViewCounter from './ViewCounter';

type BlogProps = {
  posts: BlogPostType[];
};

export default function BlogList({ posts }: BlogProps) {
  return (
    <>
      {posts
        .sort(
          (a, b) =>
            new Date(b.frontmatter.formattedDate).valueOf() -
            new Date(a.frontmatter.formattedDate).valueOf()
        )
        .map(({ slug, frontmatter }) => (
          <Link
            key={slug}
            href={`/blog/${slug}`}
            className="hover:bg-gray-800/50 hover:cursor-pointer hover:rounded-lg p-4 md:p-8 my-4 overflow-hidden flex flex-col"
          >
            <div className="text-sky-400 font-bold text-xl">
              {frontmatter.title}
            </div>
            <span className="text-slate-500 text-sm my-2">
              {frontmatter.date}
              <span className="mx-3">·</span>
              <ViewCounter trackView={false} slug={slug} />
            </span>
            <span className="text-white text-md">{frontmatter.summary}</span>
          </Link>
        ))}
    </>
  );
}
