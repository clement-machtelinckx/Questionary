import { reconcileQuestionPool, selectQuestionIdsForSession } from "./question-pool";

export const QUESTION_POOL_STORAGE_KEY = "questionary:question-pools:v1";
export const ACTIVE_QUIZ_SESSION_STORAGE_KEY = "questionary:active-quiz-sessions:v1";

export type StoredQuestionPool = {
    categoryId: string;
    remainingQuestionIds: string[];
    catalogQuestionIds: string[];
    updatedAt: string;
};

export type StoredQuestionPools = Record<string, StoredQuestionPool>;

export type ActiveQuizSession = {
    categoryId: string;
    questionIds: string[];
    createdAt: string;
};

type StoredActiveQuizSessions = Record<string, ActiveQuizSession>;

let inMemoryQuestionPools: StoredQuestionPools = {};
let inMemoryActiveQuizSessions: StoredActiveQuizSessions = {};

function canUseLocalStorage(): boolean {
    return typeof window !== "undefined";
}

function isRecord(value: unknown): value is Record<string, unknown> {
    return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function getStringArray(value: unknown): string[] | undefined {
    if (!Array.isArray(value)) {
        return undefined;
    }

    return value.filter((item): item is string => typeof item === "string" && item.length > 0);
}

function hasValidDate(value: unknown): value is string {
    return typeof value === "string" && !Number.isNaN(Date.parse(value));
}

function parseQuestionPool(categoryId: string, value: unknown): StoredQuestionPool | undefined {
    if (!isRecord(value) || value.categoryId !== categoryId) {
        return undefined;
    }

    const remainingQuestionIds = getStringArray(value.remainingQuestionIds);
    const catalogQuestionIds = getStringArray(value.catalogQuestionIds);

    if (!remainingQuestionIds || !catalogQuestionIds || !hasValidDate(value.updatedAt)) {
        return undefined;
    }

    return {
        categoryId,
        remainingQuestionIds,
        catalogQuestionIds,
        updatedAt: value.updatedAt,
    };
}

function parseActiveQuizSession(categoryId: string, value: unknown): ActiveQuizSession | undefined {
    if (!isRecord(value) || value.categoryId !== categoryId) {
        return undefined;
    }

    const questionIds = getStringArray(value.questionIds);

    if (!questionIds || !hasValidDate(value.createdAt)) {
        return undefined;
    }

    return {
        categoryId,
        questionIds,
        createdAt: value.createdAt,
    };
}

function readQuestionPools(): StoredQuestionPools {
    if (!canUseLocalStorage()) {
        return inMemoryQuestionPools;
    }

    let storedValue: string | null;

    try {
        storedValue = window.localStorage.getItem(QUESTION_POOL_STORAGE_KEY);
    } catch {
        return inMemoryQuestionPools;
    }

    if (!storedValue) {
        return inMemoryQuestionPools;
    }

    try {
        const parsed: unknown = JSON.parse(storedValue);

        if (!isRecord(parsed)) {
            inMemoryQuestionPools = {};
            return {};
        }

        const questionPools: StoredQuestionPools = {};

        for (const [categoryId, value] of Object.entries(parsed)) {
            const questionPool = parseQuestionPool(categoryId, value);

            if (questionPool) {
                questionPools[categoryId] = questionPool;
            }
        }

        inMemoryQuestionPools = questionPools;
        return questionPools;
    } catch {
        inMemoryQuestionPools = {};
        return {};
    }
}

function writeQuestionPools(questionPools: StoredQuestionPools): boolean {
    inMemoryQuestionPools = questionPools;

    if (!canUseLocalStorage()) {
        return false;
    }

    try {
        window.localStorage.setItem(QUESTION_POOL_STORAGE_KEY, JSON.stringify(questionPools));
        return true;
    } catch {
        return false;
    }
}

function readActiveQuizSessions(): StoredActiveQuizSessions {
    if (!canUseLocalStorage()) {
        return inMemoryActiveQuizSessions;
    }

    let storedValue: string | null;

    try {
        storedValue = window.localStorage.getItem(ACTIVE_QUIZ_SESSION_STORAGE_KEY);
    } catch {
        return inMemoryActiveQuizSessions;
    }

    if (!storedValue) {
        return inMemoryActiveQuizSessions;
    }

    try {
        const parsed: unknown = JSON.parse(storedValue);

        if (!isRecord(parsed)) {
            inMemoryActiveQuizSessions = {};
            return {};
        }

        const activeQuizSessions: StoredActiveQuizSessions = {};

        for (const [categoryId, value] of Object.entries(parsed)) {
            const activeQuizSession = parseActiveQuizSession(categoryId, value);

            if (activeQuizSession) {
                activeQuizSessions[categoryId] = activeQuizSession;
            }
        }

        inMemoryActiveQuizSessions = activeQuizSessions;
        return activeQuizSessions;
    } catch {
        inMemoryActiveQuizSessions = {};
        return {};
    }
}

function writeActiveQuizSessions(activeQuizSessions: StoredActiveQuizSessions): boolean {
    inMemoryActiveQuizSessions = activeQuizSessions;

    if (!canUseLocalStorage()) {
        return false;
    }

    try {
        if (Object.keys(activeQuizSessions).length === 0) {
            window.localStorage.removeItem(ACTIVE_QUIZ_SESSION_STORAGE_KEY);
        } else {
            window.localStorage.setItem(
                ACTIVE_QUIZ_SESSION_STORAGE_KEY,
                JSON.stringify(activeQuizSessions),
            );
        }

        return true;
    } catch {
        return false;
    }
}

function isValidActiveQuizSession(
    activeQuizSession: ActiveQuizSession | undefined,
    categoryId: string,
    catalogQuestionIds: readonly string[],
    requestedCount: number,
): activeQuizSession is ActiveQuizSession {
    if (!activeQuizSession || activeQuizSession.categoryId !== categoryId) {
        return false;
    }

    const targetCount = Math.min(
        Math.max(0, Math.floor(requestedCount)),
        catalogQuestionIds.length,
    );
    const catalogQuestionIdSet = new Set(catalogQuestionIds);
    const activeQuestionIdSet = new Set(activeQuizSession.questionIds);

    return (
        activeQuizSession.questionIds.length === targetCount &&
        activeQuestionIdSet.size === activeQuizSession.questionIds.length &&
        activeQuizSession.questionIds.every((questionId) => catalogQuestionIdSet.has(questionId))
    );
}

export function getOrCreateActiveQuizSession(
    categoryId: string,
    allQuestionIds: readonly string[],
    requestedCount: number,
): ActiveQuizSession {
    const questionPools = readQuestionPools();
    const storedQuestionPool = questionPools[categoryId];
    const reconciledQuestionPool = reconcileQuestionPool(
        allQuestionIds,
        storedQuestionPool?.remainingQuestionIds ?? [],
        storedQuestionPool?.catalogQuestionIds ?? [],
    );
    const activeQuizSessions = readActiveQuizSessions();
    const activeQuizSession = activeQuizSessions[categoryId];
    const now = new Date().toISOString();

    if (
        isValidActiveQuizSession(
            activeQuizSession,
            categoryId,
            reconciledQuestionPool.catalogQuestionIds,
            requestedCount,
        )
    ) {
        const activeQuestionIdSet = new Set(activeQuizSession.questionIds);

        writeQuestionPools({
            ...questionPools,
            [categoryId]: {
                categoryId,
                catalogQuestionIds: reconciledQuestionPool.catalogQuestionIds,
                remainingQuestionIds: reconciledQuestionPool.remainingQuestionIds.filter(
                    (questionId) => !activeQuestionIdSet.has(questionId),
                ),
                updatedAt: now,
            },
        });

        return activeQuizSession;
    }

    const selection = selectQuestionIdsForSession(
        reconciledQuestionPool.catalogQuestionIds,
        reconciledQuestionPool.remainingQuestionIds,
        requestedCount,
    );
    const nextActiveQuizSession: ActiveQuizSession = {
        categoryId,
        questionIds: selection.selectedQuestionIds,
        createdAt: now,
    };

    writeActiveQuizSessions({
        ...activeQuizSessions,
        [categoryId]: nextActiveQuizSession,
    });
    writeQuestionPools({
        ...questionPools,
        [categoryId]: {
            categoryId,
            catalogQuestionIds: reconciledQuestionPool.catalogQuestionIds,
            remainingQuestionIds: selection.remainingQuestionIds,
            updatedAt: now,
        },
    });

    return nextActiveQuizSession;
}

export function completeActiveQuizSession(categoryId: string): void {
    const activeQuizSessions = readActiveQuizSessions();

    if (!(categoryId in activeQuizSessions)) {
        return;
    }

    const remainingQuizSessions = { ...activeQuizSessions };

    delete remainingQuizSessions[categoryId];

    writeActiveQuizSessions(remainingQuizSessions);
}

export function startNextQuizSession(
    categoryId: string,
    allQuestionIds: readonly string[],
    requestedCount: number,
): ActiveQuizSession {
    completeActiveQuizSession(categoryId);

    return getOrCreateActiveQuizSession(categoryId, allQuestionIds, requestedCount);
}
