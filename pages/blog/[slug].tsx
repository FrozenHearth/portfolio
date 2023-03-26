import Bio from '@/components/Bio';
import markdownToHtml from '@/lib/markdown';
import { getAllPosts, getPostBySlug } from '@/lib/post';
import Head from 'next/head';

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
  };
  content: string;
}

export default function PostPage({ meta, content }: PostPageProps) {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
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
