import type { QuestionCategory } from "./types";

export const sciencesCategory: QuestionCategory = {
    id: "category-sciences",
    slug: "sciences",
    title: "Sciences",
    description: "Explorez quelques notions essentielles de physique, de chimie et de biologie.",
    questions: [
        {
            id: "science-water-formula-01",
            prompt: "Quelle est la formule chimique de l’eau ?",
            options: [
                { id: "science-water-h2o", label: "H₂O" },
                { id: "science-water-co2", label: "CO₂" },
                { id: "science-water-o2", label: "O₂" },
                { id: "science-water-nacl", label: "NaCl" },
            ],
            correctOptionId: "science-water-h2o",
            explanation:
                "Une molécule d’eau est composée de deux atomes d’hydrogène et d’un atome d’oxygène.",
        },
        {
            id: "science-earth-satellite-02",
            prompt: "Quel est le satellite naturel de la Terre ?",
            options: [
                { id: "science-earth-satellite-moon", label: "La Lune" },
                { id: "science-earth-satellite-mars", label: "Mars" },
                { id: "science-earth-satellite-venus", label: "Vénus" },
                { id: "science-earth-satellite-titan", label: "Titan" },
            ],
            correctOptionId: "science-earth-satellite-moon",
            explanation:
                "La Lune tourne autour de la Terre en un peu plus de 27 jours par rapport aux étoiles.",
        },
        {
            id: "science-atmosphere-gas-03",
            prompt: "Quel gaz est le plus abondant dans l’atmosphère terrestre ?",
            options: [
                { id: "science-atmosphere-oxygen", label: "L’oxygène" },
                { id: "science-atmosphere-nitrogen", label: "L’azote" },
                { id: "science-atmosphere-carbon-dioxide", label: "Le dioxyde de carbone" },
                { id: "science-atmosphere-hydrogen", label: "L’hydrogène" },
            ],
            correctOptionId: "science-atmosphere-nitrogen",
            explanation:
                "L’azote représente environ 78 % de l’atmosphère, devant l’oxygène qui en constitue environ 21 %.",
        },
        {
            id: "science-electric-resistance-04",
            prompt: "Quelle est l’unité de mesure de la résistance électrique ?",
            options: [
                { id: "science-electric-resistance-volt", label: "Le volt" },
                { id: "science-electric-resistance-ampere", label: "L’ampère" },
                { id: "science-electric-resistance-ohm", label: "L’ohm" },
                { id: "science-electric-resistance-watt", label: "Le watt" },
            ],
            correctOptionId: "science-electric-resistance-ohm",
            explanation:
                "L’ohm, symbolisé par la lettre grecque Ω, mesure l’opposition au passage du courant électrique.",
        },
        {
            id: "science-neutral-ph-05",
            prompt: "Quelle valeur de pH correspond à une solution neutre à température ambiante ?",
            options: [
                { id: "science-neutral-ph-zero", label: "0" },
                { id: "science-neutral-ph-seven", label: "7" },
                { id: "science-neutral-ph-ten", label: "10" },
                { id: "science-neutral-ph-fourteen", label: "14" },
            ],
            correctOptionId: "science-neutral-ph-seven",
            explanation:
                "Un pH de 7 est neutre ; les valeurs inférieures sont acides et les valeurs supérieures sont basiques.",
        },
        {
            id: "science-adult-bones-06",
            prompt: "Combien d’os compte habituellement le squelette humain adulte ?",
            options: [
                { id: "science-adult-bones-106", label: "106" },
                { id: "science-adult-bones-206", label: "206" },
                { id: "science-adult-bones-306", label: "306" },
                { id: "science-adult-bones-406", label: "406" },
            ],
            correctOptionId: "science-adult-bones-206",
            explanation:
                "Le squelette adulte compte généralement 206 os ; certains os du nourrisson fusionnent pendant la croissance.",
        },
        {
            id: "science-photosynthesis-organelle-07",
            prompt: "Dans quelle structure des cellules végétales se déroule la photosynthèse ?",
            options: [
                { id: "science-photosynthesis-nucleus", label: "Le noyau" },
                { id: "science-photosynthesis-mitochondrion", label: "La mitochondrie" },
                { id: "science-photosynthesis-chloroplast", label: "Le chloroplaste" },
                { id: "science-photosynthesis-ribosome", label: "Le ribosome" },
            ],
            correctOptionId: "science-photosynthesis-chloroplast",
            explanation:
                "Les chloroplastes contiennent la chlorophylle qui capte l’énergie lumineuse nécessaire à la photosynthèse.",
        },
        {
            id: "science-light-speed-08",
            prompt: "À quelle vitesse approximative la lumière se déplace-t-elle dans le vide ?",
            options: [
                { id: "science-light-speed-300", label: "300 km/s" },
                { id: "science-light-speed-3000", label: "3 000 km/s" },
                { id: "science-light-speed-300000", label: "300 000 km/s" },
                { id: "science-light-speed-3000000", label: "3 000 000 km/s" },
            ],
            correctOptionId: "science-light-speed-300000",
            explanation:
                "La lumière parcourt environ 299 792 kilomètres par seconde dans le vide, valeur souvent arrondie à 300 000.",
        },
    ],
};
