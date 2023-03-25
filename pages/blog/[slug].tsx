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

export async function getStaticProps({ params: { slug } }) {
  const post = getPostBySlug(slug);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      ...post,
      content,
    },
  };
}

export default function PostPage({ meta, content }) {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <div className="prose prose-invert mx-auto py-4 md:p-0">
        <h1 className="mb-0">{meta.title}</h1>
        <span className="text-neutral-500 rounded p-1 text-sm">
          {meta.date}
        </span>
        <article
          className="m-auto mb-4 sm:mb-16 sm:-mt-8 min-[320px]:-mt-4"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </>
  );
}
