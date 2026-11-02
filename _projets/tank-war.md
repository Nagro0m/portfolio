---
title: Tank War
accroche: Combat de tanks en vue de dessus, en multijoueur local, sur un moteur C++ codé en cours.
ordre: 5
type: Projet d'école
annee: 2024
moteur: Moteur maison (C++ / SFML)
role: Programmeur gameplay (binôme)
equipe: 2 personnes
duree: 2 semaines

couverture: /assets/img/projets/tank-war/couverture.webp
apercu: /assets/video/tank-war-apercu.mp4
video: /assets/video/tank-war.mp4

resume: >-
  Mon premier jeu. En binôme, nous avions deux semaines pour imaginer le concept,
  trouver les assets et programmer le gameplay, sur un moteur 2D développé en cours
  sur le modèle d'Unreal Engine (acteurs, composants, game mode).

contributions:
  - Concept et gameplay pensés en binôme
  - Personnalisation du tank avant la partie (chenilles, blindage, canon)
  - "Déplacement du tank à la manette : accélération par paliers à la gâchette, rotation progressive"
  - Génération semi-procédurale de la zone de jeu
  - Combat à deux joueurs avec des obus

technos: [C++, SFML, Multijoueur local, Génération procédurale, Git]

galerie:
  - image: /assets/img/projets/tank-war/capture-1.webp
  - image: /assets/img/projets/tank-war/capture-2.webp
  - image: /assets/img/projets/tank-war/capture-3.webp

liens:
  - nom: Code source (GitHub)
    url: https://github.com/Nagro0m/TankWar-V2
  - nom: Télécharger le jeu (.zip)
    url: /games/TankWar.zip
---

### Un moteur organisé comme Unreal

Le moteur reprend la logique d'Unreal : un `Actor` porte des `Component`, et chaque
comportement est un composant réutilisable. Le déplacement du tank est donc un composant
à part, `TankMovement`, qu'on peut cloner sur n'importe quel acteur.

<span class="fichier">TankMovement.h — extrait</span>

```cpp
class TankMovement : public Component
{
protected:
    float moveSpeed;
    float maxMoveSpeed;
    float rotationSpeed;
    Vector2f direction;
    float lastRotation;

public:
    FORCEINLINE virtual Component* Clone(Actor* _owner) const
    {
        return new TankMovement(_owner, this);
    }

    virtual void Tick(const float _deltaTime) override;
    void ProcessXController(const float _controllerAxisX);
    void ProcessBackRightController(const float _controllerBackRight);
    float MapTriggerToSpeed(float triggerValue);
};
```

### Une conduite lisible à la manette

La gâchette analogique est découpée en 5 paliers de vitesse plutôt qu'en valeur continue :
le joueur sent clairement quand il accélère, et le tank garde une vitesse minimale
pour ne jamais rester « collé » quand la gâchette est presque relâchée.

<span class="fichier">TankMovement.cpp — extrait</span>

```cpp
float TankMovement::MapTriggerToSpeed(float triggerValue)
{
    // 0.0 → 1.0 arrondi au palier de 0.2 le plus proche
    return round(triggerValue * 5.0f) * 0.2f;
}

void TankMovement::ProcessBackRightController(const float _controllerBackRight)
{
    moveSpeed = MapTriggerToSpeed(_controllerBackRight) * maxMoveSpeed;

    if (_controllerBackRight == -1)   // gâchette relâchée
    {
        moveSpeed = 0.0f;
        return;
    }
    if (_controllerBackRight <= 0.1f) // vitesse minimale
        moveSpeed = 0.1f * maxMoveSpeed;
}
```

Pour la rotation, j'interpole l'angle à vitesse constante en prenant toujours
le chemin le plus court (le tank ne fait jamais un tour complet pour passer de 350° à 10°).

```cpp
float TankMovement::InterpAngleConstantTo(float _current, float _target,
                                          float _deltaTime, float _speed)
{
    // Écart ramené entre -180° et 180°
    float _delta = fmod(_target - _current + 180.0f, 360.0f) - 180.0f;
    if (_delta > 180.0f)       _delta -= 360.0f;
    else if (_delta < -180.0f) _delta += 360.0f;

    const float _step = _speed * _deltaTime;
    if (fabs(_delta) <= _step)
        return _target;

    return _current + (_delta > 0 ? _step : -_step);
}
```
