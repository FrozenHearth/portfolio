import { allPosts } from '@/.contentlayer/generated';
import ActiveLink from './common/ActiveLink';

export default function Sidebar() {
  return (
    <aside className="hidden lg:block col-span-3 pr-4 sticky-top-sidebar overflow-y-auto">
      <nav>
        <h1 className="mb-0 dark:text-zinc-100 text-xl md:text-2xl font-bold tracking-tight">
          Recent posts
        </h1>
        <ul className="mt-4 flex flex-col gap-2 max-h-[80vh] overflow-auto">
          {allPosts.map((item) => (
            <ActiveLink
              className="text-sky-500"
              key={item.slug}
              href={`/blog/${item.slug}`}
            >
              {item.title}
            </ActiveLink>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
