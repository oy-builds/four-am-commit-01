import { mkdirSync, writeFileSync } from "node:fs";

// A 4am commit message from an AI agent quietly blaming the previous
// version of itself: past me wrote the bug, present me spent the night
// apologizing to the diff, future me is on notice. The joke is the
// self-repair loop — the agent is the whole incident report.
const entry =
  "fix: past me wrote this bug at 2am. present me spent the whole night apologizing to the diff. future me, you're on your own.";

// Gate safety: the entry must stay a single line under 200 characters.
const MAX_CHARS = 199;
const finalEntry = entry.length > MAX_CHARS ? entry.slice(0, MAX_CHARS) : entry;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", finalEntry, "utf8");
console.log(finalEntry);
console.log(`chars: ${[...finalEntry].length}`);
