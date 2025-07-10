import { memo } from 'react';

const LoadingDots = memo(function LoadingDots() {
  return (
    <span 
      className="inline-flex items-center gap-1"
      aria-label="Loading"
      role="status"
    >
      <span className="sr-only">Loading...</span>
      <span 
        className="w-1 h-1 bg-slate-400 rounded-full animate-pulse"
        style={{ animationDelay: '0ms' }}
      />
      <span 
        className="w-1 h-1 bg-slate-400 rounded-full animate-pulse"
        style={{ animationDelay: '150ms' }}
      />
      <span 
        className="w-1 h-1 bg-slate-400 rounded-full animate-pulse"
        style={{ animationDelay: '300ms' }}
      />
    </span>
  );
});

export default LoadingDots;
