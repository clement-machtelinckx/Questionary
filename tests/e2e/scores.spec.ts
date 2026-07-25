import { expect, test } from "@playwright/test";

import { clearBrowserStorage, completeCurrentQuiz } from "./helpers";

test.beforeEach(async ({ page }) => {
    await clearBrowserStorage(page);
});

test("persiste puis efface un meilleur score après confirmation", async ({ page }) => {
    await page.goto("/quiz/culture-generale");
    const total = await completeCurrentQuiz(page);

    await page.getByRole("link", { name: "Voir mes scores" }).click();
    await expect(page.getByText("Culture générale", { exact: true })).toBeVisible();
    await expect(page.getByText(new RegExp(`\\d+ / ${total}`))).toBeVisible();

    await page.reload();
    await expect(page.getByText("Culture générale", { exact: true })).toBeVisible();
    await expect(page.getByText(new RegExp(`\\d+ / ${total}`))).toBeVisible();

    await page.getByRole("button", { name: "Effacer les scores" }).click();
    await expect(page.getByRole("heading", { name: "Effacer tous les scores ?" })).toBeVisible();
    await page.getByRole("button", { name: "Effacer", exact: true }).click();

    await expect(page.getByRole("heading", { name: "Aucun score enregistré" })).toBeVisible();
});
