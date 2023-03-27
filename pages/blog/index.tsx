import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { BlogPostType } from '@/lib/types';
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
        <meta property="og:image" content={`${ogImage}?46578`} />
        <meta property="og:image:width" content="1600" />
        <meta property="og:image:height" content="836" />
        <meta property="og:image:alt" content="Vishwanath B." />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vishwanath B. | Blog" />
        <meta
          name="twitter:description"
          content="Welcome to my blog. I write mainly about frontend stuff."
        />
        <meta name="twitter:image" content={`${ogImage}?46578`} />
      </Head>
      <div className="mt-4 md:mt-10">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-5xl text-white font-semibold leading-tight md:mt-4">
            I write mainly about frontend engineering, and random experiences in
            my life.
          </h1>
          <div className="mt-4 md:mt-8">
            <p className="text-slate-400 text-lg my-0">
              My learnings about commonly asked concepts in Javascript
              interviews explained in the simplest way possible. Sometimes, I
              also write about day-to-day experiences.
            </p>
          </div>
        </div>
        <hr className="h-px mt-8 mb-4 border-0 bg-gray-700"></hr>

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
              className="hover:bg-zinc-800/50 hover:cursor-pointer hover:rounded-lg p-4 md:p-8 my-4 overflow-hidden flex flex-col"
            >
              <div className="text-white font-bold text-xl">
                {frontmatter.title}
              </div>
              <span className="text-slate-500 text-sm my-2">
                {frontmatter.date}
              </span>
              <span className="text-sky-400 text-md">
                {frontmatter.summary}
              </span>
            </Link>
          ))}
      </div>
    </>
  );
}
