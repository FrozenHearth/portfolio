import Image from 'next/image';
import BrandLogo from './BrandLogo';
import avatar from '@/public/images/me.avif';

export const components = {
  BrandLogo,
  CustomAvatar: () => {
    return (
      <div className="flex items-center gap-3 font-medium -my-5">
        <Image
          src={avatar}
          style={{ width: 36, height: 36 }}
          alt="Vishwanath B."
          className="rounded-full object-right-top object-cover"
          priority
        />
        <div className="text-sm">
          <h6 className="text-slate-200">Vishwanath</h6>
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
  },
};
