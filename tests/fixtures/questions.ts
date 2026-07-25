import type { Question, QuestionCategory, QuestionOptions } from "@/config/questions/types";

type TestCategoryOptions = {
    id?: string;
    slug?: string;
    title?: string;
    description?: string;
    questionPrefix?: string;
};

export function createTestQuestion(
    id: string,
    correctOptionSuffix: "a" | "b" | "c" | "d" = "b",
): Question {
    const options: QuestionOptions = [
        { id: `${id}-a`, label: "Réponse A" },
        { id: `${id}-b`, label: "Réponse B" },
        { id: `${id}-c`, label: "Réponse C" },
        { id: `${id}-d`, label: "Réponse D" },
    ];

    return {
        id,
        prompt: `Question ${id}`,
        options,
        correctOptionId: `${id}-${correctOptionSuffix}`,
        explanation: `Explication pédagogique pour ${id}.`,
    };
}

export function createTestQuestions(count: number, prefix = "test-question"): Question[] {
    return Array.from({ length: count }, (_, index) =>
        createTestQuestion(`${prefix}-${String(index + 1).padStart(3, "0")}`),
    );
}

export function createTestCategory(
    questionCount: number,
    options: TestCategoryOptions = {},
): QuestionCategory {
    const slug = options.slug ?? "categorie-test";

    return {
        id: options.id ?? `category-${slug}`,
        slug,
        title: options.title ?? "Catégorie de test",
        description: options.description ?? "Une catégorie dédiée aux tests.",
        questions: createTestQuestions(questionCount, options.questionPrefix ?? `${slug}-question`),
    };
}

export function createNumberedTestCategory(
    questionCount = 50,
    options: TestCategoryOptions = {},
): QuestionCategory {
    const slug = options.slug ?? "numerotee";
    const correctOptionSuffixes: Array<"a" | "b" | "c" | "d"> = [
        ...Array.from({ length: 13 }, () => "a" as const),
        ...Array.from({ length: 13 }, () => "b" as const),
        ...Array.from({ length: 12 }, () => "c" as const),
        ...Array.from({ length: 12 }, () => "d" as const),
    ];

    return {
        id: options.id ?? `category-${slug}`,
        slug,
        title: options.title ?? "Catégorie numérotée",
        description: options.description ?? "Une catégorie numérotée dédiée aux tests.",
        questions: Array.from({ length: questionCount }, (_, index) => {
            const id = `${slug}-${String(index + 1).padStart(3, "0")}`;

            return createTestQuestion(id, correctOptionSuffixes[index] ?? "a");
        }),
    };
}
