import { createOgImage } from '@/lib/createOGImage';
import randomFiveDigitNumber from '@/utils/generateFiveDigitNumber';
import { twitterSEODefaults } from '@/utils/seoDefaults';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import avatar from '../../public/images/me.avif';

export default function About() {
  const ogImage = createOgImage({
    title: 'Vishwanath B. | About Me',
    meta: ['frozenhearth.vercel.app'].join(' · '),
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
          title: 'Vishwanath B. | About Me',
          description: 'Passionate front-end engineer',
          url: `${process.env.NEXT_PUBLIC_URL}/about`,
        }}
        twitter={twitterSEODefaults}
        title="Vishwanath B. | About Me"
        description="Passionate front-end engineer"
      />
      <div className="max-w-2xl lg:max-w-full pt-6">
        <div className="grid grid-cols-1 gap-y-8 md:gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="max-w-xs px-2.5 md:pl-20 md:max-w-none">
            <Image
              className='"aspect-square rotate-3 rounded-2xl object-cover bg-zinc-800'
              src={avatar}
              alt="Vishwanath B."
              priority
              width={400}
            />
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-3xl md:text-5xl text-white font-semibold leading-tight md:mt-4">
              {`Hi, I'm Vishwanath B. I live in Bengaluru, the Silicon Valley of India.`}
            </h1>
            <p className="text-slate-400 mt-8 text-lg">
              After completing my final year project in undergrad, I discovered
              my passion for frontend engineering. Since then, I have been on a
              continuous learning journey.
              <br />
              <br />
              With 3 and a half years of experience, I am obsessed with crafting
              pixel-perfect UIs. I am proficient in HTML, CSS,
              JavaScript/TypeScript, and have worked with Angular, React, and
              Vue in my career. Additionally, I have dabbled with Node.js,
              GraphQL, and MongoDB for a short period of time.
              <br />
              <br />
              Recently, I started learning Next.js and Tailwind and used them to
              build this website. For syntax highlighting, I used graymatter,
              remark, and rehype, along with a few other plugins
            </p>
          </div>
        </div>
      </div>

      <hr className="h-px my-8 border-0 bg-gray-700"></hr>

      <h1 className="text-3xl md:text-4xl text-white font-semibold leading-tight md:mt-4">
        Stuff I know:
      </h1>

      <p className="text-slate-400 mt-4 block">
        HTML, CSS/SASS, Javascript/Typescript, React, Redux, Vue, Vuex, Next.js,
        Tailwind.
      </p>
    </>
  );
}
