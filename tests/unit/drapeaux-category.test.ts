import { existsSync } from "node:fs";
import { resolve } from "node:path";

import flagCountries from "flag-icons/country.json";
import { describe, expect, it } from "vitest";

import { drapeauxCategory } from "@/config/questions/drapeaux";
import {
    validateFlagQuestionCategory,
    validateNumberedQuestionCategories,
    validateQuestionCategories,
} from "@/config/questions/validate-questions";

describe("drapeauxCategory", () => {
    it("contient exactement 50 questions statiques et 200 options valides", () => {
        expect(drapeauxCategory.questions).toHaveLength(50);
        expect(drapeauxCategory.questions.flatMap((question) => question.options)).toHaveLength(
            200,
        );

        drapeauxCategory.questions.forEach((question, index) => {
            const expectedQuestionId = `drapeaux-${String(index + 1).padStart(3, "0")}`;

            expect(question.id).toBe(expectedQuestionId);
            expect(question.options).toHaveLength(4);
            expect(question.options.map((option) => option.id)).toEqual([
                `${expectedQuestionId}-a`,
                `${expectedQuestionId}-b`,
                `${expectedQuestionId}-c`,
                `${expectedQuestionId}-d`,
            ]);
            expect(question.options.some((option) => option.id === question.correctOptionId)).toBe(
                true,
            );
            expect(question.explanation.trim()).not.toBe("");
        });
    });

    it("utilise 50 codes ISO minuscules, distincts et fournis par flag-icons", () => {
        const supportedCodes = new Set(
            flagCountries.filter((country) => country.iso).map((country) => country.code),
        );
        const countryCodes = drapeauxCategory.questions.map((question) => {
            expect(question.media?.type).toBe("flag");

            if (question.media?.type !== "flag") {
                throw new Error(`Le média de ${question.id} n’est pas un drapeau.`);
            }

            expect(question.media.countryCode).toMatch(/^[a-z]{2}$/);
            expect(supportedCodes.has(question.media.countryCode)).toBe(true);
            expect(
                existsSync(
                    resolve(
                        process.cwd(),
                        "node_modules",
                        "flag-icons",
                        "flags",
                        "4x3",
                        `${question.media.countryCode}.svg`,
                    ),
                ),
            ).toBe(true);

            return question.media.countryCode;
        });

        expect(new Set(countryCodes)).toHaveLength(50);
    });

    it("associe les 50 drapeaux à 50 pays distincts", () => {
        const correctCountryNames = drapeauxCategory.questions.map((question) => {
            const correctOption = question.options.find(
                (option) => option.id === question.correctOptionId,
            );

            expect(correctOption).toBeDefined();

            return correctOption?.label;
        });

        expect(new Set(correctCountryNames)).toHaveLength(50);
    });

    it("ne révèle aucune réponse ni code pays dans les descriptions accessibles", () => {
        const promptAndMediaIdentities = new Set<string>();

        for (const question of drapeauxCategory.questions) {
            if (question.media?.type !== "flag") {
                throw new Error(`Le média de ${question.id} n’est pas un drapeau.`);
            }

            const correctOption = question.options.find(
                (option) => option.id === question.correctOptionId,
            );
            const normalizedDescription = question.media.description.trim().toLocaleLowerCase("fr");
            const normalizedAnswer = correctOption?.label.trim().toLocaleLowerCase("fr");
            const countryCodePattern = new RegExp(
                `(^|[^a-z])${question.media.countryCode}([^a-z]|$)`,
                "i",
            );

            expect(normalizedDescription).not.toBe("");
            expect(normalizedAnswer).toBeTruthy();
            expect(normalizedDescription).not.toContain(normalizedAnswer);
            expect(countryCodePattern.test(normalizedDescription)).toBe(false);

            promptAndMediaIdentities.add(
                `${question.prompt.trim().toLocaleLowerCase("fr")}:${question.media.countryCode}`,
            );
        }

        expect(promptAndMediaIdentities).toHaveLength(50);
    });

    it("répartit les bonnes réponses en 13 / 13 / 12 / 12", () => {
        const correctOptionCounts = [0, 0, 0, 0];

        for (const question of drapeauxCategory.questions) {
            const correctOptionIndex = question.options.findIndex(
                (option) => option.id === question.correctOptionId,
            );

            correctOptionCounts[correctOptionIndex] += 1;
        }

        expect(correctOptionCounts).toEqual([13, 13, 12, 12]);
    });

    it("passe les validateurs généraux, numérotés et spécialisés", () => {
        expect(() => validateQuestionCategories([drapeauxCategory])).not.toThrow();
        expect(() => validateNumberedQuestionCategories([drapeauxCategory], 50)).not.toThrow();
        expect(() => validateFlagQuestionCategory(drapeauxCategory)).not.toThrow();
    });
});
