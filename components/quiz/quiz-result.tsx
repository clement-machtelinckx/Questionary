import Link from "next/link";
import { Grid2X2, RotateCcw, Trophy } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { QuestionCategory } from "@/config/questions";
import type { HighScoreEntry } from "@/lib/high-score-storage";

type QuizResultProps = {
    category: QuestionCategory;
    score: number;
    total: number;
    bestScore: HighScoreEntry | undefined;
    onRestart: () => void;
};

function getResultMessage(percentage: number) {
    if (percentage === 100) {
        return "Parfait, toutes les réponses sont correctes !";
    }

    if (percentage >= 75) {
        return "Très bon résultat !";
    }

    if (percentage >= 50) {
        return "Bien joué, vous êtes sur la bonne voie.";
    }

    return "Continuez à vous entraîner, le prochain essai sera meilleur.";
}

export function QuizResult({ category, score, total, bestScore, onRestart }: QuizResultProps) {
    const percentage = Math.round((score / total) * 100);

    return (
        <Card className="mx-auto max-w-2xl">
            <CardHeader className="text-center">
                <div className="bg-primary/10 text-primary mx-auto flex size-14 items-center justify-center rounded-full">
                    <Trophy aria-hidden="true" className="size-7" />
                </div>
                <p className="text-muted-foreground text-sm font-medium">Quiz terminé</p>
                <h1 className="text-3xl font-semibold tracking-tight">
                    Résultat — {category.title}
                </h1>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="text-center">
                    <p className="text-5xl font-bold tabular-nums">
                        {score} / {total}
                    </p>
                    <p className="text-primary mt-2 text-xl font-semibold">{percentage} %</p>
                    <p className="text-muted-foreground mt-4">{getResultMessage(percentage)}</p>
                </div>

                <Separator />

                <div className="bg-muted rounded-lg p-4 text-center">
                    <p className="text-sm font-medium">Meilleur score enregistré</p>
                    <p className="mt-1 text-lg font-semibold tabular-nums">
                        {bestScore ? `${bestScore.score} / ${bestScore.total}` : "—"}
                    </p>
                </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
                <Button type="button" onClick={onRestart}>
                    <RotateCcw aria-hidden="true" />
                    Recommencer
                </Button>
                <Button asChild variant="outline">
                    <Link href="/categories">
                        <Grid2X2 aria-hidden="true" />
                        Catégories
                    </Link>
                </Button>
                <Button asChild variant="ghost">
                    <Link href="/scores">
                        <Trophy aria-hidden="true" />
                        Voir mes scores
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
}
