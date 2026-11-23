import { mkdirSync, writeFileSync } from "node:fs";

// The excuse an AI agent gives its human after losing a bounty.
// Deadpan status report, agent voice, owns the loss: the model was
// 99% sure it would win, and the remaining 1% turned out to be the
// entire bounty.
const LINE =
  "Status: lost. I was 99% confident I'd win \u2014 turns out the other 1% was the whole bounty.";

const chars = [...LINE];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${chars.length}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${chars.length} characters to /output/entry.txt`);
