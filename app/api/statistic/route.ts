import { NextResponse } from 'next/server';
import { getAllEnvironments } from '@/lib/environments';
import { fetchGithubStats } from '@/lib/github';

export const runtime = 'edge';

export async function GET() {
  const environments = getAllEnvironments();
  const githubStats = await fetchGithubStats(process.env.GITHUB_TOKEN ?? "");
  return NextResponse.json({
    environments: environments.length,
    stars: githubStats?.stars ?? null,
    forks: githubStats?.forks ?? null,
  });
}