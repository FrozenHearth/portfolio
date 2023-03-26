import markdownToHtml from '@/lib/markdown';
import { getAllPosts, getPostBySlug } from '@/lib/post';
import { createOgImage } from '@/lib/createOGImage';
import Head from 'next/head';
import { useRouter } from 'next/router';

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
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.summary} />

        <meta
          property="og:url"
          content={`https://frozenhearth.vercel.app${router.asPath}`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.metaDesc} />
        <meta property="og:image" content={`${ogImage}?46578`} />
        <meta property="og:image:width" content="1600" />
        <meta property="og:image:height" content="836" />
        <meta property="og:image:alt" content={meta.title} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.metaDesc} />
        <meta name="twitter:image" content={`${ogImage}?46578`} />

        <meta property="article:published_time" content={meta.formattedDate} />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div className="prose prose-invert text-base md:text-lg mx-auto py-4 md:p-0">
        <header className="flex items-center mb-4">
          <span className="block h-4 w-0.5 rounded-full bg-zinc-500"></span>
          <span className="text-neutral-500 ml-3 rounded text-md inline-block">
            {meta.date}
          </span>
        </header>
        <h1 className="mb-0 text-zinc-100 text-3xl md:text-4xl font-bold tracking-tight">
          {meta.title}
        </h1>

        <article
          className="m-auto mb-4 sm:mb-8"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </>
  );
}
