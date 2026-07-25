import { cultureGeneraleCategory } from "./culture-generale";
import { developpementWebCategory } from "./developpement-web";
import type { QuestionCategory } from "./types";

export const questionCategories: QuestionCategory[] = [
    cultureGeneraleCategory,
    developpementWebCategory,
];

export function getCategoryBySlug(slug: string): QuestionCategory | undefined {
    return questionCategories.find((category) => category.slug === slug);
}

export type { Question, QuestionCategory, QuestionOption, QuestionOptions } from "./types";
