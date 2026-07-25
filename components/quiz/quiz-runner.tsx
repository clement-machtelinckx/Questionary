"use client";

import { useRef, useState } from "react";
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";

import { QuizResult } from "@/components/quiz/quiz-result";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import type { QuestionCategory } from "@/config/questions";
import { getHighScore, saveHighScore, type HighScoreEntry } from "@/lib/high-score-storage";
import { cn } from "@/lib/utils";

type QuizRunnerProps = {
    category: QuestionCategory;
};

export function QuizRunner({ category }: QuizRunnerProps) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [bestScore, setBestScore] = useState<HighScoreEntry>();
    const hasSavedResult = useRef(false);

    const question = category.questions[currentQuestionIndex];
    const total = category.questions.length;
    const hasAnswered = selectedOptionId !== null;
    const isCorrect = selectedOptionId === question.correctOptionId;
    const correctOption = question.options.find((option) => option.id === question.correctOptionId);
    const progress = ((currentQuestionIndex + 1) / total) * 100;
    const isLastQuestion = currentQuestionIndex === total - 1;

    function selectOption(optionId: string) {
        if (hasAnswered) {
            return;
        }

        setSelectedOptionId(optionId);

        if (optionId === question.correctOptionId) {
            setScore((currentScore) => currentScore + 1);
        }
    }

    function goToNextStep() {
        if (!hasAnswered) {
            return;
        }

        if (isLastQuestion) {
            if (!hasSavedResult.current) {
                hasSavedResult.current = true;

                saveHighScore({
                    categoryId: category.id,
                    categorySlug: category.slug,
                    categoryTitle: category.title,
                    score,
                    total,
                    percentage: Math.round((score / total) * 100),
                    achievedAt: new Date().toISOString(),
                });

                setBestScore(getHighScore(category.id));
            }

            setIsFinished(true);
            return;
        }

        setCurrentQuestionIndex((index) => index + 1);
        setSelectedOptionId(null);
    }

    function restartQuiz() {
        hasSavedResult.current = false;
        setCurrentQuestionIndex(0);
        setSelectedOptionId(null);
        setScore(0);
        setIsFinished(false);
    }

    if (isFinished) {
        return (
            <QuizResult
                category={category}
                score={score}
                bestScore={bestScore}
                onRestart={restartQuiz}
            />
        );
    }

    return (
        <div className="mx-auto max-w-3xl">
            <div className="mb-8 text-center">
                <p className="text-primary text-sm font-semibold tracking-wide uppercase">Quiz</p>
                <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
                    {category.title}
                </h1>
            </div>

            <Card>
                <CardHeader className="gap-5">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-sm font-medium">
                        <span>
                            Score : {score} {score === 1 ? "point" : "points"}
                        </span>
                        <span>
                            Question {currentQuestionIndex + 1} sur {total}
                        </span>
                    </div>
                    <Progress
                        value={progress}
                        aria-label="Progression du quiz"
                        aria-valuemin={0}
                        aria-valuemax={total}
                        aria-valuenow={currentQuestionIndex + 1}
                        aria-valuetext={`Question ${currentQuestionIndex + 1} sur ${total}`}
                    />
                    <h2 className="text-xl leading-relaxed font-semibold md:text-2xl">
                        {question.prompt}
                    </h2>
                </CardHeader>

                <CardContent className="space-y-3">
                    {question.options.map((option) => {
                        const optionIsCorrect = option.id === question.correctOptionId;
                        const optionIsSelected = option.id === selectedOptionId;
                        const optionIsWrongSelection =
                            hasAnswered && optionIsSelected && !optionIsCorrect;

                        return (
                            <Button
                                key={option.id}
                                type="button"
                                variant="outline"
                                disabled={hasAnswered}
                                aria-pressed={optionIsSelected}
                                onClick={() => selectOption(option.id)}
                                className={cn(
                                    "h-auto min-h-12 w-full justify-between px-4 py-3 text-left whitespace-normal disabled:opacity-100",
                                    hasAnswered &&
                                        optionIsCorrect &&
                                        "border-emerald-600 bg-emerald-50 text-emerald-950 dark:bg-emerald-950/40 dark:text-emerald-100",
                                    optionIsWrongSelection &&
                                        "border-red-600 bg-red-50 text-red-950 dark:bg-red-950/40 dark:text-red-100",
                                    hasAnswered &&
                                        !optionIsCorrect &&
                                        !optionIsWrongSelection &&
                                        "text-muted-foreground bg-muted/40",
                                )}
                            >
                                <span>{option.label}</span>
                                {hasAnswered && optionIsCorrect ? (
                                    <span className="flex shrink-0 items-center gap-2 text-xs font-semibold">
                                        <CheckCircle2 aria-hidden="true" className="size-4" />
                                        Bonne réponse
                                    </span>
                                ) : null}
                                {optionIsWrongSelection ? (
                                    <span className="flex shrink-0 items-center gap-2 text-xs font-semibold">
                                        <XCircle aria-hidden="true" className="size-4" />
                                        Votre réponse
                                    </span>
                                ) : null}
                            </Button>
                        );
                    })}

                    {hasAnswered ? (
                        <div
                            role="status"
                            aria-live="polite"
                            className={cn(
                                "mt-6 rounded-lg border p-4",
                                isCorrect
                                    ? "border-emerald-600/40 bg-emerald-50 dark:bg-emerald-950/30"
                                    : "border-red-600/40 bg-red-50 dark:bg-red-950/30",
                            )}
                        >
                            <p className="flex items-center gap-2 font-semibold">
                                {isCorrect ? (
                                    <CheckCircle2
                                        aria-hidden="true"
                                        className="size-5 text-emerald-700 dark:text-emerald-400"
                                    />
                                ) : (
                                    <XCircle
                                        aria-hidden="true"
                                        className="size-5 text-red-700 dark:text-red-400"
                                    />
                                )}
                                {isCorrect ? "Bonne réponse !" : "Mauvaise réponse."}
                            </p>
                            {!isCorrect ? (
                                <p className="mt-3">
                                    La bonne réponse était : {correctOption?.label ?? "—"}.
                                </p>
                            ) : null}
                            <p className="mt-2">{question.explanation}</p>
                        </div>
                    ) : null}
                </CardContent>

                {hasAnswered ? (
                    <CardFooter className="justify-end">
                        <Button type="button" onClick={goToNextStep}>
                            {isLastQuestion ? "Voir mon résultat" : "Question suivante"}
                            <ArrowRight aria-hidden="true" />
                        </Button>
                    </CardFooter>
                ) : null}
            </Card>
        </div>
    );
}
