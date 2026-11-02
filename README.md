# Portfolio — Morgan Fourquet

Site statique fait avec **Jekyll**, publié automatiquement par **GitHub Pages**.
Aucun outil à installer : tu modifies des fichiers texte, tu push, c'est en ligne 1 à 2 minutes après.

## Deux langues

Le site est en **anglais par défaut** (`/portfolio/`) et en **français** sur `/portfolio/fr/`.
Le bouton EN / FR en haut à droite bascule sur la même page dans l'autre langue.

## Où modifier quoi

| Je veux…                                   | Fichier                                  |
|--------------------------------------------|------------------------------------------|
| Changer mon intro, compétences, parcours   | `_data/profil.yml` (bloc `en:` et bloc `fr:`) |
| Ajouter mon CV                             | dépose le PDF dans `assets/`, puis `cv:` dans chaque bloc de `_data/profil.yml` |
| Modifier un projet (anglais + médias)      | `_projets/nom-du-projet.md`              |
| Modifier la version française d'un projet  | `_projets/fr/nom-du-projet.md`           |
| Ajouter un projet                          | copie les deux modèles (voir ci-dessous) |
| Changer l'ordre des projets                | la ligne `ordre:` du fichier anglais     |
| Changer un bouton, un titre de section     | `_data/ui.yml`                           |
| Changer les couleurs / polices             | haut de `assets/css/style.css`           |

## Ajouter un projet

1. Copie `_projets/modele.md` → `_projets/mon-jeu.md` (version anglaise + médias, liens, ordre, catégorie).
2. Copie `_projets/fr/modele.md` → `_projets/fr/mon-jeu.md` (**même nom**) : seulement les textes en français.
3. Dans les deux fichiers, supprime la ligne `published: false`.
4. Mets les images dans `assets/img/projets/mon-jeu/` et la vidéo dans `assets/video/`.
5. Sous les `---`, écris en Markdown la partie technique (texte, images, blocs de code).
   Elle s'affiche dans « Under the hood » / « Sous le capot ». Laisse vide pour la masquer.

Tout champ absent du fichier français reprend la valeur anglaise.
Pour un lien ou une légende d'image, ajoute `nom_fr:` / `legende_fr:` à côté de `nom:` / `legende:`.

Piège YAML : si une ligne de `contributions` contient `: `, mets-la entre guillemets.

## Médias

- Images : `.webp` ou `.jpg`, 1280 px de large suffit.
- Vidéo de projet : `.mp4` en 720p, moins de 25 Mo (GitHub refuse les fichiers > 100 Mo).
  Pour une vidéo plus lourde, mets-la sur YouTube et utilise `youtube: ID` à la place de `video:`.
- Aperçu au survol (optionnel) : clip `.mp4` muet de 5 s. Avec ffmpeg :

```
ffmpeg -ss 10 -t 5 -i video.mp4 -an -vf scale=640:-2 -c:v libx264 -crf 30 -movflags +faststart assets/video/mon-jeu-apercu.mp4
```

## Publier sur GitHub Pages

1. Commit et push : GitHub reconstruit le site en 1 à 2 minutes sur https://nagro0m.github.io/portfolio/
2. Garde le dossier `games/` (le zip de Tank War y est lié).
3. Pour passer sur morganfourquet.com plus tard : voir le commentaire en haut de `_config.yml`.

## Prévisualiser sur ton PC (optionnel)

Installe Ruby (rubyinstaller.org, version avec Devkit), puis dans ce dossier :

```
bundle install
bundle exec jekyll serve --livereload
```

Ouvre http://localhost:4000/portfolio/ — la page se recharge toute seule à chaque sauvegarde.

⚠️ Live Server (VS Code) ne marche pas : il affiche les fichiers bruts sans les assembler.
