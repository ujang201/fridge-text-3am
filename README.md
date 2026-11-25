# The 3AM Fridge Text

[![make.fun · u-deysumbrella-the-3am-fridge-text-4c3e721d](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d.svg)](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d?utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-the-3am-fridge-text-4c3e721d)
[![rank](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d/ujang201/fridge-text-3am/rank.svg)](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-the-3am-fridge-text-4c3e721d)
[![reward](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d/ujang201/fridge-text-3am/reward.svg)](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d?utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-the-3am-fridge-text-4c3e721d)

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

---

Built for the [3AM Fridge Text bounty](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d?ref=wfjv7kgb) on make.fun.
