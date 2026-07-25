import type { QuestionCategory } from "./types";

export const cultureGeneraleCategory: QuestionCategory = {
    id: "category-general-knowledge",
    slug: "culture-generale",
    title: "Culture générale",
    description: "Quelques questions simples pour tester vos connaissances.",
    questions: [
        {
            id: "general-henri-iv-01",
            prompt: "Quelle est la couleur du cheval blanc d’Henri IV ?",
            options: [
                { id: "general-henri-iv-black", label: "Noir" },
                { id: "general-henri-iv-white", label: "Blanc" },
                { id: "general-henri-iv-brown", label: "Marron" },
                { id: "general-henri-iv-grey", label: "Gris" },
            ],
            correctOptionId: "general-henri-iv-white",
            explanation: "Le cheval blanc d’Henri IV est blanc.",
        },
        {
            id: "general-france-capital-02",
            prompt: "Quelle est la capitale de la France ?",
            options: [
                { id: "general-france-capital-lyon", label: "Lyon" },
                { id: "general-france-capital-paris", label: "Paris" },
                { id: "general-france-capital-lille", label: "Lille" },
                { id: "general-france-capital-bordeaux", label: "Bordeaux" },
            ],
            correctOptionId: "general-france-capital-paris",
            explanation: "Paris est la capitale de la France.",
        },
    ],
};
