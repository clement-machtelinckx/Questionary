import { beforeEach, describe, expect, it, vi } from "vitest";

type QuestionPoolStorageModule = typeof import("@/lib/question-pool-storage");

function createQuestionIds(count: number, prefix = "question"): string[] {
    return Array.from(
        { length: count },
        (_, index) => `${prefix}-${String(index + 1).padStart(3, "0")}`,
    );
}

describe("stockage des pools et des sessions actives", () => {
    let storage: QuestionPoolStorageModule;

    beforeEach(async () => {
        vi.resetModules();
        window.localStorage.clear();
        vi.spyOn(Math, "random").mockReturnValue(0);
        storage = await import("@/lib/question-pool-storage");
    });

    it("crée un pool et une session lorsque le stockage est absent", () => {
        const session = storage.getOrCreateActiveQuizSession(
            "category-one",
            createQuestionIds(50),
            20,
        );

        expect(session.questionIds).toHaveLength(20);
        expect(
            JSON.parse(window.localStorage.getItem(storage.QUESTION_POOL_STORAGE_KEY) ?? "{}"),
        ).toHaveProperty("category-one.remainingQuestionIds");
        expect(
            JSON.parse(
                window.localStorage.getItem(storage.ACTIVE_QUIZ_SESSION_STORAGE_KEY) ?? "{}",
            ),
        ).toHaveProperty("category-one.questionIds", session.questionIds);
    });

    it("récupère une session enregistrée sans consommer une deuxième fois le pool", () => {
        const catalog = createQuestionIds(50);
        const firstSession = storage.getOrCreateActiveQuizSession("category-one", catalog, 20);
        const poolAfterFirstMount = JSON.parse(
            window.localStorage.getItem(storage.QUESTION_POOL_STORAGE_KEY) ?? "{}",
        ) as Record<string, { catalogQuestionIds: string[]; remainingQuestionIds: string[] }>;
        const secondSession = storage.getOrCreateActiveQuizSession("category-one", catalog, 20);
        const poolAfterStrictModeRemount = JSON.parse(
            window.localStorage.getItem(storage.QUESTION_POOL_STORAGE_KEY) ?? "{}",
        ) as Record<string, { catalogQuestionIds: string[]; remainingQuestionIds: string[] }>;

        expect(secondSession).toEqual(firstSession);
        expect(poolAfterStrictModeRemount["category-one"].catalogQuestionIds).toEqual(
            poolAfterFirstMount["category-one"].catalogQuestionIds,
        );
        expect(poolAfterStrictModeRemount["category-one"].remainingQuestionIds).toEqual(
            poolAfterFirstMount["category-one"].remainingQuestionIds,
        );
    });

    it("reconstruit les stockages contenant un JSON invalide", () => {
        window.localStorage.setItem(storage.QUESTION_POOL_STORAGE_KEY, "{invalide");
        window.localStorage.setItem(storage.ACTIVE_QUIZ_SESSION_STORAGE_KEY, "{invalide");

        const session = storage.getOrCreateActiveQuizSession(
            "category-one",
            createQuestionIds(8),
            20,
        );

        expect(session.questionIds).toHaveLength(8);
        expect(() =>
            JSON.parse(window.localStorage.getItem(storage.QUESTION_POOL_STORAGE_KEY) ?? ""),
        ).not.toThrow();
    });

    it("ignore une structure incorrecte et recrée un état valide", () => {
        window.localStorage.setItem(
            storage.QUESTION_POOL_STORAGE_KEY,
            JSON.stringify(["structure", "incorrecte"]),
        );
        window.localStorage.setItem(
            storage.ACTIVE_QUIZ_SESSION_STORAGE_KEY,
            JSON.stringify({ "category-one": { questionIds: "incorrect" } }),
        );

        const session = storage.getOrCreateActiveQuizSession(
            "category-one",
            createQuestionIds(8),
            20,
        );

        expect(session.questionIds).toHaveLength(8);
        expect(new Set(session.questionIds)).toHaveLength(8);
    });

    it("nettoie les IDs inconnus et les doublons présents dans le stockage", () => {
        const catalog = createQuestionIds(8);
        window.localStorage.setItem(
            storage.QUESTION_POOL_STORAGE_KEY,
            JSON.stringify({
                "category-one": {
                    categoryId: "category-one",
                    remainingQuestionIds: [catalog[0], catalog[0], "question-inconnue", catalog[1]],
                    catalogQuestionIds: [...catalog, "question-supprimee"],
                    updatedAt: new Date().toISOString(),
                },
            }),
        );

        const session = storage.getOrCreateActiveQuizSession("category-one", catalog, 8);

        expect(session.questionIds).toHaveLength(8);
        expect(new Set(session.questionIds)).toHaveLength(8);
        expect(session.questionIds.every((id) => catalog.includes(id))).toBe(true);
    });

    it("reste fonctionnel si localStorage.getItem lève une erreur", () => {
        vi.spyOn(Storage.prototype, "getItem").mockImplementation(() => {
            throw new Error("stockage indisponible");
        });

        expect(() =>
            storage.getOrCreateActiveQuizSession("category-one", createQuestionIds(8), 20),
        ).not.toThrow();
    });

    it("reste fonctionnel si localStorage.setItem lève une erreur", () => {
        vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
            throw new Error("quota dépassé");
        });

        expect(() =>
            storage.getOrCreateActiveQuizSession("category-one", createQuestionIds(8), 20),
        ).not.toThrow();
    });

    it("persiste séparément deux catégories", () => {
        storage.getOrCreateActiveQuizSession("category-one", createQuestionIds(50, "one"), 20);
        storage.getOrCreateActiveQuizSession("category-two", createQuestionIds(50, "two"), 20);

        const pools = JSON.parse(
            window.localStorage.getItem(storage.QUESTION_POOL_STORAGE_KEY) ?? "{}",
        ) as Record<string, unknown>;
        const sessions = JSON.parse(
            window.localStorage.getItem(storage.ACTIVE_QUIZ_SESSION_STORAGE_KEY) ?? "{}",
        ) as Record<string, unknown>;

        expect(Object.keys(pools)).toEqual(["category-one", "category-two"]);
        expect(Object.keys(sessions)).toEqual(["category-one", "category-two"]);
    });

    it("supprime la session active à la fin du quiz", () => {
        storage.getOrCreateActiveQuizSession("category-one", createQuestionIds(8), 20);

        storage.completeActiveQuizSession("category-one");

        expect(window.localStorage.getItem(storage.ACTIVE_QUIZ_SESSION_STORAGE_KEY)).toBeNull();
    });

    it("crée une nouvelle session disjointe après un redémarrage explicite", () => {
        const catalog = createQuestionIds(50);
        const firstSession = storage.getOrCreateActiveQuizSession("category-one", catalog, 20);
        const nextSession = storage.startNextQuizSession("category-one", catalog, 20);

        expect(nextSession.questionIds).toHaveLength(20);
        expect(nextSession.questionIds.some((id) => firstSession.questionIds.includes(id))).toBe(
            false,
        );
        expect(nextSession.createdAt).toBeTruthy();
    });
});
