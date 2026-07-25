import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Container } from "@/components/layout/container";
import { QuizRunner } from "@/components/quiz/quiz-runner";
import { getCategoryBySlug, questionCategories } from "@/config/questions";

type QuizPageProps = {
    params: Promise<{
        category: string;
    }>;
};

export function generateStaticParams() {
    return questionCategories.map((category) => ({
        category: category.slug,
    }));
}

export async function generateMetadata({ params }: QuizPageProps): Promise<Metadata> {
    const { category: categorySlug } = await params;
    const category = getCategoryBySlug(categorySlug);

    if (!category) {
        return {
            title: "Catégorie introuvable",
        };
    }

    return {
        title: category.title,
        description: category.description,
    };
}

export default async function QuizPage({ params }: QuizPageProps) {
    const { category: categorySlug } = await params;
    const category = getCategoryBySlug(categorySlug);

    if (!category) {
        notFound();
    }

    return (
        <section className="py-10 md:py-14">
            <Container>
                <QuizRunner category={category} />
            </Container>
        </section>
    );
}
