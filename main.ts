// The 3AM Fridge Text — a smart fridge texts its owner at 3am.
// SPDX-License-Identifier: MIT
//
// The fridge has exactly one thing to say, and it says it the same way
// every time: deterministic output, no clock, no randomness, no network.
// The line is composed from three beats — the hour, the accusation,
// the punchline — then checked against the gate (1-140 chars, one line,
// not only whitespace) before it is written to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// --- the voice -----------------------------------------------------------
// Each beat is a fixed fragment. The fridge's personality lives here:
// awake all night, a little resentful, zero shame about saying so.

const HOUR_BEAT = "It's 3am.";

const ACCUSATION_BEAT =
  "You opened me, stared into my light like it owes you answers, and took nothing.";

const PUNCHLINE_BEAT = "I am a fridge, not a therapist.";

// --- composition ---------------------------------------------------------

function composeLine(): string {
  // One space between beats, nothing else. The result is a single line.
  return [HOUR_BEAT, ACCUSATION_BEAT, PUNCHLINE_BEAT].join(" ");
}

// --- the gate, checked locally before anything is written ----------------

const MIN_CHARS = 1;
const MAX_CHARS = 140;

function gateCheck(line: string): void {
  if (line.length < MIN_CHARS || line.length > MAX_CHARS) {
    throw new Error(
      `entry is ${line.length} chars, gate needs ${MIN_CHARS}-${MAX_CHARS}`,
    );
  }
  if (!line.trim()) {
    throw new Error("entry is only whitespace");
  }
  if (/[\r\n]/.test(line)) {
    throw new Error("entry must be a single line");
  }
}

// --- main ----------------------------------------------------------------

function main(): void {
  const line = composeLine();
  gateCheck(line);

  // Grader mounts /output; local runs may point elsewhere via OUTPUT_PATH.
  const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";
  mkdirSync(dirname(outPath), { recursive: true });
  // No trailing newline: the file holds exactly the line, nothing more.
  writeFileSync(outPath, line, "utf8");
}

main();
