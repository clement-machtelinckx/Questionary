import { describe, expect, it } from "vitest";

import type { QuestionMedia, QuestionOptions } from "@/config/questions/types";
import {
    validateExpectedQuestionCount,
    validateFlagQuestionCategory,
    validateNumberedQuestionCategories,
    validateQuestionCategories,
} from "@/config/questions/validate-questions";
import {
    createNumberedTestCategory,
    createTestCategory,
    createTestQuestion,
} from "@/tests/fixtures/questions";

function cloneValue<T>(value: T): T {
    return structuredClone(value);
}

describe("validateQuestionCategories", () => {
    it("accepte une configuration valide", () => {
        expect(() => validateQuestionCategories([createTestCategory(2)])).not.toThrow();
    });

    it("rejette une catégorie vide", () => {
        expect(() => validateQuestionCategories([createTestCategory(0)])).toThrow(
            /aucune question/,
        );
    });

    it("rejette un identifiant de catégorie dupliqué", () => {
        const first = createTestCategory(1, {
            id: "category-shared",
            slug: "premiere",
            questionPrefix: "premiere-question",
        });
        const second = createTestCategory(1, {
            id: "category-shared",
            slug: "seconde",
            questionPrefix: "seconde-question",
        });

        expect(() => validateQuestionCategories([first, second])).toThrow(
            /identifiant de catégorie dupliqué/,
        );
    });

    it("rejette un slug dupliqué", () => {
        const first = createTestCategory(1, {
            id: "category-one",
            slug: "shared",
            questionPrefix: "premiere-question",
        });
        const second = createTestCategory(1, {
            id: "category-two",
            slug: "shared",
            questionPrefix: "seconde-question",
        });

        expect(() => validateQuestionCategories([first, second])).toThrow(
            /slug de catégorie dupliqué/,
        );
    });

    it("rejette un titre vide", () => {
        expect(() => validateQuestionCategories([createTestCategory(1, { title: "   " })])).toThrow(
            /doit avoir un titre/,
        );
    });

    it("rejette une description vide", () => {
        expect(() =>
            validateQuestionCategories([createTestCategory(1, { description: "   " })]),
        ).toThrow(/doit avoir une description/);
    });

    it("rejette un identifiant de question dupliqué", () => {
        const category = createTestCategory(1);
        const duplicate = cloneValue(category.questions[0]);
        duplicate.prompt = "Un autre énoncé";
        category.questions.push(duplicate);

        expect(() => validateQuestionCategories([category])).toThrow(/question dupliquée/);
    });

    it("rejette un énoncé vide", () => {
        const category = createTestCategory(1);
        category.questions[0].prompt = "  ";

        expect(() => validateQuestionCategories([category])).toThrow(/doit avoir un énoncé/);
    });

    it("rejette un énoncé dupliqué", () => {
        const category = createTestCategory(1);
        const duplicate = createTestQuestion("autre-question");
        duplicate.prompt = category.questions[0].prompt.toLocaleUpperCase("fr");
        category.questions.push(duplicate);

        expect(() => validateQuestionCategories([category])).toThrow(/énoncé dupliqué/);
    });

    it.each([
        ["moins", 3],
        ["plus", 5],
    ])("rejette une question avec %s de quatre options", (_, optionCount) => {
        const category = createTestCategory(1);
        category.questions[0].options = Array.from({ length: optionCount }, (_, index) => ({
            id: `option-${index}`,
            label: `Option ${index}`,
        })) as unknown as QuestionOptions;

        expect(() => validateQuestionCategories([category])).toThrow(/exactement quatre réponses/);
    });

    it("rejette un identifiant d’option dupliqué", () => {
        const category = createTestCategory(1);
        category.questions[0].options[1].id = category.questions[0].options[0].id;

        expect(() => validateQuestionCategories([category])).toThrow(
            /identifiants de réponse dupliqués/,
        );
    });

    it("rejette un libellé d’option dupliqué", () => {
        const category = createTestCategory(1);
        category.questions[0].options[1].label =
            category.questions[0].options[0].label.toLocaleUpperCase("fr");

        expect(() => validateQuestionCategories([category])).toThrow(
            /libellés de réponse dupliqués/,
        );
    });

    it("rejette un libellé d’option vide", () => {
        const category = createTestCategory(1);
        category.questions[0].options[0].label = "   ";

        expect(() => validateQuestionCategories([category])).toThrow(/doit avoir un libellé/);
    });

    it("rejette un correctOptionId absent des options", () => {
        const category = createTestCategory(1);
        category.questions[0].correctOptionId = "option-inconnue";

        expect(() => validateQuestionCategories([category])).toThrow(
            /bonne réponse .* est absente/,
        );
    });

    it("rejette une explication vide", () => {
        const category = createTestCategory(1);
        category.questions[0].explanation = " ";

        expect(() => validateQuestionCategories([category])).toThrow(/doit avoir une explication/);
    });

    it.each(["Category invalide", "categorie_invalide", "catégorie"])(
        "rejette l’identifiant non conforme « %s »",
        (invalidId) => {
            const category = createTestCategory(1);
            category.id = invalidId;

            expect(() => validateQuestionCategories([category])).toThrow(
                /lettres ASCII minuscules/,
            );
        },
    );

    it("accepte le même énoncé lorsque deux drapeaux sont différents", () => {
        const category = createTestCategory(2);
        category.questions[0].media = {
            type: "flag",
            countryCode: "fr",
            description: "Trois bandes verticales bleue, blanche et rouge",
        };
        category.questions[1].prompt = category.questions[0].prompt;
        category.questions[1].media = {
            type: "flag",
            countryCode: "jp",
            description: "Fond blanc portant un disque rouge centré",
        };

        expect(() => validateQuestionCategories([category])).not.toThrow();
    });

    it("rejette un code pays de drapeau invalide", () => {
        const category = createTestCategory(1);
        category.questions[0].media = {
            type: "flag",
            countryCode: "FR",
            description: "Trois bandes verticales bleue, blanche et rouge",
        };

        expect(() => validateQuestionCategories([category])).toThrow(
            /code pays ISO à deux lettres minuscules/,
        );
    });

    it("rejette une description de drapeau vide", () => {
        const category = createTestCategory(1);
        category.questions[0].media = {
            type: "flag",
            countryCode: "fr",
            description: " ",
        };

        expect(() => validateQuestionCategories([category])).toThrow(
            /doit avoir une description accessible/,
        );
    });

    it("rejette une description qui révèle la bonne réponse", () => {
        const category = createTestCategory(1);
        category.questions[0].media = {
            type: "flag",
            countryCode: "fr",
            description: "Le drapeau correspond à Réponse B",
        };

        expect(() => validateQuestionCategories([category])).toThrow(/révèle la bonne réponse/);
    });

    it("rejette une description qui révèle le code pays", () => {
        const category = createTestCategory(1);
        category.questions[0].media = {
            type: "flag",
            countryCode: "fr",
            description: "Trois bandes avec le code fr visible",
        };

        expect(() => validateQuestionCategories([category])).toThrow(/révèle le code pays/);
    });

    it("rejette un type de média inconnu", () => {
        const category = createTestCategory(1);
        category.questions[0].media = {
            type: "video",
            src: "/video.mp4",
            description: "Un média inconnu",
        } as unknown as QuestionMedia;

        expect(() => validateQuestionCategories([category])).toThrow(/type inconnu "video"/);
    });

    it("valide une image décrite et rejette une source vide", () => {
        const category = createTestCategory(1);
        category.questions[0].media = {
            type: "image",
            src: "/illustration.svg",
            description: "Une illustration abstraite",
        };

        expect(() => validateQuestionCategories([category])).not.toThrow();

        category.questions[0].media.src = " ";

        expect(() => validateQuestionCategories([category])).toThrow(/doit avoir une source/);
    });
});

