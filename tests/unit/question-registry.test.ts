import { describe, expect, it } from "vitest";

import {
    allQuestionsCategory,
    baseQuestionCategories,
    getCategoryBySlug,
    questionCategories,
} from "@/config/questions";

describe("registre des catégories", () => {
    it("expose des slugs et identifiants de catégories uniques", () => {
        const slugs = questionCategories.map((category) => category.slug);
        const ids = questionCategories.map((category) => category.id);

        expect(new Set(slugs)).toHaveLength(slugs.length);
        expect(new Set(ids)).toHaveLength(ids.length);
    });

    it("retrouve une catégorie par son slug", () => {
        const expectedCategory = baseQuestionCategories[0];

        expect(getCategoryBySlug(expectedCategory.slug)).toBe(expectedCategory);
        expect(getCategoryBySlug("slug-inconnu")).toBeUndefined();
    });

    it("inclut la catégorie all sans l’inclure dans sa propre construction", () => {
        expect(questionCategories).toContain(allQuestionsCategory);
        expect(baseQuestionCategories).not.toContain(allQuestionsCategory);
        expect(allQuestionsCategory.id).toBe("category-all");
        expect(allQuestionsCategory.slug).toBe("all");
    });

    it("construit all avec exactement une occurrence de chaque question réelle", () => {
        const expectedQuestionIds = baseQuestionCategories.flatMap((category) =>
            category.questions.map((question) => question.id),
        );
        const allQuestionIds = allQuestionsCategory.questions.map((question) => question.id);

        expect(allQuestionIds).toHaveLength(expectedQuestionIds.length);
        expect(new Set(allQuestionIds)).toHaveLength(allQuestionIds.length);
        expect(new Set(allQuestionIds)).toEqual(new Set(expectedQuestionIds));

        for (const questionId of expectedQuestionIds) {
            expect(allQuestionIds.filter((candidateId) => candidateId === questionId)).toHaveLength(
                1,
            );
        }
    });
});
