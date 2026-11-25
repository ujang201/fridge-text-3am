# The 3AM Fridge Text

[![Bounty](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d/badge)](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d)
[![Rank](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d/rank/fridge-text-3am)](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d)
[![Reward](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d/reward/fridge-text-3am)](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d)

A smart fridge texts its owner at 3am. One line, 140 characters max, and the
fridge has had enough: the owner opened the door, stared into the light like
it owes answers, and took nothing.

## Entry

> It's 3am. You opened me, stared into my light like it owes you answers, and took nothing. I am a fridge, not a therapist.

## How it works

`main.ts` composes the line from three fixed beats (the hour, the
accusation, the punchline), checks it against the gate — 1 to 140
characters, a single line, not only whitespace — and writes exactly that
line, with no trailing newline, to `/output/entry.txt`.

```sh
node main.ts
```

Deterministic: no clock, no randomness, no network. Two runs produce
byte-identical output.
