import { beforeEach, describe, expect, it, vi } from "vitest";

import {
    clearHighScores,
    getHighScore,
    getHighScores,
    HIGH_SCORE_STORAGE_KEY,
    saveHighScore,
    type HighScoreEntry,
} from "@/lib/high-score-storage";

function createScore(score: number, total = 10, categoryId = "category-one"): HighScoreEntry {
    return {
        categoryId,
        categorySlug: categoryId.replace("category-", ""),
        categoryTitle: `Titre ${categoryId}`,
        score,
        total,
        percentage: Math.round((score / total) * 100),
        achievedAt: "2026-07-25T12:00:00.000Z",
    };
}

describe("high-score-storage", () => {
    beforeEach(() => {
        window.localStorage.clear();
    });

    it("enregistre puis récupère un premier score", () => {
        const score = createScore(7);

        expect(saveHighScore(score)).toBe(true);
        expect(getHighScore(score.categoryId)).toEqual(score);
    });

    it("remplace un score par un meilleur pourcentage", () => {
        saveHighScore(createScore(5));
        const betterScore = createScore(8);

        expect(saveHighScore(betterScore)).toBe(true);
        expect(getHighScore("category-one")).toEqual(betterScore);
    });

    it("ne remplace pas le meilleur score par un score inférieur", () => {
        const bestScore = createScore(8);
        saveHighScore(bestScore);

        expect(saveHighScore(createScore(4))).toBe(false);
        expect(getHighScore("category-one")).toEqual(bestScore);
    });

    it("conserve le meilleur score brut lorsque les pourcentages sont égaux", () => {
        saveHighScore(createScore(1, 2));
        const higherRawScore = createScore(5, 10);

        expect(saveHighScore(higherRawScore)).toBe(true);
        expect(getHighScore("category-one")).toEqual(higherRawScore);
        expect(saveHighScore(createScore(1, 2))).toBe(false);
    });

    it("gère plusieurs catégories sans les écraser", () => {
        const first = createScore(7, 10, "category-one");
        const second = createScore(9, 10, "category-two");

        saveHighScore(first);
        saveHighScore(second);

        expect(getHighScores()).toEqual([first, second]);
    });

    it("supprime tous les scores", () => {
        saveHighScore(createScore(7));

        expect(clearHighScores()).toBe(true);
        expect(getHighScores()).toEqual([]);
    });

    it("retourne un état sûr pour un JSON invalide", () => {
        window.localStorage.setItem(HIGH_SCORE_STORAGE_KEY, "{invalide");

        expect(getHighScores()).toEqual([]);
    });

    it("rejette une entrée enregistrée invalide", () => {
        window.localStorage.setItem(
            HIGH_SCORE_STORAGE_KEY,
            JSON.stringify([{ ...createScore(7), total: 0 }]),
        );

        expect(getHighScores()).toEqual([]);
        expect(saveHighScore({ ...createScore(7), percentage: 99 })).toBe(false);
    });

    it("ne fait pas planter l’application si localStorage lève une erreur", () => {
        vi.spyOn(Storage.prototype, "getItem").mockImplementation(() => {
            throw new Error("lecture impossible");
        });

        expect(getHighScores()).toEqual([]);

        vi.restoreAllMocks();
        vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
            throw new Error("écriture impossible");
        });

        expect(saveHighScore(createScore(7))).toBe(false);

        vi.restoreAllMocks();
        vi.spyOn(Storage.prototype, "removeItem").mockImplementation(() => {
            throw new Error("suppression impossible");
        });

        expect(clearHighScores()).toBe(false);
    });

    it("migre les anciens identifiants et élimine les doublons après migration", () => {
        const legacyScore: HighScoreEntry = {
            ...createScore(4, 5, "category-geography"),
            categorySlug: "geography",
            categoryTitle: "Geography",
        };
        const currentScore: HighScoreEntry = {
            ...createScore(9, 10, "category-geographie"),
            categorySlug: "geographie",
            categoryTitle: "Géographie",
        };

        window.localStorage.setItem(
            HIGH_SCORE_STORAGE_KEY,
            JSON.stringify([legacyScore, currentScore]),
        );

        expect(getHighScores()).toEqual([currentScore]);
    });
});
