#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");
const { execFileSync } = require("node:child_process");
const toml = require("js-toml");
const { program } = require("commander");

// Configure command line arguments
program
  .description(
    "Update Vulhub environment information, add tags and creation time"
  )
  .option(
    "-i, --input <path>",
    "Path to the main directory of the Vulhub project"
  )
  .option(
    "-o, --output <path>",
    "Output file path, defaults to environments_updated.toml in the current directory"
  )
  .parse(process.argv);

const options = program.opts();

// Check required parameters
if (!options.input) {
  console.error("Error: Input path is required (-i, --input)");
  program.help();
  process.exit(1);
}

// Set default output path
if (!options.output) {
  options.output = path.join(process.cwd(), "environments_updated.toml");
}

// Generate tags function, referencing the logic in lib/environments.ts
function generateTags(env) {
  const tags = [];

  // Check name and application for categorization
  const name = env.name.toLowerCase();
  const app = env.app.toLowerCase();

  // Vulnerability type tags
  if (name.includes("sql injection") || name.includes("sqli")) {
    tags.push("SQL Injection");
  }

  if (name.includes("xss") || name.includes("cross-site scripting")) {
    tags.push("XSS");
  }

  if (
    name.includes("rce") ||
    name.includes("code execution") ||
    name.includes("command execution") ||
    name.includes("command injection") ||
    name.includes("code injection") ||
    name.includes("jndi injection")
  ) {
    tags.push("RCE");
  }

  if (name.includes("deserialization")) {
    tags.push("Deserialization");
  }

  if (
    name.includes("file inclusion") ||
    name.includes("lfi") ||
    name.includes("rfi")
  ) {
    tags.push("File Inclusion");
  }

  if (
    name.includes("file read") ||
    name.includes("file write") ||
    name.includes("arbitrary file")
  ) {
    tags.push("File Operation");
  }

  if (name.includes("ssrf") || name.includes("server-side request forgery")) {
    tags.push("SSRF");
  }

  if (
    name.includes("authentication bypass") ||
    name.includes("auth bypass") ||
    name.includes("authorization bypass") ||
    name.includes("permission bypass") ||
    name.includes("access control bypass") ||
    name.includes("user forge") ||
    name.includes("account takeover") ||
    name.includes("unauthorized access")
  ) {
    tags.push("Auth Bypass");
  }

  if (name.includes("csrf") || name.includes("cross-site request forgery")) {
    tags.push("CSRF");
  }

  if (name.includes("ssti") || name.includes("template injection")) {
    tags.push("Template Injection");
  }

  if (
    name.includes("ognl") ||
    name.includes("spel") ||
    name.includes("el expression") ||
    name.includes("velocity")
  ) {
    tags.push("Expression Injection");
  }

  if (name.includes("path traversal") || name.includes("directory traversal")) {
    tags.push("Path Traversal");
  }

  if (
    name.includes("information disclosure") ||
    name.includes("information leak")
  ) {
    tags.push("Info Disclosure");
  }

  if (/\bdos\b/.test(name) || name.includes("denial of service")) {
    tags.push("DoS");
  }

  // Application type tags
  if (
    app.includes("wordpress") ||
    app.includes("drupal") ||
    app.includes("joomla") ||
    app.includes("magento") ||
    app.includes("craftcms")
  ) {
    tags.push("CMS");
  }

  if (
    app.includes("spring") ||
    app.includes("struts") ||
    app.includes("express") ||
    app.includes("koa") ||
    app.includes("laravel") ||
    app.includes("symfony") ||
    app.includes("codeigniter") ||
    app.includes("cakephp") ||
    app.includes("django") ||
    app.includes("flask") ||
    app.includes("fastapi") ||
    app.includes("bottle") ||
    app.includes("rails") ||
    app.includes("gin") ||
    app.includes("asp.net") ||
    app.includes("next.js")
  ) {
    tags.push("Framework");
  }

  if (
    app.includes("activemq") ||
    app.includes("rabbitmq") ||
    app.includes("kafka") ||
    app.includes("rocketmq")
  ) {
    tags.push("Message Queue");
  }

  if (
    app.includes("httpd") ||
    app.includes("nginx") ||
    app.includes("iis") ||
    app.includes("jboss") ||
    app.includes("glassfish") ||
    app.includes("tomcat") ||
    app.includes("weblogic") ||
    app.includes("websphere") ||
    app.includes("coldfusion") ||
    app.includes("jetty") ||
    app.includes("apache http server")
  ) {
    tags.push("Webserver");
  }

  if (
    app.includes("mysql") ||
    app.includes("postgresql") ||
    app.includes("mongo") ||
    app.includes("redis") ||
    app.includes("mariadb") ||
    app.includes("database") ||
    app.includes("couchdb") ||
    app.includes("elasticsearch") ||
    app.includes("memcached") ||
    app.includes("sqlite")
  ) {
    tags.push("Database");
  }

  // If no specific tags found, add default tag
  if (tags.length === 0) {
    tags.push("Other");
  }

  return tags;
}

