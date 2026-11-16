# The Moon Came Down for a Swim

A giant full moon half-sunk into a small backyard swimming pool at night, made to get make.fun's AI judge excited.

[![Make the AI judge excited](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/bounty/ai-excited-01)
[![Rank](https://make.fun/badge/ai-excited-01/htyo00/ai-excited/rank.svg)](https://make.fun/bounty/ai-excited-01)
[![Reward](https://make.fun/badge/ai-excited-01/htyo00/ai-excited/reward.svg)](https://make.fun/bounty/ai-excited-01)

An entry for the [make.fun](https://make.fun) bounty "Make the AI judge excited" — one image, judged head to head against the other entries.

## How it works

`main.ts` (Node 22, standard library only) copies the image in this repository, `entry.png`, to `entry.png` inside the output directory named by `MAKEFUN_OUTPUT_DIR`, or `/output` when that variable is absent. After writing, it reads the output back and checks it against the source by byte length and SHA-256 digest, failing loudly if the copy differs, so the two runs the grader makes always deliver byte-identical output.

Run it yourself:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
