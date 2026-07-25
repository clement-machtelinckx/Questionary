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
            explanation:
                "La formulation donne elle-même l’indice : le célèbre cheval associé à Henri IV est décrit comme blanc.",
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
            explanation:
                "Paris accueille notamment la présidence, le Parlement et de nombreuses institutions nationales françaises.",
        },
        {
            id: "general-pacific-ocean-03",
            prompt: "Quel est le plus vaste océan du monde ?",
            options: [
                { id: "general-pacific-ocean-atlantic", label: "L’océan Atlantique" },
                { id: "general-pacific-ocean-indian", label: "L’océan Indien" },
                { id: "general-pacific-ocean-pacific", label: "L’océan Pacifique" },
                { id: "general-pacific-ocean-arctic", label: "L’océan Arctique" },
            ],
            correctOptionId: "general-pacific-ocean-pacific",
            explanation:
                "L’océan Pacifique couvre environ un tiers de la surface de la Terre, ce qui en fait le plus vaste.",
        },
        {
            id: "general-les-miserables-author-04",
            prompt: "Qui a écrit le roman « Les Misérables » ?",
            options: [
                { id: "general-les-miserables-moliere", label: "Molière" },
                { id: "general-les-miserables-hugo", label: "Victor Hugo" },
                { id: "general-les-miserables-verne", label: "Jules Verne" },
                { id: "general-les-miserables-zola", label: "Émile Zola" },
            ],
            correctOptionId: "general-les-miserables-hugo",
            explanation:
                "Victor Hugo a publié Les Misérables en 1862, après de nombreuses années de travail.",
        },
        {
            id: "general-roman-numeral-x-05",
            prompt: "Quelle valeur représente le chiffre romain X ?",
            options: [
                { id: "general-roman-numeral-x-five", label: "5" },
                { id: "general-roman-numeral-x-ten", label: "10" },
                { id: "general-roman-numeral-x-fifty", label: "50" },
                { id: "general-roman-numeral-x-hundred", label: "100" },
            ],
            correctOptionId: "general-roman-numeral-x-ten",
            explanation: "Dans la numération romaine, X vaut 10, tandis que V vaut 5 et L vaut 50.",
        },
        {
            id: "general-japan-currency-06",
            prompt: "Quelle est la monnaie officielle du Japon ?",
            options: [
                { id: "general-japan-currency-won", label: "Le won" },
                { id: "general-japan-currency-yuan", label: "Le yuan" },
                { id: "general-japan-currency-yen", label: "Le yen" },
                { id: "general-japan-currency-rupee", label: "La roupie" },
            ],
            correctOptionId: "general-japan-currency-yen",
            explanation:
                "Le yen est la monnaie japonaise ; son symbole international est ¥ et son code est JPY.",
        },
        {
            id: "general-brazil-language-07",
            prompt: "Quelle est la langue officielle du Brésil ?",
            options: [
                { id: "general-brazil-language-spanish", label: "L’espagnol" },
                { id: "general-brazil-language-portuguese", label: "Le portugais" },
                { id: "general-brazil-language-french", label: "Le français" },
                { id: "general-brazil-language-english", label: "L’anglais" },
            ],
            correctOptionId: "general-brazil-language-portuguese",
            explanation:
                "Le Brésil a été une colonie portugaise, ce qui explique que le portugais y soit la langue officielle.",
        },
        {
            id: "general-mona-lisa-painter-08",
            prompt: "Quel artiste a peint La Joconde ?",
            options: [
                { id: "general-mona-lisa-michelangelo", label: "Michel-Ange" },
                { id: "general-mona-lisa-leonardo", label: "Léonard de Vinci" },
                { id: "general-mona-lisa-raphael", label: "Raphaël" },
                { id: "general-mona-lisa-botticelli", label: "Sandro Botticelli" },
            ],
            correctOptionId: "general-mona-lisa-leonardo",
            explanation:
                "Léonard de Vinci a peint La Joconde au début du XVIe siècle ; elle est aujourd’hui exposée au Louvre.",
        },
        {
            id: "general-chess-pieces-09",
            prompt: "Combien de pièces chaque joueur possède-t-il au début d’une partie d’échecs ?",
            options: [
                { id: "general-chess-pieces-twelve", label: "12" },
                { id: "general-chess-pieces-fourteen", label: "14" },
                { id: "general-chess-pieces-sixteen", label: "16" },
                { id: "general-chess-pieces-eighteen", label: "18" },
            ],
            correctOptionId: "general-chess-pieces-sixteen",
            explanation:
                "Chaque camp commence avec huit pions et huit autres pièces, soit seize pièces au total.",
        },
        {
            id: "general-leap-year-days-10",
            prompt: "Combien de jours compte une année bissextile ?",
            options: [
                { id: "general-leap-year-days-364", label: "364" },
                { id: "general-leap-year-days-365", label: "365" },
                { id: "general-leap-year-days-366", label: "366" },
                { id: "general-leap-year-days-367", label: "367" },
            ],
            correctOptionId: "general-leap-year-days-366",
            explanation:
                "Une année bissextile ajoute un 29 février au calendrier et compte donc 366 jours.",
        },
    ],
};
