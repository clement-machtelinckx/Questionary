import Link from "next/link";

import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { Container } from "./container";

export function Header() {
    return (
        <header className="bg-background/90 sticky top-0 z-40 border-b backdrop-blur">
            <a
                href="#main"
                className="focus:bg-primary focus:text-primary-foreground sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:rounded focus:px-4 focus:py-2"
            >
                Aller au contenu principal
            </a>
            <Container>
                <div className="flex h-16 items-center justify-between">
                    <Link href="/" className="text-lg font-semibold tracking-tight">
                        Questionary
                    </Link>

                    <nav
                        aria-label="Navigation principale"
                        className="hidden items-center gap-6 md:flex"
                    >
                        <Link
                            href="/"
                            className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                        >
                            Accueil
                        </Link>
                        <Link
                            href="/categories"
                            className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                        >
                            Catégories
                        </Link>
                        <Link
                            href="/scores"
                            className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                        >
                            Scores
                        </Link>
                    </nav>

                    <MobileNavigation />
                </div>
            </Container>
        </header>
    );
}
