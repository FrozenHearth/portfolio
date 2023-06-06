import Image from 'next/image';
import avatar from '@/public/images/me.avif';
import { createOgImage } from '@/lib/createOGImage';
import type { Metadata } from 'next';
import randomFiveDigitNumber from '@/lib/generateFiveDigitNumber';

const ogImage = createOgImage({
  title: 'Vishwanath B. | About Me',
  meta: ['Passionate frontend engineer'].join(''),
});

export const metadata: Metadata = {
  title: 'Vishwanath B. | About Me',
  description: 'Passionate front-end engineer',
  openGraph: {
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
  },
  twitter: {
    title: 'Vishwanath B.',
    card: 'summary_large_image',
    description: 'Passionate front-end engineer',
  },
};

export default function About() {
  return (
    <>
      <div className="max-w-2xl lg:max-w-full pt-6">
        <div className="grid grid-cols-1 gap-y-8 md:gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="max-w-xs px-2.5 md:pl-20 md:max-w-none md:ml-auto">
            <Image
              className='"aspect-square rotate-3 rounded-2xl object-cover bg-zinc-800'
              src={avatar}
              alt="Vishwanath B."
              priority
              width={400}
            />
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-3xl md:text-5xl text-slate-900 dark:text-white  font-bold leading-tight md:mt-4">
              {`Hi, I'm Vishwanath B. I live in Bengaluru, the Silicon Valley of India.`}
            </h1>
            <p className=" text-slate-600 dark:text-slate-300 mt-8 text-lg md:text-xl">
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
              build this website. For syntax highlighting, I used rehype +
              contentlayer for type-safe document schema.
            </p>
          </div>
        </div>
      </div>

      <hr className="h-px my-8 border-0 bg-gray-700"></hr>

      <h2 className="text-3xl md:text-4xl text-slate-900 dark:text-white  font-bold leading-tight md:mt-4">
        Stuff I know:
      </h2>

      <p className="text-slate-600 dark:text-slate-300 text-lg md:text-xl mt-4 block">
        HTML, CSS/SASS, Javascript/Typescript, React, Redux, Vue, Vuex, Next.js,
        Tailwind.
      </p>
    </>
  );
}
