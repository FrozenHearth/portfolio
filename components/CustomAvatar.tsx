import Image from 'next/image';
import avatar from '@/public/images/me.avif';

export default function CustomAvatar() {
  return (
    <div className="flex items-center gap-3 font-medium -my-8">
      <Image
        src={avatar}
        style={{ width: 36, height: 36 }}
        alt="Vishwanath B."
        className="rounded-full object-right-top object-cover"
        priority
      />
      <div className="text-sm">
        <h6 className="text-slate-600 dark:text-slate-200">Vishwanath</h6>
        <a
          className="text-sky-500 no-underline"
          rel="noopener noreferrer"
          target="_blank"
          href="https://twitter.com/FrozenInRetro"
        >
          @frozeninretro
        </a>
      </div>
    </div>
  );
}
