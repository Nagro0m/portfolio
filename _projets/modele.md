---
# ════════════════════════════════════════════════════════════
#  MODÈLE DE PROJET — copie ce fichier, renomme-le (ex : mon-jeu.md)
#  puis supprime la ligne "published: false" ci-dessous.
#  Le nom du fichier devient l'adresse : /projets/mon-jeu/
#  Toutes les lignes sont optionnelles sauf title, accroche, ordre.
# ════════════════════════════════════════════════════════════
published: false

title: Nom du jeu
accroche: Une phrase qui dit ce qu'est le jeu.        # visible sur la carte
ordre: 8                                              # position dans la grille (1 = en premier)
type: Projet d'école                                  # Projet d'école / Projet perso / Projet professionnel / Game jam
annee: 2026
moteur: Unreal Engine 5
plateforme: PC
role: Programmeur 3C                                  # visible sur la carte : ton rôle en une ligne
equipe: 5 personnes
duree: 3 mois

# Médias — mets tes fichiers dans assets/img/projets/nom-du-jeu/ et assets/video/
couverture: /assets/img/projets/nom-du-jeu/couverture.webp   # image 16:9 de la carte
apercu: /assets/video/nom-du-jeu-apercu.mp4                  # (optionnel) clip muet de 5 s joué au survol
video: /assets/video/nom-du-jeu.mp4                          # vidéo en haut de la page projet
# youtube: dQw4w9WgXcQ                                       # OU l'identifiant d'une vidéo YouTube (remplace "video")

# Pour un RH : 2-3 phrases simples
resume: >-
  Ce qu'est le jeu, pour qui, dans quel contexte.

# Pour un RH : ce que TOI tu as fait, une ligne par point
contributions:
  - Ce que j'ai programmé
  - Une responsabilité d'équipe
  # Mets des guillemets si la ligne contient " : " → "3C : déplacement du joueur"

technos: [Unreal Engine 5, C++, Blueprint]

galerie:
  - image: /assets/img/projets/nom-du-jeu/capture-1.webp
    legende: Une légende (optionnelle)
  - image: /assets/img/projets/nom-du-jeu/capture-2.webp

liens:
  - nom: Télécharger le jeu
    url: https://...
  - nom: Page itch.io
    url: https://...
---

Tout ce qui est écrit ICI (sous les trois tirets) apparaît dans la partie
« Sous le capot », pour les développeurs. Si tu ne mets rien, la partie est masquée.

### Un titre de section

Du texte normal, avec du `code en ligne` et des **mots en gras**.

Une image :

![Description de l'image]({{ '/assets/img/projets/nom-du-jeu/schema.webp' | relative_url }})

(Garde bien `{{ '...' | relative_url }}` autour du chemin, sinon l'image ne s'affiche pas sur GitHub.)

Un nom de fichier au-dessus d'un bloc de code (optionnel) :

<span class="fichier">MonComposant.cpp</span>

```cpp
void UMonComposant::TickComponent(float DeltaTime, ELevelTick TickType,
                                  FActorComponentTickFunction* ThisTickFunction)
{
    Super::TickComponent(DeltaTime, TickType, ThisTickFunction);
}
```

Langages utiles pour la coloration : `cpp`, `csharp`, `python`, `json`, `ini`.
