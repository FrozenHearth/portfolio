import Bio from '@/components/Bio';
import markdownToHtml from '@/lib/markdown';
import { getAllPosts, getPostBySlug } from '@/lib/post';
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
  };
  content: string;
}

export default function PostPage({ meta, content }: PostPageProps) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.summary} />
        <meta property="og:title" content={meta.title} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.metaDesc} />
        <meta property="og:description" content={meta.metaDesc} />
        <meta
          property="og:url"
          content={`https://frozenhearth-io.vercel.app${router.asPath}`}
        />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={meta.formattedDate} />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div className="prose prose-invert mx-auto py-4 md:p-0">
        <h1 className="mb-0">{meta.title}</h1>
        <span className="text-neutral-500 mt-0 sm:mt-2 rounded text-sm inline-block">
          {meta.date}
        </span>
        <article
          className="m-auto mb-4 sm:mb-8 sm:-mt-8 min-[320px]:-mt-4"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <Bio />
      </div>
    </>
  );
}
