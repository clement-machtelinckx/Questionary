import type { QuestionCategory } from "./types";

export const geographieCategory: QuestionCategory = {
    id: "category-geography",
    slug: "geographie",
    title: "Géographie",
    description:
        "Parcourez les continents, les reliefs, les capitales et les grands repères du globe.",
    questions: [
        {
            id: "geography-largest-continent-01",
            prompt: "Quel est le plus grand continent par sa superficie ?",
            options: [
                { id: "geography-largest-continent-africa", label: "L’Afrique" },
                { id: "geography-largest-continent-asia", label: "L’Asie" },
                { id: "geography-largest-continent-europe", label: "L’Europe" },
                { id: "geography-largest-continent-south-america", label: "L’Amérique du Sud" },
            ],
            correctOptionId: "geography-largest-continent-asia",
            explanation:
                "L’Asie occupe près d’un tiers des terres émergées et abrite plus de la moitié de la population mondiale.",
        },
        {
            id: "geography-sahara-continent-02",
            prompt: "Sur quel continent se trouve le désert du Sahara ?",
            options: [
                { id: "geography-sahara-continent-africa", label: "L’Afrique" },
                { id: "geography-sahara-continent-asia", label: "L’Asie" },
                { id: "geography-sahara-continent-australia", label: "L’Australie" },
                { id: "geography-sahara-continent-south-america", label: "L’Amérique du Sud" },
            ],
            correctOptionId: "geography-sahara-continent-africa",
            explanation:
                "Le Sahara traverse une grande partie de l’Afrique du Nord, de l’océan Atlantique à la mer Rouge.",
        },
        {
            id: "geography-japan-capital-03",
            prompt: "Quelle est la capitale du Japon ?",
            options: [
                { id: "geography-japan-capital-kyoto", label: "Kyoto" },
                { id: "geography-japan-capital-osaka", label: "Osaka" },
                { id: "geography-japan-capital-tokyo", label: "Tokyo" },
                { id: "geography-japan-capital-sapporo", label: "Sapporo" },
            ],
            correctOptionId: "geography-japan-capital-tokyo",
            explanation:
                "Tokyo est le centre politique du Japon et le siège de son gouvernement national.",
        },
        {
            id: "geography-everest-range-04",
            prompt: "Dans quelle chaîne de montagnes se trouve l’Everest ?",
            options: [
                { id: "geography-everest-range-alps", label: "Les Alpes" },
                { id: "geography-everest-range-andes", label: "Les Andes" },
                { id: "geography-everest-range-rockies", label: "Les Rocheuses" },
                { id: "geography-everest-range-himalayas", label: "L’Himalaya" },
            ],
            correctOptionId: "geography-everest-range-himalayas",
            explanation:
                "L’Everest appartient à l’Himalaya et se situe à la frontière entre le Népal et la Chine.",
        },
        {
            id: "geography-equator-hemispheres-05",
            prompt: "Quels hémisphères l’équateur sépare-t-il ?",
            options: [
                { id: "geography-equator-east-west", label: "L’Est et l’Ouest" },
                { id: "geography-equator-north-south", label: "Le Nord et le Sud" },
                { id: "geography-equator-land-sea", label: "Les terres et les océans" },
                { id: "geography-equator-arctic-antarctic", label: "L’Arctique et l’Antarctique" },
            ],
            correctOptionId: "geography-equator-north-south",
            explanation:
                "L’équateur est le parallèle de latitude 0° qui partage la Terre entre hémisphères Nord et Sud.",
        },
        {
            id: "geography-boot-shaped-country-06",
            prompt: "Quel pays européen est souvent comparé à une botte sur une carte ?",
            options: [
                { id: "geography-boot-shaped-spain", label: "L’Espagne" },
                { id: "geography-boot-shaped-greece", label: "La Grèce" },
                { id: "geography-boot-shaped-italy", label: "L’Italie" },
                { id: "geography-boot-shaped-croatia", label: "La Croatie" },
            ],
            correctOptionId: "geography-boot-shaped-italy",
            explanation:
                "La péninsule italienne s’avance dans la Méditerranée avec une forme qui rappelle une botte.",
        },
        {
            id: "geography-canada-capital-07",
            prompt: "Quelle est la capitale du Canada ?",
            options: [
                { id: "geography-canada-capital-toronto", label: "Toronto" },
                { id: "geography-canada-capital-vancouver", label: "Vancouver" },
                { id: "geography-canada-capital-montreal", label: "Montréal" },
                { id: "geography-canada-capital-ottawa", label: "Ottawa" },
            ],
            correctOptionId: "geography-canada-capital-ottawa",
            explanation:
                "Ottawa est la capitale fédérale du Canada, même si Toronto est sa ville la plus peuplée.",
        },
        {
            id: "geography-danube-sea-08",
            prompt: "Dans quelle mer le Danube se jette-t-il ?",
            options: [
                { id: "geography-danube-baltic", label: "La mer Baltique" },
                { id: "geography-danube-black", label: "La mer Noire" },
                { id: "geography-danube-north", label: "La mer du Nord" },
                { id: "geography-danube-adriatic", label: "La mer Adriatique" },
            ],
            correctOptionId: "geography-danube-black",
            explanation:
                "Après avoir traversé ou longé dix pays européens, le Danube forme un vaste delta avant la mer Noire.",
        },
    ],
};
