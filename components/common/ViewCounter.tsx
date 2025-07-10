'use client';

import { useEffect, memo, useCallback } from 'react';
import useSWR from 'swr';
import LoadingDots from './LoadingDots';
import { useParams } from 'next/navigation';
import clsx from 'clsx';

// Optimized fetcher with better error handling
const fetcher = async <T,>(url: string): Promise<T> => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Failed to fetch');
  }
  return res.json();
};

type ViewCounterProps = {
  slug?: string | string[];
  trackView?: boolean;
};

type ViewCountData = {
  total: number;
};

const ViewCounter = memo(function ViewCounter({
  slug,
  trackView = true,
}: ViewCounterProps) {
  const { data, isLoading, error } = useSWR<ViewCountData>(
    slug ? `/api/views/${slug}` : null,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      dedupingInterval: 60000, // 1 minute
    }
  );
  const { slug: paramsSlug } = useParams() || {};
  const views = data?.total || 0;

  // Memoize the track view function
  const trackViewFunction = useCallback(() => {
    if (trackView && slug) {
      fetch(`/api/views/${slug}`, {
        method: 'POST',
      }).catch(() => {
        // Silently handle errors for analytics
      });
    }
  }, [slug, trackView]);

  useEffect(() => {
    trackViewFunction();
  }, [trackViewFunction]);

  if (error) {
    return <span className="text-slate-400">-- views</span>;
  }

  if (isLoading) {
    return <LoadingDots />;
  }

  const textStyle = clsx({
    'text-lg sm:text-xl font-semibold': !paramsSlug,
    'text-base text-slate-600 font-normal dark:text-slate-400': paramsSlug,
  });

  return <span className={textStyle}>{views.toLocaleString()} views</span>;
});

export default ViewCounter;
