import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { CategoryGrid } from "@/components/quiz/category-grid";
import { questionCategories } from "@/config/questions";

export const metadata: Metadata = {
    title: "Catégories",
    description: "Choisissez une catégorie et commencez un quiz Questionary.",
};

export default function CategoriesPage() {
    return (
        <section className="py-12 md:py-16">
            <Container>
                <div className="mb-10 max-w-2xl">
                    <p className="text-primary text-sm font-semibold tracking-widest uppercase">
                        À vous de jouer
                    </p>
                    <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
                        Catégories
                    </h1>
                    <p className="text-muted-foreground mt-3 leading-relaxed">
                        Choisissez un thème. Chaque quiz affiche une question à la fois et vous
                        donne la correction avant de continuer.
                    </p>
                </div>

                <CategoryGrid categories={questionCategories} />
            </Container>
        </section>
    );
}
