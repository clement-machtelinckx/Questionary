import { expect, test } from "@playwright/test";

import { clearBrowserStorage } from "./helpers";

test.beforeEach(async ({ page }) => {
    await clearBrowserStorage(page);
});

test("navigation principale, catégories, scores et 404", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("heading", { name: "Questionary", level: 1 })).toBeVisible();

    await page.getByRole("link", { name: "Choisir une catégorie" }).click();
    await expect(page.getByRole("heading", { name: "Catégories", level: 1 })).toBeVisible();
    await expect(page.getByText("Toutes les questions", { exact: true })).toBeVisible();

    await page.getByRole("link", { name: "Scores", exact: true }).first().click();
    await expect(page.getByRole("heading", { name: "Meilleurs scores", level: 1 })).toBeVisible();

    await page.goto("/quiz/culture-generale");
    await expect(page.getByText(/Question 1 sur \d+/)).toBeVisible();

    await page.goto("/quiz/categorie-inconnue");
    await expect(
        page.getByRole("heading", {
            name: "Catégorie introuvable",
            level: 1,
        }),
    ).toBeVisible();
    await expect(page.getByRole("link", { name: "Voir les catégories" })).toBeVisible();
});
