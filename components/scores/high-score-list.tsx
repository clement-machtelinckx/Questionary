"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { RotateCcw, Trash2, Trophy } from "lucide-react";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { QuestionCategory } from "@/config/questions";
import { clearHighScores, getHighScores, type HighScoreEntry } from "@/lib/high-score-storage";

type HighScoreListProps = {
    categories: QuestionCategory[];
};

function formatDate(value: string) {
    return new Intl.DateTimeFormat("fr-FR", {
        dateStyle: "long",
        timeStyle: "short",
    }).format(new Date(value));
}

export function HighScoreList({ categories }: HighScoreListProps) {
    const [highScores, setHighScores] = useState<HighScoreEntry[] | null>(null);
    const [storageError, setStorageError] = useState(false);

    useEffect(() => {
        const timeoutId = window.setTimeout(() => {
            setHighScores(getHighScores());
        }, 0);

        return () => window.clearTimeout(timeoutId);
    }, []);

    const visibleScores =
        highScores?.filter((score) =>
            categories.some((category) => category.id === score.categoryId),
        ) ?? [];

    function clearAllScores() {
        if (clearHighScores()) {
            setHighScores([]);
            setStorageError(false);
            return;
        }

        setStorageError(true);
    }

    if (highScores === null) {
        return (
            <Card>
                <CardContent className="py-8 text-center">
                    <p className="text-muted-foreground">Meilleurs scores : —</p>
                </CardContent>
            </Card>
        );
    }

    if (visibleScores.length === 0) {
        return (
            <Card>
                <CardContent className="py-10 text-center">
                    <Trophy aria-hidden="true" className="text-muted-foreground mx-auto size-10" />
                    <h2 className="mt-4 text-xl font-semibold">Aucun score enregistré</h2>
                    <p className="text-muted-foreground mt-2">
                        Terminez un quiz pour enregistrer votre premier meilleur score.
                    </p>
                    <Button asChild className="mt-6">
                        <Link href="/categories">Choisir une catégorie</Link>
                    </Button>
                </CardContent>
            </Card>
        );
    }

    return (
        <div className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
                {visibleScores.map((entry) => (
                    <Card key={entry.categoryId}>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-xl">
                                <Trophy aria-hidden="true" className="text-primary size-5" />
                                {entry.categoryTitle}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <p className="text-3xl font-bold tabular-nums">
                                {entry.score} / {entry.total}
                            </p>
                            <p className="text-primary font-semibold">{entry.percentage} %</p>
                            <p className="text-muted-foreground text-sm">
                                Obtenu le {formatDate(entry.achievedAt)}
                            </p>
                        </CardContent>
                        <CardFooter>
                            <Button asChild variant="outline" className="w-full">
                                <Link href={`/quiz/${entry.categorySlug}`}>
                                    <RotateCcw aria-hidden="true" />
                                    Rejouer
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            {storageError ? (
                <p role="alert" className="text-destructive text-sm font-medium">
                    Impossible d’effacer les scores dans ce navigateur.
                </p>
            ) : null}

            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button type="button" variant="destructive">
                        <Trash2 aria-hidden="true" />
                        Effacer les scores
                    </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Effacer tous les scores ?</AlertDialogTitle>
                        <AlertDialogDescription>
                            Cette action supprimera définitivement tous les meilleurs scores
                            enregistrés dans ce navigateur.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Annuler</AlertDialogCancel>
                        <AlertDialogAction variant="destructive" onClick={clearAllScores}>
                            Effacer
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
}
