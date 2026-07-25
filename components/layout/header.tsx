import Link from "next/link";
import { Container } from "./container";

export function Header() {
    return (
        <header className="border-b">
            <a
                href="#main"
                className="focus:bg-primary focus:text-primary-foreground sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:rounded focus:px-4 focus:py-2"
            >
                Aller au contenu principal
            </a>
            <Container>
                <div className="flex h-16 items-center justify-between">
                    <Link href="/" className="font-semibold tracking-tight">
                        Questionary
                    </Link>

                    <nav aria-label="Navigation principale">
                        <Link
                            href="/"
                            className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                        >
                            Accueil
                        </Link>
                    </nav>
                </div>
            </Container>
        </header>
    );
}