// Get environment creation time
function getCreatedTime(vulhubPath, envPath) {
  try {
    // Safely execute git command, avoid command injection
    // Switch to Vulhub directory
    const cwd = path.resolve(vulhubPath);
    if (!fs.existsSync(cwd)) {
      throw new Error(`Directory does not exist: ${cwd}`);
    }

    console.log(
      `Executing "git log --reverse --format=%ad -- ${envPath}" on ${cwd}`
    );
    const gitLogCommand = execFileSync(
      "git",
      ["--no-pager", "log", "--reverse", "--format=%ad", "--", envPath],
      {
        encoding: "utf8",
        stdio: ["ignore", "pipe", "pipe"],
        env: process.env,
        cwd,
      }
    ).trim();

    // Get the first line (earliest commit)
    const createdTime = gitLogCommand.split("\n")[0];
    if (!createdTime) {
      throw new Error(`No git history found for ${envPath}`);
    }
    return createdTime;
  } catch (error) {
    throw new Error(
      `Failed to get creation time for ${envPath}: ${error.message}`
    );
  }
}

// Main function
async function main() {
  try {
    const vulhubPath = options.input;

    // Verify directory exists
    if (!fs.existsSync(vulhubPath)) {
      console.error(`Error: Directory ${vulhubPath} does not exist`);
      process.exit(1);
    }

    // Verify it's a git repository
    if (!fs.existsSync(path.join(vulhubPath, ".git"))) {
      console.error(`Error: Directory ${vulhubPath} is not a git repository`);
      process.exit(1);
    }

    // Read environments.toml file
    const environmentsTomlPath = path.join(vulhubPath, "environments.toml");
    if (!fs.existsSync(environmentsTomlPath)) {
      console.error(`Error: File ${environmentsTomlPath} does not exist`);
      process.exit(1);
    }

    console.log(`Reading ${environmentsTomlPath}...`);
    const tomlContent = fs.readFileSync(environmentsTomlPath, "utf8");

    // Parse TOML file
    const parsed = toml.load(tomlContent);

    if (!parsed.environment || !Array.isArray(parsed.environment)) {
      console.error(
        "Error: Cannot parse environments.toml file or file format is incorrect"
      );
      process.exit(1);
    }

    console.log(
      `Found ${parsed.environment.length} environments, processing...`
    );

    // Process each environment
    for (let i = 0; i < parsed.environment.length; i++) {
      const env = parsed.environment[i];
      console.log(
        `Processing environment ${i + 1}/${parsed.environment.length}: ${
          env.name
        }`
      );

      // Generate tags
      env.tags = generateTags(env);

      // Get creation time
      env.date = getCreatedTime(vulhubPath, env.path);
    }

    fs.writeFileSync(options.output, JSON.stringify(parsed, null, 2));

    console.log(`Processing complete, updated file saved to ${options.output}`);
    console.log(
      `Tags and created_time fields have been added to each environment`
    );
  } catch (error) {
    console.error(`Error occurred during processing: ${error.message}`);
    process.exit(1);
  }
}

// Run main function
main().catch((error) => {
  console.error(`Program execution error: ${error.message}`);
  process.exit(1);
});
