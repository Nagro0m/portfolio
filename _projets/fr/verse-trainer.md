---
title: VerseTrainer
accroche: Un site d'entraînement façon LeetCode pour Verse, le langage d'UEFN et d'Unreal Engine 6.
role: Solo, de l'idée à la mise en ligne
equipe: Solo
duree: 1 mois

resume: >-
  Epic a annoncé que Verse deviendra le langage central d'Unreal Engine 6, mais il n'existait
  aucun endroit pour s'y entraîner en dehors d'UEFN. VerseTrainer comble ce manque : des
  défis courts façon jeu vidéo, corrigés instantanément dans le navigateur, et un parcours
  pas à pas pour ceux qui partent de zéro. J'ai codé le site avec Claude, et il a fallu un
  mois entier de production pour arriver à un résultat vraiment concluant.

contributions:
  - "La conception du produit : une banque de défis numérotés comme sur LeetCode, chaque énoncé tourné comme un problème de gameplay (butin, dégâts, vagues d'ennemis), avec une solution expliquée"
  - Un interpréteur d'une partie du langage Verse en TypeScript, qui tourne dans le navigateur pour corriger le code sans serveur
  - "Un parcours d'apprentissage avec des leçons, des exercices guidés et des quiz, plus un test de niveau pour ceux qui connaissent déjà Verse"
  - Les comptes, la progression, l'XP, les séries et le classement
  - Un panneau d'administration pour écrire, vérifier et programmer de nouveaux défis
  - Une offre Premium avec Stripe, et tout le site en anglais et en français
---

### Pourquoi le site a son propre interpréteur Verse

Il n'existe pas de compilateur Verse autonome : le langage ne tourne que dans UEFN, et
Unreal Engine 6 le garde dans l'éditeur. Impossible donc de faire comme les juges en ligne
classiques, où le serveur compile et exécute le code dans le vrai langage.

VerseTrainer embarque donc son propre interpréteur du cœur du langage, `verse-lite` :
un lexer, un parser qui construit l'arbre syntaxique, et un interpréteur qui le parcourt.
Il tourne dans un Web Worker avec une limite de pas et un délai maximum, pour qu'une boucle
infinie ne bloque jamais la page.

Il couvre ce qui surprend vraiment quand on vient de Blueprint ou du C++ : le contrôle par
échec (`?`, `if` dans un contexte d'échec), le type `option`, les tableaux et les maps,
`for` et `loop`, les classes et les structs. Les API propres à Fortnite sont volontairement
laissées de côté, puisqu'aucun juge ne peut les exécuter sans UEFN.

L'intérêt est réel : aucun coût serveur pour exécuter le code, aucun risque de sécurité lié
à l'exécution de code inconnu sur un serveur, et un retour instantané.

### Organisation du projet

- Un monorepo avec deux paquets : `apps/web` pour le site Next.js et `packages/verse-lite` pour l'interpréteur
- Supabase pour la base de données, l'authentification et la sécurité au niveau des lignes
- Les défis et les leçons sont stockés en base et gérés depuis le panneau d'administration
- Déployé sur Vercel
