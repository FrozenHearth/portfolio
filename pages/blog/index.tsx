import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { BlogPostType } from '@/lib/types';

export async function getStaticProps() {
  const fileNames = fs.readdirSync(path.join(process.cwd(), 'posts'));
  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const mdWithMeta = fs.readFileSync(
      path.join(process.cwd(), 'posts', fileName),
      'utf-8'
    );
    const { data: frontmatter } = matter(mdWithMeta);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

type BlogProps = {
  posts: BlogPostType[];
};

export default function Blog({ posts }: BlogProps) {
  return (
    <div>
      <h1 className="text-4xl font-semibold">BLOG</h1>
      {posts.map(({ slug, frontmatter }) => (
        <div key={slug} className="my-4 overflow-hidden flex flex-col">
          <span className="text-slate-400 text-xs mb-2">
            {frontmatter.date}
          </span>
          <Link
            className="font-semibold text-lg hover:underline"
            href={`/blog/${slug}`}
          >
            {frontmatter.title}
          </Link>
          <p className="text-slate-500 text-sm mt-2">{frontmatter.summary}</p>
        </div>
      ))}
    </div>
  );
}
