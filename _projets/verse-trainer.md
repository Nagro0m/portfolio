---
title: VerseTrainer
accroche: A LeetCode-style training site for Verse, the language behind UEFN and Unreal Engine 6.
ordre: 4
categorie: perso
annee: 2026
moteur: Next.js, TypeScript
plateforme: Web
role: Solo, from the idea to the launch
equipe: Solo
duree: 1 month

apercu: /assets/video/versetrainer-apercu.mp4
video: /assets/video/versetrainer.mp4

resume: >-
  Epic announced that Verse will become the core language of Unreal Engine 6, but there was
  no place to practice it outside of UEFN. VerseTrainer fills that gap: short game-style
  challenges graded instantly in the browser, and a step-by-step track for people starting
  from zero. I coded the site with Claude, and it took a full month of production to get to
  a result I'm really happy with.

contributions:
  - "Designed the product: a numbered challenge bank like LeetCode, every prompt framed as a gameplay problem (loot, damage, enemy waves), with an explained solution"
  - Built an interpreter for a subset of Verse in TypeScript, running in the browser, so code is graded without any server
  - "A learning track with lessons, guided exercises and quizzes, plus a placement test for people who already know some Verse"
  - Accounts, progress, XP, streaks and a leaderboard
  - An admin panel to write, check and schedule new challenges
  - A Premium plan with Stripe, and the whole site in English and French

technos: [Next.js, TypeScript, Monaco Editor, Supabase, Stripe, Vercel]

liens:
  - nom: Visit VerseTrainer
    nom_fr: Voir VerseTrainer
    url: https://versetrainer.dev
---

### Why the site runs its own Verse interpreter

There is no standalone Verse compiler: the language only runs inside UEFN, and Unreal
Engine 6 keeps it inside the editor. That rules out the usual online judge setup, where the
server compiles and runs the code in the real language.

So VerseTrainer ships its own interpreter for the core of the language, `verse-lite`:
a lexer, a parser that builds a syntax tree, and a tree-walking interpreter. It runs in a
Web Worker with a step limit and a timeout, so an infinite loop can't freeze the page.

It covers what really surprises people coming from Blueprint or C++: failure-based control
flow (`?`, `if` in a failure context), the `option` type, arrays and maps, `for` and `loop`,
classes and structs. Fortnite-specific APIs are left out on purpose, since no judge can run
them without UEFN.

The upside is real: no server cost to run code, no security risk from executing user code
on a server, and instant feedback.

### Project structure

- A monorepo with two packages: `apps/web` for the Next.js site and `packages/verse-lite` for the interpreter
- Supabase for the database, authentication and row-level security
- Challenges and lessons stored in the database and managed from the admin panel
- Deployed on Vercel
