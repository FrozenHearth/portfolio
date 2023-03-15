import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

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

export default function Blog({ posts }) {
  return (
    <div>
      <h1 className="text-4xl font-semibold">BLOG</h1>
      {posts.map(({ slug, frontmatter }) => (
        <div key={slug} className="my-4 overflow-hidden flex flex-col">
          <Link href={`/blog/${slug}`}>
            <h1>{frontmatter.title}</h1>
          </Link>
        </div>
      ))}
    </div>
  );
}
