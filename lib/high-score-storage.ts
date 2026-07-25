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

const LEGACY_CATEGORY_IDENTITIES: Record<
    string,
    Pick<HighScoreEntry, "categoryId" | "categorySlug" | "categoryTitle">
> = {
    "category-geography": {
        categoryId: "category-geographie",
        categorySlug: "geographie",
        categoryTitle: "Géographie",
    },
    "category-web-development": {
        categoryId: "category-developpement-web",
        categorySlug: "developpement-web",
        categoryTitle: "Développement web",
    },
    "category-movies-series": {
        categoryId: "category-cinema-series",
        categorySlug: "cinema-series",
        categoryTitle: "Cinéma et séries",
    },
    "category-video-games": {
        categoryId: "category-jeux-video",
        categorySlug: "jeux-video",
        categoryTitle: "Jeux vidéo",
    },
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

function migrateLegacyCategory(entry: HighScoreEntry): HighScoreEntry {
    const categoryIdentity = LEGACY_CATEGORY_IDENTITIES[entry.categoryId];

    return categoryIdentity ? { ...entry, ...categoryIdentity } : entry;
}

function isBetterScore(candidate: HighScoreEntry, previous: HighScoreEntry): boolean {
    return (
        candidate.percentage > previous.percentage ||
        (candidate.percentage === previous.percentage && candidate.score > previous.score)
    );
}

function normalizeHighScores(entries: readonly HighScoreEntry[]): HighScoreEntry[] {
    const scoresByCategory = new Map<string, HighScoreEntry>();

    for (const storedEntry of entries) {
        const entry = migrateLegacyCategory(storedEntry);
        const previousScore = scoresByCategory.get(entry.categoryId);

        if (!previousScore || isBetterScore(entry, previousScore)) {
            scoresByCategory.set(entry.categoryId, entry);
        }
    }

    return [...scoresByCategory.values()];
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

        return normalizeHighScores(parsed);
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
        const isBetter = !previousScore || isBetterScore(entry, previousScore);

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
