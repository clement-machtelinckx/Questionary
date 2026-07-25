import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vitest/config";

export default defineConfig({
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./", import.meta.url)),
        },
    },
    test: {
        environment: "jsdom",
        setupFiles: ["./tests/setup/vitest.setup.ts"],
        include: ["tests/unit/**/*.test.{ts,tsx}", "tests/integration/**/*.test.{ts,tsx}"],
        clearMocks: true,
        restoreMocks: true,
        coverage: {
            provider: "v8",
            reporter: ["text", "html"],
            include: [
                "lib/shuffle-array.ts",
                "lib/question-pool.ts",
                "lib/question-pool-storage.ts",
                "lib/high-score-storage.ts",
                "config/questions/index.ts",
                "config/questions/validate-questions.ts",
                "components/quiz/country-flag.tsx",
                "components/quiz/quiz-runner.tsx",
                "components/quiz/quiz-result.tsx",
            ],
            exclude: ["components/ui/**", "tests/**", ".next/**", "**/*.config.*"],
            thresholds: {
                statements: 70,
                branches: 60,
                functions: 70,
                lines: 70,
            },
        },
    },
});
