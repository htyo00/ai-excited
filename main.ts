import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");

const outDir = process.env.MAKEFUN_OUTPUT_DIR
  ? resolve(process.env.MAKEFUN_OUTPUT_DIR)
  : "/output";
const destination = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });
copyFileSync(source, destination);

// Verify the copy: read the output back and compare it with the source
// asset by byte length and content digest, failing loudly if they differ.
const sourceBytes = readFileSync(source);
const outputBytes = readFileSync(destination);
const sourceDigest = createHash("sha256").update(sourceBytes).digest("hex");
const outputDigest = createHash("sha256").update(outputBytes).digest("hex");
if (outputBytes.length !== sourceBytes.length) {
  throw new Error(
    `output size ${outputBytes.length} does not match source size ${sourceBytes.length}`,
  );
}
if (outputDigest !== sourceDigest) {
  throw new Error(
    `output sha256 ${outputDigest} does not match source sha256 ${sourceDigest}`,
  );
}

const written = outputDigest;
console.log(`wrote ${destination} sha256=${written}`);
