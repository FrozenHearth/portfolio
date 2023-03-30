import { createOgImage } from '@/lib/createOGImage';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import randomFiveDigitNumber from '@/utils/generateFiveDigitNumber';
import { twitterSEODefaults } from '@/utils/seoDefaults';
import ViewCounter from '@/components/ViewCounter';
import { allPosts, type Post } from 'contentlayer/generated';
import { type GetStaticProps, type InferGetStaticPropsType } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { components } from '@/components/MDXComponents';

export async function getStaticPaths() {
  return {
    paths: allPosts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps<{
  post: Post;
}> = ({ params }) => {
  const post = allPosts.find((post) => post.slug === params?.slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
};

export default function PostPage({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const MDXContent = useMDXComponent(post.body.code);
  const router = useRouter();
  const ogImage = createOgImage({
    title: post.title,
    meta: ['frozenhearth.vercel.app', post.publishedAtFormatted].join(' · '),
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
              alt: post.title,
            },
          ],
          title: post.title,
          description: post.summary,
          url: `${process.env.NEXT_PUBLIC_URL}${router.asPath}`,
          type: 'article',
        }}
        twitter={twitterSEODefaults}
        title={post.title}
        description={post.summary}
      />
      <div className="prose prose-invert md:text-lg mx-auto py-4 md:p-0">
        <header className="flex items-center mb-4">
          <span className="text-slate-400 rounded text-sm inline-block">
            {post.publishedAtFormatted}
          </span>
          <span className="mx-3">·</span>
          <ViewCounter trackView slug={post.slug} />
        </header>
        <h1 className="mb-0 text-zinc-100 text-3xl md:text-4xl font-bold tracking-tight">
          {post.title}
        </h1>
        <article className="m-auto mb-4 sm:mb-8">
          <MDXContent components={{ ...components }} />
        </article>

        <footer>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://github.com/FrozenHearth/portfolio/blob/main/posts/${post.slug}.mdx`}
          >
            View on Github
          </a>
        </footer>
      </div>
    </>
  );
}
