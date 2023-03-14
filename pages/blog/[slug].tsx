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
      <div className="prose dark mx-auto">
        <h1>{meta.title}</h1>
        <article
          className="m-auto my-4 sm:my-16"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </>
  );
}
