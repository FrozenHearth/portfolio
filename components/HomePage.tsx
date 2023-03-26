import ActionButtons from './ActionButtons';

export default function HomePage() {
  return (
    <>
      <h1 className="text-fuchsia-300 sm:text-4xl text-3xl font-extrabold">{`Hi, I'm Vishwanath - a 27 y/o passionate frontend engineer.`}</h1>
      <p className="text-slate-300 mt-4 sm:mt-8">
        I have a total of 3 and a half yrs of experience. I love contributing to
        open source, and tinkering with frontend technologies, always having the
        curiousity to learn something new. You can check out my work at Github,
        follow me on Linkedin and download my updated resume below.
      </p>
      <br />
      <p className="text-fuchsia-400 mb-8 italic font-semibold">
        Currently looking for a Senior Frontend role at a medium sized
        startup/company like Razorpay/Cred/Groww etc.
      </p>
      <div className="flex flex-col sm:flex sm:flex-row gap-3">
        <ActionButtons />
      </div>
    </>
  );
}
