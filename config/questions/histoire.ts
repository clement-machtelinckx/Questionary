import type { QuestionCategory } from "./types";

export const histoireCategory: QuestionCategory = {
    id: "category-history",
    slug: "histoire",
    title: "Histoire",
    description: "Revisitez des événements et des personnages qui ont marqué les siècles.",
    questions: [
        {
            id: "history-french-revolution-01",
            prompt: "En quelle année la Révolution française a-t-elle commencé ?",
            options: [
                { id: "history-french-revolution-1492", label: "1492" },
                { id: "history-french-revolution-1789", label: "1789" },
                { id: "history-french-revolution-1815", label: "1815" },
                { id: "history-french-revolution-1914", label: "1914" },
            ],
            correctOptionId: "history-french-revolution-1789",
            explanation:
                "L’année 1789 est notamment marquée par la prise de la Bastille et la Déclaration des droits de l’homme.",
        },
        {
            id: "history-first-moon-step-02",
            prompt: "Qui fut le premier humain à marcher sur la Lune ?",
            options: [
                { id: "history-first-moon-step-gagarin", label: "Youri Gagarine" },
                { id: "history-first-moon-step-armstrong", label: "Neil Armstrong" },
                { id: "history-first-moon-step-aldrin", label: "Buzz Aldrin" },
                { id: "history-first-moon-step-glenn", label: "John Glenn" },
            ],
            correctOptionId: "history-first-moon-step-armstrong",
            explanation:
                "Neil Armstrong a posé le pied sur la Lune le 21 juillet 1969, lors de la mission Apollo 11.",
        },
        {
            id: "history-printing-gutenberg-03",
            prompt: "À qui associe-t-on le développement de l’imprimerie à caractères mobiles en Europe ?",
            options: [
                { id: "history-printing-gutenberg", label: "Johannes Gutenberg" },
                { id: "history-printing-leonardo", label: "Léonard de Vinci" },
                { id: "history-printing-galileo", label: "Galilée" },
                { id: "history-printing-newton", label: "Isaac Newton" },
            ],
            correctOptionId: "history-printing-gutenberg",
            explanation:
                "Au XVe siècle, Gutenberg a perfectionné un procédé qui a permis de reproduire les livres bien plus rapidement.",
        },
        {
            id: "history-western-roman-fall-04",
            prompt: "Quelle année marque traditionnellement la fin de l’Empire romain d’Occident ?",
            options: [
                { id: "history-western-roman-fall-476", label: "476" },
                { id: "history-western-roman-fall-1066", label: "1066" },
                { id: "history-western-roman-fall-1453", label: "1453" },
                { id: "history-western-roman-fall-1789", label: "1789" },
            ],
            correctOptionId: "history-western-roman-fall-476",
            explanation:
                "En 476, le dernier empereur romain d’Occident, Romulus Augustule, est déposé.",
        },
        {
            id: "history-joan-of-arc-war-05",
            prompt: "À quel conflit Jeanne d’Arc est-elle principalement associée ?",
            options: [
                { id: "history-joan-of-arc-crusades", label: "Les croisades" },
                { id: "history-joan-of-arc-punic", label: "Les guerres puniques" },
                { id: "history-joan-of-arc-hundred-years", label: "La guerre de Cent Ans" },
                { id: "history-joan-of-arc-thirty-years", label: "La guerre de Trente Ans" },
            ],
            correctOptionId: "history-joan-of-arc-hundred-years",
            explanation:
                "Jeanne d’Arc a soutenu Charles VII pendant la guerre de Cent Ans, notamment lors du siège d’Orléans.",
        },
        {
            id: "history-egyptian-pyramids-06",
            prompt: "Quelle était la fonction principale des grandes pyramides de l’Égypte ancienne ?",
            options: [
                { id: "history-egyptian-pyramids-markets", label: "Des marchés couverts" },
                { id: "history-egyptian-pyramids-tombs", label: "Des tombeaux royaux" },
                { id: "history-egyptian-pyramids-schools", label: "Des écoles de scribes" },
                { id: "history-egyptian-pyramids-palaces", label: "Des palais résidentiels" },
            ],
            correctOptionId: "history-egyptian-pyramids-tombs",
            explanation:
                "Les grandes pyramides ont été construites comme monuments funéraires pour des pharaons et intégrées à des complexes religieux.",
        },
        {
            id: "history-magna-carta-07",
            prompt: "En quelle année la Magna Carta a-t-elle été scellée en Angleterre ?",
            options: [
                { id: "history-magna-carta-800", label: "800" },
                { id: "history-magna-carta-1215", label: "1215" },
                { id: "history-magna-carta-1492", label: "1492" },
                { id: "history-magna-carta-1648", label: "1648" },
            ],
            correctOptionId: "history-magna-carta-1215",
            explanation:
                "Scellée en 1215, la Magna Carta a limité certains pouvoirs du roi Jean d’Angleterre.",
        },
        {
            id: "history-renaissance-origin-08",
            prompt: "Dans quelle région d’Europe la Renaissance a-t-elle d’abord pris son essor ?",
            options: [
                { id: "history-renaissance-origin-italy", label: "En Italie" },
                { id: "history-renaissance-origin-norway", label: "En Norvège" },
                { id: "history-renaissance-origin-ireland", label: "En Irlande" },
                { id: "history-renaissance-origin-poland", label: "En Pologne" },
            ],
            correctOptionId: "history-renaissance-origin-italy",
            explanation:
                "La Renaissance s’est développée dans les cités italiennes avant de se diffuser dans le reste de l’Europe.",
        },
    ],
};
