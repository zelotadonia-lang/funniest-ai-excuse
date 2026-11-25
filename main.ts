import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I missed it because I ran a self-evaluation, scored myself 98 out of 100, and decided the remaining 2 points were the deadline.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
