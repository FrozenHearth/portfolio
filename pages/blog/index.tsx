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
      <h1 className="text-3xl sm:text-4xl font-semibold text-white">My Blog</h1>
      <p className="my-2 text-slate-400 text-xl">
        I write about everything from Javascript to random experiences in my
        life.
      </p>
      <hr className="h-px mt-8 mb-4 border-0 bg-gray-700"></hr>

      {posts.map(({ slug, frontmatter }) => (
        <div key={slug} className="my-4 overflow-hidden flex flex-col">
          <span className="text-neutral-500 text-xs mb-2">
            {frontmatter.date}
          </span>
          <Link
            className="font-semibold text-white text-lg hover:underline"
            href={`/blog/${slug}`}
          >
            {frontmatter.title}
          </Link>
        </div>
      ))}
    </div>
  );
}
