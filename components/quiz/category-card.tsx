import Link from "next/link";
import { BookOpen, Trophy } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import type { QuestionCategory } from "@/config/questions";
import type { HighScoreEntry } from "@/lib/high-score-storage";

type CategoryCardProps = {
    category: QuestionCategory;
    highScore: HighScoreEntry | null | undefined;
};

export function CategoryCard({ category, highScore }: CategoryCardProps) {
    const questionLabel = category.questions.length === 1 ? "question" : "questions";

    return (
        <Card className="h-full">
            <CardHeader>
                <div className="bg-primary/10 text-primary flex size-10 items-center justify-center rounded-lg">
                    <BookOpen aria-hidden="true" className="size-5" />
                </div>
                <CardTitle className="text-xl">{category.title}</CardTitle>
                <CardDescription className="leading-relaxed">
                    {category.description}
                </CardDescription>
            </CardHeader>
            <CardContent className="mt-auto space-y-3 text-sm">
                <p className="font-medium">
                    {category.questions.length} {questionLabel}
                </p>
                <p className="text-muted-foreground flex items-center gap-2">
                    <Trophy aria-hidden="true" className="size-4" />
                    <span>
                        Meilleur score :{" "}
                        {highScore === undefined
                            ? "—"
                            : highScore
                              ? `${highScore.score} / ${highScore.total}`
                              : "Aucun score"}
                    </span>
                </p>
            </CardContent>
            <CardFooter>
                <Button asChild className="w-full">
                    <Link href={`/quiz/${category.slug}`}>Commencer</Link>
                </Button>
            </CardFooter>
        </Card>
    );
}