describe("validateFlagQuestionCategory", () => {
    it("rejette une question sans drapeau", () => {
        const category = createTestCategory(1);

        expect(() => validateFlagQuestionCategory(category)).toThrow(/doit utiliser un drapeau/);
    });

    it("rejette un code pays utilisé deux fois dans la même catégorie", () => {
        const category = createTestCategory(2);

        for (const question of category.questions) {
            question.media = {
                type: "flag",
                countryCode: "fr",
                description: "Trois bandes verticales bleue, blanche et rouge",
            };
        }

        expect(() => validateFlagQuestionCategory(category)).toThrow(/est utilisé plusieurs fois/);
    });

    it("applique aussi les règles générales aux questions Drapeaux", () => {
        const category = createTestCategory(1);
        category.questions[0].media = {
            type: "flag",
            countryCode: "FR",
            description: "Trois bandes verticales bleue, blanche et rouge",
        };

        expect(() => validateFlagQuestionCategory(category)).toThrow(
            /code pays ISO à deux lettres minuscules/,
        );
    });
});

describe("validateExpectedQuestionCount", () => {
    it("accepte les catégories qui possèdent le nombre attendu de questions", () => {
        expect(() =>
            validateExpectedQuestionCount(
                [
                    createTestCategory(2, {
                        id: "category-one",
                        slug: "one",
                        questionPrefix: "one-question",
                    }),
                    createTestCategory(2, {
                        id: "category-two",
                        slug: "two",
                        questionPrefix: "two-question",
                    }),
                ],
                2,
            ),
        ).not.toThrow();
    });

    it("rejette individuellement une catégorie dont le nombre est incorrect", () => {
        expect(() => validateExpectedQuestionCount([createTestCategory(1)], 2)).toThrow(
            /doit contenir exactement 2 questions/,
        );
    });
});

describe("validateNumberedQuestionCategories", () => {
    it("accepte une séquence équilibrée de 001 à 050", () => {
        expect(() =>
            validateNumberedQuestionCategories([createNumberedTestCategory()], 50),
        ).not.toThrow();
    });

    it("rejette un identifiant de question incorrect", () => {
        const category = createNumberedTestCategory();
        category.questions[4].id = "numerotee-099";

        expect(() => validateNumberedQuestionCategories([category], 50)).toThrow(
            /doit avoir l’identifiant "numerotee-005"/,
        );
    });

    it("rejette un identifiant d’option incorrect", () => {
        const category = createNumberedTestCategory();
        category.questions[0].options[2].id = "numerotee-001-z";

        expect(() => validateNumberedQuestionCategories([category], 50)).toThrow(
            /doit avoir l’identifiant "numerotee-001-c"/,
        );
    });

    it("rejette un mauvais nombre de questions", () => {
        expect(() =>
            validateNumberedQuestionCategories([createNumberedTestCategory(49)], 50),
        ).toThrow(/doivent contenir 50 questions au total/);
    });

    it("rejette une répartition déséquilibrée des bonnes réponses", () => {
        const category = createNumberedTestCategory();

        for (const question of category.questions) {
            question.correctOptionId = question.options[0].id;
        }

        expect(() => validateNumberedQuestionCategories([category], 50)).toThrow(
            /bonnes réponses .* déséquilibrées/,
        );
    });
});
