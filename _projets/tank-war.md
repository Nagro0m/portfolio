---
title: Tank War
accroche: My first game, a two-player tank battle running on an engine we wrote in class.
ordre: 6
categorie: ecole
annee: 2024
moteur: Custom engine (C++ / SFML)
role: Gameplay programmer (pair project)
equipe: 2 people
duree: 2 weeks

apercu: /assets/video/tank-war-apercu.mp4
video: /assets/video/tank-war.mp4

resume: >-
  Working in pairs, we had two weeks to come up with a concept, find assets and program
  the game. It runs on a 2D engine we wrote in class, modeled on Unreal (actors,
  components, game mode).

contributions:
  - Came up with the concept and gameplay with my teammate
  - Tank customization before each match (tracks, hull, turret)
  - "Gamepad driving: the trigger accelerates in steps and the tank turns gradually"
  - Semi-procedural generation of the play area
  - Two-player fights with shells

technos: [C++, SFML, Local multiplayer, Procedural generation, Git]

liens:
  - nom: Source code (GitHub)
    nom_fr: Code source (GitHub)
    url: https://github.com/Nagro0m/TankWar-V2
  - nom: Download the game (.zip)
    nom_fr: Télécharger le jeu (.zip)
    url: /games/TankWar.zip
---

### An engine built like Unreal

The engine follows Unreal's logic: an `Actor` holds `Component`s, and each behavior
is its own reusable component. That's why the tank's movement lives in a separate
`TankMovement` component that can be cloned onto any actor.

<span class="fichier">TankMovement.h (excerpt)</span>

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

### Driving that reads well on a gamepad

The analog trigger is split into 5 speed steps instead of a continuous value. You can
clearly feel when you speed up, and the tank keeps a minimum speed so it never feels
stuck when the trigger is almost released.

<span class="fichier">TankMovement.cpp (excerpt)</span>

```cpp
float TankMovement::MapTriggerToSpeed(float triggerValue)
{
    // 0.0 → 1.0, rounded to the nearest 0.2 step
    return round(triggerValue * 5.0f) * 0.2f;
}

void TankMovement::ProcessBackRightController(const float _controllerBackRight)
{
    moveSpeed = MapTriggerToSpeed(_controllerBackRight) * maxMoveSpeed;

    if (_controllerBackRight == -1)   // trigger released
    {
        moveSpeed = 0.0f;
        return;
    }
    if (_controllerBackRight <= 0.1f) // minimum speed
        moveSpeed = 0.1f * maxMoveSpeed;
}
```

For turning, the angle is interpolated at a constant speed and always takes the
shortest way round, so the tank never spins all the way around to go from 350° to 10°.

```cpp
float TankMovement::InterpAngleConstantTo(float _current, float _target,
                                          float _deltaTime, float _speed)
{
    // Difference brought back between -180° and 180°
    float _delta = fmod(_target - _current + 180.0f, 360.0f) - 180.0f;
    if (_delta > 180.0f)       _delta -= 360.0f;
    else if (_delta < -180.0f) _delta += 360.0f;

    const float _step = _speed * _deltaTime;
    if (fabs(_delta) <= _step)
        return _target;

    return _current + (_delta > 0 ? _step : -_step);
}
```
