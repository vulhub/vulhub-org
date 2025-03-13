import fs from 'fs';
import path from 'path';
import dayjs, { Dayjs } from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export interface Environment {
  name: string;
  cve: string[];
  app: string;
  path: string;
  tags: string[];
  date: Dayjs;
}

// Define the structure of the parsed JSON file
interface JsonData {
  environment: Array<Environment>;
}

function jsonDateReviver(key: string, value: any) {
  if (typeof value === 'string' && key === 'date') {
    return dayjs(value);
  }
  return value;
}

function loadEnvironments(): Environment[] {
  const filePath = path.join(process.cwd(), 'lib', 'environments.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const parsed = JSON.parse(fileContents, jsonDateReviver) as JsonData;
  // Sort environments by date from newest to oldest
  return parsed.environment.sort((a, b) => {
    if (a.date.isAfter(b.date)) return -1;
    if (a.date.isBefore(b.date)) return 1;
    return 0;
  });
}

function loadAllTags(): string[] {
  const tagsSet = new Set<string>();
  
  environments.forEach(env => {
    env.tags.forEach(tag => tagsSet.add(tag));
  });
  
  return Array.from(tagsSet).sort();
}

const environments = loadEnvironments();
const tags = loadAllTags();

// Get popular environments (for the homepage)
export function getPopularEnvironments(limit: number = 6): Environment[] {
  // Sort by a combination of factors (in a real app, this might be based on views, stars, etc.)
  // For now, we'll just shuffle and take the first few
  const shuffled = [...environments].sort(() => 0.5 - Math.random());
  
  return shuffled.slice(0, limit);
}

export function getLatestEnvironments(limit: number = 6): Environment[] {
  return environments.slice(0, limit);
}

// Get all unique tags from environments
export function getAllTags(): string[] {
  return tags;
}

export function getAllEnvironments(): Environment[] {
  return environments;
}

// Get environments grouped by tag
export function getEnvironmentsByTag(name: string): Environment[] {
  return environments.filter(env => env.tags.includes(name));
}

// Search environments by query and tag
export function searchEnvironments(query: string = '', tag: string = 'all'): Environment[] {
  let results = [...environments];
  
  // Filter by tag if not 'all'
  if (tag !== 'all') {
    results = results.filter(env => env.tags.includes(tag));
  }
  
  // Filter by search query if provided
  if (query.trim() !== '') {
    const searchTerms = query.toLowerCase().trim().split(/\s+/);
    results = results.filter(env => {
      // Search in name, app, and CVE
      const searchableText = [
        env.name.toLowerCase(),
        env.app.toLowerCase(),
        ...env.cve.map(cve => cve.toLowerCase())
      ].join(' ');
      
      // Match if all search terms are found
      return searchTerms.every(term => searchableText.includes(term));
    });
  }
  
  return results;
} 