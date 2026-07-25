import { cinemaSeriesCategory } from "./cinema-series";
import { cultureGeneraleCategory } from "./culture-generale";
import { developpementWebCategory } from "./developpement-web";
import { geographieCategory } from "./geographie";
import { herculePoirotCategory } from "./hercule-poirot";
import { histoireCategory } from "./histoire";
import { jeuxVideoCategory } from "./jeux-video";
import { sciencesCategory } from "./sciences";
import { sportCategory } from "./sport";
import type { QuestionCategory } from "./types";
import {
    validateNumberedQuestionCategories,
    validateQuestionCategories,
} from "./validate-questions";

export const baseQuestionCategories: QuestionCategory[] = [
    cultureGeneraleCategory,
    sciencesCategory,
    histoireCategory,
    geographieCategory,
    developpementWebCategory,
    cinemaSeriesCategory,
    herculePoirotCategory,
    jeuxVideoCategory,
    sportCategory,
];

const fiftyQuestionCategories: QuestionCategory[] = [
    geographieCategory,
    developpementWebCategory,
    cinemaSeriesCategory,
    herculePoirotCategory,
    jeuxVideoCategory,
    sportCategory,
];

validateQuestionCategories(baseQuestionCategories);
validateNumberedQuestionCategories(fiftyQuestionCategories, 50);

export const allQuestionsCategory: QuestionCategory = {
    id: "category-all",
    slug: "all",
    title: "Toutes les questions",
    description: "Un grand quiz réunissant toutes les questions de toutes les catégories.",
    questions: baseQuestionCategories.flatMap((category) => category.questions),
};

export const questionCategories: QuestionCategory[] = [
    ...baseQuestionCategories,
    allQuestionsCategory,
];

export function getCategoryBySlug(slug: string): QuestionCategory | undefined {
    return questionCategories.find((category) => category.slug === slug);
}

export type { Question, QuestionCategory, QuestionOption, QuestionOptions } from "./types";
