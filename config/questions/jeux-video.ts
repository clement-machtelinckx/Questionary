import type { QuestionCategory } from "./types";

export const jeuxVideoCategory: QuestionCategory = {
    id: "category-video-games",
    slug: "jeux-video",
    title: "Jeux vidéo",
    description:
        "Testez vos connaissances sur des personnages, des studios et des classiques du jeu vidéo.",
    questions: [
        {
            id: "videogame-mario-company-01",
            prompt: "Quelle entreprise a créé le personnage de Mario ?",
            options: [
                { id: "videogame-mario-nintendo", label: "Nintendo" },
                { id: "videogame-mario-sega", label: "Sega" },
                { id: "videogame-mario-atari", label: "Atari" },
                { id: "videogame-mario-capcom", label: "Capcom" },
            ],
            correctOptionId: "videogame-mario-nintendo",
            explanation:
                "Mario a été conçu par Shigeru Miyamoto pour Nintendo et apparaît dès Donkey Kong en 1981.",
        },
        {
            id: "videogame-zelda-hero-02",
            prompt: "Comment s’appelle le héros principal de la série The Legend of Zelda ?",
            options: [
                { id: "videogame-zelda-hero-link", label: "Link" },
                { id: "videogame-zelda-hero-ganondorf", label: "Ganondorf" },
                { id: "videogame-zelda-hero-epona", label: "Epona" },
                { id: "videogame-zelda-hero-goron", label: "Goron" },
            ],
            correctOptionId: "videogame-zelda-hero-link",
            explanation:
                "Link est le héros jouable de la série ; Zelda est généralement la princesse qu’il aide à protéger.",
        },
        {
            id: "videogame-tetris-creator-03",
            prompt: "Qui a conçu le jeu Tetris ?",
            options: [
                { id: "videogame-tetris-pajitnov", label: "Alexeï Pajitnov" },
                { id: "videogame-tetris-miyamoto", label: "Shigeru Miyamoto" },
                { id: "videogame-tetris-meier", label: "Sid Meier" },
                { id: "videogame-tetris-carmack", label: "John Carmack" },
            ],
            correctOptionId: "videogame-tetris-pajitnov",
            explanation:
                "Alexeï Pajitnov a créé Tetris en 1984 alors qu’il travaillait à l’Académie des sciences de Moscou.",
        },
        {
            id: "videogame-sonic-company-04",
            prompt: "À quelle entreprise le personnage de Sonic est-il associé ?",
            options: [
                { id: "videogame-sonic-square-enix", label: "Square Enix" },
                { id: "videogame-sonic-ubisoft", label: "Ubisoft" },
                { id: "videogame-sonic-sega", label: "Sega" },
                { id: "videogame-sonic-konami", label: "Konami" },
            ],
            correctOptionId: "videogame-sonic-sega",
            explanation:
                "Sonic a été créé comme mascotte de Sega et son premier jeu principal est sorti en 1991.",
        },
        {
            id: "videogame-pacman-goal-05",
            prompt: "Que doit principalement ramasser Pac-Man dans le labyrinthe du jeu original ?",
            options: [
                { id: "videogame-pacman-coins", label: "Des pièces" },
                { id: "videogame-pacman-dots", label: "Des pac-gommes" },
                { id: "videogame-pacman-rings", label: "Des anneaux" },
                { id: "videogame-pacman-stars", label: "Des étoiles" },
            ],
            correctOptionId: "videogame-pacman-dots",
            explanation:
                "Pac-Man doit manger toutes les pac-gommes du labyrinthe tout en évitant les fantômes.",
        },
        {
            id: "videogame-pokemon-capture-06",
            prompt: "Quel objet sert généralement à capturer un Pokémon ?",
            options: [
                { id: "videogame-pokemon-pokeball", label: "Une Poké Ball" },
                { id: "videogame-pokemon-triforce", label: "Une Triforce" },
                { id: "videogame-pokemon-power-star", label: "Une étoile de puissance" },
                { id: "videogame-pokemon-rupee", label: "Un rubis" },
            ],
            correctOptionId: "videogame-pokemon-pokeball",
            explanation:
                "Les dresseurs utilisent des Poké Balls pour capturer et transporter leurs Pokémon.",
        },
        {
            id: "videogame-playstation-japan-year-07",
            prompt: "En quelle année la première PlayStation est-elle sortie au Japon ?",
            options: [
                { id: "videogame-playstation-year-1989", label: "1989" },
                { id: "videogame-playstation-year-1994", label: "1994" },
                { id: "videogame-playstation-year-1999", label: "1999" },
                { id: "videogame-playstation-year-2004", label: "2004" },
            ],
            correctOptionId: "videogame-playstation-year-1994",
            explanation:
                "Sony a lancé la première PlayStation au Japon en décembre 1994, avant son arrivée en Europe en 1995.",
        },
        {
            id: "videogame-minecraft-explosive-creature-08",
            prompt: "Quelle créature de Minecraft est connue pour exploser près du joueur ?",
            options: [
                { id: "videogame-minecraft-creeper", label: "Le Creeper" },
                { id: "videogame-minecraft-skeleton", label: "Le squelette" },
                { id: "videogame-minecraft-enderman", label: "L’Enderman" },
                { id: "videogame-minecraft-villager", label: "Le villageois" },
            ],
            correctOptionId: "videogame-minecraft-creeper",
            explanation:
                "Le Creeper s’approche silencieusement avant d’exploser, ce qui peut blesser le joueur et détruire les blocs voisins.",
        },
    ],
};
