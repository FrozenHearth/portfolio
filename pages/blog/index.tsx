import { createOgImage } from '@/lib/createOGImage';
import { NextSeo } from 'next-seo';
import randomFiveDigitNumber from '@/utils/generateFiveDigitNumber';
import { twitterSEODefaults } from '@/utils/seoDefaults';
import { allPosts, type Post } from 'contentlayer/generated';
import { type GetStaticProps, type InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import ViewCounter from '@/components/ViewCounter';

export const getStaticProps: GetStaticProps<{
  posts: Post[];
}> = () => {
  return { props: { posts: allPosts } };
};

export default function BlogListPage({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
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
        <h1 className="text-4xl md:text-7xl text-white font-semibold leading-tight md:mt-4">
          I write mainly about frontend engineering.
        </h1>
        <h2 className="text-slate-400 max-w-2xl text-lg md:text-xl my-0 mt-4 md:mt-8">
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
      {posts
        .sort(
          (a, b) =>
            new Date(b.publishedAtFormatted).valueOf() -
            new Date(a.publishedAtFormatted).valueOf()
        )
        .map((post) => (
          <div key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="hover:bg-gray-800/60 hover:cursor-pointer hover:rounded-lg p-4 md:p-8 my-4 overflow-hidden flex flex-col"
            >
              <div className="text-sky-400 font-bold text-xl">{post.title}</div>
              <span className="text-slate-400 text-sm my-2">
                {post.publishedAtFormatted}
                <span className="mx-3">·</span>
                <ViewCounter trackView={false} slug={post.slug} />
              </span>
              <span className="text-white text-md">{post.summary}</span>
            </Link>
          </div>
        ))}
    </>
  );
}
