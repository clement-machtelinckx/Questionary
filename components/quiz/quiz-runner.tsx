"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";

import { CountryFlag } from "@/components/quiz/country-flag";
import { QuizResult } from "@/components/quiz/quiz-result";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
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
    const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
    const answerLocked = useRef(false);
    const hasSavedResult = useRef(false);
    const questionHeadingRef = useRef<HTMLHeadingElement>(null);
    const reopenFeedbackButtonRef = useRef<HTMLButtonElement>(null);
    const dialogCloseFocusTarget = useRef<"question" | "reopen" | null>(null);
    const shouldFocusQuestion = useRef(false);

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
            setIsFeedbackOpen(false);
            dialogCloseFocusTarget.current = null;
            shouldFocusQuestion.current = false;
        }, 0);

        return () => window.clearTimeout(timeoutId);
    }, [category]);

    useEffect(() => {
        if (shouldFocusQuestion.current && !isFeedbackOpen && !isFinished) {
            shouldFocusQuestion.current = false;
            questionHeadingRef.current?.focus();
        }
    }, [currentQuestionIndex, isFeedbackOpen, isFinished]);

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
        setIsFeedbackOpen(true);

        if (optionId === question.correctOptionId) {
            setScore((currentScore) => currentScore + 1);
        }
    }

    function handleFeedbackOpenChange(open: boolean) {
        if (!open) {
            dialogCloseFocusTarget.current = "reopen";
        }

        setIsFeedbackOpen(open);
    }

    function goToNextStep() {
        if (!hasAnswered) {
            return;
        }

        setIsFeedbackOpen(false);

        if (isLastQuestion) {
            dialogCloseFocusTarget.current = null;
            shouldFocusQuestion.current = false;

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

        dialogCloseFocusTarget.current = "question";
        shouldFocusQuestion.current = true;
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
        setIsFeedbackOpen(false);
        dialogCloseFocusTarget.current = null;
        shouldFocusQuestion.current = false;
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
                    <h2
                        ref={questionHeadingRef}
                        tabIndex={-1}
                        className="text-xl leading-relaxed font-semibold outline-none md:text-2xl"
                    >
                        {question.prompt}
                    </h2>
                </CardHeader>

                <CardContent className="space-y-3">
                    {question.media?.type === "flag" ? (
                        <div className="bg-muted/30 mb-6 flex justify-center rounded-lg p-4 sm:p-6">
                            <CountryFlag
                                countryCode={question.media.countryCode}
                                description={question.media.description}
                            />
                        </div>
                    ) : null}

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
                </CardContent>

                {hasAnswered && !isFeedbackOpen ? (
                    <CardFooter className="justify-end">
                        <Button
                            ref={reopenFeedbackButtonRef}
                            type="button"
                            variant="outline"
                            onClick={() => setIsFeedbackOpen(true)}
                        >
                            Voir la correction
                        </Button>
                    </CardFooter>
                ) : null}
            </Card>

            <Dialog open={isFeedbackOpen} onOpenChange={handleFeedbackOpenChange}>
                <DialogContent
                    className="max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-lg overflow-y-auto"
                    onPointerDownOutside={(event) => event.preventDefault()}
                    onCloseAutoFocus={(event) => {
                        event.preventDefault();

                        if (dialogCloseFocusTarget.current === "reopen") {
                            reopenFeedbackButtonRef.current?.focus();
                        }

                        if (dialogCloseFocusTarget.current === "question") {
                            questionHeadingRef.current?.focus();
                        }

                        dialogCloseFocusTarget.current = null;
                    }}
                >
                    <DialogHeader>
                        <DialogTitle
                            aria-live="polite"
                            className={cn(
                                "flex items-center gap-2 text-xl",
                                isCorrect
                                    ? "text-emerald-800 dark:text-emerald-300"
                                    : "text-red-800 dark:text-red-300",
                            )}
                        >
                            {isCorrect ? (
                                <CheckCircle2 aria-hidden="true" className="size-5" />
                            ) : (
                                <XCircle aria-hidden="true" className="size-5" />
                            )}
                            {isCorrect ? "Bonne réponse !" : "Mauvaise réponse."}
                        </DialogTitle>
                        <DialogDescription className="sr-only">
                            Correction de la question actuelle
                        </DialogDescription>
                    </DialogHeader>

                    <div
                        className={cn(
                            "rounded-lg border p-4",
                            isCorrect
                                ? "border-emerald-600/40 bg-emerald-50 dark:bg-emerald-950/30"
                                : "border-red-600/40 bg-red-50 dark:bg-red-950/30",
                        )}
                    >
                        {!isCorrect ? (
                            <p className="font-medium">
                                La bonne réponse était : {correctOption?.label ?? "—"}.
                            </p>
                        ) : null}
                        <p className={cn(!isCorrect && "mt-3")}>{question.explanation}</p>
                    </div>

                    <DialogFooter>
                        <Button
                            type="button"
                            size="lg"
                            className="min-h-11 w-full sm:w-auto"
                            onClick={goToNextStep}
                        >
                            {isLastQuestion ? "Voir mon résultat" : "Question suivante"}
                            <ArrowRight aria-hidden="true" />
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}
