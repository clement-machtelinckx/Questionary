import type { QuestionCategory } from "./types";

export function validateQuestionCategories(categories: readonly QuestionCategory[]): void {
    const categoryIds = new Set<string>();
    const categorySlugs = new Set<string>();
    const questionIds = new Set<string>();

    for (const category of categories) {
        if (categoryIds.has(category.id)) {
            throw new Error(
                `Configuration invalide : identifiant de catégorie dupliqué "${category.id}".`,
            );
        }

        if (categorySlugs.has(category.slug)) {
            throw new Error(
                `Configuration invalide : slug de catégorie dupliqué "${category.slug}".`,
            );
        }

        if (category.questions.length === 0) {
            throw new Error(
                `Configuration invalide : la catégorie "${category.title}" ne contient aucune question.`,
            );
        }

        categoryIds.add(category.id);
        categorySlugs.add(category.slug);

        for (const question of category.questions) {
            if (questionIds.has(question.id)) {
                throw new Error(
                    `Configuration invalide : question dupliquée "${question.id}" dans la catégorie "${category.title}".`,
                );
            }

            if (question.options.length !== 4) {
                throw new Error(
                    `Configuration invalide : la question "${question.id}" de "${category.title}" doit contenir exactement quatre réponses.`,
                );
            }

            const optionIds = new Set(question.options.map((option) => option.id));

            if (optionIds.size !== question.options.length) {
                throw new Error(
                    `Configuration invalide : la question "${question.id}" de "${category.title}" contient des identifiants de réponse dupliqués.`,
                );
            }

            if (!optionIds.has(question.correctOptionId)) {
                throw new Error(
                    `Configuration invalide : la bonne réponse "${question.correctOptionId}" est absente de la question "${question.id}" de "${category.title}".`,
                );
            }

            if (question.explanation.trim().length === 0) {
                throw new Error(
                    `Configuration invalide : la question "${question.id}" de "${category.title}" doit avoir une explication.`,
                );
            }

            questionIds.add(question.id);
        }
    }
}
