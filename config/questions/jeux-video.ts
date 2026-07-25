import type { QuestionCategory } from "./types";

export const jeuxVideoCategory: QuestionCategory = {
    id: "category-jeux-video",
    slug: "jeux-video",
    title: "Jeux vidéo",
    description:
        "Parcourez l’histoire du jeu vidéo, ses genres, ses machines, ses studios et ses œuvres influentes.",
    questions: [
        {
            id: "jeux-video-001",
            prompt: "Quelle entreprise a commercialisé le jeu d’arcade Pong en 1972 ?",
            options: [
                { id: "jeux-video-001-a", label: "Sega" },
                { id: "jeux-video-001-b", label: "Atari" },
                { id: "jeux-video-001-c", label: "Taito" },
                { id: "jeux-video-001-d", label: "Namco" },
            ],
            correctOptionId: "jeux-video-001-b",
            explanation:
                "Atari a lancé Pong comme borne d’arcade en 1972, contribuant à populariser le jeu vidéo commercial.",
        },
        {
            id: "jeux-video-002",
            prompt: "Quelle entreprise japonaise a créé Space Invaders en 1978 ?",
            options: [
                { id: "jeux-video-002-a", label: "Konami" },
                { id: "jeux-video-002-b", label: "Capcom" },
                { id: "jeux-video-002-c", label: "SNK" },
                { id: "jeux-video-002-d", label: "Taito" },
            ],
            correctOptionId: "jeux-video-002-d",
            explanation:
                "Tomohiro Nishikado a conçu Space Invaders pour Taito, qui en a fait un immense succès des salles d’arcade.",
        },
        {
            id: "jeux-video-003",
            prompt: "Sous quel nom l’entreprise Namco a-t-elle publié au Japon le jeu devenu Pac-Man ?",
            options: [
                { id: "jeux-video-003-a", label: "Puck Man" },
                { id: "jeux-video-003-b", label: "Maze Man" },
                { id: "jeux-video-003-c", label: "Dot Eater" },
                { id: "jeux-video-003-d", label: "Ghost Chase" },
            ],
            correctOptionId: "jeux-video-003-a",
            explanation:
                "Le jeu est sorti au Japon sous le titre Puck Man en 1980 avant d’être renommé Pac-Man à l’international.",
        },
        {
            id: "jeux-video-004",
            prompt: "Qui a conçu Tetris en 1984 ?",
            options: [
                { id: "jeux-video-004-a", label: "Shigeru Miyamoto" },
                { id: "jeux-video-004-b", label: "Sid Meier" },
                { id: "jeux-video-004-c", label: "Alexeï Pajitnov" },
                { id: "jeux-video-004-d", label: "Hideo Kojima" },
            ],
            correctOptionId: "jeux-video-004-c",
            explanation:
                "Alexeï Pajitnov a créé Tetris à Moscou en s’inspirant notamment d’un jeu de formes appelé pentominos.",
        },
        {
            id: "jeux-video-005",
            prompt: "À quelle entreprise le personnage de Mario appartient-il ?",
            options: [
                { id: "jeux-video-005-a", label: "Sega" },
                { id: "jeux-video-005-b", label: "Nintendo" },
                { id: "jeux-video-005-c", label: "Capcom" },
                { id: "jeux-video-005-d", label: "Bandai Namco" },
            ],
            correctOptionId: "jeux-video-005-b",
            explanation:
                "Shigeru Miyamoto a conçu Mario pour Nintendo ; le personnage apparaît d’abord dans Donkey Kong en 1981.",
        },
        {
            id: "jeux-video-006",
            prompt: "Quel personnage est devenu la mascotte de Sega au début des années 1990 ?",
            options: [
                { id: "jeux-video-006-a", label: "Sonic" },
                { id: "jeux-video-006-b", label: "Crash Bandicoot" },
                { id: "jeux-video-006-c", label: "Rayman" },
                { id: "jeux-video-006-d", label: "Mega Man" },
            ],
            correctOptionId: "jeux-video-006-a",
            explanation:
                "Sonic a été créé pour incarner l’identité de Sega et son premier jeu principal est sorti en 1991.",
        },
        {
            id: "jeux-video-007",
            prompt: "Comment s’appelle le héros généralement jouable dans The Legend of Zelda ?",
            options: [
                { id: "jeux-video-007-a", label: "Ganondorf" },
                { id: "jeux-video-007-b", label: "Tingle" },
                { id: "jeux-video-007-c", label: "Darunia" },
                { id: "jeux-video-007-d", label: "Link" },
            ],
            correctOptionId: "jeux-video-007-d",
            explanation:
                "Link est le héros de la série ; Zelda est généralement la princesse qu’il aide à protéger.",
        },
        {
            id: "jeux-video-008",
            prompt: "Quelle chasseuse de primes est l’héroïne de la série Metroid ?",
            options: [
                { id: "jeux-video-008-a", label: "Lara Croft" },
                { id: "jeux-video-008-b", label: "Joanna Dark" },
                { id: "jeux-video-008-c", label: "Samus Aran" },
                { id: "jeux-video-008-d", label: "Aloy" },
            ],
            correctOptionId: "jeux-video-008-c",
            explanation:
                "Samus Aran explore des planètes hostiles dans une armure de puissance, depuis le premier Metroid de 1986.",
        },
        {
            id: "jeux-video-009",
            prompt: "Quel studio développe la série principale de jeux de rôle Pokémon ?",
            options: [
                { id: "jeux-video-009-a", label: "Game Freak" },
                { id: "jeux-video-009-b", label: "HAL Laboratory" },
                { id: "jeux-video-009-c", label: "Monolith Soft" },
                { id: "jeux-video-009-d", label: "Intelligent Systems" },
            ],
            correctOptionId: "jeux-video-009-a",
            explanation:
                "Game Freak développe les épisodes principaux de Pokémon, dont les premières versions sont sorties au Japon en 1996.",
        },
        {
            id: "jeux-video-010",
            prompt: "Sous quel nom l’entreprise qui a créé le premier Final Fantasy était-elle connue en 1987 ?",
            options: [
                { id: "jeux-video-010-a", label: "Enix" },
                { id: "jeux-video-010-b", label: "Square" },
                { id: "jeux-video-010-c", label: "Falcom" },
                { id: "jeux-video-010-d", label: "Atlus" },
            ],
            correctOptionId: "jeux-video-010-b",
            explanation:
                "Square a développé Final Fantasy avant de fusionner avec Enix en 2003 pour former Square Enix.",
        },
        {
            id: "jeux-video-011",
            prompt: "Quel studio a développé le jeu de tir Doom sorti en 1993 ?",
            options: [
                { id: "jeux-video-011-a", label: "Valve" },
                { id: "jeux-video-011-b", label: "Bungie" },
                { id: "jeux-video-011-c", label: "id Software" },
                { id: "jeux-video-011-d", label: "Epic Games" },
            ],
            correctOptionId: "jeux-video-011-c",
            explanation:
                "id Software a conçu Doom, dont le moteur, le rythme et la diffusion en shareware ont marqué le jeu de tir.",
        },
        {
            id: "jeux-video-012",
            prompt: "Quel studio a créé Half-Life ?",
            options: [
                { id: "jeux-video-012-a", label: "Raven Software" },
                { id: "jeux-video-012-b", label: "Gearbox Software" },
                { id: "jeux-video-012-c", label: "Remedy Entertainment" },
                { id: "jeux-video-012-d", label: "Valve" },
            ],
            correctOptionId: "jeux-video-012-d",
            explanation:
                "Half-Life est le premier jeu de Valve, sorti en 1998 et remarqué pour sa narration intégrée à l’action.",
        },
        {
            id: "jeux-video-013",
            prompt: "Quelle entreprise publie historiquement les séries Warcraft, Diablo et StarCraft ?",
            options: [
                { id: "jeux-video-013-a", label: "BioWare" },
                { id: "jeux-video-013-b", label: "Blizzard Entertainment" },
                { id: "jeux-video-013-c", label: "Obsidian Entertainment" },
                { id: "jeux-video-013-d", label: "Creative Assembly" },
            ],
            correctOptionId: "jeux-video-013-b",
            explanation:
                "Blizzard Entertainment publie ces franchises ; le premier Diablo a été développé par le studio devenu Blizzard North.",
        },
        {
            id: "jeux-video-014",
            prompt: "Quel studio suédois a développé Minecraft à l’origine ?",
            options: [
                { id: "jeux-video-014-a", label: "DICE" },
                { id: "jeux-video-014-b", label: "Avalanche Studios" },
                { id: "jeux-video-014-c", label: "Mojang" },
                { id: "jeux-video-014-d", label: "Coffee Stain Studios" },
            ],
            correctOptionId: "jeux-video-014-c",
            explanation:
                "Mojang a développé Minecraft autour de la construction par blocs, avant son acquisition par Microsoft en 2014.",
        },
        {
            id: "jeux-video-015",
            prompt: "Quel outil permet de relier deux surfaces éloignées dans Portal ?",
            options: [
                { id: "jeux-video-015-a", label: "Le générateur de portails" },
                { id: "jeux-video-015-b", label: "Le grappin gravitationnel" },
                { id: "jeux-video-015-c", label: "Le téléporteur temporel" },
                { id: "jeux-video-015-d", label: "Le canon à rebond" },
            ],
            correctOptionId: "jeux-video-015-a",
            explanation:
                "Le dispositif crée deux portails liés, ce qui permet de résoudre des énigmes en jouant avec l’espace et l’élan.",
        },
        {
            id: "jeux-video-016",
            prompt: "Quel studio a créé la série de simulation de vie Les Sims ?",
            options: [
                { id: "jeux-video-016-a", label: "Bullfrog Productions" },
                { id: "jeux-video-016-b", label: "Lionhead Studios" },
                { id: "jeux-video-016-c", label: "Westwood Studios" },
                { id: "jeux-video-016-d", label: "Maxis" },
            ],
            correctOptionId: "jeux-video-016-d",
            explanation:
                "Maxis, studio fondé par Will Wright et Jeff Braun, a lancé Les Sims en 2000.",
        },
        {
            id: "jeux-video-017",
            prompt: "Quel créateur donne son nom complet à la série Sid Meier’s Civilization ?",
            options: [
                { id: "jeux-video-017-a", label: "Peter Molyneux" },
                { id: "jeux-video-017-b", label: "Will Wright" },
                { id: "jeux-video-017-c", label: "Sid Meier" },
                { id: "jeux-video-017-d", label: "Jordan Mechner" },
            ],
            correctOptionId: "jeux-video-017-c",
            explanation:
                "Sid Meier a conçu avec Bruce Shelley le premier Civilization, un jeu de stratégie sorti en 1991.",
        },
        {
            id: "jeux-video-018",
            prompt: "À quel genre appartient principalement SimCity ?",
            options: [
                { id: "jeux-video-018-a", label: "Jeu de combat" },
                { id: "jeux-video-018-b", label: "Jeu de gestion urbaine" },
                { id: "jeux-video-018-c", label: "Jeu de plateformes" },
                { id: "jeux-video-018-d", label: "Jeu de rythme" },
            ],
            correctOptionId: "jeux-video-018-b",
            explanation:
                "SimCity confie au joueur la planification d’une ville, de ses zones, de ses services et de ses finances.",
        },
        {
            id: "jeux-video-019",
            prompt: "À quel genre appartient la série Street Fighter ?",
            options: [
                { id: "jeux-video-019-a", label: "Jeu de stratégie en temps réel" },
                { id: "jeux-video-019-b", label: "Jeu de course" },
                { id: "jeux-video-019-c", label: "Jeu de rôle tactique" },
                { id: "jeux-video-019-d", label: "Jeu de combat" },
            ],
            correctOptionId: "jeux-video-019-d",
            explanation:
                "Street Fighter oppose des combattants aux techniques distinctes dans des affrontements en plusieurs manches.",
        },
        {
            id: "jeux-video-020",
            prompt: "Quel type de compétition est au cœur de la série Mario Kart ?",
            options: [
                { id: "jeux-video-020-a", label: "La course de karts" },
                { id: "jeux-video-020-b", label: "Le tennis" },
                { id: "jeux-video-020-c", label: "Le combat au tour par tour" },
                { id: "jeux-video-020-d", label: "Le ski alpin" },
            ],
            correctOptionId: "jeux-video-020-a",
            explanation:
                "Mario Kart associe conduite, circuits fantaisistes et objets capables d’aider un pilote ou de gêner ses adversaires.",
        },
        {
            id: "jeux-video-021",
            prompt: "Quel studio développe la série de simulation automobile Gran Turismo ?",
            options: [
                { id: "jeux-video-021-a", label: "Turn 10 Studios" },
                { id: "jeux-video-021-b", label: "Polyphony Digital" },
                { id: "jeux-video-021-c", label: "Codemasters" },
                { id: "jeux-video-021-d", label: "Criterion Games" },
            ],
            correctOptionId: "jeux-video-021-b",
            explanation:
                "Polyphony Digital, studio japonais de Sony, développe Gran Turismo depuis le premier épisode sur PlayStation.",
        },
        {
            id: "jeux-video-022",
            prompt: "Quel sport reproduisait la série FIFA publiée par EA Sports jusqu’à FIFA 23 ?",
            options: [
                { id: "jeux-video-022-a", label: "Le football" },
                { id: "jeux-video-022-b", label: "Le basketball" },
                { id: "jeux-video-022-c", label: "Le hockey sur glace" },
                { id: "jeux-video-022-d", label: "Le football américain" },
            ],
            correctOptionId: "jeux-video-022-a",
            explanation:
                "La série simulait le football avec des clubs et compétitions sous licence ; elle a ensuite pris le nom EA Sports FC.",
        },
        {
            id: "jeux-video-023",
            prompt: "Que contrôlent les joueurs dans Rocket League ?",
            options: [
                { id: "jeux-video-023-a", label: "Des robots de boxe" },
                { id: "jeux-video-023-b", label: "Des avions de voltige" },
                { id: "jeux-video-023-c", label: "Des voitures propulsées" },
                { id: "jeux-video-023-d", label: "Des motos aquatiques" },
            ],
            correctOptionId: "jeux-video-023-c",
            explanation:
                "Rocket League combine un ballon géant et des voitures capables d’accélérer, de sauter et de voler brièvement.",
        },
        {
            id: "jeux-video-024",
            prompt: "À quel genre compétitif appartient League of Legends ?",
            options: [
                { id: "jeux-video-024-a", label: "Jeu de course en monde ouvert" },
                { id: "jeux-video-024-b", label: "Jeu de survie solitaire" },
                { id: "jeux-video-024-c", label: "Jeu de stratégie au tour par tour" },
                { id: "jeux-video-024-d", label: "Arène de bataille en ligne multijoueur" },
            ],
            correctOptionId: "jeux-video-024-d",
            explanation:
                "Dans ce genre souvent abrégé MOBA, deux équipes dirigent des personnages et tentent de détruire la base adverse.",
        },
        {
            id: "jeux-video-025",
            prompt: "Quel type de jeu décrit le mieux Counter-Strike ?",
            options: [
                { id: "jeux-video-025-a", label: "Un jeu de tir tactique à la première personne" },
                { id: "jeux-video-025-b", label: "Un jeu de rôle japonais" },
                { id: "jeux-video-025-c", label: "Un jeu de construction de ville" },
                { id: "jeux-video-025-d", label: "Un jeu de cartes à collectionner" },
            ],
            correctOptionId: "jeux-video-025-a",
            explanation:
                "Counter-Strike oppose deux équipes dans des manches courtes où le positionnement et l’économie d’équipement sont essentiels.",
        },
        {
            id: "jeux-video-026",
            prompt: "À quel genre appartient StarCraft ?",
            options: [
                { id: "jeux-video-026-a", label: "Aventure graphique" },
                { id: "jeux-video-026-b", label: "Simulation sportive" },
                { id: "jeux-video-026-c", label: "Stratégie en temps réel" },
                { id: "jeux-video-026-d", label: "Jeu de plateformes" },
            ],
            correctOptionId: "jeux-video-026-c",
            explanation:
                "StarCraft demande de récolter des ressources, construire une base et commander des unités sans alternance de tours.",
        },
        {
            id: "jeux-video-027",
            prompt: "Quel type de périodes sert de cadre à la série Age of Empires ?",
            options: [
                { id: "jeux-video-027-a", label: "Des futurs postapocalyptiques uniquement" },
                { id: "jeux-video-027-b", label: "Des périodes historiques" },
                { id: "jeux-video-027-c", label: "Des univers de super-héros uniquement" },
                { id: "jeux-video-027-d", label: "Des contes féeriques sans référence historique" },
            ],
            correctOptionId: "jeux-video-027-b",
            explanation:
                "Les épisodes mettent en scène des civilisations et technologies inspirées de l’Antiquité, du Moyen Âge ou de l’époque moderne.",
        },
        {
            id: "jeux-video-028",
            prompt: "Quel jeu de rôle sur table fournit les règles et l’univers de référence de Baldur’s Gate ?",
            options: [
                { id: "jeux-video-028-a", label: "L’Appel de Cthulhu" },
                { id: "jeux-video-028-b", label: "Vampire : La Mascarade" },
                { id: "jeux-video-028-c", label: "Shadowrun" },
                { id: "jeux-video-028-d", label: "Donjons et Dragons" },
            ],
            correctOptionId: "jeux-video-028-d",
            explanation:
                "Baldur’s Gate se déroule dans les Royaumes oubliés et adapte les règles de Donjons et Dragons.",
        },
        {
            id: "jeux-video-029",
            prompt: "Dans quelle province de l’univers de The Elder Scrolls se déroule Skyrim ?",
            options: [
                { id: "jeux-video-029-a", label: "Morrowind" },
                { id: "jeux-video-029-b", label: "Cyrodiil" },
                { id: "jeux-video-029-c", label: "Bordeciel" },
                { id: "jeux-video-029-d", label: "Lenclume" },
            ],
            correctOptionId: "jeux-video-029-c",
            explanation:
                "Skyrim est le nom anglais de Bordeciel, province nordique de Tamriel où se déroule le cinquième épisode principal.",
        },
        {
            id: "jeux-video-030",
            prompt: "Quel studio japonais développe la série Dark Souls ?",
            options: [
                { id: "jeux-video-030-a", label: "FromSoftware" },
                { id: "jeux-video-030-b", label: "PlatinumGames" },
                { id: "jeux-video-030-c", label: "Team Ninja" },
                { id: "jeux-video-030-d", label: "CyberConnect2" },
            ],
            correctOptionId: "jeux-video-030-a",
            explanation:
                "FromSoftware a développé Dark Souls sous la direction de Hidetaka Miyazaki, après Demon’s Souls.",
        },
        {
            id: "jeux-video-031",
            prompt: "À quel sous-genre associe-t-on couramment Hollow Knight ?",
            options: [
                { id: "jeux-video-031-a", label: "Jeu de rythme" },
                { id: "jeux-video-031-b", label: "Simulation de vol" },
                { id: "jeux-video-031-c", label: "Jeu de stratégie 4X" },
                { id: "jeux-video-031-d", label: "Metroidvania" },
            ],
            correctOptionId: "jeux-video-031-d",
            explanation:
                "Hollow Knight propose un vaste monde interconnecté dont de nouvelles capacités ouvrent progressivement les passages.",
        },
        {
            id: "jeux-video-032",
            prompt: "Quel objectif guide principalement Madeline dans Celeste ?",
            options: [
                { id: "jeux-video-032-a", label: "Traverser un océan" },
                { id: "jeux-video-032-b", label: "Gravir une montagne" },
                { id: "jeux-video-032-c", label: "Construire une ville" },
                { id: "jeux-video-032-d", label: "Gagner un tournoi d’échecs" },
            ],
            correctOptionId: "jeux-video-032-b",
            explanation:
                "L’ascension du mont Celeste sert à la fois de défi de plateformes et de métaphore du combat intérieur de Madeline.",
        },
        {
            id: "jeux-video-033",
            prompt: "De quelle mythologie Hades reprend-il principalement les personnages ?",
            options: [
                { id: "jeux-video-033-a", label: "La mythologie grecque" },
                { id: "jeux-video-033-b", label: "La mythologie nordique" },
                { id: "jeux-video-033-c", label: "La mythologie égyptienne" },
                { id: "jeux-video-033-d", label: "La mythologie japonaise" },
            ],
            correctOptionId: "jeux-video-033-a",
            explanation:
                "Le joueur incarne Zagreus, fils d’Hadès, qui tente de fuir les Enfers avec l’aide des dieux de l’Olympe.",
        },
        {
            id: "jeux-video-034",
            prompt: "Quel environnement traverse principalement le personnage de Journey ?",
            options: [
                { id: "jeux-video-034-a", label: "Une métropole sous-marine" },
                { id: "jeux-video-034-b", label: "Un vaste désert" },
                { id: "jeux-video-034-c", label: "Une station spatiale" },
                { id: "jeux-video-034-d", label: "Une jungle tropicale" },
            ],
            correctOptionId: "jeux-video-034-b",
            explanation:
                "Journey conduit une silhouette encapuchonnée à travers des dunes et des ruines vers une montagne lointaine.",
        },
        {
            id: "jeux-video-035",
            prompt: "Qui a créé et composé l’essentiel de la musique d’Undertale ?",
            options: [
                { id: "jeux-video-035-a", label: "Jonathan Blow" },
                { id: "jeux-video-035-b", label: "Edmund McMillen" },
                { id: "jeux-video-035-c", label: "Phil Fish" },
                { id: "jeux-video-035-d", label: "Toby Fox" },
            ],
            correctOptionId: "jeux-video-035-d",
            explanation:
                "Toby Fox a développé Undertale presque seul et en a composé la bande originale riche en thèmes récurrents.",
        },
        {
            id: "jeux-video-036",
            prompt: "Quelle activité constitue le point de départ de Stardew Valley ?",
            options: [
                { id: "jeux-video-036-a", label: "Piloter une écurie automobile" },
                { id: "jeux-video-036-b", label: "Administrer un royaume médiéval" },
                { id: "jeux-video-036-c", label: "Restaurer et exploiter une ferme" },
                { id: "jeux-video-036-d", label: "Explorer une station orbitale" },
            ],
            correctOptionId: "jeux-video-036-c",
            explanation:
                "Le personnage hérite d’une ferme abandonnée qu’il peut cultiver tout en découvrant la communauté locale.",
        },
        {
            id: "jeux-video-037",
            prompt: "Quelle particularité la télécommande Wii a-t-elle popularisée sur console de salon ?",
            options: [
                { id: "jeux-video-037-a", label: "L’affichage holographique" },
                { id: "jeux-video-037-b", label: "La détection de mouvements" },
                { id: "jeux-video-037-c", label: "Le clavier mécanique intégré" },
                { id: "jeux-video-037-d", label: "La projection sur les murs" },
            ],
            correctOptionId: "jeux-video-037-b",
            explanation:
                "La Wiimote associe des capteurs de mouvement et un pointage infrarouge pour contrôler les jeux par gestes.",
        },
        {
            id: "jeux-video-038",
            prompt: "Quelle entreprise a lancé la console portable Game Boy en 1989 ?",
            options: [
                { id: "jeux-video-038-a", label: "Atari" },
                { id: "jeux-video-038-b", label: "Sega" },
                { id: "jeux-video-038-c", label: "NEC" },
                { id: "jeux-video-038-d", label: "Nintendo" },
            ],
            correctOptionId: "jeux-video-038-d",
            explanation:
                "Nintendo a lancé la Game Boy conçue sous la direction de Gunpei Yokoi, avec un écran monochrome et des cartouches.",
        },
        {
            id: "jeux-video-039",
            prompt: "En quelle année la première PlayStation est-elle sortie au Japon ?",
            options: [
                { id: "jeux-video-039-a", label: "1994" },
                { id: "jeux-video-039-b", label: "1989" },
                { id: "jeux-video-039-c", label: "1998" },
                { id: "jeux-video-039-d", label: "2001" },
            ],
            correctOptionId: "jeux-video-039-a",
            explanation:
                "Sony a commercialisé sa première PlayStation au Japon en décembre 1994, puis en Europe en 1995.",
        },
        {
            id: "jeux-video-040",
            prompt: "Quelle entreprise a conçu la console Dreamcast ?",
            options: [
                { id: "jeux-video-040-a", label: "Sony" },
                { id: "jeux-video-040-b", label: "Nintendo" },
                { id: "jeux-video-040-c", label: "Sega" },
                { id: "jeux-video-040-d", label: "Microsoft" },
            ],
            correctOptionId: "jeux-video-040-c",
            explanation:
                "La Dreamcast est la dernière console de salon produite par Sega ; elle est sortie au Japon en 1998.",
        },
        {
            id: "jeux-video-041",
            prompt: "Quelle entreprise a lancé la première console Xbox ?",
            options: [
                { id: "jeux-video-041-a", label: "IBM" },
                { id: "jeux-video-041-b", label: "Apple" },
                { id: "jeux-video-041-c", label: "Intel" },
                { id: "jeux-video-041-d", label: "Microsoft" },
            ],
            correctOptionId: "jeux-video-041-d",
            explanation:
                "Microsoft est entré sur le marché des consoles de salon avec la Xbox en 2001 en Amérique du Nord.",
        },
        {
            id: "jeux-video-042",
            prompt: "Quelle entreprise exploite la plateforme de distribution de jeux Steam ?",
            options: [
                { id: "jeux-video-042-a", label: "Electronic Arts" },
                { id: "jeux-video-042-b", label: "Valve" },
                { id: "jeux-video-042-c", label: "Ubisoft" },
                { id: "jeux-video-042-d", label: "CD Projekt" },
            ],
            correctOptionId: "jeux-video-042-b",
            explanation:
                "Valve a lancé Steam en 2003, d’abord pour distribuer et mettre à jour ses propres jeux sur ordinateur.",
        },
        {
            id: "jeux-video-043",
            prompt: "Quelle entreprise développe l’Unreal Engine ?",
            options: [
                { id: "jeux-video-043-a", label: "Crytek" },
                { id: "jeux-video-043-b", label: "Unity" },
                { id: "jeux-video-043-c", label: "Epic Games" },
                { id: "jeux-video-043-d", label: "Autodesk" },
            ],
            correctOptionId: "jeux-video-043-c",
            explanation:
                "Epic Games développe l’Unreal Engine, né avec le jeu Unreal puis utilisé dans de nombreux projets interactifs.",
        },
        {
            id: "jeux-video-044",
            prompt: "Lequel de ces noms désigne un moteur de jeu multiplateforme ?",
            options: [
                { id: "jeux-video-044-a", label: "Unity" },
                { id: "jeux-video-044-b", label: "OpenGL" },
                { id: "jeux-video-044-c", label: "Blender" },
                { id: "jeux-video-044-d", label: "Git" },
            ],
            correctOptionId: "jeux-video-044-a",
            explanation:
                "Unity fournit un éditeur et un moteur permettant de produire des jeux pour de nombreuses plateformes.",
        },
        {
            id: "jeux-video-045",
            prompt: "Qu’est-ce qu’un sprite dans un jeu vidéo en deux dimensions ?",
            options: [
                { id: "jeux-video-045-a", label: "Un protocole de jeu en réseau" },
                { id: "jeux-video-045-b", label: "Une image représentant un élément à l’écran" },
                { id: "jeux-video-045-c", label: "Un type de manette analogique" },
                { id: "jeux-video-045-d", label: "Une sauvegarde automatique" },
            ],
            correctOptionId: "jeux-video-045-b",
            explanation:
                "Un sprite est une image ou une animation 2D utilisée pour afficher un personnage, un objet ou un effet.",
        },
        {
            id: "jeux-video-046",
            prompt: "Que mesure une fréquence d’affichage exprimée en images par seconde ?",
            options: [
                { id: "jeux-video-046-a", label: "La capacité de stockage" },
                { id: "jeux-video-046-b", label: "La vitesse de téléchargement" },
                { id: "jeux-video-046-c", label: "Le nombre d’images rendues chaque seconde" },
                { id: "jeux-video-046-d", label: "Le nombre de joueurs connectés" },
            ],
            correctOptionId: "jeux-video-046-c",
            explanation:
                "Cette fréquence, souvent notée FPS, influence la fluidité visuelle perçue lorsque les images sont rendues régulièrement.",
        },
        {
            id: "jeux-video-047",
            prompt: "Que signifie l’abréviation PNJ dans un jeu vidéo en français ?",
            options: [
                { id: "jeux-video-047-a", label: "Personnage non-joueur" },
                { id: "jeux-video-047-b", label: "Programme de niveau journalier" },
                { id: "jeux-video-047-c", label: "Partie numérique jumelée" },
                { id: "jeux-video-047-d", label: "Profil de nouveau joueur" },
            ],
            correctOptionId: "jeux-video-047-a",
            explanation:
                "Un personnage non-joueur est contrôlé par le programme plutôt que directement par une personne.",
        },
        {
            id: "jeux-video-048",
            prompt: "Que désigne généralement le sigle anglais DLC ?",
            options: [
                { id: "jeux-video-048-a", label: "Un championnat local" },
                { id: "jeux-video-048-b", label: "Une commande de manette" },
                { id: "jeux-video-048-c", label: "Un niveau de difficulté" },
                { id: "jeux-video-048-d", label: "Du contenu téléchargeable" },
            ],
            correctOptionId: "jeux-video-048-d",
            explanation:
                "Downloadable content désigne un contenu distribué après ou avec le jeu, comme une extension ou des éléments supplémentaires.",
        },
        {
            id: "jeux-video-049",
            prompt: "Quel est l’objectif principal d’un speedrun ?",
            options: [
                {
                    id: "jeux-video-049-a",
                    label: "Terminer un objectif de jeu le plus rapidement possible",
                },
                { id: "jeux-video-049-b", label: "Obtenir tous les objets sans limite de temps" },
                { id: "jeux-video-049-c", label: "Créer un jeu en une journée" },
                { id: "jeux-video-049-d", label: "Augmenter la vitesse du processeur" },
            ],
            correctOptionId: "jeux-video-049-a",
            explanation:
                "Les speedruns suivent des catégories et des règles précises afin de comparer des temps sur un même parcours.",
        },
        {
            id: "jeux-video-050",
            prompt: "Que désigne l’esport ?",
            options: [
                { id: "jeux-video-050-a", label: "La fabrication de consoles portables" },
                { id: "jeux-video-050-b", label: "La pratique compétitive organisée du jeu vidéo" },
                { id: "jeux-video-050-c", label: "L’étude médicale des écrans" },
                { id: "jeux-video-050-d", label: "La restauration de bornes anciennes" },
            ],
            correctOptionId: "jeux-video-050-b",
            explanation:
                "L’esport organise des compétitions encadrées entre joueurs ou équipes, souvent devant un public et avec des arbitres.",
        },
    ],
};
