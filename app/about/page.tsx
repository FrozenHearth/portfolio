/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import avatar from '@/public/images/me.avif';
import { createOgImage } from '@/lib/createOGImage';
import type { Metadata } from 'next';
import randomFiveDigitNumber from '@/lib/generateFiveDigitNumber';

export async function generateMetadata(): Promise<Metadata> {
  const ogImage = createOgImage({
    title: 'Vishwanath B. | About Me',
    meta: ['A few things about me'].join(''),
  });
  return {
    title: 'Vishwanath B. | About Me',
    description: 'Welcome to my about page.',
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'
    ),
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
      description: 'Welcome to my about page.',
      url: `${process.env.NEXT_PUBLIC_URL}/about`,
    },
    twitter: {
      title: 'Vishwanath B.',
      card: 'summary_large_image',
      description: 'Welcome to my about page.',
    },
  };
}

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
            <h1 className="text-3xl md:text-5xl text-slate-900 dark:text-white font-medium leading-tight md:mt-4">
              {`Hi, I'm Vishwanath, a Senior Frontend Engineer at`}{' '}
              <a
                href="https://www.reltio.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-500"
              >
                Reltio
              </a>
              . 👋
            </h1>
            <p className=" text-slate-600 dark:text-slate-300 mt-8 text-lg md:text-xl">
              After completing my final year project in undergrad, I discovered
              my passion for frontend. Since then, I have been on a continuous
              learning journey.
              <br />
              <br />
              My engineering career began in 2018, where I was a fullstack
              intern at RedHat. After which I worked at various startups,
              spanning from edtech/patenting industries to huge logistics
              players like Delhivery, all of which were majorly UI roles,
              although at Delhivery I was lucky enough to work fullstack when
              the need arose. Recently, I joined Reltio as a Senior Frontend
              Engineer, trying to learn some new tech whenever I get time,
              especially AI/ML.
              <br />
              <br />
              I'm obsessed with crafting pixel-perfect UIs, proficient in
              Javascript/Typescript, and have used React, Next.js, Vue & Angular
              for the UI, while working fullstack occasionally with
              Node(Express), Java(Springboot) and Python(Flask/FastAPI).
            </p>
          </div>
        </div>
      </div>

      <hr className="h-px my-8 border-0 bg-gray-700"></hr>

      <h2 className="text-3xl md:text-4xl text-slate-900 dark:text-white font-medium leading-tight md:mt-4">
        Things I am currently learning:
      </h2>

      <p className="text-slate-600 dark:text-slate-300 text-lg md:text-xl mt-4 block">
        Kafka, AWS, Docker, AI/ML, LLMs
      </p>
    </>
  );
}
