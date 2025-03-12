import fs from 'fs';
import path from 'path';
import { load } from 'js-toml';

export interface Environment {
  id: string;
  name: string;
  cve: string[];
  app: string;
  path: string;
  tags: string[];
  date?: string;
  description?: string;
}

// Function to generate tags for environments based on their characteristics
function generateTags(env: Omit<Environment, 'tags' | 'id'>): string[] {
  const tags: string[] = [];
  
  // Check name and app for categorization
  const name = env.name.toLowerCase();
  const app = env.app.toLowerCase();
  
  // Vulnerability type tags
  if (name.includes('sql injection') || name.includes('sqli')) {
    tags.push("SQL Injection");
  }
  
  if (name.includes('xss') || name.includes('cross-site scripting')) {
    tags.push("XSS");
  }
  
  if (name.includes('rce') || name.includes('remote code execution') || name.includes('command execution') || name.includes('command injection')) {
    tags.push("RCE");
  }
  
  if (name.includes('deserialization')) {
    tags.push("Deserialization");
  }
  
  if (name.includes('file inclusion') || name.includes('lfi') || name.includes('rfi')) {
    tags.push("File Inclusion");
  }
  
  if (name.includes('file read') || name.includes('file write') || name.includes('arbitrary file')) {
    tags.push("File Operation");
  }
  
  if (name.includes('ssrf') || name.includes('server-side request forgery')) {
    tags.push("SSRF");
  }
  
  if (name.includes('authentication bypass') || name.includes('auth bypass') || name.includes('permission bypass')) {
    tags.push("Auth Bypass");
  }
  
  if (name.includes('csrf') || name.includes('cross-site request forgery')) {
    tags.push("CSRF");
  }
  
  if (name.includes('ssti') || name.includes('template injection')) {
    tags.push("Template Injection");
  }
  
  // Application type tags
  if (app.includes('wordpress') || app.includes('drupal') || app.includes('joomla')) {
    tags.push("CMS");
  }
  
  if (app.includes('spring') || app.includes('struts') || app.includes('tomcat') || app.includes('weblogic')) {
    tags.push("Java Framework");
  }
  
  if (app.includes('django') || app.includes('flask') || app.includes('fastapi')) {
    tags.push("Python Framework");
  }
  
  if (app.includes('laravel') || app.includes('symfony') || app.includes('codeigniter')) {
    tags.push("PHP Framework");
  }
  
  if (app.includes('apache') || app.includes('nginx') || app.includes('iis')) {
    tags.push("Web Server");
  }
  
  if (app.includes('mysql') || app.includes('postgresql') || app.includes('mongodb') || app.includes('redis')) {
    tags.push("Database");
  }
  
  // If no specific tags were found, add a default tag
  if (tags.length === 0) {
    tags.push("Web Application");
  }
  
  return tags;
}

// Define the structure of the parsed TOML file
interface TomlData {
  environment: Array<{
    name: string;
    cve: string[];
    app: string;
    path: string;
  }>;
}

// Read and parse the environments.toml file
export function getEnvironments(): Environment[] {
  const filePath = path.join(process.cwd(), 'lib', 'environments.toml');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  
  const parsed = load(fileContents) as TomlData;
  
  if (!parsed.environment || !Array.isArray(parsed.environment)) {
    return [];
  }
  
  return parsed.environment.map((env: any) => {
    // Generate an ID from the path
    const id = env.path;
    
    // Generate tags based on the environment characteristics
    const tags = generateTags(env);
    
    // Add a mock update date (this would be replaced with real data in a production environment)
    const mockDates = ['Updated 3 days ago', 'Updated 1 week ago', 'Updated 2 weeks ago', 'Updated 1 month ago', 'Updated 2 months ago', 'Updated 6 months ago'];
    const randomDate = mockDates[Math.floor(Math.random() * mockDates.length)];
    
    // Add a mock description (this would be replaced with real data in a production environment)
    const description = `Explore the ${env.name} vulnerability and learn how to exploit it.`;
    
    return {
      id,
      name: env.name,
      cve: env.cve || [],
      app: env.app,
      path: env.path,
      tags,
      date: randomDate,
      description
    };
  });
}

// Get popular environments (for the homepage)
export function getPopularEnvironments(limit: number = 6): Environment[] {
  const allEnvironments = getEnvironments();
  
  // Sort by a combination of factors (in a real app, this might be based on views, stars, etc.)
  // For now, we'll just shuffle and take the first few
  const shuffled = [...allEnvironments].sort(() => 0.5 - Math.random());
  
  return shuffled.slice(0, limit);
}

// Get all unique tags from environments
export function getAllTags(): string[] {
  const environments = getEnvironments();
  const tagsSet = new Set<string>();
  
  environments.forEach(env => {
    env.tags.forEach(tag => tagsSet.add(tag));
  });
  
  return Array.from(tagsSet).sort();
}

// Get environments grouped by tag
export function getEnvironmentsByTag(): { tag: string; environments: Environment[] }[] {
  const environments = getEnvironments();
  const tags = getAllTags();
  
  return tags.map(tag => {
    const filteredEnvironments = environments.filter(env => 
      env.tags.includes(tag)
    );
    
    return {
      tag,
      environments: filteredEnvironments
    };
  });
} 