import { expect, test } from "@playwright/test";

import { allQuestionsCategory } from "../../config/questions";
import { drapeauxCategory } from "../../config/questions/drapeaux";
import { clearBrowserStorage, getAnswerButtons } from "./helpers";

const ACTIVE_SESSION_STORAGE_KEY = "questionary:active-quiz-sessions:v1";
const firstFlagQuestion = drapeauxCategory.questions[0];

if (firstFlagQuestion.media?.type !== "flag") {
    throw new Error("La première question Drapeaux doit utiliser un drapeau.");
}

test.beforeEach(async ({ page }) => {
    await clearBrowserStorage(page);
});

test("ouvre Drapeaux, répond et affiche le drapeau suivant", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Choisir une catégorie" }).click();

    const categoryTitle = page.getByText("Drapeaux", { exact: true });
    const categoryCard = categoryTitle.locator("..").locator("..");

    await expect(categoryTitle).toBeVisible();
    await categoryCard.getByRole("link", { name: "Commencer" }).click();
    await expect(page).toHaveURL(/\/quiz\/drapeaux$/);

    const firstFlag = page.getByRole("img").first();

    await expect(firstFlag).toBeVisible();
    await expect(getAnswerButtons(page)).toHaveCount(4);

    const firstDescription = await firstFlag.getAttribute("aria-label");

    if (!firstDescription) {
        throw new Error("La description accessible du drapeau est absente.");
    }

    const flagRendering = await firstFlag.evaluate((element) => {
        const bounds = element.getBoundingClientRect();

        return {
            backgroundImage: window.getComputedStyle(element).backgroundImage,
            height: bounds.height,
            width: bounds.width,
        };
    });
    const answerLabels = await getAnswerButtons(page).allTextContents();

    expect(flagRendering.backgroundImage).not.toBe("none");
    expect(flagRendering.width).toBeGreaterThan(200);
    expect(flagRendering.height).toBeGreaterThan(0);
    expect(flagRendering.width / flagRendering.height).toBeCloseTo(4 / 3, 1);

    for (const answerLabel of answerLabels) {
        expect(firstDescription.toLocaleLowerCase("fr")).not.toContain(
            answerLabel.toLocaleLowerCase("fr"),
        );
    }

    await getAnswerButtons(page).first().click();
    await expect(page.getByRole("status")).toContainText(/Bonne réponse|Mauvaise réponse/);
    await expect(firstFlag).toBeVisible();

    await page.getByRole("button", { name: "Question suivante" }).click();

    const nextFlag = page.getByRole("img").first();

    await expect(nextFlag).toBeVisible();
    await expect(nextFlag).not.toHaveAttribute("aria-label", firstDescription);
    await expect(getAnswerButtons(page)).toHaveCount(4);
});

test("la catégorie all peut afficher une question Drapeaux", async ({ page }) => {
    const flagQuestionId = firstFlagQuestion.id;
    const otherQuestionIds = allQuestionsCategory.questions
        .map((question) => question.id)
        .filter((questionId) => questionId !== flagQuestionId)
        .slice(0, 19);

    await page.goto("/");
    await page.evaluate(
        ({ questionIds, storageKey }) => {
            window.localStorage.setItem(
                storageKey,
                JSON.stringify({
                    "category-all": {
                        categoryId: "category-all",
                        questionIds,
                        createdAt: new Date().toISOString(),
                    },
                }),
            );
        },
        {
            questionIds: [flagQuestionId, ...otherQuestionIds],
            storageKey: ACTIVE_SESSION_STORAGE_KEY,
        },
    );

    await page.goto("/quiz/all");

    await expect(
        page.getByRole("img", {
            name: firstFlagQuestion.media.description,
        }),
    ).toBeVisible();
    await expect(page.getByText("Question 1 sur 20")).toBeVisible();
});
