import type { QuestionCategory } from "./types";

export const herculePoirotCategory: QuestionCategory = {
    id: "category-hercule-poirot",
    slug: "hercule-poirot",
    title: "Hercule Poirot",
    description:
        "Explorez les enquêtes, les proches et les adaptations du célèbre détective belge créé par Agatha Christie.",
    questions: [
        {
            id: "hercule-poirot-001",
            prompt: "Dans quel roman Hercule Poirot apparaît-il pour la première fois ?",
            options: [
                { id: "hercule-poirot-001-a", label: "La Mystérieuse Affaire de Styles" },
                { id: "hercule-poirot-001-b", label: "Le Meurtre de Roger Ackroyd" },
                { id: "hercule-poirot-001-c", label: "Le Crime de l’Orient-Express" },
                { id: "hercule-poirot-001-d", label: "Mort sur le Nil" },
            ],
            correctOptionId: "hercule-poirot-001-a",
            explanation:
                "Publié en 1920, La Mystérieuse Affaire de Styles inaugure les enquêtes de Poirot et met déjà en scène le capitaine Hastings.",
        },
        {
            id: "hercule-poirot-002",
            prompt:
                "Dans Le Crime du golf, dans quel pays l’appel au secours reçu par Poirot le conduit-il ?",
            options: [
                { id: "hercule-poirot-002-a", label: "En France" },
                { id: "hercule-poirot-002-b", label: "En Belgique" },
                { id: "hercule-poirot-002-c", label: "En Suisse" },
                { id: "hercule-poirot-002-d", label: "En Égypte" },
            ],
            correctOptionId: "hercule-poirot-002-a",
            explanation:
                "Poirot et Hastings se rendent en France après le message urgent d’un riche homme d’affaires, puis découvrent un crime près d’un terrain de golf.",
        },
        {
            id: "hercule-poirot-003",
            prompt:
                "Au début du Meurtre de Roger Ackroyd, à quelle activité Poirot souhaite-t-il consacrer sa retraite ?",
            options: [
                { id: "hercule-poirot-003-a", label: "L’élevage d’abeilles" },
                { id: "hercule-poirot-003-b", label: "La collection de timbres" },
                { id: "hercule-poirot-003-c", label: "La restauration de tableaux" },
                { id: "hercule-poirot-003-d", label: "La culture des courges" },
            ],
            correctOptionId: "hercule-poirot-003-d",
            explanation:
                "Retiré dans un village anglais, Poirot ambitionne de cultiver des « vegetable marrows », généralement rendues en français par des courges.",
        },
        {
            id: "hercule-poirot-004",
            prompt: "Dans Les Quatre, à quel type d’adversaire Poirot est-il confronté ?",
            options: [
                { id: "hercule-poirot-004-a", label: "Une société d’archéologues rivaux" },
                { id: "hercule-poirot-004-b", label: "Une famille de faussaires provinciaux" },
                {
                    id: "hercule-poirot-004-c",
                    label: "Un réseau de contrebandiers maritimes uniquement",
                },
                {
                    id: "hercule-poirot-004-d",
                    label: "Une organisation criminelle internationale",
                },
            ],
            correctOptionId: "hercule-poirot-004-d",
            explanation:
                "Le roman oppose Poirot à quatre figures liées à une organisation internationale, dans une intrigue plus proche du thriller d’espionnage que ses enquêtes habituelles.",
        },
        {
            id: "hercule-poirot-005",
            prompt: "Quelle destination est au cœur du voyage dans Le Train bleu ?",
            options: [
                { id: "hercule-poirot-005-a", label: "Les Highlands écossais" },
                { id: "hercule-poirot-005-b", label: "La côte dalmate" },
                { id: "hercule-poirot-005-c", label: "La Côte d’Azur" },
                { id: "hercule-poirot-005-d", label: "Les Alpes autrichiennes" },
            ],
            correctOptionId: "hercule-poirot-005-c",
            explanation:
                "Le train relie Londres à la Riviera française, cadre mondain dans lequel survient le meurtre étudié par Poirot.",
        },
        {
            id: "hercule-poirot-006",
            prompt:
                "Dans La Maison du péril, quelle jeune femme semble échapper à plusieurs accidents suspects ?",
            options: [
                { id: "hercule-poirot-006-a", label: "Nick Buckley" },
                { id: "hercule-poirot-006-b", label: "Norma Restarick" },
                { id: "hercule-poirot-006-c", label: "Linnet Ridgeway" },
                { id: "hercule-poirot-006-d", label: "Elinor Carlisle" },
            ],
            correctOptionId: "hercule-poirot-006-a",
            explanation:
                "Nick Buckley, propriétaire d’End House, attire l’attention de Poirot après une série d’incidents qui paraissent viser sa vie.",
        },
        {
            id: "hercule-poirot-007",
            prompt:
                "Quel événement immobilise l’Orient-Express pendant l’enquête de Poirot ?",
            options: [
                { id: "hercule-poirot-007-a", label: "Une congère bloque la voie" },
                { id: "hercule-poirot-007-b", label: "Une grève ferme la frontière" },
                {
                    id: "hercule-poirot-007-c",
                    label: "Un pont s’effondre devant le train",
                },
                {
                    id: "hercule-poirot-007-d",
                    label: "Une panne de charbon arrête la locomotive",
                },
            ],
            correctOptionId: "hercule-poirot-007-a",
            explanation:
                "Le train est bloqué par la neige, ce qui isole les voyageurs et délimite le cercle des personnes présentes lors du crime.",
        },
        {
            id: "hercule-poirot-008",
            prompt: "Dans La Mort dans les nuages, où la victime est-elle découverte ?",
            options: [
                { id: "hercule-poirot-008-a", label: "À bord d’un avion" },
                { id: "hercule-poirot-008-b", label: "Dans une cabine de paquebot" },
                { id: "hercule-poirot-008-c", label: "Dans un compartiment de train" },
                { id: "hercule-poirot-008-d", label: "Dans une montgolfière" },
            ],
            correctOptionId: "hercule-poirot-008-a",
            explanation:
                "Le meurtre survient pendant un vol entre Paris et Croydon, alors que Poirot se trouve parmi les passagers.",
        },
        {
            id: "hercule-poirot-009",
            prompt:
                "Quel principe relie les premières étapes de l’enquête dans A.B.C. contre Poirot ?",
            options: [
                { id: "hercule-poirot-009-a", label: "Les phases de la Lune" },
                { id: "hercule-poirot-009-b", label: "Les signes du zodiaque" },
                { id: "hercule-poirot-009-c", label: "Un ordre alphabétique" },
                { id: "hercule-poirot-009-d", label: "Les numéros d’un jeu de cartes" },
            ],
            correctOptionId: "hercule-poirot-009-c",
            explanation:
                "Les lieux et les victimes semblent suivre l’alphabet, tandis qu’un indicateur ferroviaire ABC accompagne les crimes.",
        },
        {
            id: "hercule-poirot-010",
            prompt:
                "Quel milieu professionnel sert de cadre principal à Meurtre en Mésopotamie ?",
            options: [
                { id: "hercule-poirot-010-a", label: "Une compagnie de théâtre" },
                { id: "hercule-poirot-010-b", label: "Un laboratoire pharmaceutique" },
                { id: "hercule-poirot-010-c", label: "Une mission archéologique" },
                { id: "hercule-poirot-010-d", label: "Une école militaire" },
            ],
            correctOptionId: "hercule-poirot-010-c",
            explanation:
                "L’intrigue se déroule sur un chantier de fouilles au Moyen-Orient, au sein d’une équipe d’archéologues.",
        },
        {
            id: "hercule-poirot-011",
            prompt: "Quel jeu structure la soirée décisive de Cartes sur table ?",
            options: [
                { id: "hercule-poirot-011-a", label: "Le poker" },
                { id: "hercule-poirot-011-b", label: "Le bridge" },
                { id: "hercule-poirot-011-c", label: "Le mah-jong" },
                { id: "hercule-poirot-011-d", label: "Le backgammon" },
            ],
            correctOptionId: "hercule-poirot-011-b",
            explanation:
                "Deux tables de bridge réunissent les invités, tandis que l’hôte observe des personnes qu’il soupçonne d’avoir déjà commis un meurtre.",
        },
        {
            id: "hercule-poirot-012",
            prompt: "Quel voyage forme le cadre principal de Mort sur le Nil ?",
            options: [
                { id: "hercule-poirot-012-a", label: "Une traversée de la Manche" },
                { id: "hercule-poirot-012-b", label: "Une croisière sur le Nil" },
                { id: "hercule-poirot-012-c", label: "Une expédition dans l’Atlas" },
                { id: "hercule-poirot-012-d", label: "Un trajet sur le Danube" },
            ],
            correctOptionId: "hercule-poirot-012-b",
            explanation:
                "Poirot se trouve en Égypte et poursuit son enquête parmi les passagers d’un bateau naviguant sur le Nil.",
        },
        {
            id: "hercule-poirot-013",
            prompt:
                "Dans Le Noël d’Hercule Poirot, qui réunit sa famille pour les fêtes avant le crime ?",
            options: [
                { id: "hercule-poirot-013-a", label: "Simeon Lee" },
                { id: "hercule-poirot-013-b", label: "Roger Ackroyd" },
                { id: "hercule-poirot-013-c", label: "Gordon Cloade" },
                { id: "hercule-poirot-013-d", label: "Richard Abernethie" },
            ],
            correctOptionId: "hercule-poirot-013-a",
            explanation:
                "Le riche patriarche Simeon Lee convoque ses proches à Gorston Hall, où les tensions familiales éclatent avant sa mort.",
        },
        {
            id: "hercule-poirot-014",
            prompt: "Quel décor accueille Poirot dans Les Vacances d’Hercule Poirot ?",
            options: [
                { id: "hercule-poirot-014-a", label: "Un sanatorium dans les Alpes" },
                { id: "hercule-poirot-014-b", label: "Un palais vénitien" },
                {
                    id: "hercule-poirot-014-c",
                    label: "Un hôtel sur une île au large du Devon",
                },
                { id: "hercule-poirot-014-d", label: "Un ranch en Argentine" },
            ],
            correctOptionId: "hercule-poirot-014-c",
            explanation:
                "L’action se déroule au Jolly Roger Hotel, sur une île de villégiature au large du Devon.",
        },
        {
            id: "hercule-poirot-015",
            prompt:
                "Combien d’années environ séparent le crime initial de la nouvelle enquête menée dans Cinq Petits Cochons ?",
            options: [
                { id: "hercule-poirot-015-a", label: "Trois ans" },
                { id: "hercule-poirot-015-b", label: "Huit ans" },
                { id: "hercule-poirot-015-c", label: "Seize ans" },
                { id: "hercule-poirot-015-d", label: "Trente ans" },
            ],
            correctOptionId: "hercule-poirot-015-c",
            explanation:
                "Poirot reconstitue une affaire vieille de seize ans à partir des souvenirs et récits des cinq personnes présentes.",
        },
        {
            id: "hercule-poirot-016",
            prompt:
                "Près de quel élément du domaine un corps est-il découvert dans Le Vallon ?",
            options: [
                { id: "hercule-poirot-016-a", label: "La serre" },
                { id: "hercule-poirot-016-b", label: "Le court de tennis" },
                { id: "hercule-poirot-016-c", label: "La piscine" },
                { id: "hercule-poirot-016-d", label: "La bibliothèque" },
            ],
            correctOptionId: "hercule-poirot-016-c",
            explanation:
                "La scène près de la piscine paraît d’abord presque théâtrale, avant que Poirot comprenne qu’il se trouve devant un véritable meurtre.",
        },
        {
            id: "hercule-poirot-017",
            prompt:
                "Qui demande à Poirot de réexaminer la condamnation prononcée dans Mrs McGinty est morte ?",
            options: [
                { id: "hercule-poirot-017-a", label: "Le capitaine Hastings" },
                { id: "hercule-poirot-017-b", label: "Miss Lemon" },
                { id: "hercule-poirot-017-c", label: "Le superintendant Spence" },
                { id: "hercule-poirot-017-d", label: "L’inspecteur Battle" },
            ],
            correctOptionId: "hercule-poirot-017-c",
            explanation:
                "Spence estime que le condamné ne correspond pas au profil d’un meurtrier et sollicite Poirot avant l’exécution.",
        },
        {
            id: "hercule-poirot-018",
            prompt:
                "Quelle remarque relance les soupçons après les funérailles dans Les Indiscrétions d’Hercule Poirot ?",
            options: [
                {
                    id: "hercule-poirot-018-a",
                    label: "L’avocat annonce la disparition du testament",
                },
                {
                    id: "hercule-poirot-018-b",
                    label: "Le médecin reconnaît avoir falsifié l’heure du décès",
                },
                {
                    id: "hercule-poirot-018-c",
                    label: "Le majordome révèle un cambriolage nocturne",
                },
                {
                    id: "hercule-poirot-018-d",
                    label: "Cora affirme que le défunt a été assassiné",
                },
            ],
            correctOptionId: "hercule-poirot-018-d",
            explanation:
                "La déclaration apparemment maladroite de Cora Lansquenet transforme une mort jugée naturelle en possible affaire criminelle.",
        },
        {
            id: "hercule-poirot-019",
            prompt: "Quel divertissement Ariadne Oliver organise-t-elle dans Poirot joue le jeu ?",
            options: [
                { id: "hercule-poirot-019-a", label: "Une chasse au meurtrier fictive" },
                { id: "hercule-poirot-019-b", label: "Un concours de romans policiers" },
                { id: "hercule-poirot-019-c", label: "Une vente aux enchères costumée" },
                { id: "hercule-poirot-019-d", label: "Une séance publique d’hypnose" },
            ],
            correctOptionId: "hercule-poirot-019-a",
            explanation:
                "Pour une fête de village, Ariadne Oliver imagine un jeu de meurtre ; l’exercice prend une tournure réelle et dangereuse.",
        },
        {
            id: "hercule-poirot-020",
            prompt: "Quel établissement sert de cadre principal à Un chat dans les pigeons ?",
            options: [
                { id: "hercule-poirot-020-a", label: "Un pensionnat naval" },
                { id: "hercule-poirot-020-b", label: "Une école de jeunes filles" },
                { id: "hercule-poirot-020-c", label: "Une université de médecine" },
                { id: "hercule-poirot-020-d", label: "Un conservatoire de musique" },
            ],
            correctOptionId: "hercule-poirot-020-b",
            explanation:
                "L’intrigue se concentre sur Meadowbank, une prestigieuse école anglaise pour jeunes filles.",
        },
        {
            id: "hercule-poirot-021",
            prompt: "Quels objets insolites entourent la scène du crime dans Les Pendules ?",
            options: [
                { id: "hercule-poirot-021-a", label: "Des masques de théâtre" },
                { id: "hercule-poirot-021-b", label: "Des bouteilles miniatures" },
                { id: "hercule-poirot-021-c", label: "Des cartes postales déchirées" },
                { id: "hercule-poirot-021-d", label: "Plusieurs horloges" },
            ],
            correctOptionId: "hercule-poirot-021-d",
            explanation:
                "Un homme est retrouvé dans une pièce où plusieurs horloges ont été disposées de façon énigmatique.",
        },
        {
            id: "hercule-poirot-022",
            prompt:
                "À quoi renvoie le titre La Troisième Fille dans le cadre initial du roman ?",
            options: [
                { id: "hercule-poirot-022-a", label: "À la troisième fille d’un aristocrate" },
                {
                    id: "hercule-poirot-022-b",
                    label: "À la troisième élève disparue d’un collège",
                },
                { id: "hercule-poirot-022-c", label: "À la troisième actrice d’une troupe" },
                {
                    id: "hercule-poirot-022-d",
                    label: "À la troisième occupante d’un appartement partagé",
                },
            ],
            correctOptionId: "hercule-poirot-022-d",
            explanation:
                "Norma Restarick est la « troisième fille » venue partager un appartement londonien déjà occupé par deux jeunes femmes.",
        },
        {
            id: "hercule-poirot-023",
            prompt:
                "Lors de quelle fête une adolescente affirme avoir assisté autrefois à un meurtre dans Le Crime d’Halloween ?",
            options: [
                { id: "hercule-poirot-023-a", label: "Une fête de Noël" },
                { id: "hercule-poirot-023-b", label: "Une fête d’Halloween" },
                { id: "hercule-poirot-023-c", label: "Une garden-party estivale" },
                { id: "hercule-poirot-023-d", label: "Un bal du Nouvel An" },
            ],
            correctOptionId: "hercule-poirot-023-b",
            explanation:
                "Cette déclaration est faite pendant une soirée d’Halloween organisée pour des enfants, en présence d’Ariadne Oliver.",
        },
        {
            id: "hercule-poirot-024",
            prompt:
                "Dans quel lieu déjà associé à sa première enquête Poirot revient-il dans Poirot quitte la scène ?",
            options: [
                { id: "hercule-poirot-024-a", label: "End House" },
                { id: "hercule-poirot-024-b", label: "Meadowbank" },
                { id: "hercule-poirot-024-c", label: "Styles Court" },
                { id: "hercule-poirot-024-d", label: "Le Jolly Roger Hotel" },
            ],
            correctOptionId: "hercule-poirot-024-c",
            explanation:
                "La dernière affaire publiée de Poirot le ramène à Styles, le domaine où débute sa carrière littéraire.",
        },
        {
            id: "hercule-poirot-025",
            prompt:
                "Combien de nouvelles contient l’édition britannique originale de Poirot Investigates publiée en 1924 ?",
            options: [
                { id: "hercule-poirot-025-a", label: "Huit" },
                { id: "hercule-poirot-025-b", label: "Onze" },
                { id: "hercule-poirot-025-c", label: "Douze" },
                { id: "hercule-poirot-025-d", label: "Quinze" },
            ],
            correctOptionId: "hercule-poirot-025-b",
            explanation:
                "Le recueil britannique original rassemble onze enquêtes courtes ; certaines éditions étrangères ont adopté un contenu différent.",
        },
        {
            id: "hercule-poirot-026",
            prompt: "Combien de récits composent le recueil britannique Murder in the Mews ?",
            options: [
                { id: "hercule-poirot-026-a", label: "Trois" },
                { id: "hercule-poirot-026-b", label: "Quatre" },
                { id: "hercule-poirot-026-c", label: "Six" },
                { id: "hercule-poirot-026-d", label: "Dix" },
            ],
            correctOptionId: "hercule-poirot-026-b",
            explanation:
                "Publié en 1937 au Royaume-Uni, le volume réunit quatre récits mettant en scène Poirot.",
        },
        {
            id: "hercule-poirot-027",
            prompt: "Combien d’enquêtes composent le cycle des Travaux d’Hercule ?",
            options: [
                { id: "hercule-poirot-027-a", label: "Sept" },
                { id: "hercule-poirot-027-b", label: "Douze" },
                { id: "hercule-poirot-027-c", label: "Dix" },
                { id: "hercule-poirot-027-d", label: "Treize" },
            ],
            correctOptionId: "hercule-poirot-027-b",
            explanation:
                "Poirot choisit douze affaires dont les thèmes font écho aux douze travaux du héros de la mythologie grecque.",
        },
        {
            id: "hercule-poirot-028",
            prompt:
                "Quelle menace supposée plane sur les personnages dans L’Aventure du tombeau égyptien ?",
            options: [
                { id: "hercule-poirot-028-a", label: "Une épidémie inconnue" },
                { id: "hercule-poirot-028-b", label: "Un sabotage ferroviaire" },
                { id: "hercule-poirot-028-c", label: "Une société secrète italienne" },
                { id: "hercule-poirot-028-d", label: "La malédiction d’un tombeau" },
            ],
            correctOptionId: "hercule-poirot-028-d",
            explanation:
                "Plusieurs morts survenues après l’ouverture d’un tombeau alimentent la croyance en une malédiction que Poirot examine rationnellement.",
        },
        {
            id: "hercule-poirot-029",
            prompt:
                "Dans quel récit Poirot raconte-t-il une affaire de sa carrière belge qu’il considère comme un échec ?",
            options: [
                { id: "hercule-poirot-029-a", label: "Le Double Indice" },
                { id: "hercule-poirot-029-b", label: "Le Bal de la Victoire" },
                { id: "hercule-poirot-029-c", label: "Le Mystère de Hunter’s Lodge" },
                { id: "hercule-poirot-029-d", label: "La Boîte de chocolats" },
            ],
            correctOptionId: "hercule-poirot-029-d",
            explanation:
                "La Boîte de chocolats revient sur une enquête menée à Bruxelles avant la carrière anglaise de Poirot, qu’il présente comme son rare échec.",
        },
        {
            id: "hercule-poirot-030",
            prompt:
                "Quelle disparition Hastings juge-t-il d’abord trop banale dans L’Aventure de la cuisinière de Clapham ?",
            options: [
                { id: "hercule-poirot-030-a", label: "Celle d’un joaillier" },
                { id: "hercule-poirot-030-b", label: "Celle d’une cuisinière" },
                { id: "hercule-poirot-030-c", label: "Celle d’un diplomate" },
                { id: "hercule-poirot-030-d", label: "Celle d’un jockey" },
            ],
            correctOptionId: "hercule-poirot-030-b",
            explanation:
                "Poirot accepte de rechercher une domestique disparue, convaincu qu’une affaire ordinaire peut cacher un problème plus grave.",
        },
        {
            id: "hercule-poirot-031",
            prompt:
                "Quelle personnalité est enlevée dans L’Enlèvement du Premier ministre ?",
            options: [
                { id: "hercule-poirot-031-a", label: "Le Premier ministre britannique" },
                { id: "hercule-poirot-031-b", label: "Le président français" },
                { id: "hercule-poirot-031-c", label: "Le roi des Belges" },
                { id: "hercule-poirot-031-d", label: "L’ambassadeur des États-Unis" },
            ],
            correctOptionId: "hercule-poirot-031-a",
            explanation:
                "Poirot doit retrouver le chef du gouvernement britannique à temps pour une conférence internationale majeure.",
        },
        {
            id: "hercule-poirot-032",
            prompt: "Quel récit ouvre le cycle des Travaux d’Hercule ?",
            options: [
                { id: "hercule-poirot-032-a", label: "Les Oiseaux du lac Stymphale" },
                { id: "hercule-poirot-032-b", label: "Le Lion de Némée" },
                { id: "hercule-poirot-032-c", label: "La Ceinture d’Hippolyte" },
                { id: "hercule-poirot-032-d", label: "Les Écuries d’Augias" },
            ],
            correctOptionId: "hercule-poirot-032-b",
            explanation:
                "Le Lion de Némée est la première des douze affaires que Poirot associe aux travaux de son homonyme mythologique.",
        },
        {
            id: "hercule-poirot-033",
            prompt: "Quelle est la nationalité d’Hercule Poirot ?",
            options: [
                { id: "hercule-poirot-033-a", label: "Française" },
                { id: "hercule-poirot-033-b", label: "Belge" },
                { id: "hercule-poirot-033-c", label: "Suisse" },
                { id: "hercule-poirot-033-d", label: "Néerlandaise" },
            ],
            correctOptionId: "hercule-poirot-033-b",
            explanation:
                "Poirot est un Belge installé en Angleterre, détail essentiel que les autres personnages confondent parfois à tort avec une origine française.",
        },
        {
            id: "hercule-poirot-034",
            prompt:
                "Quel métier Poirot exerçait-il en Belgique avant de devenir détective privé ?",
            options: [
                { id: "hercule-poirot-034-a", label: "Avocat" },
                { id: "hercule-poirot-034-b", label: "Médecin légiste" },
                { id: "hercule-poirot-034-c", label: "Policier" },
                { id: "hercule-poirot-034-d", label: "Journaliste" },
            ],
            correctOptionId: "hercule-poirot-034-c",
            explanation:
                "Avant ses enquêtes privées, Poirot a servi dans la police belge, notamment à Bruxelles.",
        },
        {
            id: "hercule-poirot-035",
            prompt:
                "Que désigne l’expression « petites cellules grises » souvent employée par Poirot ?",
            options: [
                { id: "hercule-poirot-035-a", label: "Ses facultés de raisonnement" },
                {
                    id: "hercule-poirot-035-b",
                    label: "Une brigade secrète de la police",
                },
                {
                    id: "hercule-poirot-035-c",
                    label: "Des dossiers classés par couleur",
                },
                {
                    id: "hercule-poirot-035-d",
                    label: "Une méthode d’analyse chimique",
                },
            ],
            correctOptionId: "hercule-poirot-035-a",
            explanation:
                "Poirot insiste sur l’observation, la psychologie et la réflexion méthodique plutôt que sur la seule recherche d’indices matériels.",
        },
        {
            id: "hercule-poirot-036",
            prompt:
                "Quelle préférence personnelle caractérise fortement Poirot dans son quotidien ?",
            options: [
                { id: "hercule-poirot-036-a", label: "Le désordre créatif" },
                { id: "hercule-poirot-036-b", label: "Les sports à risque" },
                { id: "hercule-poirot-036-c", label: "L’ordre et la symétrie" },
                { id: "hercule-poirot-036-d", label: "Les voyages improvisés" },
            ],
            correctOptionId: "hercule-poirot-036-c",
            explanation:
                "Sa recherche d’ordre, de précision et de symétrie se manifeste dans son apparence, son logement et sa manière de raisonner.",
        },
        {
            id: "hercule-poirot-037",
            prompt:
                "Quel est le nom de l’immeuble londonien où Poirot habite dans de nombreuses histoires ?",
            options: [
                { id: "hercule-poirot-037-a", label: "Baker Street Chambers" },
                { id: "hercule-poirot-037-b", label: "Bertram’s Court" },
                { id: "hercule-poirot-037-c", label: "Styles Apartments" },
                { id: "hercule-poirot-037-d", label: "Whitehaven Mansions" },
            ],
            correctOptionId: "hercule-poirot-037-d",
            explanation:
                "Whitehaven Mansions est la résidence moderne et géométrique de Poirot dans plusieurs romans et adaptations.",
        },
        {
            id: "hercule-poirot-038",
            prompt:
                "Quel détail de son apparence Poirot entretient-il avec une fierté particulière ?",
            options: [
                { id: "hercule-poirot-038-a", label: "Sa barbe carrée" },
                { id: "hercule-poirot-038-b", label: "Sa moustache" },
                { id: "hercule-poirot-038-c", label: "Ses favoris" },
                { id: "hercule-poirot-038-d", label: "Son monocle" },
            ],
            correctOptionId: "hercule-poirot-038-b",
            explanation:
                "Sa moustache soigneusement entretenue est l’un des signes distinctifs les plus célèbres du personnage.",
        },
        {
            id: "hercule-poirot-039",
            prompt:
                "Quel rôle le capitaine Arthur Hastings tient-il fréquemment auprès de Poirot ?",
            options: [
                { id: "hercule-poirot-039-a", label: "Ami, compagnon et parfois narrateur" },
                { id: "hercule-poirot-039-b", label: "Médecin légiste officiel" },
                {
                    id: "hercule-poirot-039-c",
                    label: "Procureur chargé des poursuites",
                },
                {
                    id: "hercule-poirot-039-d",
                    label: "Rival à la tête d’une agence concurrente",
                },
            ],
            correctOptionId: "hercule-poirot-039-a",
            explanation:
                "Hastings accompagne Poirot dans de nombreuses premières enquêtes et raconte plusieurs aventures à la première personne.",
        },
        {
            id: "hercule-poirot-040",
            prompt: "À quelle institution l’inspecteur-chef Japp est-il associé ?",
            options: [
                { id: "hercule-poirot-040-a", label: "La Sûreté belge" },
                { id: "hercule-poirot-040-b", label: "Interpol" },
                { id: "hercule-poirot-040-c", label: "Le MI6" },
                { id: "hercule-poirot-040-d", label: "Scotland Yard" },
            ],
            correctOptionId: "hercule-poirot-040-d",
            explanation:
                "Japp est un policier de Scotland Yard qui collabore régulièrement avec Poirot, malgré leurs méthodes différentes.",
        },
        {
            id: "hercule-poirot-041",
            prompt: "Quelle fonction Miss Felicity Lemon exerce-t-elle auprès de Poirot ?",
            options: [
                { id: "hercule-poirot-041-a", label: "Secrétaire" },
                { id: "hercule-poirot-041-b", label: "Gouvernante" },
                { id: "hercule-poirot-041-c", label: "Avocate" },
                { id: "hercule-poirot-041-d", label: "Photographe judiciaire" },
            ],
            correctOptionId: "hercule-poirot-041-a",
            explanation:
                "Miss Lemon est une secrétaire remarquablement efficace, connue pour son organisation et sa précision.",
        },
        {
            id: "hercule-poirot-042",
            prompt: "Quelle profession exerce Ariadne Oliver ?",
            options: [
                { id: "hercule-poirot-042-a", label: "Archéologue" },
                { id: "hercule-poirot-042-b", label: "Directrice d’école" },
                { id: "hercule-poirot-042-c", label: "Cantatrice" },
                { id: "hercule-poirot-042-d", label: "Autrice de romans policiers" },
            ],
            correctOptionId: "hercule-poirot-042-d",
            explanation:
                "Ariadne Oliver est une romancière policière à succès et une amie de Poirot, souvent présentée comme un reflet humoristique d’Agatha Christie.",
        },
        {
            id: "hercule-poirot-043",
            prompt:
                "Comment la comtesse Vera Rossakoff est-elle généralement présentée dans l’univers de Poirot ?",
            options: [
                { id: "hercule-poirot-043-a", label: "Comme sa sœur installée à Londres" },
                {
                    id: "hercule-poirot-043-b",
                    label: "Comme une inspectrice de Scotland Yard",
                },
                {
                    id: "hercule-poirot-043-c",
                    label: "Comme une aristocrate russe fascinante et récurrente",
                },
                {
                    id: "hercule-poirot-043-d",
                    label: "Comme la secrétaire d’Ariadne Oliver",
                },
            ],
            correctOptionId: "hercule-poirot-043-c",
            explanation:
                "Vera Rossakoff est une comtesse russe flamboyante, parfois adversaire et toujours source d’une admiration particulière chez Poirot.",
        },
        {
            id: "hercule-poirot-044",
            prompt:
                "En quelle année le premier roman mettant en scène Hercule Poirot a-t-il été publié ?",
            options: [
                { id: "hercule-poirot-044-a", label: "1914" },
                { id: "hercule-poirot-044-b", label: "1920" },
                { id: "hercule-poirot-044-c", label: "1926" },
                { id: "hercule-poirot-044-d", label: "1934" },
            ],
            correctOptionId: "hercule-poirot-044-b",
            explanation:
                "La Mystérieuse Affaire de Styles paraît en 1920 et lance la longue carrière littéraire du détective.",
        },
        {
            id: "hercule-poirot-045",
            prompt:
                "Combien de romans originaux d’Agatha Christie mettent en scène Hercule Poirot ?",
            options: [
                { id: "hercule-poirot-045-a", label: "Vingt-quatre" },
                { id: "hercule-poirot-045-b", label: "Trente" },
                { id: "hercule-poirot-045-c", label: "Trente-trois" },
                { id: "hercule-poirot-045-d", label: "Quarante-deux" },
            ],
            correctOptionId: "hercule-poirot-045-c",
            explanation:
                "Le canon original de Christie compte trente-trois romans de Poirot, auxquels s’ajoutent de nombreuses nouvelles.",
        },
        {
            id: "hercule-poirot-046",
            prompt:
                "Quel roman de Poirot, rédigé pendant la Seconde Guerre mondiale, a été conservé avant sa publication en 1975 ?",
            options: [
                { id: "hercule-poirot-046-a", label: "Poirot quitte la scène" },
                { id: "hercule-poirot-046-b", label: "Les Pendules" },
                { id: "hercule-poirot-046-c", label: "Une mémoire d’éléphant" },
                { id: "hercule-poirot-046-d", label: "La Troisième Fille" },
            ],
            correctOptionId: "hercule-poirot-046-a",
            explanation:
                "Agatha Christie écrivit Poirot quitte la scène pendant la guerre et en conserva le manuscrit pour une publication bien plus tardive.",
        },
        {
            id: "hercule-poirot-047",
            prompt:
                "Quelle présence à Torquay pendant la Première Guerre mondiale a contribué à inspirer à Agatha Christie un détective belge ?",
            options: [
                { id: "hercule-poirot-047-a", label: "Des réfugiés belges" },
                { id: "hercule-poirot-047-b", label: "Des diplomates suisses" },
                { id: "hercule-poirot-047-c", label: "Des marins norvégiens" },
                { id: "hercule-poirot-047-d", label: "Des étudiants canadiens" },
            ],
            correctOptionId: "hercule-poirot-047-a",
            explanation:
                "La présence de réfugiés belges dans la région a aidé Christie à imaginer l’origine de son nouveau détective.",
        },
        {
            id: "hercule-poirot-048",
            prompt:
                "Quel acteur incarne Poirot dans la série télévisée britannique commencée en 1989 ?",
            options: [
                { id: "hercule-poirot-048-a", label: "Peter Ustinov" },
                { id: "hercule-poirot-048-b", label: "John Malkovich" },
                { id: "hercule-poirot-048-c", label: "Alfred Molina" },
                { id: "hercule-poirot-048-d", label: "David Suchet" },
            ],
            correctOptionId: "hercule-poirot-048-d",
            explanation:
                "David Suchet interprète Poirot pendant treize séries, de 1989 à 2013, dans l’adaptation télévisée produite pour ITV.",
        },
        {
            id: "hercule-poirot-049",
            prompt:
                "Quel acteur joue Poirot dans le film Le Crime de l’Orient-Express réalisé par Sidney Lumet en 1974 ?",
            options: [
                { id: "hercule-poirot-049-a", label: "Peter Sellers" },
                { id: "hercule-poirot-049-b", label: "Albert Finney" },
                { id: "hercule-poirot-049-c", label: "Alec Guinness" },
                { id: "hercule-poirot-049-d", label: "Laurence Olivier" },
            ],
            correctOptionId: "hercule-poirot-049-b",
            explanation:
                "Albert Finney tient le rôle de Poirot dans le film de 1974 et reçoit une nomination à l’Oscar pour cette interprétation.",
        },
        {
            id: "hercule-poirot-050",
            prompt:
                "Qui réalise le film Le Crime de l’Orient-Express de 2017 et y interprète également Poirot ?",
            options: [
                { id: "hercule-poirot-050-a", label: "Ridley Scott" },
                { id: "hercule-poirot-050-b", label: "Tom Hooper" },
                { id: "hercule-poirot-050-c", label: "Sam Mendes" },
                { id: "hercule-poirot-050-d", label: "Kenneth Branagh" },
            ],
            correctOptionId: "hercule-poirot-050-d",
            explanation:
                "Kenneth Branagh assure à la fois la réalisation du film de 2017 et le rôle du détective belge.",
        },
    ],
};
