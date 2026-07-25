import { describe, expect, it, vi } from "vitest";

import { shuffleArray } from "@/lib/shuffle-array";

describe("shuffleArray", () => {
    it("retourne un nouveau tableau sans modifier la source", () => {
        const source = Object.freeze([1, 2, 3, 4]);

        vi.spyOn(Math, "random").mockReturnValue(0);

        const shuffled = shuffleArray(source);

        expect(shuffled).not.toBe(source);
        expect(source).toEqual([1, 2, 3, 4]);
        expect(shuffled).toEqual([2, 3, 4, 1]);
    });

    it("conserve la longueur et exactement les mêmes éléments", () => {
        const source = ["a", "b", "c", "d", "e"];

        vi.spyOn(Math, "random")
            .mockReturnValueOnce(0.8)
            .mockReturnValueOnce(0.1)
            .mockReturnValueOnce(0.6)
            .mockReturnValueOnce(0.2);

        const shuffled = shuffleArray(source);

        expect(shuffled).toHaveLength(source.length);
        expect([...shuffled].sort()).toEqual([...source].sort());
        expect(new Set(shuffled)).toHaveLength(source.length);
    });

    it("fonctionne avec un tableau vide", () => {
        expect(shuffleArray([])).toEqual([]);
    });

    it("fonctionne avec un seul élément", () => {
        const item = { id: "unique" };
        const source = [item];
        const shuffled = shuffleArray(source);

        expect(shuffled).toEqual([item]);
        expect(shuffled).not.toBe(source);
    });

    it("peut être rendu déterministe en contrôlant Math.random", () => {
        vi.spyOn(Math, "random").mockReturnValue(0);

        expect(shuffleArray([1, 2, 3, 4])).toEqual([2, 3, 4, 1]);
        expect(Math.random).toHaveBeenCalledTimes(3);
    });
});
