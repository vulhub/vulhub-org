"use client";

import { useEffect, useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export function RelativeTime({
  date,
  fallback,
  className,
}: {
  date: string;
  fallback: string;
  className?: string;
}) {
  const [relativeTime, setRelativeTime] = useState<string | null>(null);

  useEffect(() => {
    setRelativeTime(dayjs(date).fromNow());
  }, [date]);

  return (
    <span className={className} title={dayjs(date).format()}>
      Created {relativeTime || fallback}
    </span>
  );
}
