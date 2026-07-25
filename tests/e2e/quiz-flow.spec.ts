import { expect, test } from "@playwright/test";

import {
    clearBrowserStorage,
    completeCurrentQuiz,
    getAnswerButtons,
    getFeedbackDialog,
    getQuizTotal,
} from "./helpers";

const ACTIVE_SESSION_KEY = "questionary:active-quiz-sessions:v1";

type StoredSession = {
    questionIds: string[];
};

test.beforeEach(async ({ page }) => {
    await clearBrowserStorage(page);
});

test("répond à une question et passe manuellement à la suivante", async ({ page }) => {
    await page.goto("/quiz/geographie");

    const total = await getQuizTotal(page);

    expect(total).toBeLessThanOrEqual(20);
    await expect(getAnswerButtons(page)).toHaveCount(4);

    await getAnswerButtons(page).first().click();

    const dialog = getFeedbackDialog(page);

    await expect(dialog).toBeVisible();
    await expect(dialog).toContainText(/Bonne réponse|Mauvaise réponse/);
    await dialog.getByRole("button", { name: "Question suivante" }).click();
    await expect(page.getByText(`Question 2 sur ${total}`)).toBeVisible();
});

test("ferme la correction avec Escape puis la rouvre", async ({ page }) => {
    await page.goto("/quiz/geographie");
    await expect(getAnswerButtons(page)).toHaveCount(4);

    await getAnswerButtons(page).first().click();
    await expect(getFeedbackDialog(page)).toBeVisible();

    await page.keyboard.press("Escape");

    await expect(getFeedbackDialog(page)).toBeHidden();

    const reopenButton = page.getByRole("button", { name: "Voir la correction" });

    await expect(reopenButton).toBeVisible();
    await reopenButton.click();
    await expect(getFeedbackDialog(page)).toBeVisible();
});

test("termine une partie, affiche le résultat et redémarre à la première question", async ({
    page,
}) => {
    await page.goto("/quiz/culture-generale");

    const total = await completeCurrentQuiz(page);

    expect(total).toBeLessThanOrEqual(20);
    await expect(page.getByRole("heading", { name: /Résultat — Culture générale/ })).toBeVisible();
    await expect(page.getByText(new RegExp(`\\d+ / ${total}`)).first()).toBeVisible();

    await page.getByRole("button", { name: "Recommencer" }).click();
    await expect(page.getByText(`Question 1 sur ${total}`)).toBeVisible();
    await expect(getAnswerButtons(page)).toHaveCount(4);
});

test("réutilise le même lot réservé après un rechargement", async ({ page }) => {
    await page.goto("/quiz/geographie");
    await expect(page.getByText("Question 1 sur 20")).toBeVisible();

    const firstPrompt = await page.getByRole("heading", { level: 2 }).textContent();
    const firstStoredSession = await page.evaluate((storageKey) => {
        return window.localStorage.getItem(storageKey);
    }, ACTIVE_SESSION_KEY);

    await page.reload();
    await expect(page.getByText("Question 1 sur 20")).toBeVisible();

    const reloadedPrompt = await page.getByRole("heading", { level: 2 }).textContent();
    const reloadedStoredSession = await page.evaluate((storageKey) => {
        return window.localStorage.getItem(storageKey);
    }, ACTIVE_SESSION_KEY);

    expect(reloadedPrompt).toBe(firstPrompt);
    expect(reloadedStoredSession).toBe(firstStoredSession);
});

test("consomme deux lots disjoints pour une catégorie de 50 questions", async ({ page }) => {
    await page.goto("/quiz/geographie");
    await expect(page.getByText("Question 1 sur 20")).toBeVisible();

    const firstSession = await page.evaluate((storageKey) => {
        const sessions = JSON.parse(window.localStorage.getItem(storageKey) ?? "{}") as Record<
            string,
            StoredSession
        >;

        return sessions["category-geographie"]?.questionIds ?? [];
    }, ACTIVE_SESSION_KEY);

    await completeCurrentQuiz(page);
    await page.getByRole("button", { name: "Recommencer" }).click();
    await expect(page.getByText("Question 1 sur 20")).toBeVisible();

    const secondSession = await page.evaluate((storageKey) => {
        const sessions = JSON.parse(window.localStorage.getItem(storageKey) ?? "{}") as Record<
            string,
            StoredSession
        >;

        return sessions["category-geographie"]?.questionIds ?? [];
    }, ACTIVE_SESSION_KEY);

    expect(firstSession).toHaveLength(20);
    expect(secondSession).toHaveLength(20);
    expect(secondSession.some((id) => firstSession.includes(id))).toBe(false);
});

test.describe("feedback mobile", () => {
    test.use({
        viewport: {
            width: 375,
            height: 667,
        },
    });

    test("affiche l’action suivante dans une modal sans déplacer la page", async ({ page }) => {
        await page.goto("/quiz/geographie");
        await expect(page.getByText("Question 1 sur 20")).toBeVisible();

        await page.evaluate(() => {
            window.scrollTo(0, Math.min(100, document.documentElement.scrollHeight));
        });

        const pageScrollBeforeAnswer = await page.evaluate(() => window.scrollY);

        await getAnswerButtons(page).first().click();

        const dialog = getFeedbackDialog(page);
        const nextButton = dialog.getByRole("button", { name: "Question suivante" });

        await expect(dialog).toBeVisible();
        await expect(nextButton).toBeVisible();

        const modalMetrics = await dialog.evaluate((element) => {
            const styles = window.getComputedStyle(element);

            return {
                maxHeight: styles.maxHeight,
                overflowY: styles.overflowY,
            };
        });
        const nextButtonBounds = await nextButton.boundingBox();
        const pageScrollAfterAnswer = await page.evaluate(() => window.scrollY);
        const bodyOverflow = await page.evaluate(
            () => window.getComputedStyle(document.body).overflow,
        );

        expect(modalMetrics.maxHeight).not.toBe("none");
        expect(modalMetrics.overflowY).toBe("auto");
        expect(nextButtonBounds).not.toBeNull();
        expect(nextButtonBounds?.y ?? -1).toBeGreaterThanOrEqual(0);
        expect((nextButtonBounds?.y ?? 667) + (nextButtonBounds?.height ?? 0)).toBeLessThanOrEqual(
            667,
        );
        expect(Math.abs(pageScrollAfterAnswer - pageScrollBeforeAnswer)).toBeLessThanOrEqual(1);
        expect(bodyOverflow).toBe("hidden");

        await nextButton.click();
        await expect(page.getByText("Question 2 sur 20")).toBeVisible();
    });
});
