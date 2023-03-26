import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { BlogPostType } from '@/lib/types';
import Bio from '@/components/Bio';
import { createOgImage } from '@/lib/createOGImage';
import Head from 'next/head';

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
  const ogImage = createOgImage({
    title: 'Vishwanath B. | Blog',
    meta: ['frozenhearth.vercel.app'].join(' · '),
  });
  return (
    <>
      <Head>
        <title>Vishwanath B. | Blog</title>
        <meta
          name="description"
          content="Welcome to my blog. I write mainly about frontend stuff."
        />

        <meta
          property="og:url"
          content="https://frozenhearth.vercel.app/blog"
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Vishwanath B." />
        <meta
          property="og:description"
          content="Welcome to my blog. I write mainly about frontend stuff."
        />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1600" />
        <meta property="og:image:height" content="836" />
        <meta property="og:image:alt" content="Vishwanath B." />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vishwanath B. | Blog" />
        <meta
          name="twitter:description"
          content="Welcome to my blog. I write mainly about frontend stuff."
        />
        <meta name="twitter:image" content={ogImage} />
      </Head>
      <div>
        <h1 className="text-fuchsia-300 text-3xl sm:text-4xl font-bold py-4 md:p-0">
          My Blog
        </h1>
        <Bio />
        <hr className="h-px mt-8 mb-4 border-0 bg-gray-700"></hr>

        {posts
          .sort(
            (a, b) =>
              new Date(b.frontmatter.formattedDate).valueOf() -
              new Date(a.frontmatter.formattedDate).valueOf()
          )
          .map(({ slug, frontmatter }) => (
            <div key={slug} className="my-8 overflow-hidden flex flex-col">
              <Link
                className="text-fuchsia-400 font-extrabold text-2xl hover:underline"
                href={`/blog/${slug}`}
              >
                {frontmatter.title}
              </Link>
              <span className="text-neutral-500 text-sm my-2">
                {frontmatter.date}
              </span>
              <span className="text-white text-md">{frontmatter.summary}</span>
            </div>
          ))}
      </div>
    </>
  );
}
