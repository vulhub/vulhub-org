"use client";

import { Shield } from "lucide-react";
import { useEffect, useState } from "react";
import { useI18n } from '@/locales/client';

export function GithubStats() {
  const t = useI18n();
  const [stats, setStats] = useState<{ count: number, stars: number | null; forks: number | null }>({ count: 0, stars: null, forks: null });

  useEffect(() => {
    fetch("/api/statistic")
      .then((res) => res.json())
      .then((data) => setStats({ count: data.environments, stars: data.stars, forks: data.forks }))
      .catch(() => setStats({ count: 0, stars: null, forks: null }));
  }, []);

  return (
    <div className="flex items-center text-slate-400 text-sm">
      <Shield className="mr-2 h-4 w-4" />
      <span>{stats.stars !== null ? `${(stats.stars / 1000).toFixed(1)}k+ Stars` : "- Stars"}</span>
      <span className="mx-2">•</span>
      <span>{stats.forks !== null ? `${(stats.forks / 1000).toFixed(1)}k+ Forks` : "- Forks"}</span>
      <span className="mx-2">•</span>
      <span>{t('stats.environments', { count: stats.count })}</span>
    </div>
  );
} 