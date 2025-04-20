let githubStatsCache: { stars: number; forks: number } | null = null;
let githubStatsCacheTime: number | null = null;
const cacheTime = 3600000; // 1 hour

export async function fetchGithubStats(token: string): Promise<{ stars: number; forks: number } | null> {
  const now = Date.now();
  if (githubStatsCache && githubStatsCacheTime && now - githubStatsCacheTime < cacheTime) {
    return githubStatsCache;
  }
  try {
    const headers: Record<string, string> = {
      'Accept': 'application/vnd.github.v3+json',
      'Authorization': `token ${token}`,
    };
    const res = await fetch('https://api.github.com/repos/vulhub/vulhub', {
      headers,
    });
    if (!res.ok) return githubStatsCache;
    const data = (await res.json()) as { stargazers_count: number, forks_count: number };
    githubStatsCache = {
      stars: data.stargazers_count,
      forks: data.forks_count,
    };
    githubStatsCacheTime = now;
    return githubStatsCache;
  } catch {
    return githubStatsCache;
  }
}
