import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
    title: "Questionary",
    description: "Questionary est en cours de construction.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="fr">
            <body className="bg-background text-foreground flex min-h-dvh flex-col antialiased">
                <Header />
                <main id="main" className="flex-1">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
