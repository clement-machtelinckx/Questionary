import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <section className="py-20 md:py-28">
            <Container>
                <div className="mx-auto max-w-xl text-center">
                    <p className="text-primary text-sm font-semibold tracking-widest uppercase">
                        Erreur 404
                    </p>
                    <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                        Catégorie introuvable
                    </h1>
                    <p className="text-muted-foreground mt-4">
                        La catégorie demandée n’existe pas ou n’est plus disponible.
                    </p>
                    <Button asChild className="mt-8">
                        <Link href="/categories">Voir les catégories</Link>
                    </Button>
                </div>
            </Container>
        </section>
    );
}
