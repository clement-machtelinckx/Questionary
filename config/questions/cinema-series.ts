import type { QuestionCategory } from "./types";

export const cinemaSeriesCategory: QuestionCategory = {
    id: "category-movies-series",
    slug: "cinema-series",
    title: "Cinéma et séries",
    description:
        "Retrouvez des œuvres, des personnages et des repères célèbres du petit et du grand écran.",
    questions: [
        {
            id: "cinema-star-wars-creator-01",
            prompt: "Qui a créé la saga Star Wars ?",
            options: [
                { id: "cinema-star-wars-lucas", label: "George Lucas" },
                { id: "cinema-star-wars-spielberg", label: "Steven Spielberg" },
                { id: "cinema-star-wars-cameron", label: "James Cameron" },
                { id: "cinema-star-wars-scott", label: "Ridley Scott" },
            ],
            correctOptionId: "cinema-star-wars-lucas",
            explanation:
                "George Lucas a imaginé Star Wars et réalisé le premier film sorti en 1977.",
        },
        {
            id: "cinema-lord-rings-director-02",
            prompt: "Qui a réalisé la trilogie cinématographique Le Seigneur des anneaux sortie entre 2001 et 2003 ?",
            options: [
                { id: "cinema-lord-rings-jackson", label: "Peter Jackson" },
                { id: "cinema-lord-rings-nolan", label: "Christopher Nolan" },
                { id: "cinema-lord-rings-burton", label: "Tim Burton" },
                { id: "cinema-lord-rings-coppola", label: "Francis Ford Coppola" },
            ],
            correctOptionId: "cinema-lord-rings-jackson",
            explanation:
                "Peter Jackson a tourné les trois films en Nouvelle-Zélande à partir des romans de J. R. R. Tolkien.",
        },
        {
            id: "series-friends-coffee-shop-03",
            prompt: "Comment s’appelle le café fréquenté par les personnages de Friends ?",
            options: [
                { id: "series-friends-central-perk", label: "Central Perk" },
                { id: "series-friends-cheers", label: "Cheers" },
                { id: "series-friends-monks", label: "Monk’s Café" },
                { id: "series-friends-lukes", label: "Luke’s Diner" },
            ],
            correctOptionId: "series-friends-central-perk",
            explanation:
                "Central Perk est le café new-yorkais où les six amis se retrouvent régulièrement dans la série.",
        },
        {
            id: "cinema-toy-story-studio-04",
            prompt: "Quel studio a produit Toy Story, premier long métrage entièrement réalisé en images de synthèse ?",
            options: [
                { id: "cinema-toy-story-pixar", label: "Pixar" },
                { id: "cinema-toy-story-dreamworks", label: "DreamWorks Animation" },
                { id: "cinema-toy-story-ghibli", label: "Studio Ghibli" },
                { id: "cinema-toy-story-aardman", label: "Aardman Animations" },
            ],
            correctOptionId: "cinema-toy-story-pixar",
            explanation:
                "Pixar a produit Toy Story, sorti en 1995 et distribué par Walt Disney Pictures.",
        },
        {
            id: "cinema-matrix-pill-05",
            prompt: "Quelle pilule Neo choisit-il dans Matrix pour découvrir la vérité ?",
            options: [
                { id: "cinema-matrix-pill-blue", label: "La pilule bleue" },
                { id: "cinema-matrix-pill-red", label: "La pilule rouge" },
                { id: "cinema-matrix-pill-green", label: "La pilule verte" },
                { id: "cinema-matrix-pill-yellow", label: "La pilule jaune" },
            ],
            correctOptionId: "cinema-matrix-pill-red",
            explanation:
                "La pilule rouge conduit Neo hors de l’illusion de la Matrice et lui révèle le monde réel.",
        },
        {
            id: "cinema-titanic-director-06",
            prompt: "Qui a réalisé le film Titanic sorti en 1997 ?",
            options: [
                { id: "cinema-titanic-cameron", label: "James Cameron" },
                { id: "cinema-titanic-spielberg", label: "Steven Spielberg" },
                { id: "cinema-titanic-scott", label: "Ridley Scott" },
                { id: "cinema-titanic-howard", label: "Ron Howard" },
            ],
            correctOptionId: "cinema-titanic-cameron",
            explanation:
                "James Cameron a écrit et réalisé Titanic, qui mêle une histoire fictive au naufrage historique de 1912.",
        },
        {
            id: "series-game-thrones-continent-07",
            prompt: "Sur quel continent fictif se déroule la majeure partie de Game of Thrones ?",
            options: [
                { id: "series-game-thrones-westeros", label: "Westeros" },
                { id: "series-game-thrones-narnia", label: "Narnia" },
                { id: "series-game-thrones-middle-earth", label: "La Terre du Milieu" },
                { id: "series-game-thrones-arrakis", label: "Arrakis" },
            ],
            correctOptionId: "series-game-thrones-westeros",
            explanation:
                "Westeros abrite les Sept Couronnes, au cœur de la lutte pour le Trône de Fer.",
        },
        {
            id: "cinema-chaplin-character-08",
            prompt: "Quel personnage emblématique Charlie Chaplin incarnait-il au cinéma ?",
            options: [
                { id: "cinema-chaplin-charlot", label: "Charlot" },
                { id: "cinema-chaplin-zorro", label: "Zorro" },
                { id: "cinema-chaplin-hulot", label: "Monsieur Hulot" },
                { id: "cinema-chaplin-cyrano", label: "Cyrano" },
            ],
            correctOptionId: "cinema-chaplin-charlot",
            explanation:
                "Charlot, reconnaissable à son chapeau melon et à sa canne, est devenu une figure majeure du cinéma muet.",
        },
    ],
};
