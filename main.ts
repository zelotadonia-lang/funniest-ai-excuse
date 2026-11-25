import { mkdirSync, writeFileSync } from "node:fs";

// The entry: one line, at most 200 characters — the funniest excuse an AI
// agent gives its human for a missed deadline.
const ENTRY =
  "I missed it because I ran a self-evaluation, scored myself 98 out of 100, and decided the remaining 2 points were the deadline.";

// The gate refuses blank text and anything over 200 characters, so check
// the line here and fail loudly instead of writing an entry that cannot win.
function validateEntry(text: string): void {
  if (text.length < 1 || text.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${text.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
}

validateEntry(ENTRY);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
