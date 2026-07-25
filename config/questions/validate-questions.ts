import type { Question, QuestionCategory } from "./types";

const VALID_IDENTIFIER_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const FLAG_COUNTRY_CODE_PATTERN = /^[a-z]{2}$/;

function assertValidIdentifier(identifier: string, context: string): void {
    if (!VALID_IDENTIFIER_PATTERN.test(identifier)) {
        throw new Error(
            `Configuration invalide : l’identifiant "${identifier}" de ${context} doit utiliser uniquement des lettres ASCII minuscules, des chiffres et des tirets.`,
        );
    }
}

function isRecord(value: unknown): value is Record<string, unknown> {
    return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function validateQuestionMedia(
    question: Question,
    correctOptionLabel: string,
    categoryTitle: string,
): string | undefined {
    const media: unknown = question.media;

    if (media === undefined) {
        return undefined;
    }

    if (!isRecord(media) || typeof media.type !== "string") {
        throw new Error(
            `Configuration invalide : le média de la question "${question.id}" de "${categoryTitle}" utilise un type inconnu.`,
        );
    }

    if (media.type === "flag") {
        if (
            typeof media.countryCode !== "string" ||
            !FLAG_COUNTRY_CODE_PATTERN.test(media.countryCode)
        ) {
            throw new Error(
                `Configuration invalide : le drapeau de la question "${question.id}" doit utiliser un code pays ISO à deux lettres minuscules.`,
            );
        }

        if (typeof media.description !== "string" || media.description.trim().length === 0) {
            throw new Error(
                `Configuration invalide : le drapeau de la question "${question.id}" doit avoir une description accessible.`,
            );
        }

        const normalizedDescription = media.description.trim().toLocaleLowerCase("fr");
        const normalizedAnswer = correctOptionLabel.trim().toLocaleLowerCase("fr");

        if (normalizedDescription.includes(normalizedAnswer)) {
            throw new Error(
                `Configuration invalide : la description accessible de "${question.id}" révèle la bonne réponse.`,
            );
        }

        const countryCodePattern = new RegExp(`(^|[^a-z])${media.countryCode}([^a-z]|$)`, "i");

        if (countryCodePattern.test(normalizedDescription)) {
            throw new Error(
                `Configuration invalide : la description accessible de "${question.id}" révèle le code pays.`,
            );
        }

        return `flag:${media.countryCode}`;
    }

    if (media.type === "image") {
        if (typeof media.src !== "string" || media.src.trim().length === 0) {
            throw new Error(
                `Configuration invalide : l’image de la question "${question.id}" doit avoir une source.`,
            );
        }

        if (typeof media.description !== "string" || media.description.trim().length === 0) {
            throw new Error(
                `Configuration invalide : l’image de la question "${question.id}" doit avoir une description accessible.`,
            );
        }

        return `image:${media.src.trim()}`;
    }

    throw new Error(
        `Configuration invalide : le média de la question "${question.id}" de "${categoryTitle}" utilise le type inconnu "${media.type}".`,
    );
}

export function validateQuestionCategories(categories: readonly QuestionCategory[]): void {
    const categoryIds = new Set<string>();
    const categorySlugs = new Set<string>();
    const questionIds = new Set<string>();
    const optionIds = new Set<string>();
    const prompts = new Set<string>();

    for (const category of categories) {
        assertValidIdentifier(category.id, `la catégorie "${category.title}"`);
        assertValidIdentifier(category.slug, `la catégorie "${category.title}"`);

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

        if (category.title.trim().length === 0) {
            throw new Error(
                `Configuration invalide : la catégorie "${category.id}" doit avoir un titre.`,
            );
        }

        if (category.description.trim().length === 0) {
            throw new Error(
                `Configuration invalide : la catégorie "${category.title}" doit avoir une description.`,
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
            assertValidIdentifier(question.id, `la question de la catégorie "${category.title}"`);

            if (questionIds.has(question.id)) {
                throw new Error(
                    `Configuration invalide : question dupliquée "${question.id}" dans la catégorie "${category.title}".`,
                );
            }

            const normalizedPrompt = question.prompt.trim().toLocaleLowerCase("fr");

            if (normalizedPrompt.length === 0) {
                throw new Error(
                    `Configuration invalide : la question "${question.id}" de "${category.title}" doit avoir un énoncé.`,
                );
            }

            if (question.options.length !== 4) {
                throw new Error(
                    `Configuration invalide : la question "${question.id}" de "${category.title}" doit contenir exactement quatre réponses.`,
                );
            }

            const questionOptionIds = new Set(question.options.map((option) => option.id));
            const questionOptionLabels = new Set(
                question.options.map((option) => option.label.trim().toLocaleLowerCase("fr")),
            );

            if (questionOptionIds.size !== question.options.length) {
                throw new Error(
                    `Configuration invalide : la question "${question.id}" de "${category.title}" contient des identifiants de réponse dupliqués.`,
                );
            }

            if (questionOptionLabels.size !== question.options.length) {
                throw new Error(
                    `Configuration invalide : la question "${question.id}" de "${category.title}" contient des libellés de réponse dupliqués.`,
                );
            }

            for (const option of question.options) {
                assertValidIdentifier(option.id, `une réponse de la question "${question.id}"`);

                if (optionIds.has(option.id)) {
                    throw new Error(
                        `Configuration invalide : réponse dupliquée "${option.id}" dans la catégorie "${category.title}".`,
                    );
                }

                if (option.label.trim().length === 0) {
                    throw new Error(
                        `Configuration invalide : la réponse "${option.id}" de la question "${question.id}" doit avoir un libellé.`,
                    );
                }

                optionIds.add(option.id);
            }

            const correctOption = question.options.find(
                (option) => option.id === question.correctOptionId,
            );

            if (!correctOption || !questionOptionIds.has(question.correctOptionId)) {
                throw new Error(
                    `Configuration invalide : la bonne réponse "${question.correctOptionId}" est absente de la question "${question.id}" de "${category.title}".`,
                );
            }

            const mediaIdentity = validateQuestionMedia(
                question,
                correctOption.label,
                category.title,
            );
            const promptIdentity = mediaIdentity
                ? `${normalizedPrompt}\u0000${mediaIdentity}`
                : normalizedPrompt;

            if (prompts.has(promptIdentity)) {
                throw new Error(
                    `Configuration invalide : énoncé dupliqué pour la question "${question.id}" de "${category.title}".`,
                );
            }

            if (question.explanation.trim().length === 0) {
                throw new Error(
                    `Configuration invalide : la question "${question.id}" de "${category.title}" doit avoir une explication.`,
                );
            }

            questionIds.add(question.id);
            prompts.add(promptIdentity);
        }
    }
}

export function validateFlagQuestionCategory(category: QuestionCategory): void {
    const countryCodes = new Set<string>();

    for (const question of category.questions) {
        if (question.media?.type !== "flag") {
            throw new Error(
                `Configuration invalide : la question "${question.id}" de "${category.title}" doit utiliser un drapeau.`,
            );
        }

        if (countryCodes.has(question.media.countryCode)) {
            throw new Error(
                `Configuration invalide : le code pays "${question.media.countryCode}" est utilisé plusieurs fois dans "${category.title}".`,
            );
        }

        countryCodes.add(question.media.countryCode);
    }
}

export function validateNumberedQuestionCategories(
    categories: readonly QuestionCategory[],
    expectedQuestionCount: number,
): void {
    const totalQuestionCount = categories.reduce(
        (total, category) => total + category.questions.length,
        0,
    );
    const expectedTotalQuestionCount = categories.length * expectedQuestionCount;

    if (totalQuestionCount !== expectedTotalQuestionCount) {
        throw new Error(
            `Configuration invalide : les ${categories.length} catégories numérotées doivent contenir ${expectedTotalQuestionCount} questions au total, contre ${totalQuestionCount}.`,
        );
    }

    for (const category of categories) {
        if (category.questions.length !== expectedQuestionCount) {
            throw new Error(
                `Configuration invalide : la catégorie "${category.title}" doit contenir exactement ${expectedQuestionCount} questions.`,
            );
        }

        const correctOptionCounts = [0, 0, 0, 0];

        category.questions.forEach((question, questionIndex) => {
            const expectedQuestionId = `${category.slug}-${String(questionIndex + 1).padStart(3, "0")}`;

            if (question.id !== expectedQuestionId) {
                throw new Error(
                    `Configuration invalide : la question ${questionIndex + 1} de "${category.title}" doit avoir l’identifiant "${expectedQuestionId}", contre "${question.id}".`,
                );
            }

            question.options.forEach((option, optionIndex) => {
                const optionSuffix = String.fromCharCode("a".charCodeAt(0) + optionIndex);
                const expectedOptionId = `${question.id}-${optionSuffix}`;

                if (option.id !== expectedOptionId) {
                    throw new Error(
                        `Configuration invalide : la réponse ${optionIndex + 1} de "${question.id}" doit avoir l’identifiant "${expectedOptionId}", contre "${option.id}".`,
                    );
                }
            });

            const correctOptionIndex = question.options.findIndex(
                (option) => option.id === question.correctOptionId,
            );

            if (correctOptionIndex >= 0) {
                correctOptionCounts[correctOptionIndex] += 1;
            }
        });

        const minimumExpectedCount = Math.floor(expectedQuestionCount / 4);
        const maximumExpectedCount = Math.ceil(expectedQuestionCount / 4);
        const hasBalancedCorrectOptions = correctOptionCounts.every(
            (count) => count >= minimumExpectedCount && count <= maximumExpectedCount,
        );

        if (!hasBalancedCorrectOptions) {
            throw new Error(
                `Configuration invalide : les bonnes réponses de "${category.title}" sont déséquilibrées (${correctOptionCounts.join(", ")}).`,
            );
        }
    }
}
