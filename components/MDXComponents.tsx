import BrandLogo from './BrandLogo';
import Pre from './Pre';
import { useMDXComponent } from 'next-contentlayer/hooks';
import CustomAvatar from './CustomAvatar';

const components = {
  pre: Pre,
  BrandLogo,
  CustomAvatar,
};

export default function MarkdownContent({ code }: { code: string }) {
  const MDXContent = useMDXComponent(code);

  // @ts-ignore
  return <MDXContent components={components} />;
}
