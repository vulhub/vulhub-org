"use client";

import { useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export function RelativeTime({
  date,
  className,
}: {
  date: string;
  className?: string;
}) {
  const initialTime = dayjs(date);
  const relativeTimeString = initialTime.fromNow();

  return (
    <span className={className} title={initialTime.format()}>
      Created {relativeTimeString}
    </span>
  );
}
