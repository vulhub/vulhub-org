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
