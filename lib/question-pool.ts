import { shuffleArray } from "./shuffle-array";

export type QuestionSelectionResult = {
    selectedQuestionIds: string[];
    remainingQuestionIds: string[];
};

export type ReconciledQuestionPool = {
    catalogQuestionIds: string[];
    remainingQuestionIds: string[];
};

function getUniqueQuestionIds(questionIds: readonly string[]): string[] {
    const uniqueQuestionIds: string[] = [];
    const knownQuestionIds = new Set<string>();

    for (const questionId of questionIds) {
        if (questionId.length === 0 || knownQuestionIds.has(questionId)) {
            continue;
        }

        knownQuestionIds.add(questionId);
        uniqueQuestionIds.push(questionId);
    }

    return uniqueQuestionIds;
}

export function reconcileQuestionPool(
    allQuestionIds: readonly string[],
    remainingQuestionIds: readonly string[],
    catalogQuestionIds: readonly string[],
): ReconciledQuestionPool {
    const currentCatalogQuestionIds = getUniqueQuestionIds(allQuestionIds);
    const currentQuestionIdSet = new Set(currentCatalogQuestionIds);
    const previousCatalogQuestionIds = getUniqueQuestionIds(catalogQuestionIds);
    const previousQuestionIdSet = new Set(previousCatalogQuestionIds);
    const validRemainingQuestionIds = getUniqueQuestionIds(remainingQuestionIds).filter(
        (questionId) => currentQuestionIdSet.has(questionId),
    );
    const remainingQuestionIdSet = new Set(validRemainingQuestionIds);
    const newQuestionIds = currentCatalogQuestionIds.filter(
        (questionId) =>
            !previousQuestionIdSet.has(questionId) && !remainingQuestionIdSet.has(questionId),
    );

    return {
        catalogQuestionIds: currentCatalogQuestionIds,
        remainingQuestionIds: [...shuffleArray(newQuestionIds), ...validRemainingQuestionIds],
    };
}

export function selectQuestionIdsForSession(
    allQuestionIds: readonly string[],
    remainingQuestionIds: readonly string[],
    requestedCount: number,
): QuestionSelectionResult {
    const catalogQuestionIds = getUniqueQuestionIds(allQuestionIds);
    const catalogQuestionIdSet = new Set(catalogQuestionIds);
    const targetCount = Math.min(
        Math.max(0, Math.floor(requestedCount)),
        catalogQuestionIds.length,
    );
    const selectedQuestionIds: string[] = [];
    const selectedQuestionIdSet = new Set<string>();
    let availableQuestionIds = getUniqueQuestionIds(remainingQuestionIds).filter((questionId) =>
        catalogQuestionIdSet.has(questionId),
    );

    while (selectedQuestionIds.length < targetCount) {
        while (availableQuestionIds.length > 0 && selectedQuestionIds.length < targetCount) {
            const questionId = availableQuestionIds.shift();

            if (!questionId || selectedQuestionIdSet.has(questionId)) {
                continue;
            }

            selectedQuestionIdSet.add(questionId);
            selectedQuestionIds.push(questionId);
        }

        if (selectedQuestionIds.length === targetCount) {
            break;
        }

        availableQuestionIds = shuffleArray(
            catalogQuestionIds.filter((questionId) => !selectedQuestionIdSet.has(questionId)),
        );

        if (availableQuestionIds.length === 0) {
            break;
        }
    }

    return {
        selectedQuestionIds,
        remainingQuestionIds: availableQuestionIds,
    };
}
