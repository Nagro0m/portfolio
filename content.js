const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accentColor": "#00e5ff",
  "showTimeline": true,
  "showSkills": true,
  "heroSubtitle": "Game Developer · Unreal & Unity · C++ · C# · Python"
} /*EDITMODE-END*/;

const content = {
  fr: {
    nav: ["Projets", "À Propos", "Compétences", "Parcours", "Contact"],
    navAnchors: ["#projects", "#about", "#skills", "#timeline", "#contact"],
    heroTag: "Développeur Jeu Vidéo",
    heroSub: "En formation, spécialisé en programmation de jeux vidéo. Je conçois des systèmes de jeu robustes avec Unreal Engine & Unity, en C++, C# et Python.",
    heroCta1: "Voir mes projets",
    heroCta2: "Me contacter",
    stats: [
      { num: "2+", label: "Années de\nformation" },
      { num: "7",  label: "Projets\nréalisés" },
      { num: "3",  label: "Langages\nmaîtrisés" },
      { num: "2",  label: "Moteurs\nutilisés" }
    ],
    aboutLabel: "À Propos",
    aboutTitle: "Qui suis-je ?",
    aboutP1: "Je m'appelle Morgan, développeur jeu vidéo en formation, avec un intérêt marqué pour le gameplay programming (GPE), les mécaniques 3C, ainsi que les moteurs et l'architecture logicielle.",
    aboutP2: "Je travaille principalement sur Unreal Engine en C++ et sur Unity en C#, tout en utilisant Python pour le développement d'outils et l'automatisation. J'accorde une attention particulière à la qualité technique de mes projets, avec une approche orientée vers des systèmes propres, modulaires et durables.",
    aboutP3: "Actuellement en fin de cursus, j'entamerai ma dernière année en septembre. Je suis à la recherche d'une opportunité en studio afin de mettre en pratique mes compétences sur des projets concrets et évoluer dans un environnement professionnel exigeant.",
    infoRows: [
      { key: "Formation",   val: "Développeur Jeu Vidéo",        tags: [] },
      { key: "Niveau",      val: "2ème année",                   tags: [] },
      { key: "Moteurs",     val: "",                             tags: ["Unreal Engine", "Unity"] },
      { key: "Langages",    val: "",                             tags: ["C++", "C#", "Python"] },
      { key: "Localisation",val: "Montpellier (France)",         tags: [] },
      { key: "Disponible",  val: "Stage / Alternance 2026/2027", tags: [] }
    ],
    skillsLabel: "Compétences",
    skillsTitle: "Stack technique",
    skillGroups: [
      {
        title: "Langages",
        skills: [
          { name: "C++",           level: 80 },
          { name: "C# (Unity)",    level: 85 },
          { name: "Python",        level: 70 },
          { name: "Blueprint (UE)",level: 75 }
        ]
      },
      {
        title: "Moteurs & Outils",
        skills: [
          { name: "Unreal Engine 5",            level: 78 },
          { name: "Unity",                      level: 85 },
          { name: "Git / P4V / Version Control",level: 72 },
          { name: "Visual Studio / Rider",      level: 80 }
        ]
      },
      {
        title: "Programmation Jeu",
        skills: [
          { name: "Gameplay Programming (GPE)",      level: 94 },
          { name: "3C (Character, Camera, Controls)",level: 75 },
          { name: "Analyse & résolution de bugs",    level: 69 },
          { name: "Architecture de systèmes",        level: 81 }
        ]
      }
    ],
    tlLabel: "Parcours",
    tlTitle: "Mon évolution",
    timeline: [
      { date: "2024", title: "1ère année", active: false, sub: "Bases en C++ natif\nCréation d'un moteur de jeu type Unreal avec SFML\nPremier projet de jeu sur ce moteur\nDécouverte d'Unreal Engine\nRéalisation d'un projet de fin d'année" },
      { date: "2025", title: "2ème année", active: false, sub: "Apprentissage du C# natif puis Unity\nApprofondissement en programmation gameplay : GPE, 3C, IA, réseau\nNombreux projets courts (≈1 semaine) pour recréer des jeux\nProjet professionnel VR (1 mois) en collaboration avec La Poste\nDéveloppement de tools et optimisation de workflow\nPréproduction du projet de fin d'études" },
      { date: "2026", title: "3ème année (à venir)", active: true, sub: "Développement d'un jeu en conditions proches d'un studio (travail en équipe équipe avec différents métiers : programmeurs, game designers, level designers, graphistes)\nGestion de projet et organisation de production à long terme\nSpécialisation technique (GPE / 3C) et développement de projets personnels\nPossibilité d'alternance et de stages en entreprise" }
    ],
    projectsLabel: "Projets",
    projectsTitle: "Ce que j'ai réalisé",
    viewMore: "Voir détails",
    close: "Fermer",
    techLabel: "Technologies",
    links: { github: "GitHub", demo: "Démo jouable", download: "Télécharger" },
    contactLabel: "Contact",
    contactTitle: "Travaillons ensemble",
    contactLead: "Je suis disponible pour un stage ou une alternance en 2026. N'hésitez pas à me contacter pour discuter de vos projets ou d'opportunités.",
    cvTitle: "Curriculum Vitae",
    cvText: "Mon CV complet avec l'ensemble de mon parcours, mes compétences et mes projets.",
    cvBtn: "Télécharger le CV",
    footerText: "© 2026 Morgan — Game Developer"
  },
  en: {
    nav: ["Projects", "About", "Skills", "Timeline", "Contact"],
    navAnchors: ["#projects", "#about", "#skills", "#timeline", "#contact"],
    heroTag: "Game Developer",
    heroSub: "Training in game programming. I build robust game systems with Unreal Engine & Unity, in C++, C# and Python.",
    heroCta1: "View Projects",
    heroCta2: "Contact Me",
    stats: [
      { num: "2+", label: "Years of\ntraining" },
      { num: "7",  label: "Projects\ncompleted" },
      { num: "3",  label: "Languages\nmastered" },
      { num: "2",  label: "Engines\nused" }
    ],
    aboutLabel: "About",
    aboutTitle: "Who am I?",
    aboutP1: "My name is Morgan. I'm a game developer in training, passionate about game systems programming, engine work, and code architecture.",
    aboutP2: "I work primarily with Unreal Engine (C++) and Unity (C#), with solid Python experience for tooling and scripting. My goal: build technically solid, architecturally clean game experiences.",
    aboutP3: "I am currently in the final stages of my degree program and will begin my senior year in September. I am looking for an opportunity at a studio where I can apply my skills to real-world projects and grow in a challenging professional environment.",
    infoRows: [
      { key: "Degree",    val: "Game Development",                tags: [] },
      { key: "Year",      val: "3rd year (end 2025)",             tags: [] },
      { key: "Engines",   val: "",                                tags: ["Unreal Engine", "Unity"] },
      { key: "Languages", val: "",                                tags: ["C++", "C#", "Python"] },
      { key: "Location",  val: "Montpellier (France)",            tags: [] },
      { key: "Available", val: "Internship / Work-study 2026/2027",tags: [] }
    ],
    skillsLabel: "Skills",
    skillsTitle: "Tech Stack",
    skillGroups: [
      {
        title: "Languages",
        skills: [
          { name: "C++",           level: 80 },
          { name: "C# (Unity)",    level: 85 },
          { name: "Python",        level: 70 },
          { name: "Blueprint (UE)",level: 75 }
        ]
      },
      {
        title: "Engines & Tools",
        skills: [
          { name: "Unreal Engine 5",            level: 78 },
          { name: "Unity",                      level: 85 },
          { name: "Git / P4V / Version Control",level: 72 },
          { name: "Visual Studio / Rider",      level: 80 }
        ]
      },
      {
        title: "Game Programming",
        skills: [
          { name: "Gameplay Programming (GPE)",      level: 94 },
          { name: "3C (Character, Camera, Controls)",level: 75 },
          { name: "Analyse & résolution de bugs",    level: 69 },
          { name: "Architecture de systèmes",        level: 81 }
        ]
      }
    ],
    tlLabel: "Timeline",
    tlTitle: "My journey",
    timeline: [
      { date: "2024", title: "1st year", active: false, sub: "C++ fundamentals\nCustom Unreal-inspired game engine in SFML\nFirst complete game project on that engine\nIntroduction to Unreal Engine\nEnd-of-year project on UE" },
      { date: "2025", title: "2nd year", active: false, sub: "Native C# then Unity\nDeepened gameplay programming: GPE, 3C, AI, networking\nMany short projects (~1 week) recreating existing games\nProfessional VR project (1 month) with La Poste\nTooling & workflow optimization\nPre-production of final graduation project" },
      { date: "2026", title: "3rd year (upcoming)", active: true, sub: "Full game in studio-like conditions (multidisciplinary team)\nProject management & long-term production\nTechnical specialization (GPE / 3C) + personal projects\nInternship / work-study opportunities" }
    ],
    projectsLabel: "Projects",
    projectsTitle: "What I built",
    viewMore: "View details",
    close: "Close",
    techLabel: "Technologies",
    links: { github: "GitHub", demo: "Playable demo", download: "Download" },
    contactLabel: "Contact",
    contactTitle: "Let's work together",
    contactLead: "I'm available for an internship or work-study program in 2026. Feel free to reach out to discuss your projects or any opportunities.",
    cvTitle: "Curriculum Vitae",
    cvText: "My full CV with my background, skills and projects.",
    cvBtn: "Download CV",
    footerText: "© 2026 Morgan — Game Developer"
  }
};

