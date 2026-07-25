import type { QuestionCategory } from "./types";

export const sportCategory: QuestionCategory = {
    id: "category-sport",
    slug: "sport",
    title: "Sport",
    description: "Mesurez-vous à quelques règles, distances et grands repères sportifs.",
    questions: [
        {
            id: "sport-football-players-01",
            prompt: "Combien de joueurs une équipe de football aligne-t-elle sur le terrain au coup d’envoi ?",
            options: [
                { id: "sport-football-players-nine", label: "9" },
                { id: "sport-football-players-ten", label: "10" },
                { id: "sport-football-players-eleven", label: "11" },
                { id: "sport-football-players-twelve", label: "12" },
            ],
            correctOptionId: "sport-football-players-eleven",
            explanation:
                "Une équipe commence avec onze joueurs sur le terrain, gardien de but compris.",
        },
        {
            id: "sport-olympic-rings-02",
            prompt: "Combien d’anneaux composent le symbole olympique ?",
            options: [
                { id: "sport-olympic-rings-four", label: "4" },
                { id: "sport-olympic-rings-five", label: "5" },
                { id: "sport-olympic-rings-six", label: "6" },
                { id: "sport-olympic-rings-seven", label: "7" },
            ],
            correctOptionId: "sport-olympic-rings-five",
            explanation:
                "Les cinq anneaux entrelacés représentent l’union des cinq continents dans le mouvement olympique.",
        },
        {
            id: "sport-tennis-grand-slams-03",
            prompt: "Combien de tournois composent le Grand Chelem de tennis ?",
            options: [
                { id: "sport-tennis-grand-slams-three", label: "3" },
                { id: "sport-tennis-grand-slams-four", label: "4" },
                { id: "sport-tennis-grand-slams-five", label: "5" },
                { id: "sport-tennis-grand-slams-six", label: "6" },
            ],
            correctOptionId: "sport-tennis-grand-slams-four",
            explanation:
                "Le Grand Chelem réunit l’Open d’Australie, Roland-Garros, Wimbledon et l’US Open.",
        },
        {
            id: "sport-basketball-free-throw-04",
            prompt: "Combien de point vaut un lancer franc réussi au basketball ?",
            options: [
                { id: "sport-basketball-free-throw-one", label: "1 point" },
                { id: "sport-basketball-free-throw-two", label: "2 points" },
                { id: "sport-basketball-free-throw-three", label: "3 points" },
                { id: "sport-basketball-free-throw-four", label: "4 points" },
            ],
            correctOptionId: "sport-basketball-free-throw-one",
            explanation:
                "Chaque lancer franc réussi rapporte un point et se tire depuis la ligne des lancers francs.",
        },
        {
            id: "sport-marathon-distance-05",
            prompt: "Quelle est la distance officielle d’un marathon ?",
            options: [
                { id: "sport-marathon-distance-21", label: "21,097 km" },
                { id: "sport-marathon-distance-30", label: "30 km" },
                { id: "sport-marathon-distance-42", label: "42,195 km" },
                { id: "sport-marathon-distance-50", label: "50 km" },
            ],
            correctOptionId: "sport-marathon-distance-42",
            explanation:
                "La distance officielle du marathon est fixée à 42,195 kilomètres depuis le début du XXe siècle.",
        },
        {
            id: "sport-rugby-union-try-06",
            prompt: "Combien de points rapporte un essai au rugby à XV ?",
            options: [
                { id: "sport-rugby-union-try-three", label: "3 points" },
                { id: "sport-rugby-union-try-four", label: "4 points" },
                { id: "sport-rugby-union-try-five", label: "5 points" },
                { id: "sport-rugby-union-try-seven", label: "7 points" },
            ],
            correctOptionId: "sport-rugby-union-try-five",
            explanation:
                "Un essai vaut cinq points et peut être suivi d’une transformation valant deux points.",
        },
        {
            id: "sport-tour-de-france-discipline-07",
            prompt: "Dans quelle discipline se dispute le Tour de France ?",
            options: [
                { id: "sport-tour-de-france-running", label: "La course à pied" },
                { id: "sport-tour-de-france-cycling", label: "Le cyclisme sur route" },
                { id: "sport-tour-de-france-motorsport", label: "Le sport automobile" },
                { id: "sport-tour-de-france-rowing", label: "L’aviron" },
            ],
            correctOptionId: "sport-tour-de-france-cycling",
            explanation:
                "Le Tour de France est une course cycliste par étapes organisée principalement sur les routes françaises.",
        },
        {
            id: "sport-volleyball-players-08",
            prompt: "Combien de joueurs d’une équipe de volleyball sont présents sur le terrain ?",
            options: [
                { id: "sport-volleyball-players-five", label: "5" },
                { id: "sport-volleyball-players-six", label: "6" },
                { id: "sport-volleyball-players-seven", label: "7" },
                { id: "sport-volleyball-players-eight", label: "8" },
            ],
            correctOptionId: "sport-volleyball-players-six",
            explanation:
                "Une équipe de volleyball aligne six joueurs sur le terrain, qui effectuent une rotation au service.",
        },
    ],
};
