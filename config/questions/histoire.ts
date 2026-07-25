import { histoireAncienneQuestionData } from "./histoire-ancienne";
import { histoireModerneQuestionData } from "./histoire-moderne";
import type { Question, QuestionCategory, QuestionOptions } from "./types";

const optionLetters = ["a", "b", "c", "d"] as const;

type HistoryQuestionData = readonly [
    id: string,
    prompt: string,
    labels: readonly [string, string, string, string],
    correctIndex: 0 | 1 | 2 | 3,
    explanation: string,
];

function createQuestion([
    id,
    prompt,
    labels,
    correctIndex,
    explanation,
]: HistoryQuestionData): Question {
    const options = labels.map((label, index) => ({
        id: `${id}-${optionLetters[index]}`,
        label,
    })) as QuestionOptions;

    return {
        id,
        prompt,
        options,
        correctOptionId: options[correctIndex].id,
        explanation,
    };
}

const histoireQuestionData: readonly HistoryQuestionData[] = [
    ...histoireAncienneQuestionData,
    ...histoireModerneQuestionData,
];

export const histoireCategory: QuestionCategory = {
    id: "category-histoire",
    slug: "histoire",
    title: "Histoire",
    description:
        "Un voyage à travers les civilisations, les sociétés et les grands tournants de l’histoire mondiale.",
    questions: histoireQuestionData.map(createQuestion),
};
