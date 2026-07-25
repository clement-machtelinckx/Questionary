import Link from "next/link";

import { Container } from "@/components/layout/container";

export function Footer() {
    return (
        <footer className="border-t">
            <Container>
                <div className="flex flex-col gap-5 py-8 text-sm sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="font-semibold">Questionary</p>
                        <p className="text-muted-foreground mt-1">
                            Testez simplement vos connaissances.
                        </p>
                        <p className="text-muted-foreground mt-3">
                            © {new Date().getFullYear()} Questionary
                        </p>
                    </div>
                    <nav aria-label="Navigation de pied de page" className="flex flex-wrap gap-4">
                        <Link
                            href="/"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Accueil
                        </Link>
                        <Link
                            href="/categories"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Catégories
                        </Link>
                        <Link
                            href="/scores"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Scores
                        </Link>
                    </nav>
                </div>
            </Container>
        </footer>
    );
}
