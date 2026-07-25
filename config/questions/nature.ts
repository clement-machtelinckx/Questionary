import natureQuestionsPart1 from "./nature-part-1.json";
import natureQuestionsPart2 from "./nature-part-2.json";
import natureQuestionsPart3 from "./nature-part-3.json";
import type { QuestionCategory } from "./types";

export const natureCategory: QuestionCategory = {
    id: "category-nature",
    slug: "nature",
    title: "Nature",
    description:
        "Explorez les animaux, les plantes, les champignons, les écosystèmes et les grands équilibres naturels.",
    questions: [
        ...natureQuestionsPart1,
        ...natureQuestionsPart2,
        ...natureQuestionsPart3,
    ] as QuestionCategory["questions"],
};
