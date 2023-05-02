import { CopyToClipboard } from './CopyToClipboard';

type PreProps = {
  children: React.ReactNode;
  raw: string;
};

export default function Pre({ children, raw, ...props }: PreProps) {
  return (
    <div className="relative">
      <pre {...props}>{children}</pre>
      <CopyToClipboard text={raw} />
    </div>
  );
}
