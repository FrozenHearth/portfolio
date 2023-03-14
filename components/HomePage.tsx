import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      <h1 className="text-4xl font-semibold">Vishwanath B.</h1>
      <p className="my-5 text-slate-700">{`Hey, I'm Vishwanath. I'm a 27 y/o software engineer passionate about everything frontend.`}</p>
      <Image
        src="/images/me.jpeg" // Route of the image file
        height={100} // Desired size with correct aspect ratio
        width={100} // Desired size with correct aspect ratio
        alt="Vishwanath"
        priority
        className="rounded-full"
      />
      <p className="my-5 text-slate-700">
        I love contributing to open source, and tinkering with frontend
        technologies, always having the curiousity to learn something new.
        Currently, looking for a Frontend/Senior Frontend role at a medium sized
        startup/company.
      </p>

      <p className="my-5 text-lg font-semibold">Link to my resume below:</p>

      <button className="bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400">
        Download
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5 ml-4"
        >
          <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
          <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
        </svg>
      </button>
    </>
  );
}
