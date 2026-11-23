import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "My phone dies at 15% battery — the only thing in my life that quits before I do.";

// A roast lands when the flaw is universal: every phone owner has watched
// the battery gauge lie to them at least once.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(line);
