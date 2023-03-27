import { createOgImage } from '@/lib/createOGImage';
import Head from 'next/head';
import Image from 'next/image';
import avatar from '../../public/images/me.avif';

export default function About() {
  const ogImage = createOgImage({
    title: 'Vishwanath B. | About Me',
    meta: ['frozenhearth.vercel.app'].join(' · '),
  });
  return (
    <>
      <Head>
        <title>Vishwanath B. | About Me</title>
        <meta name="description" content="Passionate front-end engineer" />

        <meta
          property="og:url"
          content="https://frozenhearth.vercel.app/about"
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Vishwanath B. | About Me" />
        <meta
          property="og:description"
          content="Passionate front-end engineer"
        />
        <meta property="og:image" content={`${ogImage}?46578`} />
        <meta property="og:image:width" content="1600" />
        <meta property="og:image:height" content="836" />
        <meta property="og:image:alt" content="Vishwanath B." />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vishwanath B. | About Me" />
        <meta
          name="twitter:description"
          content="Passionate front-end engineer"
        />
        <meta name="twitter:image" content={`${ogImage}?46578`} />
      </Head>

      <div className="max-w-2xl lg:max-w-full pt-6">
        <div className="grid grid-cols-1 gap-y-8 md:gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="max-w-xs px-2.5 lg:pl-20 lg:max-w-none">
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
              I started out as a fullstack intern at Red Hat, although most of
              my work was frontend. I learnt Angular, Typescript, Mocha,
              Node.js, MongoDB and GraphQL on the job, successfully delivering a
              webapp for the internal teams at Red Hat.
              <br />
              <br />
              {`After my internship at Red Hat, I worked at a
        couple of small startups, where I worked with Vue, Vuex, Nuxt, React, Redux, etc. Transitioning
        from a big company to a small startup was an overwhelming change. It was a tremendous learning experience, as I
        got to witness firsthand the inner workings of a bootstrapped startup. I built a few frontend webapps from scratch, ranging from a Trello-like platform for C-suite executives to Udemy-like learning platform for senior citizens.`}
              <br />
              <br />
              {`I then worked at Byju's for a year and 9 months on Byju's Classes, 
              built with React, Redux, Bootstrap, Storybook and Agora. 
              Perhaps the most fun, memorable and chaotic memory
        was fixing a Webpack build error, which broke the background image for
        one of the most important parts of our webapp. After hours of debugging
        with the team, frantically searching on Stackoverflow and reading the
        documentation, I figured out the fix, which saved tons of money for the
        company, and prevented delays in our production launch.`}
            </p>
          </div>
        </div>
      </div>

      <hr className="h-px my-8 border-0 bg-gray-700"></hr>

      <h1 className="text-3xl md:text-4xl text-white font-semibold leading-tight md:mt-4">
        Stuff I know:
      </h1>

      <p className="text-slate-400 mt-4 block">
        HTML, CSS/SASS, Javascript/Typescript, React, Redux, Vue, Vuex, Next.js.
      </p>
    </>
  );
}
