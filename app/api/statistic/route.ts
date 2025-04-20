import { NextResponse } from 'next/server';
import { getAllEnvironments } from '@/lib/environments';

export const runtime = 'edge';

export async function GET() {
  const environments = getAllEnvironments();
  return NextResponse.json({ environments: environments.length });
}