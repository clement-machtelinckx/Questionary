import { StrictMode } from "react";
import { render, screen, within } from "@testing-library/react";
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
    });

    it("augmente le score, verrouille les réponses et affiche la correction après une bonne réponse", async () => {
        const { category, user } = await renderQuiz();

        await user.click(screen.getByRole("button", { name: "Réponse B" }));

        expect(screen.getByText("Score : 1 point")).toBeInTheDocument();
        expect(screen.getByRole("status")).toHaveTextContent("Bonne réponse !");
        expect(screen.getByRole("status")).toHaveTextContent(category.questions[0].explanation);
        expect(
            screen.getByRole("button", {
                name: /Réponse B.*Bonne réponse/,
            }),
        ).toBeDisabled();
        expect(screen.getAllByRole("button", { pressed: false })[0]).toBeDisabled();
        expect(screen.getByRole("button", { name: "Question suivante" })).toBeInTheDocument();
    });

    it("identifie la mauvaise réponse choisie et la bonne réponse sans augmenter le score", async () => {
        const { category, user } = await renderQuiz();

        await user.click(screen.getByRole("button", { name: "Réponse A" }));

        const feedback = screen.getByRole("status");

        expect(screen.getByText("Score : 0 points")).toBeInTheDocument();
        expect(feedback).toHaveTextContent("Mauvaise réponse.");
        expect(feedback).toHaveTextContent("La bonne réponse était : Réponse B.");
        expect(feedback).toHaveTextContent(category.questions[0].explanation);
        expect(
            screen.getByRole("button", {
                name: /Réponse A.*Votre réponse/,
            }),
        ).toBeDisabled();
        expect(
            screen.getByRole("button", {
                name: /Réponse B.*Bonne réponse/,
            }),
        ).toBeDisabled();
    });

    it("n’incrémente le score qu’une seule fois lors d’un double clic", async () => {
        const { user } = await renderQuiz();
        const correctAnswer = screen.getByRole("button", {
            name: "Réponse B",
        });

        await user.dblClick(correctAnswer);

        expect(screen.getByText("Score : 1 point")).toBeInTheDocument();
    });

    it("passe manuellement à la question suivante en conservant le score", async () => {
        const { category, user } = await renderQuiz();

        await user.click(screen.getByRole("button", { name: "Réponse B" }));
        await user.click(screen.getByRole("button", { name: "Question suivante" }));

        expect(screen.getByText("Question 2 sur 2")).toBeInTheDocument();
        expect(screen.getByText("Score : 1 point")).toBeInTheDocument();
        expect(
            screen.getByRole("heading", {
                name: category.questions[1].prompt,
            }),
        ).toBeInTheDocument();
        expect(screen.queryByRole("status")).not.toBeInTheDocument();
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

        expect(screen.getByRole("status")).toBeInTheDocument();
        expect(firstFlag).toBeInTheDocument();

        await user.click(screen.getByRole("button", { name: "Question suivante" }));

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
        await user.click(screen.getByRole("button", { name: "Voir mon résultat" }));

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
        await user.click(screen.getByRole("button", { name: "Voir mon résultat" }));
        await user.click(screen.getByRole("button", { name: "Recommencer" }));

        expect(poolMocks.startNextQuizSession).toHaveBeenCalledTimes(1);
        expect(screen.getByText("Question 1 sur 1")).toBeInTheDocument();
        expect(screen.getByText("Score : 0 points")).toBeInTheDocument();
        expect(screen.getAllByRole("button", { pressed: false })).toHaveLength(4);
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
