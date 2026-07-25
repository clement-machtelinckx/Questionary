import { StrictMode } from "react";
import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { QuizRunner } from "@/components/quiz/quiz-runner";
import type { QuestionCategory } from "@/config/questions";
import { createTestCategory, createTestQuestion } from "@/tests/fixtures/questions";

const poolMocks = vi.hoisted(() => ({
    getOrCreateActiveQuizSession: vi.fn(),
    startNextQuizSession: vi.fn(),
    completeActiveQuizSession: vi.fn(),
}));

const scoreMocks = vi.hoisted(() => ({
    getHighScore: vi.fn(),
    saveHighScore: vi.fn(),
}));

vi.mock("@/lib/question-pool-storage", () => poolMocks);
vi.mock("@/lib/high-score-storage", () => scoreMocks);

function createSession(categoryId: string, questionIds: readonly string[], requestedCount: number) {
    return {
        categoryId,
        questionIds: questionIds.slice(0, requestedCount),
        createdAt: "2026-07-25T12:00:00.000Z",
    };
}

async function renderQuiz(category = createTestCategory(2)) {
    render(<QuizRunner category={category} />);

    await screen.findByRole("heading", { name: category.title });

    return {
        category,
        user: userEvent.setup(),
    };
}

describe("QuizRunner", () => {
    beforeEach(() => {
        vi.spyOn(Math, "random").mockReturnValue(0);
        poolMocks.getOrCreateActiveQuizSession.mockImplementation(createSession);
        poolMocks.startNextQuizSession.mockImplementation(createSession);
        scoreMocks.getHighScore.mockReturnValue(undefined);
        scoreMocks.saveHighScore.mockReturnValue(true);
    });

    it("affiche l’état initial du quiz", async () => {
        const { category } = await renderQuiz();

        expect(screen.getByRole("heading", { name: category.title })).toBeInTheDocument();
        expect(screen.getByText("Question 1 sur 2")).toBeInTheDocument();
        expect(screen.getByText("Score : 0 points")).toBeInTheDocument();
        expect(screen.getAllByRole("button", { pressed: false })).toHaveLength(4);
        expect(screen.queryByText(category.questions[0].explanation)).not.toBeInTheDocument();
        expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });

    it("augmente le score, verrouille les réponses et affiche la correction après une bonne réponse", async () => {
        const { category, user } = await renderQuiz();
        const answers = screen.getAllByRole("button", { pressed: false });
        const correctAnswer = screen.getByRole("button", { name: "Réponse B" });

        await user.click(correctAnswer);

        const dialog = screen.getByRole("dialog");

        expect(screen.getByText("Score : 1 point")).toBeInTheDocument();
        expect(
            within(dialog).getByRole("heading", { name: "Bonne réponse !" }),
        ).toBeInTheDocument();
        expect(within(dialog).getByText(category.questions[0].explanation)).toBeInTheDocument();
        expect(dialog.contains(document.activeElement)).toBe(true);
        expect(correctAnswer).toBeDisabled();
        expect(answers.every((answer) => answer.hasAttribute("disabled"))).toBe(true);
        expect(
            within(dialog).getByRole("button", { name: "Question suivante" }),
        ).toBeInTheDocument();
        expect(screen.getAllByText(category.questions[0].explanation)).toHaveLength(1);
    });

    it("identifie la mauvaise réponse choisie et la bonne réponse sans augmenter le score", async () => {
        const { category, user } = await renderQuiz();
        const wrongAnswer = screen.getByRole("button", { name: "Réponse A" });
        const correctAnswer = screen.getByRole("button", { name: "Réponse B" });

        await user.click(wrongAnswer);

        const dialog = screen.getByRole("dialog");

        expect(screen.getByText("Score : 0 points")).toBeInTheDocument();
        expect(
            within(dialog).getByRole("heading", { name: "Mauvaise réponse." }),
        ).toBeInTheDocument();
        expect(dialog).toHaveTextContent("La bonne réponse était : Réponse B.");
        expect(dialog).toHaveTextContent(category.questions[0].explanation);
        expect(wrongAnswer).toBeDisabled();
        expect(correctAnswer).toBeDisabled();
    });

    it("n’incrémente le score qu’une seule fois lors d’un double clic", async () => {
        const { user } = await renderQuiz();
        const correctAnswer = screen.getByRole("button", {
            name: "Réponse B",
        });

        await user.dblClick(correctAnswer);

        expect(screen.getByText("Score : 1 point")).toBeInTheDocument();
        expect(screen.getAllByRole("dialog")).toHaveLength(1);
        expect(
            within(screen.getByRole("dialog")).getByRole("heading", {
                name: "Bonne réponse !",
            }),
        ).toBeInTheDocument();
    });

    it("ferme puis rouvre la même correction sans modifier le score", async () => {
        const { category, user } = await renderQuiz();

        await user.click(screen.getByRole("button", { name: "Réponse B" }));
        await user.keyboard("{Escape}");

        await waitFor(() => {
            expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
        });

        expect(screen.getByText("Score : 1 point")).toBeInTheDocument();

        const reopenButton = screen.getByRole("button", { name: "Voir la correction" });

        expect(reopenButton).toHaveFocus();

        await user.click(reopenButton);

        const dialog = screen.getByRole("dialog");

        expect(
            within(dialog).getByRole("heading", { name: "Bonne réponse !" }),
        ).toBeInTheDocument();
        expect(within(dialog).getByText(category.questions[0].explanation)).toBeInTheDocument();
        expect(screen.getByText("Score : 1 point")).toBeInTheDocument();
    });

    it("passe manuellement à la question suivante en conservant le score", async () => {
        const { category, user } = await renderQuiz();

        await user.click(screen.getByRole("button", { name: "Réponse B" }));
        await user.click(
            within(screen.getByRole("dialog")).getByRole("button", {
                name: "Question suivante",
            }),
        );

        expect(screen.getByText("Question 2 sur 2")).toBeInTheDocument();
        expect(screen.getByText("Score : 1 point")).toBeInTheDocument();
        const nextQuestionHeading = screen.getByRole("heading", {
            name: category.questions[1].prompt,
        });

        expect(nextQuestionHeading).toBeInTheDocument();
        expect(nextQuestionHeading).toHaveFocus();
        expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
        expect(screen.queryByText(category.questions[0].explanation)).not.toBeInTheDocument();
        expect(screen.getAllByRole("button", { pressed: false })).toHaveLength(4);
    });

    it("affiche un drapeau accessible pendant la réponse et à la question suivante", async () => {
        const category = createTestCategory(2);
        category.questions[0].media = {
            type: "flag",
            countryCode: "fr",
            description: "Trois bandes verticales bleue, blanche et rouge",
        };
        category.questions[1].media = {
            type: "flag",
            countryCode: "jp",
            description: "Fond blanc portant un disque rouge centré",
        };
        const { user } = await renderQuiz(category);
        const firstFlag = screen.getByRole("img", {
            name: category.questions[0].media.description,
        });

        expect(firstFlag).toHaveClass("fi-fr");
        expect(firstFlag).not.toHaveAccessibleName(/France/i);
        expect(screen.getAllByRole("button", { pressed: false })).toHaveLength(4);

        await user.click(screen.getByRole("button", { name: "Réponse B" }));

        expect(screen.getByRole("dialog")).toBeInTheDocument();
        expect(firstFlag).toBeInTheDocument();

        await user.click(
            within(screen.getByRole("dialog")).getByRole("button", {
                name: "Question suivante",
            }),
        );

        expect(
            screen.getByRole("img", {
                name: category.questions[1].media.description,
            }),
        ).toHaveClass("fi-jp");
    });

    it("affiche le résultat final et sauvegarde le score une seule fois", async () => {
        const category = createTestCategory(1);
        const { user } = await renderQuiz(category);

        await user.click(screen.getByRole("button", { name: "Réponse B" }));

        const dialog = screen.getByRole("dialog");

        expect(
            within(dialog).getByRole("button", { name: "Voir mon résultat" }),
        ).toBeInTheDocument();

        await user.click(within(dialog).getByRole("button", { name: "Voir mon résultat" }));

        expect(
            screen.getByRole("heading", {
                name: `Résultat — ${category.title}`,
            }),
        ).toBeInTheDocument();
        expect(screen.getByText("1 / 1")).toBeInTheDocument();
        expect(scoreMocks.saveHighScore).toHaveBeenCalledTimes(1);
        expect(scoreMocks.saveHighScore).toHaveBeenCalledWith(
            expect.objectContaining({
                categoryId: category.id,
                score: 1,
                total: 1,
                percentage: 100,
            }),
        );
        expect(poolMocks.completeActiveQuizSession).toHaveBeenCalledTimes(1);
    });

    it("redémarre avec une nouvelle session et réinitialise le score", async () => {
        const category = createTestCategory(1);
        const { user } = await renderQuiz(category);

        await user.click(screen.getByRole("button", { name: "Réponse B" }));
        await user.click(
            within(screen.getByRole("dialog")).getByRole("button", {
                name: "Voir mon résultat",
            }),
        );
        await user.click(screen.getByRole("button", { name: "Recommencer" }));

        expect(poolMocks.startNextQuizSession).toHaveBeenCalledTimes(1);
        expect(screen.getByText("Question 1 sur 1")).toBeInTheDocument();
        expect(screen.getByText("Score : 0 points")).toBeInTheDocument();
        expect(screen.getAllByRole("button", { pressed: false })).toHaveLength(4);
        expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });

    it("affiche un état indisponible pour une catégorie vide", () => {
        const category = createTestCategory(0);

        render(<QuizRunner category={category} />);

        expect(screen.getByRole("heading", { name: "Quiz indisponible" })).toBeInTheDocument();
        expect(screen.getByText(/ne contient aucune question utilisable/)).toBeInTheDocument();
        expect(poolMocks.getOrCreateActiveQuizSession).not.toHaveBeenCalled();
    });

    it("réinitialise la session lorsque la catégorie change", async () => {
        const firstCategory = createTestCategory(1, {
            id: "category-first",
            slug: "first",
            title: "Première catégorie",
            questionPrefix: "first-question",
        });
        const secondCategory: QuestionCategory = {
            ...createTestCategory(1, {
                id: "category-second",
                slug: "second",
                title: "Deuxième catégorie",
                questionPrefix: "second-question",
            }),
            questions: [createTestQuestion("second-question-001")],
        };
        const { rerender } = render(<QuizRunner category={firstCategory} />);

        await screen.findByRole("heading", { name: firstCategory.title });

        rerender(<QuizRunner category={secondCategory} />);

        await screen.findByRole("heading", { name: secondCategory.title });
        expect(
            screen.getByRole("heading", {
                name: secondCategory.questions[0].prompt,
            }),
        ).toBeInTheDocument();
        expect(poolMocks.getOrCreateActiveQuizSession).toHaveBeenLastCalledWith(
            secondCategory.id,
            [secondCategory.questions[0].id],
            20,
        );
    });

    it("ne réserve qu’un lot sous React Strict Mode", async () => {
        const category = createTestCategory(2);

        render(
            <StrictMode>
                <QuizRunner category={category} />
            </StrictMode>,
        );

        const quiz = await screen.findByRole("heading", {
            name: category.title,
        });

        expect(within(quiz.parentElement ?? document.body).getByText("Quiz")).toBeInTheDocument();
        expect(poolMocks.getOrCreateActiveQuizSession).toHaveBeenCalledTimes(1);
    });
});
