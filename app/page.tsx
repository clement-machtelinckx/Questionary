import { Container } from "@/components/layout/container";

export default function HomePage() {
    return (
        <section className="py-16 md:py-24">
            <Container>
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
                        Questionary
                    </h1>
                    <p className="text-muted-foreground mt-6 text-lg">
                        Questionary est en cours de construction.
                    </p>
                </div>
            </Container>
        </section>
    );
}
