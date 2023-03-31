import { allPosts } from '@/.contentlayer/generated';
import { createOgImage } from '@/lib/createOGImage';
import randomFiveDigitNumber from '@/utils/generateFiveDigitNumber';
import { NextSeo } from 'next-seo';

type Params = {
  params: {
    slug: string;
  };
};

export default async function Head({ params }: Params) {
  const post = allPosts.find((post) => post.slug === params.slug);
  const ogImage = createOgImage({
    title: 'Vishwanath B. | Blog',
    meta: ['frozenhearth.vercel.app/blog'].join(' · '),
  });
  return (
    <NextSeo
      useAppDir={true}
      openGraph={{
        images: [
          {
            url: `${ogImage}?${randomFiveDigitNumber()}`,
            width: 1600,
            height: 836,
            alt: post?.title,
          },
        ],
        title: post?.title,
        description: post?.summary,
        url: `${process.env.NEXT_PUBLIC_URL}/${post?.slug}`,
        type: 'article',
      }}
      title={post?.title}
      description={post?.summary}
    />
  );
}
