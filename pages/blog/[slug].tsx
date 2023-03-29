import markdownToHtml from '@/lib/markdown';
import { getAllPosts, getPostBySlug } from '@/lib/post';
import { createOgImage } from '@/lib/createOGImage';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import randomFiveDigitNumber from '@/utils/generateFiveDigitNumber';
import { twitterSEODefaults } from '@/utils/seoDefaults';
import ViewCounter from '@/components/ViewCounter';

export async function getStaticPaths() {
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: 'blocking',
  };
}

export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(slug);
  const content = await markdownToHtml(post.content || '');

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ...post,
      content,
    },
  };
}

interface PostPageProps {
  meta: {
    title: string;
    date: string;
    summary: string;
    metaDesc: string;
    formattedDate: string;
    tags: string[];
  };
  content: string;
}

export default function PostPage({ meta, content }: PostPageProps) {
  const router = useRouter();
  const ogImage = createOgImage({
    title: meta.title,
    meta: ['frozenhearth.vercel.app', meta.formattedDate].join(' · '),
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
              alt: meta.title,
            },
          ],
          title: meta.title,
          description: meta.summary,
          url: `${process.env.NEXT_PUBLIC_URL}${router.asPath}`,
          type: 'article',
        }}
        twitter={twitterSEODefaults}
        title={meta.title}
        description={meta.summary}
      />
      <div className="prose prose-invert text-base md:text-lg mx-auto py-4 md:p-0">
        <header className="flex items-center mb-4">
          <span className="block h-4 w-0.5 rounded-full bg-zinc-500"></span>
          <span className="text-slate-500 ml-3 rounded text-sm inline-block">
            {meta.date}
          </span>
          <span className="mx-3">·</span>
          <ViewCounter trackView slug={router.query.slug} />
        </header>
        <h1 className="mb-0 text-zinc-100 text-3xl md:text-4xl font-bold tracking-tight">
          {meta.title}
        </h1>

        <article
          className="m-auto mb-4 sm:mb-8"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <footer>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://github.com/FrozenHearth/portfolio/blob/main/posts/${router.query.slug}.md`}
          >
            View on Github
          </a>
        </footer>
      </div>
    </>
  );
}
