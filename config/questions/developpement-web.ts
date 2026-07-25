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
        {
            id: "web-javascript-role-03",
            prompt: "Quel langage est principalement utilisé pour rendre une page web interactive ?",
            options: [
                { id: "web-javascript-role-html", label: "HTML" },
                { id: "web-javascript-role-css", label: "CSS" },
                { id: "web-javascript-role-javascript", label: "JavaScript" },
                { id: "web-javascript-role-sql", label: "SQL" },
            ],
            correctOptionId: "web-javascript-role-javascript",
            explanation:
                "JavaScript permet notamment de réagir aux actions de l’utilisateur et de modifier dynamiquement une page.",
        },
        {
            id: "web-git-purpose-04",
            prompt: "À quoi sert principalement Git dans un projet web ?",
            options: [
                { id: "web-git-purpose-versioning", label: "À suivre les versions du code" },
                { id: "web-git-purpose-database", label: "À stocker les données métier" },
                { id: "web-git-purpose-styling", label: "À mettre en forme les pages" },
                { id: "web-git-purpose-hosting", label: "À héberger un serveur web" },
            ],
            correctOptionId: "web-git-purpose-versioning",
            explanation:
                "Git enregistre l’historique des modifications et facilite le travail collaboratif sur le code.",
        },
        {
            id: "web-https-letter-s-05",
            prompt: "Que signale principalement le « S » dans HTTPS ?",
            options: [
                { id: "web-https-letter-s-speed", label: "Une connexion plus rapide" },
                { id: "web-https-letter-s-secure", label: "Une connexion sécurisée" },
                { id: "web-https-letter-s-static", label: "Une page statique" },
                { id: "web-https-letter-s-serverless", label: "Un site sans serveur" },
            ],
            correctOptionId: "web-https-letter-s-secure",
            explanation:
                "HTTPS chiffre les échanges entre le navigateur et le serveur grâce au protocole TLS.",
        },
        {
            id: "web-dom-meaning-06",
            prompt: "Que signifie l’acronyme DOM dans le contexte du Web ?",
            options: [
                { id: "web-dom-digital-object-map", label: "Digital Object Map" },
                { id: "web-dom-document-object-model", label: "Document Object Model" },
                { id: "web-dom-data-output-method", label: "Data Output Method" },
                { id: "web-dom-dynamic-order-module", label: "Dynamic Order Module" },
            ],
            correctOptionId: "web-dom-document-object-model",
            explanation:
                "Le Document Object Model représente une page sous forme d’arbre que JavaScript peut consulter et modifier.",
        },
        {
            id: "web-media-query-07",
            prompt: "Quel outil CSS permet d’adapter les styles à la taille de l’écran ?",
            options: [
                { id: "web-media-query-selector", label: "Un sélecteur d’attribut" },
                { id: "web-media-query-keyframe", label: "Une règle @keyframes" },
                { id: "web-media-query-rule", label: "Une media query" },
                { id: "web-media-query-variable", label: "Une variable CSS" },
            ],
            correctOptionId: "web-media-query-rule",
            explanation:
                "Les media queries appliquent des styles selon des caractéristiques comme la largeur de la fenêtre.",
        },
        {
            id: "web-http-404-08",
            prompt: "Que signifie généralement le code de statut HTTP 404 ?",
            options: [
                { id: "web-http-404-success", label: "La requête a réussi" },
                { id: "web-http-404-redirect", label: "La ressource a été déplacée" },
                { id: "web-http-404-not-found", label: "La ressource est introuvable" },
                { id: "web-http-404-server-error", label: "Le serveur est en panne" },
            ],
            correctOptionId: "web-http-404-not-found",
            explanation:
                "Le statut 404 indique que le serveur a été contacté mais qu’il ne trouve pas la ressource demandée.",
        },
        {
            id: "web-flexbox-layout-09",
            prompt: "Pour quel type de mise en page CSS Flexbox est-il particulièrement adapté ?",
            options: [
                { id: "web-flexbox-layout-one-dimension", label: "Un alignement sur un axe" },
                { id: "web-flexbox-layout-database", label: "Une structure de base de données" },
                { id: "web-flexbox-layout-routing", label: "Le routage entre les pages" },
                { id: "web-flexbox-layout-encryption", label: "Le chiffrement des données" },
            ],
            correctOptionId: "web-flexbox-layout-one-dimension",
            explanation:
                "Flexbox organise efficacement des éléments selon un axe principal, en ligne ou en colonne.",
        },
        {
            id: "web-image-alt-10",
            prompt: "Quel est le rôle principal de l’attribut alt d’une image HTML ?",
            options: [
                { id: "web-image-alt-size", label: "Définir la taille de l’image" },
                { id: "web-image-alt-link", label: "Transformer l’image en lien" },
                { id: "web-image-alt-text", label: "Fournir une alternative textuelle" },
                { id: "web-image-alt-format", label: "Changer le format du fichier" },
            ],
            correctOptionId: "web-image-alt-text",
            explanation:
                "Le texte alternatif décrit l’image lorsqu’elle ne peut pas être vue, notamment pour les lecteurs d’écran.",
        },
    ],
};
