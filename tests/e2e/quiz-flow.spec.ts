import { expect, test } from "@playwright/test";

import {
    clearBrowserStorage,
    completeCurrentQuiz,
    getAnswerButtons,
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
    await expect(page.getByRole("status")).toContainText(/Bonne réponse|Mauvaise réponse/);
    await page.getByRole("button", { name: "Question suivante" }).click();
    await expect(page.getByText(`Question 2 sur ${total}`)).toBeVisible();
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
