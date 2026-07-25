import Link from "next/link";
import { ArrowRight, Trophy } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export default function HomePage() {
    return (
        <section className="py-20 md:py-28">
            <Container>
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-primary text-sm font-semibold tracking-widest uppercase">
                        Quiz en ligne
                    </p>
                    <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
                        {siteConfig.name}
                    </h1>
                    <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-lg leading-relaxed md:text-xl">
                        {siteConfig.description}
                    </p>
                    <p className="mx-auto mt-4 max-w-xl leading-relaxed">
                        Choisissez une catégorie, répondez à chaque question et découvrez
                        immédiatement la correction. Votre meilleur score reste enregistré dans
                        votre navigateur.
                    </p>

                    <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <Button asChild size="lg">
                            <Link href="/categories">
                                Choisir une catégorie
                                <ArrowRight aria-hidden="true" />
                            </Link>
                        </Button>
                        <Button asChild variant="ghost" size="lg">
                            <Link href="/scores">
                                <Trophy aria-hidden="true" />
                                Voir mes scores
                            </Link>
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    );
}
