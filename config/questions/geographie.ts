import type { QuestionCategory } from "./types";

export const geographieCategory: QuestionCategory = {
    id: "category-geographie",
    slug: "geographie",
    title: "Géographie",
    description:
        "Explorez les pays, les reliefs, les climats et les grands repères de toutes les régions du monde.",
    questions: [
        {
            id: "geographie-001",
            prompt: "Quel est le plus grand continent par sa superficie ?",
            options: [
                { id: "geographie-001-a", label: "L’Afrique" },
                { id: "geographie-001-b", label: "L’Asie" },
                { id: "geographie-001-c", label: "L’Amérique du Nord" },
                { id: "geographie-001-d", label: "L’Europe" },
            ],
            correctOptionId: "geographie-001-b",
            explanation:
                "L’Asie couvre près de 45 millions de kilomètres carrés, soit environ 30 % des terres émergées.",
        },
        {
            id: "geographie-002",
            prompt: "Sur quel continent s’étend le désert du Sahara ?",
            options: [
                { id: "geographie-002-a", label: "L’Asie" },
                { id: "geographie-002-b", label: "L’Amérique du Sud" },
                { id: "geographie-002-c", label: "L’Océanie" },
                { id: "geographie-002-d", label: "L’Afrique" },
            ],
            correctOptionId: "geographie-002-d",
            explanation:
                "Le Sahara traverse l’Afrique du Nord, de l’océan Atlantique jusqu’à la mer Rouge.",
        },
        {
            id: "geographie-003",
            prompt: "Quelle est la capitale du Japon ?",
            options: [
                { id: "geographie-003-a", label: "Tokyo" },
                { id: "geographie-003-b", label: "Kyoto" },
                { id: "geographie-003-c", label: "Osaka" },
                { id: "geographie-003-d", label: "Sapporo" },
            ],
            correctOptionId: "geographie-003-a",
            explanation:
                "Tokyo est le centre politique du Japon et le siège de son gouvernement national.",
        },
        {
            id: "geographie-004",
            prompt: "Dans quelle chaîne de montagnes se trouve l’Everest ?",
            options: [
                { id: "geographie-004-a", label: "Les Andes" },
                { id: "geographie-004-b", label: "Les Alpes" },
                { id: "geographie-004-c", label: "L’Himalaya" },
                { id: "geographie-004-d", label: "Les Rocheuses" },
            ],
            correctOptionId: "geographie-004-c",
            explanation:
                "L’Everest appartient à l’Himalaya et se situe à la frontière entre le Népal et la Chine.",
        },
        {
            id: "geographie-005",
            prompt: "Quels hémisphères l’équateur sépare-t-il ?",
            options: [
                { id: "geographie-005-a", label: "Les hémisphères Est et Ouest" },
                { id: "geographie-005-b", label: "Les hémisphères Nord et Sud" },
                { id: "geographie-005-c", label: "Les hémisphères continental et océanique" },
                { id: "geographie-005-d", label: "Les hémisphères polaire et tropical" },
            ],
            correctOptionId: "geographie-005-b",
            explanation:
                "L’équateur est le parallèle de latitude 0° qui partage la Terre entre le Nord et le Sud.",
        },
        {
            id: "geographie-006",
            prompt: "Quel pays européen est souvent comparé à une botte sur une carte ?",
            options: [
                { id: "geographie-006-a", label: "L’Italie" },
                { id: "geographie-006-b", label: "La Grèce" },
                { id: "geographie-006-c", label: "La Croatie" },
                { id: "geographie-006-d", label: "Le Portugal" },
            ],
            correctOptionId: "geographie-006-a",
            explanation:
                "La péninsule italienne s’avance dans la Méditerranée avec une forme qui rappelle une botte.",
        },
        {
            id: "geographie-007",
            prompt: "Quelle est la capitale fédérale du Canada ?",
            options: [
                { id: "geographie-007-a", label: "Toronto" },
                { id: "geographie-007-b", label: "Montréal" },
                { id: "geographie-007-c", label: "Vancouver" },
                { id: "geographie-007-d", label: "Ottawa" },
            ],
            correctOptionId: "geographie-007-d",
            explanation:
                "Ottawa est la capitale du Canada, même si Toronto est la ville la plus peuplée du pays.",
        },
        {
            id: "geographie-008",
            prompt: "Dans quelle mer le Danube se jette-t-il ?",
            options: [
                { id: "geographie-008-a", label: "La mer Baltique" },
                { id: "geographie-008-b", label: "La mer Adriatique" },
                { id: "geographie-008-c", label: "La mer Noire" },
                { id: "geographie-008-d", label: "La mer du Nord" },
            ],
            correctOptionId: "geographie-008-c",
            explanation:
                "Après avoir traversé ou longé dix pays européens, le Danube forme un delta avant la mer Noire.",
        },
        {
            id: "geographie-009",
            prompt: "Quel est le plus vaste océan de la planète ?",
            options: [
                { id: "geographie-009-a", label: "L’océan Pacifique" },
                { id: "geographie-009-b", label: "L’océan Atlantique" },
                { id: "geographie-009-c", label: "L’océan Indien" },
                { id: "geographie-009-d", label: "L’océan Arctique" },
            ],
            correctOptionId: "geographie-009-a",
            explanation:
                "L’océan Pacifique couvre davantage de surface que toutes les terres émergées réunies.",
        },
        {
            id: "geographie-010",
            prompt: "Dans quelle mer le Nil termine-t-il son cours ?",
            options: [
                { id: "geographie-010-a", label: "La mer Rouge" },
                { id: "geographie-010-b", label: "La mer Méditerranée" },
                { id: "geographie-010-c", label: "La mer d’Arabie" },
                { id: "geographie-010-d", label: "La mer Noire" },
            ],
            correctOptionId: "geographie-010-b",
            explanation:
                "Le Nil traverse notamment le Soudan et l’Égypte avant de former un delta sur la Méditerranée.",
        },
        {
            id: "geographie-011",
            prompt: "Quelle chaîne de montagnes longe la façade occidentale de l’Amérique du Sud ?",
            options: [
                { id: "geographie-011-a", label: "Les Appalaches" },
                { id: "geographie-011-b", label: "Les Carpates" },
                { id: "geographie-011-c", label: "Les Andes" },
                { id: "geographie-011-d", label: "L’Atlas" },
            ],
            correctOptionId: "geographie-011-c",
            explanation:
                "Les Andes s’étendent sur environ 7 000 kilomètres le long de la côte pacifique sud-américaine.",
        },
        {
            id: "geographie-012",
            prompt: "Quelle est la plus grande île du monde, en excluant les continents ?",
            options: [
                { id: "geographie-012-a", label: "Madagascar" },
                { id: "geographie-012-b", label: "Bornéo" },
                { id: "geographie-012-c", label: "La Nouvelle-Guinée" },
                { id: "geographie-012-d", label: "Le Groenland" },
            ],
            correctOptionId: "geographie-012-d",
            explanation:
                "Le Groenland est la plus grande île au sens géographique ; l’Australie est considérée comme un continent.",
        },
        {
            id: "geographie-013",
            prompt: "Quel détroit relie l’océan Atlantique à la mer Méditerranée ?",
            options: [
                { id: "geographie-013-a", label: "Le détroit de Béring" },
                { id: "geographie-013-b", label: "Le détroit de Gibraltar" },
                { id: "geographie-013-c", label: "Le détroit de Malacca" },
                { id: "geographie-013-d", label: "Le détroit d’Ormuz" },
            ],
            correctOptionId: "geographie-013-b",
            explanation:
                "Le détroit de Gibraltar sépare l’Espagne du Maroc et constitue l’entrée occidentale de la Méditerranée.",
        },
        {
            id: "geographie-014",
            prompt: "Dans quel pays se trouve le lac Baïkal ?",
            options: [
                { id: "geographie-014-a", label: "Au Kazakhstan" },
                { id: "geographie-014-b", label: "En Mongolie" },
                { id: "geographie-014-c", label: "En Russie" },
                { id: "geographie-014-d", label: "En Chine" },
            ],
            correctOptionId: "geographie-014-c",
            explanation:
                "Situé en Sibérie, le lac Baïkal est le lac le plus profond du monde et contient une immense réserve d’eau douce.",
        },
        {
            id: "geographie-015",
            prompt: "Sur quel continent se trouve l’essentiel du bassin de l’Amazone ?",
            options: [
                { id: "geographie-015-a", label: "L’Amérique du Sud" },
                { id: "geographie-015-b", label: "L’Afrique" },
                { id: "geographie-015-c", label: "L’Asie" },
                { id: "geographie-015-d", label: "L’Amérique du Nord" },
            ],
            correctOptionId: "geographie-015-a",
            explanation:
                "Le bassin amazonien couvre une vaste partie du nord de l’Amérique du Sud, principalement au Brésil.",
        },
        {
            id: "geographie-016",
            prompt: "Quelle est la capitale de la Nouvelle-Zélande ?",
            options: [
                { id: "geographie-016-a", label: "Auckland" },
                { id: "geographie-016-b", label: "Christchurch" },
                { id: "geographie-016-c", label: "Dunedin" },
                { id: "geographie-016-d", label: "Wellington" },
            ],
            correctOptionId: "geographie-016-d",
            explanation:
                "Wellington se situe au sud de l’île du Nord et accueille le Parlement néo-zélandais.",
        },
        {
            id: "geographie-017",
            prompt: "Quel pays est entièrement enclavé à l’intérieur de l’Afrique du Sud ?",
            options: [
                { id: "geographie-017-a", label: "L’Eswatini" },
                { id: "geographie-017-b", label: "Le Botswana" },
                { id: "geographie-017-c", label: "Le Lesotho" },
                { id: "geographie-017-d", label: "La Namibie" },
            ],
            correctOptionId: "geographie-017-c",
            explanation:
                "Le Lesotho est une enclave souveraine dont tout le territoire est entouré par l’Afrique du Sud.",
        },
        {
            id: "geographie-018",
            prompt: "Dans quel pays se dresse le Kilimandjaro ?",
            options: [
                { id: "geographie-018-a", label: "Au Kenya" },
                { id: "geographie-018-b", label: "En Tanzanie" },
                { id: "geographie-018-c", label: "En Éthiopie" },
                { id: "geographie-018-d", label: "En Ouganda" },
            ],
            correctOptionId: "geographie-018-b",
            explanation:
                "Le Kilimandjaro se trouve dans le nord-est de la Tanzanie, près de la frontière avec le Kenya.",
        },
        {
            id: "geographie-019",
            prompt: "Dans quel pays se situe la majeure partie du désert d’Atacama ?",
            options: [
                { id: "geographie-019-a", label: "Au Pérou" },
                { id: "geographie-019-b", label: "En Argentine" },
                { id: "geographie-019-c", label: "En Bolivie" },
                { id: "geographie-019-d", label: "Au Chili" },
            ],
            correctOptionId: "geographie-019-d",
            explanation:
                "L’Atacama occupe surtout le nord du Chili et compte parmi les déserts non polaires les plus arides.",
        },
        {
            id: "geographie-020",
            prompt: "Dans quelle région du monde coule principalement le Mékong ?",
            options: [
                { id: "geographie-020-a", label: "En Asie du Sud-Est" },
                { id: "geographie-020-b", label: "En Afrique de l’Ouest" },
                { id: "geographie-020-c", label: "En Europe centrale" },
                { id: "geographie-020-d", label: "En Amérique centrale" },
            ],
            correctOptionId: "geographie-020-a",
            explanation:
                "Le Mékong traverse ou borde six pays asiatiques avant de rejoindre la mer de Chine méridionale au Vietnam.",
        },
        {
            id: "geographie-021",
            prompt: "Quel pays est constitué de milliers d’îles entre l’Asie et l’Australie ?",
            options: [
                { id: "geographie-021-a", label: "Le Népal" },
                { id: "geographie-021-b", label: "L’Indonésie" },
                { id: "geographie-021-c", label: "Le Laos" },
                { id: "geographie-021-d", label: "Le Bhoutan" },
            ],
            correctOptionId: "geographie-021-b",
            explanation:
                "L’Indonésie est un vaste État archipélagique réparti entre les océans Indien et Pacifique.",
        },
        {
            id: "geographie-022",
            prompt: "Quel méridien sert de référence à la longitude 0° ?",
            options: [
                { id: "geographie-022-a", label: "Le méridien de Greenwich" },
                { id: "geographie-022-b", label: "Le méridien de Paris" },
                { id: "geographie-022-c", label: "Le méridien de Rome" },
                { id: "geographie-022-d", label: "Le méridien de Quito" },
            ],
            correctOptionId: "geographie-022-a",
            explanation:
                "Le méridien de Greenwich, adopté comme référence internationale, passe par l’observatoire londonien du même nom.",
        },
        {
            id: "geographie-023",
            prompt: "Dans quel hémisphère se trouve le tropique du Cancer ?",
            options: [
                { id: "geographie-023-a", label: "L’hémisphère Sud" },
                { id: "geographie-023-b", label: "Les deux hémisphères" },
                { id: "geographie-023-c", label: "L’hémisphère Nord" },
                { id: "geographie-023-d", label: "Il suit l’équateur" },
            ],
            correctOptionId: "geographie-023-c",
            explanation:
                "Le tropique du Cancer est situé à environ 23,5° de latitude nord ; son équivalent austral est le Capricorne.",
        },
        {
            id: "geographie-024",
            prompt: "Au large de quel pays se trouve la Grande Barrière de corail ?",
            options: [
                { id: "geographie-024-a", label: "L’Inde" },
                { id: "geographie-024-b", label: "L’Afrique du Sud" },
                { id: "geographie-024-c", label: "Le Mexique" },
                { id: "geographie-024-d", label: "L’Australie" },
            ],
            correctOptionId: "geographie-024-d",
            explanation:
                "La Grande Barrière longe la côte du Queensland, dans le nord-est de l’Australie.",
        },
        {
            id: "geographie-025",
            prompt: "Sur quelle grande structure géologique volcanique l’Islande est-elle située ?",
            options: [
                { id: "geographie-025-a", label: "La dorsale médio-atlantique" },
                { id: "geographie-025-b", label: "La fosse des Mariannes" },
                { id: "geographie-025-c", label: "La faille de San Andreas" },
                { id: "geographie-025-d", label: "Le rift est-africain" },
            ],
            correctOptionId: "geographie-025-a",
            explanation:
                "L’Islande émerge sur la dorsale qui sépare les plaques nord-américaine et eurasienne.",
        },
        {
            id: "geographie-026",
            prompt: "Quel est le plus long fleuve entièrement situé en Europe ?",
            options: [
                { id: "geographie-026-a", label: "Le Rhin" },
                { id: "geographie-026-b", label: "Le Danube" },
                { id: "geographie-026-c", label: "La Volga" },
                { id: "geographie-026-d", label: "Le Dniepr" },
            ],
            correctOptionId: "geographie-026-c",
            explanation:
                "La Volga parcourt plus de 3 500 kilomètres en Russie avant de se jeter dans la mer Caspienne.",
        },
        {
            id: "geographie-027",
            prompt: "Quel détroit d’Istanbul marque traditionnellement une limite entre l’Europe et l’Asie ?",
            options: [
                { id: "geographie-027-a", label: "Le détroit de Magellan" },
                { id: "geographie-027-b", label: "Le Bosphore" },
                { id: "geographie-027-c", label: "Le Pas-de-Calais" },
                { id: "geographie-027-d", label: "Le détroit de Béring" },
            ],
            correctOptionId: "geographie-027-b",
            explanation:
                "Le Bosphore relie la mer Noire à la mer de Marmara et sépare les parties européenne et asiatique d’Istanbul.",
        },
        {
            id: "geographie-028",
            prompt: "Entre quels deux pays la région de Patagonie est-elle partagée ?",
            options: [
                { id: "geographie-028-a", label: "Le Pérou et la Bolivie" },
                { id: "geographie-028-b", label: "Le Brésil et l’Uruguay" },
                { id: "geographie-028-c", label: "La Colombie et l’Équateur" },
                { id: "geographie-028-d", label: "L’Argentine et le Chili" },
            ],
            correctOptionId: "geographie-028-d",
            explanation:
                "La Patagonie occupe l’extrémité méridionale de l’Argentine et du Chili, de part et d’autre des Andes.",
        },
        {
            id: "geographie-029",
            prompt: "Dans quel océan se trouve Madagascar ?",
            options: [
                { id: "geographie-029-a", label: "L’océan Atlantique" },
                { id: "geographie-029-b", label: "L’océan Pacifique" },
                { id: "geographie-029-c", label: "L’océan Indien" },
                { id: "geographie-029-d", label: "L’océan Arctique" },
            ],
            correctOptionId: "geographie-029-c",
            explanation:
                "Madagascar se situe dans l’océan Indien, à l’est du Mozambique dont elle est séparée par un canal.",
        },
        {
            id: "geographie-030",
            prompt: "Entre quels pays s’étend principalement le désert de Gobi ?",
            options: [
                { id: "geographie-030-a", label: "La Mongolie et la Chine" },
                { id: "geographie-030-b", label: "L’Inde et le Pakistan" },
                { id: "geographie-030-c", label: "L’Iran et l’Afghanistan" },
                { id: "geographie-030-d", label: "La Russie et le Kazakhstan" },
            ],
            correctOptionId: "geographie-030-a",
            explanation:
                "Le Gobi est un désert froid qui couvre le sud de la Mongolie et le nord de la Chine.",
        },
        {
            id: "geographie-031",
            prompt: "Quelle est la capitale du Maroc ?",
            options: [
                { id: "geographie-031-a", label: "Casablanca" },
                { id: "geographie-031-b", label: "Marrakech" },
                { id: "geographie-031-c", label: "Fès" },
                { id: "geographie-031-d", label: "Rabat" },
            ],
            correctOptionId: "geographie-031-d",
            explanation:
                "Rabat est le siège du gouvernement marocain ; Casablanca est la plus grande ville du pays.",
        },
        {
            id: "geographie-032",
            prompt: "Quelle est la capitale de l’Australie ?",
            options: [
                { id: "geographie-032-a", label: "Sydney" },
                { id: "geographie-032-b", label: "Canberra" },
                { id: "geographie-032-c", label: "Melbourne" },
                { id: "geographie-032-d", label: "Perth" },
            ],
            correctOptionId: "geographie-032-b",
            explanation:
                "Canberra a été choisie comme capitale fédérale entre les deux grandes villes rivales, Sydney et Melbourne.",
        },
        {
            id: "geographie-033",
            prompt: "Dans quelle mer le Rhin se jette-t-il ?",
            options: [
                { id: "geographie-033-a", label: "La mer du Nord" },
                { id: "geographie-033-b", label: "La mer Baltique" },
                { id: "geographie-033-c", label: "La mer Adriatique" },
                { id: "geographie-033-d", label: "La mer Noire" },
            ],
            correctOptionId: "geographie-033-a",
            explanation:
                "Le Rhin atteint la mer du Nord par un vaste delta aux Pays-Bas, partagé notamment avec la Meuse.",
        },
        {
            id: "geographie-034",
            prompt: "Entre quels deux pays se situe le système des Grands Lacs d’Amérique du Nord ?",
            options: [
                { id: "geographie-034-a", label: "Le Mexique et les États-Unis" },
                { id: "geographie-034-b", label: "Le Canada et les États-Unis" },
                { id: "geographie-034-c", label: "Le Canada et le Groenland" },
                { id: "geographie-034-d", label: "Les États-Unis et Cuba" },
            ],
            correctOptionId: "geographie-034-b",
            explanation:
                "Les Grands Lacs sont situés sur ou près de la frontière canado-américaine et forment un immense réseau d’eau douce.",
        },
        {
            id: "geographie-035",
            prompt: "Dans quel État américain se trouve la vallée de la Mort ?",
            options: [
                { id: "geographie-035-a", label: "Le Texas" },
                { id: "geographie-035-b", label: "Le Colorado" },
                { id: "geographie-035-c", label: "L’Arizona" },
                { id: "geographie-035-d", label: "La Californie" },
            ],
            correctOptionId: "geographie-035-d",
            explanation:
                "La vallée de la Mort se situe principalement en Californie et abrite le point le plus bas d’Amérique du Nord.",
        },
        {
            id: "geographie-036",
            prompt: "Quel continent est considéré comme le plus sec en moyenne ?",
            options: [
                { id: "geographie-036-a", label: "L’Afrique" },
                { id: "geographie-036-b", label: "L’Australie" },
                { id: "geographie-036-c", label: "L’Antarctique" },
                { id: "geographie-036-d", label: "L’Asie" },
            ],
            correctOptionId: "geographie-036-c",
            explanation:
                "Malgré sa glace, l’Antarctique reçoit très peu de précipitations et constitue un désert polaire.",
        },
        {
            id: "geographie-037",
            prompt: "Quelle ville est le chef-lieu de la région française Grand Est ?",
            options: [
                { id: "geographie-037-a", label: "Reims" },
                { id: "geographie-037-b", label: "Strasbourg" },
                { id: "geographie-037-c", label: "Metz" },
                { id: "geographie-037-d", label: "Nancy" },
            ],
            correctOptionId: "geographie-037-b",
            explanation:
                "Strasbourg est le chef-lieu du Grand Est et accueille également plusieurs institutions européennes.",
        },
        {
            id: "geographie-038",
            prompt: "Quels pays la chaîne des Pyrénées sépare-t-elle principalement ?",
            options: [
                { id: "geographie-038-a", label: "L’Espagne et le Portugal" },
                { id: "geographie-038-b", label: "La France et l’Italie" },
                { id: "geographie-038-c", label: "L’Italie et la Suisse" },
                { id: "geographie-038-d", label: "La France et l’Espagne" },
            ],
            correctOptionId: "geographie-038-d",
            explanation:
                "Les Pyrénées forment une frontière naturelle entre la France et l’Espagne ; l’Andorre se trouve au cœur du massif.",
        },
        {
            id: "geographie-039",
            prompt: "Quelle chaîne sert conventionnellement de limite entre l’Europe et l’Asie en Russie ?",
            options: [
                { id: "geographie-039-a", label: "L’Oural" },
                { id: "geographie-039-b", label: "Les Carpates" },
                { id: "geographie-039-c", label: "Le Caucase occidental" },
                { id: "geographie-039-d", label: "Les Alpes dinariques" },
            ],
            correctOptionId: "geographie-039-a",
            explanation:
                "Les monts Oural sont couramment retenus comme une partie de la frontière géographique entre Europe et Asie.",
        },
        {
            id: "geographie-040",
            prompt: "Où se situe la bande semi-aride appelée Sahel ?",
            options: [
                { id: "geographie-040-a", label: "Au nord du désert de Gobi" },
                { id: "geographie-040-b", label: "À l’ouest des Andes" },
                { id: "geographie-040-c", label: "Au sud du Sahara" },
                { id: "geographie-040-d", label: "À l’est de l’Himalaya" },
            ],
            correctOptionId: "geographie-040-c",
            explanation:
                "Le Sahel forme une zone de transition entre le Sahara aride et les savanes plus humides au sud.",
        },
        {
            id: "geographie-041",
            prompt: "Autour de quel océan se concentre la « ceinture de feu » volcanique ?",
            options: [
                { id: "geographie-041-a", label: "L’océan Atlantique" },
                { id: "geographie-041-b", label: "L’océan Indien" },
                { id: "geographie-041-c", label: "L’océan Arctique" },
                { id: "geographie-041-d", label: "L’océan Pacifique" },
            ],
            correctOptionId: "geographie-041-d",
            explanation:
                "La ceinture de feu du Pacifique suit des limites de plaques où séismes et volcans sont particulièrement fréquents.",
        },
        {
            id: "geographie-042",
            prompt: "Quel processus naturel a principalement creusé les fjords ?",
            options: [
                { id: "geographie-042-a", label: "L’érosion éolienne" },
                { id: "geographie-042-b", label: "L’érosion glaciaire" },
                { id: "geographie-042-c", label: "La dissolution du calcaire" },
                { id: "geographie-042-d", label: "L’accumulation volcanique" },
            ],
            correctOptionId: "geographie-042-b",
            explanation:
                "Les glaciers ont approfondi des vallées ensuite envahies par la mer lors de leur retrait.",
        },
        {
            id: "geographie-043",
            prompt: "Qu’est-ce qu’une mousson au sens climatique ?",
            options: [
                { id: "geographie-043-a", label: "Un courant marin permanent" },
                { id: "geographie-043-b", label: "Une brume propre aux régions polaires" },
                { id: "geographie-043-c", label: "Un régime de vents qui change selon la saison" },
                { id: "geographie-043-d", label: "Une tempête de sable quotidienne" },
            ],
            correctOptionId: "geographie-043-c",
            explanation:
                "La mousson correspond à une inversion saisonnière des vents, souvent associée à une saison très pluvieuse.",
        },
        {
            id: "geographie-044",
            prompt: "À combien de degrés de longitude correspond théoriquement une heure de décalage solaire ?",
            options: [
                { id: "geographie-044-a", label: "15 degrés" },
                { id: "geographie-044-b", label: "10 degrés" },
                { id: "geographie-044-c", label: "20 degrés" },
                { id: "geographie-044-d", label: "30 degrés" },
            ],
            correctOptionId: "geographie-044-a",
            explanation:
                "La Terre effectue 360° en 24 heures, soit 15° par heure ; les fuseaux réels suivent souvent les frontières.",
        },
        {
            id: "geographie-045",
            prompt: "Comment se forme principalement le delta d’un fleuve ?",
            options: [
                { id: "geographie-045-a", label: "Par la fonte d’un glacier côtier" },
                { id: "geographie-045-b", label: "Par le dépôt de sédiments à son embouchure" },
                { id: "geographie-045-c", label: "Par l’effondrement d’un volcan" },
                { id: "geographie-045-d", label: "Par l’érosion d’une falaise marine" },
            ],
            correctOptionId: "geographie-045-b",
            explanation:
                "Quand le courant ralentit près de l’embouchure, les sédiments s’accumulent et peuvent diviser le fleuve en bras.",
        },
        {
            id: "geographie-046",
            prompt: "Quelle langue autochtone est largement parlée dans les Andes centrales ?",
            options: [
                { id: "geographie-046-a", label: "Le maori" },
                { id: "geographie-046-b", label: "Le navajo" },
                { id: "geographie-046-c", label: "Le quechua" },
                { id: "geographie-046-d", label: "Le sami" },
            ],
            correctOptionId: "geographie-046-c",
            explanation:
                "Le quechua rassemble plusieurs variétés parlées notamment au Pérou, en Bolivie et en Équateur.",
        },
        {
            id: "geographie-047",
            prompt: "Quels océans le canal de Panama relie-t-il ?",
            options: [
                { id: "geographie-047-a", label: "L’Atlantique et le Pacifique" },
                { id: "geographie-047-b", label: "L’Atlantique et l’Indien" },
                { id: "geographie-047-c", label: "Le Pacifique et l’Arctique" },
                { id: "geographie-047-d", label: "L’Indien et le Pacifique" },
            ],
            correctOptionId: "geographie-047-a",
            explanation:
                "Le canal traverse l’isthme de Panama et évite aux navires le long contournement de l’Amérique du Sud.",
        },
        {
            id: "geographie-048",
            prompt: "À quel pays appartient le cap Horn ?",
            options: [
                { id: "geographie-048-a", label: "L’Argentine" },
                { id: "geographie-048-b", label: "Le Pérou" },
                { id: "geographie-048-c", label: "L’Uruguay" },
                { id: "geographie-048-d", label: "Le Chili" },
            ],
            correctOptionId: "geographie-048-d",
            explanation:
                "Le cap Horn se trouve sur une île chilienne de l’archipel de la Terre de Feu, au sud de l’Amérique.",
        },
        {
            id: "geographie-049",
            prompt: "À quelle grande région du monde rattache-t-on la Papouasie-Nouvelle-Guinée ?",
            options: [
                { id: "geographie-049-a", label: "L’Océanie" },
                { id: "geographie-049-b", label: "L’Asie centrale" },
                { id: "geographie-049-c", label: "L’Afrique australe" },
                { id: "geographie-049-d", label: "Les Caraïbes" },
            ],
            correctOptionId: "geographie-049-a",
            explanation:
                "La Papouasie-Nouvelle-Guinée occupe l’est de la Nouvelle-Guinée et plusieurs archipels de Mélanésie.",
        },
        {
            id: "geographie-050",
            prompt: "De quel pays l’archipel arctique du Svalbard fait-il partie ?",
            options: [
                { id: "geographie-050-a", label: "Le Danemark" },
                { id: "geographie-050-b", label: "La Norvège" },
                { id: "geographie-050-c", label: "Le Canada" },
                { id: "geographie-050-d", label: "La Finlande" },
            ],
            correctOptionId: "geographie-050-b",
            explanation:
                "Le Svalbard est un territoire norvégien situé dans l’océan Arctique, bien au nord du continent européen.",
        },
    ],
};
