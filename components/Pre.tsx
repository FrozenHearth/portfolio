import { CopyButton } from './CopyButton';

type PreProps = {
  children: React.ReactNode;
  raw: string;
  // Add other props as needed
};

export default function Pre({ children, raw, ...props }: PreProps) {
  return (
    <div className="relative">
      <pre {...props}>{children}</pre>
      <CopyButton text={raw} />
    </div>
  );
}
