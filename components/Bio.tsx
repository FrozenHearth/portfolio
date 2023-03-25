import Image from 'next/image';
import avatar from '../public/images/me.avif';

export default function Bio() {
  return (
    <div className="flex items-center flex-wrap gap-3">
      <Image
        style={{ height: 72 }}
        src={avatar}
        alt="Vishwanath B."
        className="rounded-full object-cover object-right-top mt-4 mb-0"
        width={72}
      />
      <div>
        <p className="text-slate-400 my-0">
          Personal blog by Vishwanath B. <br /> I blog about my random
          experiences in life and frontend stuff.
        </p>
      </div>
    </div>
  );
}
