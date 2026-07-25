import type { QuestionCategory } from "./types";

export const drapeauxCategory: QuestionCategory = {
    id: "category-drapeaux",
    slug: "drapeaux",
    title: "Drapeaux",
    description: "Reconnaissez les pays du monde à partir de leurs drapeaux.",
    questions: [
        {
            id: "drapeaux-001",
            prompt: "À quel pays appartient ce drapeau ?",
            media: {
                type: "flag",
                countryCode: "fr",
                description: "Trois bandes verticales bleue, blanche et rouge.",
            },
            options: [
                { id: "drapeaux-001-a", label: "Italie" },
                { id: "drapeaux-001-b", label: "France" },
                { id: "drapeaux-001-c", label: "Belgique" },
                { id: "drapeaux-001-d", label: "Pays-Bas" },
            ],
            correctOptionId: "drapeaux-001-b",
            explanation:
                "Le drapeau français associe trois bandes verticales bleue, blanche et rouge.",
        },
        {
            id: "drapeaux-002",
            prompt: "Quel pays est représenté par ce drapeau ?",
            media: {
                type: "flag",
                countryCode: "be",
                description: "Trois bandes verticales noire, jaune et rouge.",
            },
            options: [
                { id: "drapeaux-002-a", label: "Allemagne" },
                { id: "drapeaux-002-b", label: "Roumanie" },
                { id: "drapeaux-002-c", label: "France" },
                { id: "drapeaux-002-d", label: "Belgique" },
            ],
            correctOptionId: "drapeaux-002-d",
            explanation:
                "Le drapeau belge reprend les couleurs noire, jaune et rouge en bandes verticales.",
        },
        {
            id: "drapeaux-003",
            prompt: "Reconnaissez-vous le pays associé à ce drapeau ?",
            media: {
                type: "flag",
                countryCode: "de",
                description: "Trois bandes horizontales noire, rouge et jaune.",
            },
            options: [
                { id: "drapeaux-003-a", label: "Allemagne" },
                { id: "drapeaux-003-b", label: "Belgique" },
                { id: "drapeaux-003-c", label: "Espagne" },
                { id: "drapeaux-003-d", label: "Lituanie" },
            ],
            correctOptionId: "drapeaux-003-a",
            explanation:
                "Le drapeau allemand présente trois bandes horizontales noire, rouge et or.",
        },
        {
            id: "drapeaux-004",
            prompt: "Ce drapeau est celui de quel pays ?",
            media: {
                type: "flag",
                countryCode: "it",
                description: "Trois bandes verticales verte, blanche et rouge.",
            },
            options: [
                { id: "drapeaux-004-a", label: "Irlande" },
                { id: "drapeaux-004-b", label: "Mexique" },
                { id: "drapeaux-004-c", label: "Italie" },
                { id: "drapeaux-004-d", label: "Hongrie" },
            ],
            correctOptionId: "drapeaux-004-c",
            explanation:
                "Le drapeau italien est un tricolore vertical vert, blanc et rouge, sans emblème.",
        },
        {
            id: "drapeaux-005",
            prompt: "À quel pays appartient ce drapeau ?",
            media: {
                type: "flag",
                countryCode: "es",
                description:
                    "Deux bandes rouges encadrant une large bande jaune portant un blason vers la hampe.",
            },
            options: [
                { id: "drapeaux-005-a", label: "Portugal" },
                { id: "drapeaux-005-b", label: "Espagne" },
                { id: "drapeaux-005-c", label: "Colombie" },
                { id: "drapeaux-005-d", label: "Roumanie" },
            ],
            correctOptionId: "drapeaux-005-b",
            explanation:
                "Le drapeau espagnol se distingue par sa large bande jaune et ses armoiries décalées vers la hampe.",
        },
        {
            id: "drapeaux-006",
            prompt: "Quel pays est représenté par ce drapeau ?",
            media: {
                type: "flag",
                countryCode: "pt",
                description:
                    "Deux champs vert et rouge séparés verticalement, avec des armoiries à leur jonction.",
            },
            options: [
                { id: "drapeaux-006-a", label: "Portugal" },
                { id: "drapeaux-006-b", label: "Biélorussie" },
                { id: "drapeaux-006-c", label: "Bulgarie" },
                { id: "drapeaux-006-d", label: "Mexique" },
            ],
            correctOptionId: "drapeaux-006-a",
            explanation:
                "Le drapeau portugais réunit un champ vert, un champ rouge et les armoiries nationales.",
        },
        {
            id: "drapeaux-007",
            prompt: "Reconnaissez-vous le pays associé à ce drapeau ?",
            media: {
                type: "flag",
                countryCode: "ie",
                description: "Trois bandes verticales verte, blanche et orange.",
            },
            options: [
                { id: "drapeaux-007-a", label: "Italie" },
                { id: "drapeaux-007-b", label: "Inde" },
                { id: "drapeaux-007-c", label: "Hongrie" },
                { id: "drapeaux-007-d", label: "Irlande" },
            ],
            correctOptionId: "drapeaux-007-d",
            explanation:
                "Le tricolore irlandais place le vert près de la hampe, puis le blanc et l’orange.",
        },
        {
            id: "drapeaux-008",
            prompt: "Ce drapeau est celui de quel pays ?",
            media: {
                type: "flag",
                countryCode: "nl",
                description: "Trois bandes horizontales rouge, blanche et bleue.",
            },
            options: [
                { id: "drapeaux-008-a", label: "Russie" },
                { id: "drapeaux-008-b", label: "Luxembourg" },
                { id: "drapeaux-008-c", label: "Pays-Bas" },
                { id: "drapeaux-008-d", label: "Croatie" },
            ],
            correctOptionId: "drapeaux-008-c",
            explanation: "Le drapeau néerlandais superpose le rouge, le blanc et un bleu soutenu.",
        },
        {
            id: "drapeaux-009",
            prompt: "À quel pays appartient ce drapeau ?",
            media: {
                type: "flag",
                countryCode: "lu",
                description: "Trois bandes horizontales rouge, blanche et bleu clair.",
            },
            options: [
                { id: "drapeaux-009-a", label: "Luxembourg" },
                { id: "drapeaux-009-b", label: "Pays-Bas" },
                { id: "drapeaux-009-c", label: "Russie" },
                { id: "drapeaux-009-d", label: "Slovaquie" },
            ],
            correctOptionId: "drapeaux-009-a",
            explanation:
                "Le drapeau luxembourgeois utilise un bleu plus clair que celui des Pays-Bas.",
        },
        {
            id: "drapeaux-010",
            prompt: "Quel pays est représenté par ce drapeau ?",
            media: {
                type: "flag",
                countryCode: "ch",
                description: "Fond rouge carré portant une croix blanche centrée.",
            },
            options: [
                { id: "drapeaux-010-a", label: "Danemark" },
                { id: "drapeaux-010-b", label: "Suisse" },
                { id: "drapeaux-010-c", label: "Géorgie" },
                { id: "drapeaux-010-d", label: "Norvège" },
            ],
            correctOptionId: "drapeaux-010-b",
            explanation:
                "Le drapeau suisse est l’un des rares drapeaux nationaux carrés et porte une croix blanche.",
        },
        {
            id: "drapeaux-011",
            prompt: "Reconnaissez-vous le pays associé à ce drapeau ?",
            media: {
                type: "flag",
                countryCode: "at",
                description: "Trois bandes horizontales rouge, blanche et rouge.",
            },
            options: [
                { id: "drapeaux-011-a", label: "Lettonie" },
                { id: "drapeaux-011-b", label: "Pérou" },
                { id: "drapeaux-011-c", label: "Canada" },
                { id: "drapeaux-011-d", label: "Autriche" },
            ],
            correctOptionId: "drapeaux-011-d",
            explanation:
                "Le drapeau autrichien est formé de trois bandes horizontales rouge, blanche et rouge.",
        },
        {
            id: "drapeaux-012",
            prompt: "Ce drapeau est celui de quel pays ?",
            media: {
                type: "flag",
                countryCode: "se",
                description: "Fond bleu traversé par une croix scandinave jaune.",
            },
            options: [
                { id: "drapeaux-012-a", label: "Finlande" },
                { id: "drapeaux-012-b", label: "Suède" },
                { id: "drapeaux-012-c", label: "Norvège" },
                { id: "drapeaux-012-d", label: "Islande" },
            ],
            correctOptionId: "drapeaux-012-b",
            explanation: "Le drapeau suédois associe une croix scandinave jaune à un fond bleu.",
        },
        {
            id: "drapeaux-013",
            prompt: "À quel pays appartient ce drapeau ?",
            media: {
                type: "flag",
                countryCode: "no",
                description: "Fond rouge avec une croix scandinave bleue bordée de blanc.",
            },
            options: [
                { id: "drapeaux-013-a", label: "Islande" },
                { id: "drapeaux-013-b", label: "Danemark" },
                { id: "drapeaux-013-c", label: "Norvège" },
                { id: "drapeaux-013-d", label: "Finlande" },
            ],
            correctOptionId: "drapeaux-013-c",
            explanation:
                "Le drapeau norvégien superpose une croix bleue bordée de blanc sur un fond rouge.",
        },
        {
            id: "drapeaux-014",
            prompt: "Quel pays est représenté par ce drapeau ?",
            media: {
                type: "flag",
                countryCode: "fi",
                description: "Fond blanc traversé par une croix scandinave bleue.",
            },
            options: [
                { id: "drapeaux-014-a", label: "Finlande" },
                { id: "drapeaux-014-b", label: "Suède" },
                { id: "drapeaux-014-c", label: "Grèce" },
                { id: "drapeaux-014-d", label: "Islande" },
            ],
            correctOptionId: "drapeaux-014-a",
            explanation:
                "Le drapeau finlandais présente une croix scandinave bleue sur fond blanc.",
        },
        {
            id: "drapeaux-015",
            prompt: "Reconnaissez-vous le pays associé à ce drapeau ?",
            media: {
                type: "flag",
                countryCode: "gr",
                description:
                    "Neuf bandes bleues et blanches avec une croix blanche sur canton bleu.",
            },
            options: [
                { id: "drapeaux-015-a", label: "Uruguay" },
                { id: "drapeaux-015-b", label: "Israël" },
                { id: "drapeaux-015-c", label: "Grèce" },
                { id: "drapeaux-015-d", label: "Finlande" },
            ],
            correctOptionId: "drapeaux-015-c",
            explanation:
                "Le drapeau grec combine neuf bandes bleues et blanches avec une croix dans le canton.",
        },
        {
            id: "drapeaux-016",
            prompt: "Ce drapeau est celui de quel pays ?",
            media: {
                type: "flag",
                countryCode: "ma",
                description: "Fond rouge portant une étoile verte à cinq branches.",
            },
            options: [
                { id: "drapeaux-016-a", label: "Turquie" },
                { id: "drapeaux-016-b", label: "Tunisie" },
                { id: "drapeaux-016-c", label: "Vietnam" },
                { id: "drapeaux-016-d", label: "Maroc" },
            ],
            correctOptionId: "drapeaux-016-d",
            explanation:
                "Le drapeau marocain porte un pentagramme vert, appelé sceau de Salomon, sur fond rouge.",
        },
        {
            id: "drapeaux-017",
            prompt: "À quel pays appartient ce drapeau ?",
            media: {
                type: "flag",
                countryCode: "dz",
                description:
                    "Deux moitiés verticales verte et blanche, avec un croissant et une étoile rouges.",
            },
            options: [
                { id: "drapeaux-017-a", label: "Pakistan" },
                { id: "drapeaux-017-b", label: "Algérie" },
                { id: "drapeaux-017-c", label: "Tunisie" },
                { id: "drapeaux-017-d", label: "Mauritanie" },
            ],
            correctOptionId: "drapeaux-017-b",
            explanation:
                "Le drapeau algérien partage son fond entre le vert et le blanc, avec un croissant et une étoile rouges.",
        },
        {
            id: "drapeaux-018",
            prompt: "Quel pays est représenté par ce drapeau ?",
            media: {
                type: "flag",
                countryCode: "tn",
                description:
                    "Fond rouge avec un disque blanc contenant un croissant et une étoile rouges.",
            },
            options: [
                { id: "drapeaux-018-a", label: "Tunisie" },
                { id: "drapeaux-018-b", label: "Turquie" },
                { id: "drapeaux-018-c", label: "Algérie" },
                { id: "drapeaux-018-d", label: "Singapour" },
            ],
            correctOptionId: "drapeaux-018-a",
            explanation:
                "Le drapeau tunisien place un croissant et une étoile rouges dans un disque blanc.",
        },
        {
            id: "drapeaux-019",
            prompt: "Reconnaissez-vous le pays associé à ce drapeau ?",
            media: {
                type: "flag",
                countryCode: "eg",
                description:
                    "Trois bandes horizontales rouge, blanche et noire, avec un aigle doré au centre.",
            },
            options: [
                { id: "drapeaux-019-a", label: "Irak" },
                { id: "drapeaux-019-b", label: "Yémen" },
                { id: "drapeaux-019-c", label: "Égypte" },
                { id: "drapeaux-019-d", label: "Syrie" },
            ],
            correctOptionId: "drapeaux-019-c",
            explanation:
                "Le drapeau égyptien se reconnaît à l’aigle doré placé au centre du tricolore rouge, blanc et noir.",
        },
        {
            id: "drapeaux-020",
            prompt: "Ce drapeau est celui de quel pays ?",
            media: {
                type: "flag",
                countryCode: "sn",
                description:
                    "Trois bandes verticales verte, jaune et rouge, avec une étoile verte au centre.",
            },
            options: [
                { id: "drapeaux-020-a", label: "Mali" },
                { id: "drapeaux-020-b", label: "Cameroun" },
                { id: "drapeaux-020-c", label: "Ghana" },
                { id: "drapeaux-020-d", label: "Sénégal" },
            ],
            correctOptionId: "drapeaux-020-d",
            explanation:
                "Le drapeau sénégalais ajoute une étoile verte au centre de son tricolore panafricain.",
        },
        {
            id: "drapeaux-021",
            prompt: "À quel pays appartient ce drapeau ?",
            media: {
                type: "flag",
                countryCode: "ci",
                description: "Trois bandes verticales orange, blanche et verte.",
            },
            options: [
                { id: "drapeaux-021-a", label: "Côte d’Ivoire" },
                { id: "drapeaux-021-b", label: "Irlande" },
                { id: "drapeaux-021-c", label: "Italie" },
                { id: "drapeaux-021-d", label: "Guinée" },
            ],
            correctOptionId: "drapeaux-021-a",
            explanation:
                "Le drapeau ivoirien place l’orange près de la hampe, suivi du blanc et du vert.",
        },
        {
            id: "drapeaux-022",
            prompt: "Quel pays est représenté par ce drapeau ?",
            media: {
                type: "flag",
                countryCode: "gh",
                description:
                    "Trois bandes horizontales rouge, jaune et verte, avec une étoile noire au centre.",
            },
            options: [
                { id: "drapeaux-022-a", label: "Bolivie" },
                { id: "drapeaux-022-b", label: "Ghana" },
                { id: "drapeaux-022-c", label: "Éthiopie" },
                { id: "drapeaux-022-d", label: "Sénégal" },
            ],
            correctOptionId: "drapeaux-022-b",
            explanation:
                "Le drapeau ghanéen se distingue par son étoile noire au centre de la bande jaune.",
        },
        {
            id: "drapeaux-023",
            prompt: "Reconnaissez-vous le pays associé à ce drapeau ?",
            media: {
                type: "flag",
                countryCode: "ng",
                description: "Trois bandes verticales verte, blanche et verte.",
            },
            options: [
                { id: "drapeaux-023-a", label: "Irlande" },
                { id: "drapeaux-023-b", label: "Pakistan" },
                { id: "drapeaux-023-c", label: "Arabie saoudite" },
                { id: "drapeaux-023-d", label: "Nigeria" },
            ],
            correctOptionId: "drapeaux-023-d",
            explanation:
                "Le drapeau nigérian est un tricolore vertical vert, blanc et vert, sans emblème.",
        },
        {
            id: "drapeaux-024",
            prompt: "Ce drapeau est celui de quel pays ?",
            media: {
                type: "flag",
                countryCode: "ke",
                description:
                    "Bandes noire, rouge et verte séparées de blanc, avec un bouclier central.",
            },
            options: [
                { id: "drapeaux-024-a", label: "Ouganda" },
                { id: "drapeaux-024-b", label: "Malawi" },
                { id: "drapeaux-024-c", label: "Kenya" },
                { id: "drapeaux-024-d", label: "Soudan du Sud" },
            ],
            correctOptionId: "drapeaux-024-c",
            explanation: "Le drapeau kényan porte un bouclier masaï et deux lances au centre.",
        },
        {
            id: "drapeaux-025",
            prompt: "À quel pays appartient ce drapeau ?",
            media: {
                type: "flag",
                countryCode: "za",
                description:
                    "Composition multicolore en forme de Y, avec noir, vert, jaune, blanc, rouge et bleu.",
            },
            options: [
                { id: "drapeaux-025-a", label: "Namibie" },
                { id: "drapeaux-025-b", label: "Afrique du Sud" },
                { id: "drapeaux-025-c", label: "Kenya" },
                { id: "drapeaux-025-d", label: "Zimbabwe" },
            ],
            correctOptionId: "drapeaux-025-b",
            explanation:
                "Le drapeau sud-africain est reconnaissable à sa forme en Y et à ses six couleurs.",
        },
        {
            id: "drapeaux-026",
            prompt: "Quel pays est représenté par ce drapeau ?",
            media: {
                type: "flag",
                countryCode: "jp",
                description: "Fond blanc portant un disque rouge centré.",
            },
            options: [
                { id: "drapeaux-026-a", label: "Japon" },
                { id: "drapeaux-026-b", label: "Bangladesh" },
                { id: "drapeaux-026-c", label: "Palaos" },
                { id: "drapeaux-026-d", label: "Laos" },
            ],
            correctOptionId: "drapeaux-026-a",
            explanation:
                "Le disque rouge du drapeau japonais représente le soleil sur un fond blanc.",
        },
        {
            id: "drapeaux-027",
            prompt: "Reconnaissez-vous le pays associé à ce drapeau ?",
            media: {
                type: "flag",
                countryCode: "cn",
                description: "Fond rouge avec une grande étoile jaune entourée de quatre petites.",
            },
            options: [
                { id: "drapeaux-027-a", label: "Vietnam" },
                { id: "drapeaux-027-b", label: "Macédoine du Nord" },
                { id: "drapeaux-027-c", label: "Chine" },
                { id: "drapeaux-027-d", label: "Singapour" },
            ],
            correctOptionId: "drapeaux-027-c",
            explanation:
                "Le drapeau chinois présente une grande étoile accompagnée de quatre étoiles plus petites.",
        },
        {
            id: "drapeaux-028",
            prompt: "Ce drapeau est celui de quel pays ?",
            media: {
                type: "flag",
                countryCode: "kr",
                description:
                    "Fond blanc avec un symbole circulaire rouge et bleu, entouré de quatre trigrammes noirs.",
            },
            options: [
                { id: "drapeaux-028-a", label: "Mongolie" },
                { id: "drapeaux-028-b", label: "Japon" },
                { id: "drapeaux-028-c", label: "Népal" },
                { id: "drapeaux-028-d", label: "Corée du Sud" },
            ],
            correctOptionId: "drapeaux-028-d",
            explanation:
                "Le drapeau sud-coréen combine le symbole taegeuk rouge et bleu avec quatre trigrammes noirs.",
        },
        {
            id: "drapeaux-029",
            prompt: "À quel pays appartient ce drapeau ?",
            media: {
                type: "flag",
                countryCode: "in",
                description:
                    "Trois bandes horizontales safran, blanche et verte, avec une roue bleue au centre.",
            },
            options: [
                { id: "drapeaux-029-a", label: "Niger" },
                { id: "drapeaux-029-b", label: "Inde" },
                { id: "drapeaux-029-c", label: "Irlande" },
                { id: "drapeaux-029-d", label: "Tadjikistan" },
            ],
            correctOptionId: "drapeaux-029-b",
            explanation:
                "Le drapeau indien place la roue d’Ashoka, à vingt-quatre rayons, au centre de la bande blanche.",
        },
        {
            id: "drapeaux-030",
            prompt: "Quel pays est représenté par ce drapeau ?",
            media: {
                type: "flag",
                countryCode: "id",
                description: "Deux bandes horizontales, rouge au-dessus et blanche en dessous.",
            },
            options: [
                { id: "drapeaux-030-a", label: "Indonésie" },
                { id: "drapeaux-030-b", label: "Pologne" },
                { id: "drapeaux-030-c", label: "Singapour" },
                { id: "drapeaux-030-d", label: "Autriche" },
            ],
            correctOptionId: "drapeaux-030-a",
            explanation: "Le drapeau indonésien est un bicolore simple, rouge au-dessus du blanc.",
        },
        {
            id: "drapeaux-031",
            prompt: "Reconnaissez-vous le pays associé à ce drapeau ?",
            media: {
                type: "flag",
                countryCode: "th",
                description: "Cinq bandes horizontales rouge, blanche, bleue, blanche et rouge.",
            },
            options: [
                { id: "drapeaux-031-a", label: "Costa Rica" },
                { id: "drapeaux-031-b", label: "Cambodge" },
                { id: "drapeaux-031-c", label: "Corée du Nord" },
                { id: "drapeaux-031-d", label: "Thaïlande" },
            ],
            correctOptionId: "drapeaux-031-d",
            explanation:
                "Le drapeau thaïlandais possède une large bande bleue centrale encadrée de blanc et de rouge.",
        },
        {
            id: "drapeaux-032",
            prompt: "Ce drapeau est celui de quel pays ?",
            media: {
                type: "flag",
                countryCode: "vn",
                description: "Fond rouge avec une grande étoile jaune centrée.",
            },
            options: [
                { id: "drapeaux-032-a", label: "Chine" },
                { id: "drapeaux-032-b", label: "Maroc" },
                { id: "drapeaux-032-c", label: "Vietnam" },
                { id: "drapeaux-032-d", label: "Turquie" },
            ],
            correctOptionId: "drapeaux-032-c",
            explanation:
                "Le drapeau vietnamien se compose d’une grande étoile jaune sur un fond rouge.",
        },
        {
            id: "drapeaux-033",
            prompt: "À quel pays appartient ce drapeau ?",
            media: {
                type: "flag",
                countryCode: "ph",
                description:
                    "Bandes horizontales bleue et rouge, triangle blanc à la hampe avec soleil et étoiles.",
            },
            options: [
                { id: "drapeaux-033-a", label: "Philippines" },
                { id: "drapeaux-033-b", label: "Tchéquie" },
                { id: "drapeaux-033-c", label: "Cuba" },
                { id: "drapeaux-033-d", label: "Timor oriental" },
            ],
            correctOptionId: "drapeaux-033-a",
            explanation:
                "Le triangle blanc du drapeau philippin contient un soleil à huit rayons et trois étoiles.",
        },
        {
            id: "drapeaux-034",
            prompt: "Quel pays est représenté par ce drapeau ?",
            media: {
                type: "flag",
                countryCode: "sa",
                description: "Fond vert portant une inscription blanche au-dessus d’un sabre.",
            },
            options: [
                { id: "drapeaux-034-a", label: "Iran" },
                { id: "drapeaux-034-b", label: "Arabie saoudite" },
                { id: "drapeaux-034-c", label: "Pakistan" },
                { id: "drapeaux-034-d", label: "Mauritanie" },
            ],
            correctOptionId: "drapeaux-034-b",
            explanation:
                "Le drapeau saoudien porte la profession de foi islamique au-dessus d’un sabre blanc.",
        },
        {
            id: "drapeaux-035",
            prompt: "Reconnaissez-vous le pays associé à ce drapeau ?",
            media: {
                type: "flag",
                countryCode: "tr",
                description: "Fond rouge portant un croissant blanc et une étoile blanche.",
            },
            options: [
                { id: "drapeaux-035-a", label: "Tunisie" },
                { id: "drapeaux-035-b", label: "Pakistan" },
                { id: "drapeaux-035-c", label: "Turquie" },
                { id: "drapeaux-035-d", label: "Azerbaïdjan" },
            ],
            correctOptionId: "drapeaux-035-c",
            explanation:
                "Le drapeau turc présente un croissant et une étoile blancs sur un fond rouge.",
        },
        {
            id: "drapeaux-036",
            prompt: "Ce drapeau est celui de quel pays ?",
            media: {
                type: "flag",
                countryCode: "ca",
                description:
                    "Deux bandes rouges verticales encadrant un carré blanc avec une feuille rouge.",
            },
            options: [
                { id: "drapeaux-036-a", label: "Pérou" },
                { id: "drapeaux-036-b", label: "Autriche" },
                { id: "drapeaux-036-c", label: "Liban" },
                { id: "drapeaux-036-d", label: "Canada" },
            ],
            correctOptionId: "drapeaux-036-d",
            explanation:
                "La feuille d’érable rouge à onze pointes est l’élément central du drapeau canadien.",
        },
        {
            id: "drapeaux-037",
            prompt: "À quel pays appartient ce drapeau ?",
            media: {
                type: "flag",
                countryCode: "us",
                description:
                    "Treize bandes rouges et blanches, avec des étoiles blanches sur un canton bleu.",
            },
            options: [
                { id: "drapeaux-037-a", label: "Liberia" },
                { id: "drapeaux-037-b", label: "États-Unis" },
                { id: "drapeaux-037-c", label: "Malaisie" },
                { id: "drapeaux-037-d", label: "Chili" },
            ],
            correctOptionId: "drapeaux-037-b",
            explanation:
                "Le drapeau américain associe treize bandes aux cinquante étoiles représentant les États fédérés.",
        },
        {
            id: "drapeaux-038",
            prompt: "Quel pays est représenté par ce drapeau ?",
            media: {
                type: "flag",
                countryCode: "mx",
                description:
                    "Trois bandes verticales verte, blanche et rouge, avec des armoiries au centre.",
            },
            options: [
                { id: "drapeaux-038-a", label: "Italie" },
                { id: "drapeaux-038-b", label: "Hongrie" },
                { id: "drapeaux-038-c", label: "Iran" },
                { id: "drapeaux-038-d", label: "Mexique" },
            ],
            correctOptionId: "drapeaux-038-d",
            explanation:
                "Les armoiries mexicaines montrent un aigle posé sur un cactus et tenant un serpent.",
        },
        {
            id: "drapeaux-039",
            prompt: "Reconnaissez-vous le pays associé à ce drapeau ?",
            media: {
                type: "flag",
                countryCode: "br",
                description: "Fond vert avec un losange jaune contenant un globe bleu étoilé.",
            },
            options: [
                { id: "drapeaux-039-a", label: "Brésil" },
                { id: "drapeaux-039-b", label: "Bolivie" },
                { id: "drapeaux-039-c", label: "Guyana" },
                { id: "drapeaux-039-d", label: "Jamaïque" },
            ],
            correctOptionId: "drapeaux-039-a",
            explanation:
                "Le globe bleu du drapeau brésilien représente un ciel étoilé traversé par une devise.",
        },
        {
            id: "drapeaux-040",
            prompt: "Ce drapeau est celui de quel pays ?",
            media: {
                type: "flag",
                countryCode: "ar",
                description:
                    "Trois bandes horizontales bleu ciel, blanche et bleu ciel, avec un soleil au centre.",
            },
            options: [
                { id: "drapeaux-040-a", label: "Uruguay" },
                { id: "drapeaux-040-b", label: "Guatemala" },
                { id: "drapeaux-040-c", label: "Argentine" },
                { id: "drapeaux-040-d", label: "Nicaragua" },
            ],
            correctOptionId: "drapeaux-040-c",
            explanation:
                "Le drapeau argentin place le Soleil de Mai au centre de sa bande blanche.",
        },
        {
            id: "drapeaux-041",
            prompt: "À quel pays appartient ce drapeau ?",
            media: {
                type: "flag",
                countryCode: "cl",
                description:
                    "Deux bandes horizontales blanche et rouge, avec un carré bleu étoilé en haut à gauche.",
            },
            options: [
                { id: "drapeaux-041-a", label: "Cuba" },
                { id: "drapeaux-041-b", label: "Liberia" },
                { id: "drapeaux-041-c", label: "Tchéquie" },
                { id: "drapeaux-041-d", label: "Chili" },
            ],
            correctOptionId: "drapeaux-041-d",
            explanation:
                "Le drapeau chilien possède une unique étoile blanche dans un canton bleu.",
        },
        {
            id: "drapeaux-042",
            prompt: "Quel pays est représenté par ce drapeau ?",
            media: {
                type: "flag",
                countryCode: "co",
                description:
                    "Trois bandes horizontales jaune, bleue et rouge, la jaune étant plus large.",
            },
            options: [
                { id: "drapeaux-042-a", label: "Colombie" },
                { id: "drapeaux-042-b", label: "Équateur" },
                { id: "drapeaux-042-c", label: "Venezuela" },
                { id: "drapeaux-042-d", label: "Arménie" },
            ],
            correctOptionId: "drapeaux-042-a",
            explanation:
                "Le drapeau colombien se distingue par sa bande jaune qui occupe la moitié de la hauteur.",
        },
        {
            id: "drapeaux-043",
            prompt: "Reconnaissez-vous le pays associé à ce drapeau ?",
            media: {
                type: "flag",
                countryCode: "pe",
                description: "Trois bandes verticales rouge, blanche et rouge.",
            },
            options: [
                { id: "drapeaux-043-a", label: "Canada" },
                { id: "drapeaux-043-b", label: "Pérou" },
                { id: "drapeaux-043-c", label: "Autriche" },
                { id: "drapeaux-043-d", label: "Lettonie" },
            ],
            correctOptionId: "drapeaux-043-b",
            explanation:
                "La version civile du drapeau péruvien est un tricolore vertical rouge, blanc et rouge.",
        },
        {
            id: "drapeaux-044",
            prompt: "Ce drapeau est celui de quel pays ?",
            media: {
                type: "flag",
                countryCode: "uy",
                description: "Neuf bandes blanches et bleues avec un soleil dans le canton blanc.",
            },
            options: [
                { id: "drapeaux-044-a", label: "Grèce" },
                { id: "drapeaux-044-b", label: "Argentine" },
                { id: "drapeaux-044-c", label: "Uruguay" },
                { id: "drapeaux-044-d", label: "Nicaragua" },
            ],
            correctOptionId: "drapeaux-044-c",
            explanation:
                "Le drapeau uruguayen comporte neuf bandes et le Soleil de Mai dans son canton.",
        },
        {
            id: "drapeaux-045",
            prompt: "À quel pays appartient ce drapeau ?",
            media: {
                type: "flag",
                countryCode: "jm",
                description: "Croix diagonale jaune séparant des triangles verts et noirs.",
            },
            options: [
                { id: "drapeaux-045-a", label: "Jamaïque" },
                { id: "drapeaux-045-b", label: "Tanzanie" },
                { id: "drapeaux-045-c", label: "Afrique du Sud" },
                { id: "drapeaux-045-d", label: "Burundi" },
            ],
            correctOptionId: "drapeaux-045-a",
            explanation:
                "Le drapeau jamaïcain associe une croix diagonale dorée à des triangles verts et noirs.",
        },
        {
            id: "drapeaux-046",
            prompt: "Quel pays est représenté par ce drapeau ?",
            media: {
                type: "flag",
                countryCode: "au",
                description:
                    "Fond bleu avec Union Jack, grande étoile blanche et constellation de cinq étoiles.",
            },
            options: [
                { id: "drapeaux-046-a", label: "Nouvelle-Zélande" },
                { id: "drapeaux-046-b", label: "Australie" },
                { id: "drapeaux-046-c", label: "Fidji" },
                { id: "drapeaux-046-d", label: "Tuvalu" },
            ],
            correctOptionId: "drapeaux-046-b",
            explanation:
                "Le drapeau australien présente l’étoile de la Fédération et la Croix du Sud sur fond bleu.",
        },
        {
            id: "drapeaux-047",
            prompt: "Reconnaissez-vous le pays associé à ce drapeau ?",
            media: {
                type: "flag",
                countryCode: "nz",
                description: "Fond bleu avec Union Jack et quatre étoiles rouges bordées de blanc.",
            },
            options: [
                { id: "drapeaux-047-a", label: "Australie" },
                { id: "drapeaux-047-b", label: "Samoa" },
                { id: "drapeaux-047-c", label: "Fidji" },
                { id: "drapeaux-047-d", label: "Nouvelle-Zélande" },
            ],
            correctOptionId: "drapeaux-047-d",
            explanation:
                "Le drapeau néo-zélandais représente la Croix du Sud avec quatre étoiles rouges.",
        },
        {
            id: "drapeaux-048",
            prompt: "Ce drapeau est celui de quel pays ?",
            media: {
                type: "flag",
                countryCode: "fj",
                description: "Fond bleu clair avec Union Jack et un écu à droite.",
            },
            options: [
                { id: "drapeaux-048-a", label: "Tuvalu" },
                { id: "drapeaux-048-b", label: "Australie" },
                { id: "drapeaux-048-c", label: "Fidji" },
                { id: "drapeaux-048-d", label: "Nouvelle-Zélande" },
            ],
            correctOptionId: "drapeaux-048-c",
            explanation:
                "Le drapeau fidjien se reconnaît à son fond bleu clair et à l’écu national.",
        },
        {
            id: "drapeaux-049",
            prompt: "À quel pays appartient ce drapeau ?",
            media: {
                type: "flag",
                countryCode: "pg",
                description:
                    "Deux triangles rouge et noir séparés en diagonale, avec un oiseau jaune et des étoiles blanches.",
            },
            options: [
                { id: "drapeaux-049-a", label: "Vanuatu" },
                { id: "drapeaux-049-b", label: "Papouasie-Nouvelle-Guinée" },
                { id: "drapeaux-049-c", label: "Îles Salomon" },
                { id: "drapeaux-049-d", label: "Timor oriental" },
            ],
            correctOptionId: "drapeaux-049-b",
            explanation:
                "Le drapeau papou-néo-guinéen associe un paradisier jaune à la constellation de la Croix du Sud.",
        },
        {
            id: "drapeaux-050",
            prompt: "Quel pays est représenté par ce drapeau ?",
            media: {
                type: "flag",
                countryCode: "ws",
                description: "Fond rouge avec un canton bleu portant cinq étoiles blanches.",
            },
            options: [
                { id: "drapeaux-050-a", label: "Samoa" },
                { id: "drapeaux-050-b", label: "Tonga" },
                { id: "drapeaux-050-c", label: "Nouvelle-Zélande" },
                { id: "drapeaux-050-d", label: "Micronésie" },
            ],
            correctOptionId: "drapeaux-050-a",
            explanation:
                "Le drapeau samoan place la constellation de la Croix du Sud dans son canton bleu.",
        },
    ],
};
