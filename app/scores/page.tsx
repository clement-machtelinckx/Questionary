import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { HighScoreList } from "@/components/scores/high-score-list";
import { questionCategories } from "@/config/questions";

export const metadata: Metadata = {
    title: "Scores",
    description: "Consultez les meilleurs scores enregistrés dans votre navigateur.",
};

export default function ScoresPage() {
    return (
        <section className="py-12 md:py-16">
            <Container>
                <div className="mb-10 max-w-2xl">
                    <p className="text-primary text-sm font-semibold tracking-widest uppercase">
                        Vos résultats
                    </p>
                    <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
                        Meilleurs scores
                    </h1>
                    <p className="text-muted-foreground mt-3 leading-relaxed">
                        Seul votre meilleur résultat est conservé pour chaque catégorie, dans ce
                        navigateur.
                    </p>
                </div>

                <HighScoreList categories={questionCategories} />
            </Container>
        </section>
    );
}
