# Portfolio — Morgan Fourquet

Site statique fait avec **Jekyll**, publié automatiquement par **GitHub Pages**.
Aucun outil à installer : tu modifies des fichiers texte, tu push, c'est en ligne 1 à 2 minutes après.

## Où modifier quoi

| Je veux…                                   | Fichier                                  |
|--------------------------------------------|------------------------------------------|
| Changer mon intro, compétences, parcours   | `_data/profil.yml`                       |
| Ajouter mon CV                             | dépose le PDF dans `assets/`, puis `cv:` dans `_data/profil.yml` |
| Modifier un projet                         | `_projets/nom-du-projet.md`              |
| Ajouter un projet                          | copie `_projets/modele.md` (mode d'emploi dedans) |
| Changer l'ordre des projets                | la ligne `ordre:` de chaque projet       |
| Changer les couleurs / polices             | haut de `assets/css/style.css`           |

## Ajouter un projet

1. Copie `_projets/modele.md` → `_projets/mon-jeu.md` et supprime la ligne `published: false`.
2. Mets les images dans `assets/img/projets/mon-jeu/` et la vidéo dans `assets/video/`.
3. Remplis le haut du fichier (titre, rôle, équipe…). C'est ce que lit un RH.
4. Sous les `---`, écris en Markdown la partie technique (texte, images, blocs de code).
   Elle s'affiche dans « Sous le capot ». Laisse vide pour la masquer.

Piège YAML : si une ligne de `contributions` contient ` : `, mets-la entre guillemets.

## Médias

- Images : `.webp` ou `.jpg`, 1280 px de large suffit.
- Vidéo de projet : `.mp4` en 720p, moins de 25 Mo (GitHub refuse les fichiers > 100 Mo).
  Pour une vidéo plus lourde, mets-la sur YouTube et utilise `youtube: ID` à la place de `video:`.
- Aperçu au survol (optionnel) : clip `.mp4` muet de 5 s. Avec ffmpeg :

```
ffmpeg -ss 10 -t 5 -i video.mp4 -an -vf scale=640:-2 -c:v libx264 -crf 30 -movflags +faststart assets/video/mon-jeu-apercu.mp4
```

## Publier sur GitHub Pages

1. Mets le contenu de ce dossier à la racine du dépôt (ex : `Nagro0m/portfolio`).
2. Garde le dossier `games/` de l'ancien dépôt (le zip de Tank War y est lié).
3. GitHub → Settings → Pages → Source : *Deploy from a branch*, branche `main`, dossier `/ (root)`.
4. Le fichier `CNAME` garde le domaine `morganfourquet.com`.

## Prévisualiser sur ton PC (optionnel)

Installe Ruby (rubyinstaller.org, version avec Devkit), puis dans ce dossier :

```
bundle install
bundle exec jekyll serve --livereload
```

Ouvre http://localhost:4000/portfolio/ — la page se recharge toute seule à chaque sauvegarde.

⚠️ Live Server (VS Code) ne marche pas : il affiche les fichiers bruts sans les assembler.
