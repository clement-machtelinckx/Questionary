import Link from "next/link";
import { Container } from "@/components/layout/container";

export function Footer() {
    return (
        <footer className="border-t">
            <Container>
                <div className="flex items-center justify-between py-6 text-sm">
                    <span>Questionary</span>
                    <Link
                        href="/"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                        Accueil
                    </Link>
                </div>
            </Container>
        </footer>
    );
}
