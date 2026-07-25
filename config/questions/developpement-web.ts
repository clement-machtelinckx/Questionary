import type { QuestionCategory } from "./types";

export const developpementWebCategory: QuestionCategory = {
    id: "category-web-development",
    slug: "developpement-web",
    title: "Développement web",
    description: "Les bases du Web, de sa structure à sa présentation.",
    questions: [
        {
            id: "web-html-role-01",
            prompt: "Quel langage structure principalement le contenu d’une page web ?",
            options: [
                { id: "web-html-role-css", label: "CSS" },
                { id: "web-html-role-html", label: "HTML" },
                { id: "web-html-role-sql", label: "SQL" },
                { id: "web-html-role-git", label: "Git" },
            ],
            correctOptionId: "web-html-role-html",
            explanation: "HTML définit la structure et le contenu d’une page web.",
        },
        {
            id: "web-css-role-02",
            prompt: "Quel langage sert principalement à mettre en forme une page web ?",
            options: [
                { id: "web-css-role-javascript", label: "JavaScript" },
                { id: "web-css-role-python", label: "Python" },
                { id: "web-css-role-css", label: "CSS" },
                { id: "web-css-role-http", label: "HTTP" },
            ],
            correctOptionId: "web-css-role-css",
            explanation: "CSS décrit la présentation visuelle des contenus HTML.",
        },
    ],
};
