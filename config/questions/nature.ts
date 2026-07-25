import { natureAdaptationsConservationQuestions } from "./nature-adaptations-conservation";
import { natureAnimauxPlantesQuestions } from "./nature-animaux-plantes";
import { natureEcosystemesQuestions } from "./nature-ecosystemes";
import type { QuestionCategory } from "./types";

export const natureCategory: QuestionCategory = {
    id: "category-nature",
    slug: "nature",
    title: "Nature",
    description:
        "Explorez les animaux, les plantes, les champignons, les écosystèmes et les grands équilibres naturels.",
    questions: [
        ...natureAnimauxPlantesQuestions,
        ...natureEcosystemesQuestions,
        ...natureAdaptationsConservationQuestions,
    ],
};
