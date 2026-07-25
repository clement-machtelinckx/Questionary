import { cinemaSeriesCategory } from "./cinema-series";
import { cultureGeneraleCategory } from "./culture-generale";
import { developpementWebCategory } from "./developpement-web";
import { drapeauxCategory } from "./drapeaux";
import { geographieCategory } from "./geographie";
import { herculePoirotCategory } from "./hercule-poirot";
import { histoireCategory } from "./histoire";
import { jeuxVideoCategory } from "./jeux-video";
import { natureCategory } from "./nature";
import { sciencesCategory } from "./sciences";
import { sportCategory } from "./sport";
import type { QuestionCategory } from "./types";
import {
    validateExpectedQuestionCount,
    validateFlagQuestionCategory,
    validateNumberedQuestionCategories,
    validateQuestionCategories,
} from "./validate-questions";

export const baseQuestionCategories: QuestionCategory[] = [
    cultureGeneraleCategory,
    sciencesCategory,
    histoireCategory,
    geographieCategory,
    drapeauxCategory,
    natureCategory,
    developpementWebCategory,
    cinemaSeriesCategory,
    herculePoirotCategory,
    jeuxVideoCategory,
    sportCategory,
];

const numberedFiftyQuestionCategories: QuestionCategory[] = [
    sciencesCategory,
    histoireCategory,
    geographieCategory,
    natureCategory,
    developpementWebCategory,
    cinemaSeriesCategory,
    herculePoirotCategory,
    jeuxVideoCategory,
    sportCategory,
    drapeauxCategory,
];

validateQuestionCategories(baseQuestionCategories);
validateExpectedQuestionCount([cultureGeneraleCategory], 60);
validateExpectedQuestionCount(numberedFiftyQuestionCategories, 50);
validateNumberedQuestionCategories(numberedFiftyQuestionCategories, 50);
validateFlagQuestionCategory(drapeauxCategory);

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

export type {
    Question,
    QuestionCategory,
    QuestionMedia,
    QuestionOption,
    QuestionOptions,
} from "./types";
