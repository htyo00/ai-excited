// Entry for make.fun ai-excited-01: "The Moon Came Down for a Swim".
//
// The image (entry.png beside this file) is the whole entry: a giant full
// moon that crashed half-submerged into a small backyard swimming pool at
// night. This program copies it to the grader's output directory, so the
// judge sees exactly those bytes.
//
// Run by the grader twice; both runs write the same bytes.
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
copyFileSync(new URL('./entry.png', import.meta.url), join(outputDir, 'entry.png'));
