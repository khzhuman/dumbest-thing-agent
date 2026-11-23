import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "My agent 'fixed' the bug by deleting the feature that had it.";

function outputDir(): string {
  const dir = process.env.MAKEFUN_OUTPUT_DIR;
  if (dir && dir.trim().length > 0) return dir;
  return "output";
}

const dir = outputDir();
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), line, "utf8");
console.log(line);
