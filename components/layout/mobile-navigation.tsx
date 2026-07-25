"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

const navigationItems = [
    { href: "/", label: "Accueil" },
    { href: "/categories", label: "Catégories" },
    { href: "/scores", label: "Scores" },
] as const;

export function MobileNavigation() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="md:hidden"
                    aria-label="Ouvrir la navigation"
                >
                    <Menu aria-hidden="true" />
                </Button>
            </SheetTrigger>
            <SheetContent side="right">
                <SheetHeader>
                    <SheetTitle>Navigation</SheetTitle>
                    <SheetDescription className="sr-only">
                        Accéder aux pages principales de Questionary.
                    </SheetDescription>
                </SheetHeader>
                <nav aria-label="Navigation mobile" className="grid gap-2 px-4">
                    {navigationItems.map((item) => (
                        <SheetClose key={item.href} asChild>
                            <Link
                                href={item.href}
                                className="hover:bg-accent focus-visible:ring-ring rounded-md px-3 py-3 font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none"
                            >
                                {item.label}
                            </Link>
                        </SheetClose>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
}
