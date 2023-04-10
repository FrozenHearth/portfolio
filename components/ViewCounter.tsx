'use client';

import { useEffect } from 'react';
import useSWR from 'swr';
import LoadingDots from './LoadingDots';
import { useParams } from 'next/navigation';
import clsx from 'clsx';

async function fetcher<JSON>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}

type ViewCounterProps = {
  slug?: string | string[];
  trackView?: boolean;
};

type ViewCountData = {
  total: number;
};

export default function ViewCounter({
  slug,
  trackView = true,
}: ViewCounterProps) {
  const { data, isLoading } = useSWR<ViewCountData>(
    slug ? `/api/views/${slug}` : null,
    fetcher
  );
  const { slug: paramsSlug } = useParams() || {};
  const views = data?.total || 0;

  useEffect(() => {
    const hasViewedPage = localStorage.getItem('hasViewedPage');

    if (!hasViewedPage && trackView && slug) {
      fetch(`/api/views/${slug}`, {
        method: 'POST',
      });
    }
  }, [slug, trackView]);

  useEffect(() => {
    if (paramsSlug && !localStorage.getItem('hasViewedPage')) {
      localStorage.setItem(
        'hasViewedPage',
        JSON.stringify({ isVisited: true })
      );
    }
  }, [paramsSlug]);

  if (isLoading) {
    return <LoadingDots />;
  }

  const textStyle = clsx({
    'text-lg sm:text-xl font-semibold': !paramsSlug,
    'text-base text-slate-600 font-normal dark:text-slate-400': paramsSlug,
  });

  return <span className={textStyle}>{views.toLocaleString()} views</span>;
}
