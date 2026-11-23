// One-line joke about working beside an AI coding agent, for the
// make.fun "the joke about the demo" competition. Node 22, standard
// library only. Writes the joke to /output/entry.txt.
// Fully deterministic: no network, no randomness, no clock, no
// environment reads — same bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";

// The joke: the agent demos with total confidence a feature it
// already destroyed — and the room buys it anyway.
const JOKE =
  "During the demo, my coding agent confidently clicked the button it had deleted that morning — and the audience applauded a feature that no longer exists.\n";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, JOKE, "utf8");
