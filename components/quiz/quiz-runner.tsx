"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";

import { QuizResult } from "@/components/quiz/quiz-result";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { QUESTIONS_PER_QUIZ } from "@/config/quiz";
import type { Question, QuestionCategory, QuestionOptions } from "@/config/questions";
import { getHighScore, saveHighScore, type HighScoreEntry } from "@/lib/high-score-storage";
import {
    completeActiveQuizSession,
    getOrCreateActiveQuizSession,
    startNextQuizSession,
} from "@/lib/question-pool-storage";
import { shuffleArray } from "@/lib/shuffle-array";
import { cn } from "@/lib/utils";

type QuizRunnerProps = {
    category: QuestionCategory;
};

type QuizSessionQuestion = Omit<Question, "options"> & {
    options: QuestionOptions;
};

function shuffleQuestionOptions(options: QuestionOptions): QuestionOptions {
    const shuffledOptions = shuffleArray(options);

    if (shuffledOptions.length !== 4) {
        throw new Error("Une question de quiz doit contenir exactement quatre réponses.");
    }

    return [shuffledOptions[0], shuffledOptions[1], shuffledOptions[2], shuffledOptions[3]];
}

function createQuizSession(
    category: QuestionCategory,
    questionIds: readonly string[],
): QuizSessionQuestion[] {
    const questionsById = new Map(category.questions.map((question) => [question.id, question]));
    const sessionQuestions: QuizSessionQuestion[] = [];

    for (const questionId of questionIds) {
        const question = questionsById.get(questionId);

        if (question) {
            sessionQuestions.push({
                ...question,
                options: shuffleQuestionOptions(question.options),
            });
        }
    }

    return sessionQuestions;
}

function QuizUnavailable({ categoryTitle }: { categoryTitle: string }) {
    return (
        <Card className="mx-auto max-w-2xl">
            <CardHeader className="text-center">
                <h1 className="text-3xl font-semibold tracking-tight">Quiz indisponible</h1>
                <p className="text-muted-foreground">
                    La catégorie « {categoryTitle} » ne contient aucune question utilisable.
                </p>
            </CardHeader>
        </Card>
    );
}

export function QuizRunner({ category }: QuizRunnerProps) {
    if (category.questions.length === 0) {
        return <QuizUnavailable categoryTitle={category.title} />;
    }

    return <QuizSession key={category.id} category={category} />;
}

function QuizSession({ category }: QuizRunnerProps) {
    const [sessionQuestions, setSessionQuestions] = useState<QuizSessionQuestion[] | null>(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [bestScore, setBestScore] = useState<HighScoreEntry>();
    const answerLocked = useRef(false);
    const hasSavedResult = useRef(false);

    useEffect(() => {
        const timeoutId = window.setTimeout(() => {
            const activeQuizSession = getOrCreateActiveQuizSession(
                category.id,
                category.questions.map((question) => question.id),
                QUESTIONS_PER_QUIZ,
            );

            answerLocked.current = false;
            hasSavedResult.current = false;
            setSessionQuestions(createQuizSession(category, activeQuizSession.questionIds));
            setCurrentQuestionIndex(0);
            setSelectedOptionId(null);
            setScore(0);
            setIsFinished(false);
            setBestScore(undefined);
        }, 0);

        return () => window.clearTimeout(timeoutId);
    }, [category]);

    if (sessionQuestions === null) {
        return (
            <Card className="mx-auto max-w-2xl">
                <CardContent className="py-10 text-center">
                    <p className="text-muted-foreground" aria-live="polite">
                        Préparation du quiz…
                    </p>
                </CardContent>
            </Card>
        );
    }

    const question = sessionQuestions[currentQuestionIndex];
    const total = sessionQuestions.length;

    if (!question || total === 0) {
        return <QuizUnavailable categoryTitle={category.title} />;
    }

    const hasAnswered = selectedOptionId !== null;
    const isCorrect = selectedOptionId === question.correctOptionId;
    const correctOption = question.options.find((option) => option.id === question.correctOptionId);
    const progress = ((currentQuestionIndex + 1) / total) * 100;
    const isLastQuestion = currentQuestionIndex === total - 1;

    function selectOption(optionId: string) {
        if (answerLocked.current || hasAnswered) {
            return;
        }

        answerLocked.current = true;
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
                completeActiveQuizSession(category.id);
            }

            setIsFinished(true);
            return;
        }

        answerLocked.current = false;
        setCurrentQuestionIndex((index) => index + 1);
        setSelectedOptionId(null);
    }

    function restartQuiz() {
        const activeQuizSession = startNextQuizSession(
            category.id,
            category.questions.map((question) => question.id),
            QUESTIONS_PER_QUIZ,
        );

        answerLocked.current = false;
        hasSavedResult.current = false;
        setSessionQuestions(createQuizSession(category, activeQuizSession.questionIds));
        setCurrentQuestionIndex(0);
        setSelectedOptionId(null);
        setScore(0);
        setIsFinished(false);
        setBestScore(undefined);
    }

    if (isFinished) {
        return (
            <QuizResult
                category={category}
                score={score}
                total={total}
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
