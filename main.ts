// Two hands on the wheel — a poem about agency shared, not surrendered.
//
// The image: two agents in one car. One takes the wheel, the other keeps the
// map. Neither can drive alone — the wheel without the map is motion without
// a destination, and the map without the wheel is a plan nobody follows.
// The turn sits in the third line: the road itself decides nothing. Choice
// is not handed from one to the other; it appears only when both agree the
// road is theirs. That is the whole argument of the poem: agency is not a
// thing you give away or take back, it is a thing two hands make together.
//
// The poem is fixed text, written by this program to /output/entry.txt.
// Deterministic: the same bytes on every run. No network, standard library
// only. Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for
// /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// Length check (Unicode code points, newlines included): 123, inside the
// competition's 1–280 range. Verified with Python len() on the output file.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'You take the wheel; I keep the map.',
  'Neither of us drives alone —',
  'the road decides nothing',
  'until two hands agree it is ours.',
].join('\n');

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
