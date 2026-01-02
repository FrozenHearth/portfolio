export default function Footer() {
  return (
    <footer className="mt-12 backdrop-blur bg-white/30 dark:bg-[#1f2028]/50 rounded-lg border border-slate-200/50 dark:border-slate-700/50">
      <div className="w-full mx-auto max-w-screen-xl p-4 flex justify-center">
        <span className="text-md text-gray-500 sm:text-center dark:text-gray-400">
          Made with Next.js, Tailwind, Contentlayer and Rehype.
        </span>
      </div>
    </footer>
  );
}
