import { createOgImage } from '@/lib/createOGImage';
import Head from 'next/head';

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
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1600" />
        <meta property="og:image:height" content="836" />
        <meta property="og:image:alt" content="Vishwanath B." />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vishwanath B. | About Me" />
        <meta
          name="twitter:description"
          content="Passionate front-end engineer"
        />
        <meta name="twitter:image" content={ogImage} />
      </Head>
      <h1 className="py-4 md:p-0 text-fuchsia-300 sm:text-4xl text-3xl font-bold">
        About Me
      </h1>

      <p className="text-slate-300 mt-4">
        I started out as a fullstack intern at Red Hat, although most of my work
        was frontend. I learnt Angular, Typescript, Mocha, Node.js, MongoDB and
        GraphQL on the job, successfully delivering a webapp for the internal
        teams at Red Hat.
        <br />
        <br />
        {`After my internship at Red Hat, I finished my Masters, and worked at a
        couple of small startups, namely Bots N' Brains and Zaya Learning Labs,
        where I worked with Vue, Vuex, Nuxt, React, Redux, etc. Transitioning
        from a big company like Red Hat to a small startup was an extreme change
        - but a necessary one. I got to singlehandedly build the frontend of
        Bots N' Brains product known as PIVA. Although this stint at Bots N'
        Brains lasted only 4 months, it was a tremendous learning experience. I
        got to witness firsthand the inner workings of a bootstrapped startup.`}
        <br />
        <br />
        Post my short stint, I worked for one year with a team of talented
        engineers to build a few webapps, the most notable one being Getsetup,
        which is like Udemy for senior citizens, taught by senior citizens
        themselves. I also worked on a product called Headroom, which was a
        platform for C-suites to book personal assistants, as well as monitor
        their work.
        <br />
        <br />
        {`I then worked at Byju's for a year and 9 months on Byju's Classes.
        I used React, Redux, Bootstrap, Storybook and Agora to create the
        frontend for these. Perhaps the most fun, memorable and chaotic memory
        was fixing a Webpack build error, which broke the background image for
        one of the most important parts of our webapp. After hours of debugging
        with the team, frantically searching on Stackoverflow and reading the
        documentation, I figured out the fix, which saved tons of money for the
        company, and prevented delays in our production launch.`}
      </p>

      <hr className="h-px my-8 border-0 bg-gray-700"></hr>

      <h1 className="text-fuchsia-400 sm:text-2xl text-xl mt-8 font-extrabold">
        Stuff I know:
      </h1>

      <p className="text-slate-300 mt-4 block">
        HTML, CSS/SASS, Javascript/Typescript, React, Redux, Vue, Vuex, Next.js.
      </p>
    </>
  );
}
