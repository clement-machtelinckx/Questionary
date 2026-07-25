import { expect, type Page } from "@playwright/test";

export async function clearBrowserStorage(page: Page): Promise<void> {
    await page.addInitScript(() => {
        const isolationMarker = "questionary:e2e-storage-initialized";

        if (window.sessionStorage.getItem(isolationMarker) !== "true") {
            window.localStorage.clear();
            window.sessionStorage.setItem(isolationMarker, "true");
        }
    });
}

export function getAnswerButtons(page: Page) {
    return page.locator('button[aria-pressed="false"]');
}

export function getFeedbackDialog(page: Page) {
    return page.getByRole("dialog");
}

export async function getQuizTotal(page: Page): Promise<number> {
    const counter = await page.getByText(/Question 1 sur \d+/).textContent();
    const match = counter?.match(/Question 1 sur (\d+)/);

    if (!match) {
        throw new Error("Le nombre de questions du quiz est introuvable.");
    }

    return Number(match[1]);
}

export async function completeCurrentQuiz(page: Page): Promise<number> {
    const total = await getQuizTotal(page);

    for (let questionIndex = 1; questionIndex <= total; questionIndex += 1) {
        const answers = getAnswerButtons(page);

        await expect(answers).toHaveCount(4);
        await answers.first().click();

        const dialog = getFeedbackDialog(page);

        await expect(dialog).toBeVisible();
        await expect(dialog).toContainText(/Bonne réponse|Mauvaise réponse/);

        const nextButtonName = questionIndex === total ? "Voir mon résultat" : "Question suivante";

        await dialog.getByRole("button", { name: nextButtonName }).click();
    }

    await expect(page.getByText("Quiz terminé")).toBeVisible();

    return total;
}
