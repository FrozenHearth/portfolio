import { GithubButton, ResumeButton } from './Buttons';

export default function HomePage() {
  return (
    <>
      <header className="mt-0 pt-2 md:pt-6 md:flex md:flex-col md:items-center">
        <h1 className="text-4xl md:text-7xl text-slate-900 dark:text-white md:text-center font-bold leading-tight mt-4">
          Frontend engineer, hobbyist guitarist and a space lover.
        </h1>
        <h2 className="md:max-w-2xl text-slate-600 dark:text-slate-400 mt-4 md:mt-6 text-lg md:text-xl">
          {`I'm Vishwanath - a passionate frontend engineer, with 3 and a half years of experience,
           currently looking for a Senior Frontend role at a 
           medium sized startup/company like Cred/Groww/Razorpay etc.`}
        </h2>
        <div className="block mt-8 md:mt-0 md:flex gap-3">
          <ResumeButton />
          <GithubButton />
        </div>
      </header>
    </>
  );
}
