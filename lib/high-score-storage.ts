export const HIGH_SCORE_STORAGE_KEY = "questionary:high-scores:v1";

export type HighScoreEntry = {
    categoryId: string;
    categorySlug: string;
    categoryTitle: string;
    score: number;
    total: number;
    percentage: number;
    achievedAt: string;
};

function isHighScoreEntry(value: unknown): value is HighScoreEntry {
    if (!value || typeof value !== "object") {
        return false;
    }

    const entry = value as Record<string, unknown>;

    return (
        typeof entry.categoryId === "string" &&
        entry.categoryId.length > 0 &&
        typeof entry.categorySlug === "string" &&
        entry.categorySlug.length > 0 &&
        typeof entry.categoryTitle === "string" &&
        entry.categoryTitle.length > 0 &&
        typeof entry.score === "number" &&
        Number.isInteger(entry.score) &&
        entry.score >= 0 &&
        typeof entry.total === "number" &&
        Number.isInteger(entry.total) &&
        entry.total > 0 &&
        entry.score <= entry.total &&
        typeof entry.percentage === "number" &&
        Number.isFinite(entry.percentage) &&
        entry.percentage >= 0 &&
        entry.percentage <= 100 &&
        entry.percentage === Math.round((entry.score / entry.total) * 100) &&
        typeof entry.achievedAt === "string" &&
        !Number.isNaN(Date.parse(entry.achievedAt))
    );
}

function canUseLocalStorage() {
    return typeof window !== "undefined";
}

export function getHighScores(): HighScoreEntry[] {
    if (!canUseLocalStorage()) {
        return [];
    }

    try {
        const storedValue = window.localStorage.getItem(HIGH_SCORE_STORAGE_KEY);

        if (!storedValue) {
            return [];
        }

        const parsed: unknown = JSON.parse(storedValue);

        if (!Array.isArray(parsed) || !parsed.every(isHighScoreEntry)) {
            return [];
        }

        const categoryIds = new Set(parsed.map((entry) => entry.categoryId));

        if (categoryIds.size !== parsed.length) {
            return [];
        }

        return parsed;
    } catch {
        return [];
    }
}

export function getHighScore(categoryId: string): HighScoreEntry | undefined {
    return getHighScores().find((entry) => entry.categoryId === categoryId);
}

export function saveHighScore(entry: HighScoreEntry): boolean {
    if (!canUseLocalStorage() || !isHighScoreEntry(entry)) {
        return false;
    }

    try {
        const scores = getHighScores();
        const previousScore = scores.find((score) => score.categoryId === entry.categoryId);
        const isBetter =
            !previousScore ||
            entry.percentage > previousScore.percentage ||
            (entry.percentage === previousScore.percentage && entry.score > previousScore.score);

        if (!isBetter) {
            return false;
        }

        const nextScores = [
            ...scores.filter((score) => score.categoryId !== entry.categoryId),
            entry,
        ];

        window.localStorage.setItem(HIGH_SCORE_STORAGE_KEY, JSON.stringify(nextScores));
        return true;
    } catch {
        return false;
    }
}

export function clearHighScores(): boolean {
    if (!canUseLocalStorage()) {
        return false;
    }

    try {
        window.localStorage.removeItem(HIGH_SCORE_STORAGE_KEY);
        return true;
    } catch {
        return false;
    }
}
