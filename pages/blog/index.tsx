import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPostType } from '@/lib/types';
import { createOgImage } from '@/lib/createOGImage';
import BlogList from '@/components/BlogList';
import { NextSeo } from 'next-seo';
import randomFiveDigitNumber from '@/utils/generateFiveDigitNumber';
import { twitterSEODefaults } from '@/utils/seoDefaults';

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
    meta: ['frozenhearth.vercel.app/blog'].join(' · '),
  });
  return (
    <>
      <NextSeo
        openGraph={{
          images: [
            {
              url: `${ogImage}?${randomFiveDigitNumber()}`,
              width: 1600,
              height: 836,
              alt: 'Vishwanath B.',
            },
          ],
          title: 'Vishwanath B. | Blog',
          description:
            'Welcome to my blog. I write mainly about frontend stuff.',
          url: `${process.env.NEXT_PUBLIC_URL}/blog`,
        }}
        twitter={twitterSEODefaults}
        title="Vishwanath B."
        description="Welcome to my blog. I write mainly about frontend stuff."
      />
      <div className="mt-4 md:mt-10">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-5xl text-white font-semibold leading-tight md:mt-4">
            I write mainly about frontend engineering.
          </h1>
          <div className="mt-4 md:mt-8">
            <p className="text-slate-400 text-lg my-0">
              It is a platform for me to share my knowledge and experiences
              related to my career and technical interests. For more
              information, check out my{' '}
              <a
                href="https://linkedin.com/in/vishwanath-bhetanabhotla"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:underline"
              >
                Linkedin.
              </a>
            </p>
          </div>
        </div>
        <hr className="h-px mt-8 mb-4 border-0 bg-gray-700"></hr>

        <BlogList posts={posts} />
      </div>
    </>
  );
}
