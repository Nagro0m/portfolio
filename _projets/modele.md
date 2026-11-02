---
# ════════════════════════════════════════════════════════════
#  MODÈLE DE PROJET — VERSION ANGLAISE (+ toutes les infos communes)
#  1. Copie ce fichier → _projets/mon-jeu.md, et supprime "published: false"
#  2. Copie _projets/fr/modele.md → _projets/fr/mon-jeu.md (même nom !) pour le français
#  Le nom du fichier devient l'adresse : /projects/mon-jeu/ et /fr/projets/mon-jeu/
# ════════════════════════════════════════════════════════════
published: false

title: Game name
accroche: One sentence that says what the game is.     # visible sur la carte
ordre: 9                                               # position dans la grille (1 = en premier)
categorie: ecole                                       # pro / ecole / perso / jam
annee: 2026
# en_cours: true                                       # badge "In progress"
moteur: Unreal Engine 5
plateforme: PC
role: 3C programmer                                    # visible sur la carte
equipe: 5 people
duree: 3 months

# Médias (communs aux deux langues) — fichiers dans assets/img/projets/mon-jeu/ et assets/video/
couverture: /assets/img/projets/mon-jeu/couverture.webp    # image 16:9 de la carte
apercu: /assets/video/mon-jeu-apercu.mp4                   # (optionnel) clip muet de 5 s au survol
video: /assets/video/mon-jeu.mp4                           # vidéo en haut de la page projet
# youtube: dQw4w9WgXcQ                                     # OU l'identifiant d'une vidéo YouTube

resume: >-
  What the game is and in what context, in 2-3 plain sentences.

contributions:
  - What I programmed
  - A team responsibility
  # Mets des guillemets si la ligne contient " : " ou ": "

technos: [Unreal Engine 5, C++, Blueprint]

galerie:
  - image: /assets/img/projets/mon-jeu/capture-1.webp
    legende: Optional caption
    legende_fr: Légende en français (optionnelle)
  - image: /assets/img/projets/mon-jeu/capture-2.webp

liens:
  - nom: Download the game
    nom_fr: Télécharger le jeu
    url: https://...
---

Everything written HERE (below the three dashes) appears in the "Under the hood"
section, for developers. Leave it empty to hide the section.

### A section title

Normal text, with `inline code` and **bold words**.

![Image description]({{ '/assets/img/projets/mon-jeu/schema.webp' | relative_url }})

<span class="fichier">MyComponent.cpp</span>

```cpp
void UMyComponent::TickComponent(float DeltaTime, ELevelTick TickType,
                                 FActorComponentTickFunction* ThisTickFunction)
{
    Super::TickComponent(DeltaTime, TickType, ThisTickFunction);
}
```
