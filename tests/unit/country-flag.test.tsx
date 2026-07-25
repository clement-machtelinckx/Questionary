import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { CountryFlag } from "@/components/quiz/country-flag";

describe("CountryFlag", () => {
    it("normalise le code pays et expose une image accessible", () => {
        render(
            <CountryFlag
                countryCode="FR"
                description="Trois bandes verticales bleue, blanche et rouge"
            />,
        );

        const flag = screen.getByRole("img", {
            name: "Trois bandes verticales bleue, blanche et rouge",
        });

        expect(flag).toHaveClass("fi");
        expect(flag).toHaveClass("fi-fr");
    });

    it("ignore la classe dynamique d’un code invalide sans faire planter le rendu", () => {
        render(
            <CountryFlag
                countryCode="FRA"
                description="Drapeau volontairement invalide pour ce test"
            />,
        );

        const flag = screen.getByRole("img", {
            name: "Drapeau volontairement invalide pour ce test",
        });

        expect(flag).toHaveClass("fi");
        expect(flag.className).not.toContain("fi-fra");
    });
});
