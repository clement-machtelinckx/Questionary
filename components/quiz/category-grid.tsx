"use client";

import { useEffect, useState } from "react";

import { CategoryCard } from "@/components/quiz/category-card";
import type { QuestionCategory } from "@/config/questions";
import { getHighScores, type HighScoreEntry } from "@/lib/high-score-storage";

type CategoryGridProps = {
    categories: QuestionCategory[];
};

export function CategoryGrid({ categories }: CategoryGridProps) {
    const [highScores, setHighScores] = useState<HighScoreEntry[] | null>(null);

    useEffect(() => {
        const timeoutId = window.setTimeout(() => {
            setHighScores(getHighScores());
        }, 0);

        return () => window.clearTimeout(timeoutId);
    }, []);

    return (
        <div className="grid gap-6 md:grid-cols-2">
            {categories.map((category) => {
                const highScore =
                    highScores === null
                        ? undefined
                        : (highScores.find((score) => score.categoryId === category.id) ?? null);

                return <CategoryCard key={category.id} category={category} highScore={highScore} />;
            })}
        </div>
    );
}
