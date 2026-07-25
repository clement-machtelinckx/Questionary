import { beforeEach, describe, expect, it, vi } from "vitest";

import { reconcileQuestionPool, selectQuestionIdsForSession } from "@/lib/question-pool";

function createQuestionIds(count: number): string[] {
    return Array.from(
        { length: count },
        (_, index) => `question-${String(index + 1).padStart(3, "0")}`,
    );
}

function expectUnique(questionIds: readonly string[]): void {
    expect(new Set(questionIds)).toHaveLength(questionIds.length);
}

describe("selectQuestionIdsForSession", () => {
    beforeEach(() => {
        vi.spyOn(Math, "random").mockReturnValue(0);
    });

    it("respecte la rotation 20 / 20 / 10+10 / 20 d’un catalogue de 50 questions", () => {
        const catalog = createQuestionIds(50);

        const first = selectQuestionIdsForSession(catalog, [], 20);
        const second = selectQuestionIdsForSession(catalog, first.remainingQuestionIds, 20);
        const previousCycleTail = second.remainingQuestionIds;
        const third = selectQuestionIdsForSession(catalog, second.remainingQuestionIds, 20);
        const fourth = selectQuestionIdsForSession(catalog, third.remainingQuestionIds, 20);

        expect(first.selectedQuestionIds).toHaveLength(20);
        expect(first.remainingQuestionIds).toHaveLength(30);
        expect(second.selectedQuestionIds).toHaveLength(20);
        expect(second.remainingQuestionIds).toHaveLength(10);
        expect(
            first.selectedQuestionIds.some((id) => second.selectedQuestionIds.includes(id)),
        ).toBe(false);
        expect(third.selectedQuestionIds).toHaveLength(20);
        expect(third.selectedQuestionIds.slice(0, 10)).toEqual(previousCycleTail);
        expect(third.remainingQuestionIds).toHaveLength(30);
        expect(fourth.selectedQuestionIds).toHaveLength(20);
        expect(fourth.remainingQuestionIds).toHaveLength(10);

        for (const session of [first, second, third, fourth]) {
            expectUnique(session.selectedQuestionIds);
        }
    });

    it("consomme un cycle complet de 60 questions avant d’en créer un nouveau", () => {
        const catalog = createQuestionIds(60);
        const first = selectQuestionIdsForSession(catalog, [], 20);
        const second = selectQuestionIdsForSession(catalog, first.remainingQuestionIds, 20);
        const third = selectQuestionIdsForSession(catalog, second.remainingQuestionIds, 20);
        const fourth = selectQuestionIdsForSession(catalog, third.remainingQuestionIds, 20);

        expect(first.remainingQuestionIds).toHaveLength(40);
        expect(second.remainingQuestionIds).toHaveLength(20);
        expect(third.remainingQuestionIds).toHaveLength(0);
        expect(fourth.remainingQuestionIds).toHaveLength(40);
        expect(
            new Set([
                ...first.selectedQuestionIds,
                ...second.selectedQuestionIds,
                ...third.selectedQuestionIds,
            ]),
        ).toHaveLength(60);
        expectUnique(fourth.selectedQuestionIds);
    });

    it("sélectionne toutes les questions d’un petit catalogue sans doublon", () => {
        const result = selectQuestionIdsForSession(createQuestionIds(8), [], 20);

        expect(result.selectedQuestionIds).toHaveLength(8);
        expect(result.remainingQuestionIds).toEqual([]);
        expectUnique(result.selectedQuestionIds);
    });

    it("limite requestedCount à la taille du catalogue", () => {
        const result = selectQuestionIdsForSession(createQuestionIds(8), [], 100);

        expect(result.selectedQuestionIds).toHaveLength(8);
    });

    it("nettoie les IDs inconnus et dupliqués du pool restant", () => {
        const catalog = createQuestionIds(8);
        const result = selectQuestionIdsForSession(
            catalog,
            ["inconnue", catalog[0], catalog[0], catalog[1]],
            4,
        );

        expect(result.selectedQuestionIds.slice(0, 2)).toEqual([catalog[0], catalog[1]]);
        expectUnique(result.selectedQuestionIds);
        expect(result.selectedQuestionIds.every((id) => catalog.includes(id))).toBe(true);
    });

    it("ne duplique aucune question lorsqu’une session traverse deux cycles", () => {
        const catalog = createQuestionIds(20);
        const lastFive = catalog.slice(0, 5);
        const result = selectQuestionIdsForSession(catalog, lastFive, 20);

        expect(result.selectedQuestionIds.slice(0, 5)).toEqual(lastFive);
        expect(result.selectedQuestionIds).toHaveLength(20);
        expectUnique(result.selectedQuestionIds);
    });

    it("retourne une sélection vide pour un catalogue vide ou un nombre nul", () => {
        expect(selectQuestionIdsForSession([], [], 20)).toEqual({
            selectedQuestionIds: [],
            remainingQuestionIds: [],
        });
        expect(selectQuestionIdsForSession(createQuestionIds(8), [], 0)).toEqual({
            selectedQuestionIds: [],
            remainingQuestionIds: [],
        });
    });
});

describe("reconcileQuestionPool", () => {
    beforeEach(() => {
        vi.spyOn(Math, "random").mockReturnValue(0);
    });

    it("retire les questions supprimées et les doublons", () => {
        const result = reconcileQuestionPool(
            ["q-1", "q-2", "q-3"],
            ["q-1", "q-supprimee", "q-1", "q-2"],
            ["q-1", "q-2", "q-supprimee"],
        );

        expect(result).toEqual({
            catalogQuestionIds: ["q-1", "q-2", "q-3"],
            remainingQuestionIds: ["q-3", "q-1", "q-2"],
        });
    });

    it("ajoute les nouvelles questions avant les anciennes questions restantes", () => {
        const result = reconcileQuestionPool(["q-1", "q-2", "q-3", "q-4"], ["q-2"], ["q-1", "q-2"]);

        expect(result.catalogQuestionIds).toEqual(["q-1", "q-2", "q-3", "q-4"]);
        expect(result.remainingQuestionIds.slice(-1)).toEqual(["q-2"]);
        expect(new Set(result.remainingQuestionIds.slice(0, 2))).toEqual(new Set(["q-3", "q-4"]));
    });
});