const projects = [
  {
    id: 1,
    accent: "#22c55e",
    engine: "SFML",
    type: { fr: "Projet Ecole", en: "School Project" },
    title: "Tank War",
    short: { fr: "TopDown · Jeu de combat de tank", en: "Top-down · Tank fight game" },
    desc: {
      fr: "Jeu multijoueur local en vue de dessus développé en C++ avec un moteur de jeu custom inspiré d'Unreal Engine. L'objectif était de créer un premier jeu en une semaine avec les contraintes du moteur.",
      en: "A top-down local multiplayer game developed in C++ using a custom game engine inspired by Unreal Engine. The goal was to create a prototype game in one week within the engine's constraints."
    },
    tech: ["SFML", "C++", "Local Multiplayer", "PCG", "Git"],
    github: "https://github.com/Nagro0m/TankWar-V2/tree/main#readme",
    demo: null, download: "games/TankWar.zip", links: [],
    media: "videos/TankWar_Video.mp4"
  },
  {
    id: 2,
    accent: "#ff9900",
    engine: "Unreal Engine 5.4",
    type: { fr: "Projet Ecole", en: "School Project" },
    title: "Bamphy",
    short: { fr: "Action Aventure · Découverte des secrets du temple d'Angkor Vat", en: "Action Adventure · Uncover the secrets of Angkor Wat" },
    desc: {
      fr: "Jeu d'action-aventure orienté réflexion basé sur des énigmes interconnectées dans un environnement inspiré d'Angkor Vat. J'ai développé les systèmes de gameplay (GPE : portes, leviers, interactions) et surtout assuré la gestion de l'équipe de développement ainsi que la coordination des trois pôles : 3C, GPE et UI, afin de garantir un résultat cohérente.",
      en: "A puzzle-based action-adventure game featuring interconnected puzzles set in an environment inspired by Angkor Wat. I developed the gameplay systems (GPE: doors, levers, interactions) and, most importantly, managed the development team and coordinated the three departments—3C, GPE, and UI—to ensure a cohesive final product."
    },
    tech: ["Unreal Engine 5", "C++", "Blueprint", "Lead", "P4V"],
    github: null, demo: null, 
    download: null, links: [{label: "Download Latest Version", url:"https://mega.nz/file/GmwWxKQT#liAp8ehl5I8Duh5xmhFQQLrv3My0EKgrLC6pXS6riqg"}],
    media: "videos/Bamphy_Video.mp4"
  },
  {
    id: 3,
    accent: "#003da5",
    engine: "Unreal Engine 5.6",
    type: { fr: "Projet Perso", en: "Personal Project" },
    title: "Burger Simulator",
    short: { fr: "Simulateur · Reproduire les mécaniques des jeux de simulation", en: "Simulator · Reproduce the mechanics of simulation games" },
    desc: {
      fr: "Objectif : concevoir un jeu complet de A à Z en prenant en charge l'ensemble des systèmes (3C, GPE, UI, IA). Le projet s'inspire des jeux de simulation de restauration, avec des mécaniques de service client, préparation des commandes, gestion des stocks et livraison des ingrédients.",
      en: "Objective: Design a complete game from start to finish, handling all systems (3C, GPE, UI, AI). The project is inspired by restaurant simulation games, featuring mechanics for customer service, order preparation, inventory management, and ingredient delivery."
    },
    tech: ["Unreal Engine 5", "C++", "3C", "GPE", "AI", "Game Design"],
    github: null, demo: null, download: null,
    links: [{ label: "GDD Google Doc", url: "https://docs.google.com/document/d/1TIpyKvB4P1GrwShKLQHoLTUEsl5WuuL7S5Pmkqc5XSM/edit?usp=sharing" }],
    media: "videos/BurgerSimulator_Video.mp4"
  },
  {
    id: 4,
    accent: "#ffcb05",
    engine: "Unity",
    type: { fr: "Projet Professionnel", en: "Game Jam" },
    title: "La Poste VR",
    short: { fr: "Formation VR · Modules de formation sur les dangers au travail", en: "VR Training · Training modules on hazards at work" },
    desc: {
      fr: "Formation en réalité virtuelle réalisée pour le centre de tri de La Poste à Mauguio, dans le cadre d’un partenariat entre Objectif 3D et les formateurs du site. En tant qu’étudiant co-lead du projet, j’ai participé à la conception d’une expérience visant à sensibiliser les employés aux risques de leur environnement de travail, ainsi qu’aux dangers liés à l’alcool. J’ai pris en charge le module dédié à l’alcool, en concevant les mini-jeux et en encadrant les autres étudiants impliqués. J’ai également contribué, aux côtés d’un second lead, à la finalisation et au polish du projet afin d’assurer un rendu cohérent et abouti.",
      en: "A virtual reality training programme developed for La Poste’s sorting centre in Mauguio, as part of a partnership between Objectif 3D and the site’s trainers. As a student co-lead on the project, I helped design an experience aimed at raising employees’ awareness of the risks in their working environment, as well as the dangers associated with alcohol. I took charge of the module dedicated to alcohol, designing the mini-games and supervising the other students involved. I also contributed, alongside a second lead, to finalising and polishing the project to ensure a coherent and polished end result."
    },
    tech: ["Unity", "C#", "VR", "Serious Game", "Professional", "Meta Quest"],
    github: null, demo: null, download: null,
    links: [{ label: "Linkedin", url: "https://www.linkedin.com/feed/update/urn:li:activity:7453688002704240640/"}, {label: "Midi Libre", url: "https://www.midilibre.fr/2026/03/29/la-poste-innove-avec-une-formation-en-realite-virtuelle-13298351.php"}],
    media: "videos/LaPoste_Video.mp4"
  },
  {
    id: 5,
    accent: "#900000",
    engine: "Unreal Engine",
    type: { fr: "Global Game Jam 2026", en: "Global Game Jam 2026" },
    title: "Masked",
    short: { fr: "Roguelike · Projet sur le thème ‘Masque’", en: "Roguelike · Project on the theme of ‘Masks’" },
    desc: {
      fr: "Roguelike développé en 2 jours lors d’une Game Jam. Le joueur progresse de salle en salle, affronte des ennemis (des masques) et tente de faire le meilleur score possible, sans possibilité de revenir en arrière. J’étais en charge de la génération aléatoire des salles ainsi que des événements déclenchés à chaque nouvelle salle.",
      en: "A roguelike game developed in two days during a Game Jam. The player progresses from room to room, battles enemies (masks) and tries to achieve the highest score possible, with no way to go back. I was responsible for the random generation of rooms and the events triggered in each new room."
    },
    tech: ["Unreal Engine", "C++", "Blueprint", "PCG"],
    github: null, demo: null, download: null, links: [{label:"Download", url:"https://mega.nz/file/irZEUJxK#KHImLJBq1bk4aWnC-DZcUtnPpyv7dO32oX5FBPmpdpk"}],
    media: "videos/Masked_Video.mp4"
  },
  {
    id: 6,
    accent: "#4796cf",
    engine: "Unreal Engine",
    type: { fr: "Projet Ecole", en: "School Project" },
    title: "Subway Surfer Like",
    short: { fr: "Endless Runner · Inspiré du jeu Subway Surfers", en: "Endless Runner · A Subway Surfer like" },
    desc: {
      fr: "Création d’un jeu inspiré de Subway Surfers pour explorer le genre de l’endless runner, avec un système de génération procédurale permettant de faire apparaître des obstacles de manière cohérente. Le projet incluait également une compatibilité Android. J’ai pris en charge les 3C (Character, Camera, Controls), en reproduisant une logique de déplacement fluide propre au genre, ainsi que certains effets visuels, comme la déformation des objets à distance pour accentuer la sensation de vitesse.",
      en: "Development of a game inspired by Subway Surfers to explore the endless runner genre, featuring a procedural generation system that generates obstacles in a consistent manner. The project also included Android compatibility. I was responsible for the 3Cs (Character, Camera, Controls), recreating the fluid movement typical of the genre, as well as certain visual effects, such as the distortion of objects in the distance to accentuate the sense of speed."
    },
    tech: ["Unreal Engine", "C++", "Blueprint", "PCG"],
    github: null, demo: null, download: null, links: [],
    media: null
  },
  {
    id: 7,
    accent: "#903b7a",
    engine: "Unreal Engine",
    type: { fr: "Projet Ecole", en: "School Project" },
    title: "Rayman M Remake",
    short: { fr: "Jeu de course · Remake d'un niveau de Rayman M en multijoueur", en: "Racing game · Multiplayer remake of a level from Rayman M" },
    desc: {
      fr: "",
      en: ""
    },
    tech: ["Unreal Engine", "C++", "Blueprint", "PCG"],
    github: null, demo: null, download: null, links: [],
    media: null
  },
];
