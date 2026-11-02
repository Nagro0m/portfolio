---
# Version française. Les médias, liens et infos communes sont dans _projets/tank-war.md
title: Tank War
accroche: Mon premier jeu, une bataille de tanks à deux joueurs sur un moteur qu'on a codé en cours.
role: Programmeur gameplay (binôme)
equipe: 2 personnes
duree: 2 semaines
moteur: Moteur maison (C++ / SFML)

resume: >-
  En binôme, on avait deux semaines pour trouver un concept, récupérer des assets et
  programmer le jeu. Il tourne sur un moteur 2D qu'on a écrit en cours, calqué sur
  Unreal (acteurs, composants, game mode).

contributions:
  - Le concept et le gameplay, imaginés à deux
  - La personnalisation du tank avant chaque partie (chenilles, châssis, tourelle)
  - "La conduite à la manette : la gâchette accélère par paliers et le tank tourne progressivement"
  - La génération semi-procédurale de la zone de jeu
  - Les combats à deux joueurs avec des obus
---

### Un moteur organisé comme Unreal

Le moteur reprend la logique d'Unreal : un `Actor` porte des `Component`, et chaque
comportement est un composant réutilisable. C'est pour ça que le déplacement du tank
est dans un composant à part, `TankMovement`, qu'on peut cloner sur n'importe quel acteur.

<span class="fichier">TankMovement.h (extrait)</span>

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

La gâchette analogique est découpée en 5 paliers de vitesse plutôt qu'en valeur continue.
On sent clairement quand on accélère, et le tank garde une vitesse minimale pour ne
jamais paraître bloqué quand la gâchette est presque relâchée.

<span class="fichier">TankMovement.cpp (extrait)</span>

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

Pour la rotation, l'angle est interpolé à vitesse constante en prenant toujours le chemin
le plus court : le tank ne fait jamais un tour complet pour passer de 350° à 10°.

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
