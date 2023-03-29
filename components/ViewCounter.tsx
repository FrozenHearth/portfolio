'use client';

import { useEffect } from 'react';
import useSWR from 'swr';
import { LoadingDots } from './LoadingDots';

async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}

type ViewCountData = {
  total: number;
};

export default function ViewCounter({
  slug,
  trackView,
}: {
  slug: string | string[] | undefined;
  trackView: boolean;
}) {
  const { data, isLoading } = useSWR<ViewCountData>(
    `/api/views/${slug}`,
    fetcher
  );
  const views = (data && new Number(data.total)) || 0;

  useEffect(() => {
    const registerView = () =>
      fetch(`/api/views/${slug}`, {
        method: 'POST',
      });

    if (trackView) {
      registerView();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  if (isLoading)
    return (
      <>
        <LoadingDots />
      </>
    );

  return (
    <span className="text-sm text-slate-500">
      {data ? `${views.toLocaleString()} views` : '​'}
    </span>
  );
}
