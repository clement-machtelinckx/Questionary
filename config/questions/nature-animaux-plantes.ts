import type { Question } from "./types";

export const natureAnimauxPlantesQuestions: Question[] = [
    {
        id: "nature-001",
        prompt:
            "Chez le manchot empereur, quel parent couve l’unique œuf pendant la majeure partie de l’hiver antarctique ?",
        options: [
            { id: "nature-001-a", label: "Le mâle" },
            { id: "nature-001-b", label: "La femelle" },
            {
                id: "nature-001-c",
                label: "Les deux parents à parts égales pendant toute l’incubation",
            },
            { id: "nature-001-d", label: "Plusieurs adultes de la colonie à tour de rôle" },
        ],
        correctOptionId: "nature-001-a",
        explanation:
            "Après la ponte, la femelle part se nourrir en mer tandis que le mâle maintient l’œuf sur ses pieds, sous un repli de peau, pendant environ neuf semaines.",
    },
    {
        id: "nature-002",
        prompt:
            "Quel animal est le plus grand poisson vivant lorsqu’on compare la longueur des espèces ?",
        options: [
            { id: "nature-002-a", label: "Le requin-baleine" },
            { id: "nature-002-b", label: "Le requin blanc" },
            { id: "nature-002-c", label: "Le poisson-lune" },
            { id: "nature-002-d", label: "Le requin-pèlerin" },
        ],
        correctOptionId: "nature-002-a",
        explanation:
            "Le requin-baleine est un poisson cartilagineux filtreur dont les plus grands individus dépassent largement dix mètres de longueur.",
    },
    {
        id: "nature-003",
        prompt: "Combien de pattes possède un insecte adulte typique ?",
        options: [
            { id: "nature-003-a", label: "Huit" },
            { id: "nature-003-b", label: "Dix" },
            { id: "nature-003-c", label: "Quatre" },
            { id: "nature-003-d", label: "Six" },
        ],
        correctOptionId: "nature-003-d",
        explanation:
            "Les insectes ont trois paires de pattes fixées au thorax, ce qui les distingue notamment des arachnides à huit pattes.",
    },
    {
        id: "nature-004",
        prompt:
            "À quel grand groupe d’êtres vivants appartiennent les coraux constructeurs de récifs ?",
        options: [
            { id: "nature-004-a", label: "Aux plantes" },
            { id: "nature-004-b", label: "Aux champignons" },
            { id: "nature-004-c", label: "Aux algues" },
            { id: "nature-004-d", label: "Aux animaux" },
        ],
        correctOptionId: "nature-004-d",
        explanation:
            "Un corail est formé de petits animaux appelés polypes ; de nombreuses espèces vivent cependant en association avec des algues microscopiques.",
    },
    {
        id: "nature-005",
        prompt: "Quel trajet caractérise la migration de nombreux saumons dits anadromes ?",
        options: [
            { id: "nature-005-a", label: "Ils naissent en eau douce et y restent toute leur vie" },
            {
                id: "nature-005-b",
                label: "Ils naissent en mer, se reproduisent en eau douce puis meurent en mer",
            },
            {
                id: "nature-005-c",
                label: "Ils naissent en eau douce, grandissent en mer puis reviennent en eau douce pour se reproduire",
            },
            { id: "nature-005-d", label: "Ils accomplissent tout leur cycle en haute mer" },
        ],
        correctOptionId: "nature-005-c",
        explanation:
            "Les saumons anadromes éclosent dans les rivières, gagnent la mer pour leur croissance et reviennent généralement vers l’eau douce pour frayer.",
    },
    {
        id: "nature-006",
        prompt: "Que stockent principalement les bosses d’un chameau ou d’un dromadaire ?",
        options: [
            { id: "nature-006-a", label: "De la graisse" },
            { id: "nature-006-b", label: "De l’eau liquide" },
            { id: "nature-006-c", label: "De l’air" },
            { id: "nature-006-d", label: "Du sang" },
        ],
        correctOptionId: "nature-006-a",
        explanation:
            "La graisse des bosses constitue une réserve d’énergie ; l’animal limite aussi ses pertes d’eau grâce à plusieurs adaptations physiologiques.",
    },
    {
        id: "nature-007",
        prompt:
            "Quelle caractéristique des plumes aide de nombreux hiboux et chouettes à voler silencieusement ?",
        options: [
            {
                id: "nature-007-a",
                label: "Des bords souples et frangés qui atténuent les turbulences",
            },
            { id: "nature-007-b", label: "Des plumes très rigides dépourvues de duvet" },
            { id: "nature-007-c", label: "Une couche de graisse déposée sur les rémiges" },
            { id: "nature-007-d", label: "Des ailes plus courtes que celles des autres rapaces" },
        ],
        correctOptionId: "nature-007-a",
        explanation:
            "Les franges et la texture veloutée de certaines plumes réduisent le bruit aérodynamique, ce qui favorise l’approche discrète des proies.",
    },
    {
        id: "nature-008",
        prompt: "Où hiverne la majorité des monarques de l’est de l’Amérique du Nord ?",
        options: [
            { id: "nature-008-a", label: "Dans les montagnes du centre du Mexique" },
            { id: "nature-008-b", label: "Sur la côte de Californie" },
            { id: "nature-008-c", label: "Dans les Everglades de Floride" },
            { id: "nature-008-d", label: "Dans les forêts côtières du Brésil" },
        ],
        correctOptionId: "nature-008-a",
        explanation:
            "Ces monarques parcourent parfois plusieurs milliers de kilomètres avant de se regrouper dans des forêts de sapins oyamels du centre du Mexique.",
    },
    {
        id: "nature-009",
        prompt: "Quelle particularité de développement caractérise l’axolotl à l’état adulte ?",
        options: [
            {
                id: "nature-009-a",
                label: "Il perd ses branchies externes avant d’atteindre la maturité",
            },
            { id: "nature-009-b", label: "Il reste au stade larvaire sans devenir fertile" },
            {
                id: "nature-009-c",
                label: "Il conserve plusieurs caractères larvaires, notamment des branchies externes",
            },
            {
                id: "nature-009-d",
                label: "Il effectue toujours une métamorphose complète vers une forme terrestre",
            },
        ],
        correctOptionId: "nature-009-c",
        explanation:
            "L’axolotl présente une néoténie : il atteint la maturité sexuelle tout en gardant des traits normalement associés à la larve.",
    },
    {
        id: "nature-010",
        prompt:
            "Quel avantage principal un poisson-clown retire-t-il de sa vie parmi les tentacules d’une anémone compatible ?",
        options: [
            {
                id: "nature-010-a",
                label: "Un accès exclusif aux algues photosynthétiques de l’anémone",
            },
            { id: "nature-010-b", label: "Le transport vers ses zones de reproduction" },
            { id: "nature-010-c", label: "Une protection contre de nombreux prédateurs" },
            {
                id: "nature-010-d",
                label: "Une augmentation directe de la température de son corps",
            },
        ],
        correctOptionId: "nature-010-c",
        explanation:
            "Un mucus particulier aide le poisson-clown à éviter les cellules urticantes de l’anémone, dont les tentacules constituent alors un refuge.",
    },
    {
        id: "nature-011",
        prompt:
            "Quel rôle écologique les éléphants peuvent-ils jouer après avoir consommé des fruits ?",
        options: [
            { id: "nature-011-a", label: "Détruire systématiquement toutes les graines avalées" },
            { id: "nature-011-b", label: "Disperser des graines sur de longues distances" },
            { id: "nature-011-c", label: "Polliniser les fleurs uniquement avec leur trompe" },
            { id: "nature-011-d", label: "Empêcher les fruits de mûrir sur les arbres" },
        ],
        correctOptionId: "nature-011-b",
        explanation:
            "Des graines traversent le tube digestif des éléphants et sont déposées plus loin avec des matières organiques favorables à leur germination.",
    },
    {
        id: "nature-012",
        prompt: "Où les tortues marines femelles déposent-elles leurs œufs ?",
        options: [
            { id: "nature-012-a", label: "Dans la végétation sous-marine" },
            { id: "nature-012-b", label: "Dans un nid creusé sur une plage" },
            { id: "nature-012-c", label: "Dans des nids flottants en haute mer" },
            { id: "nature-012-d", label: "Dans la vase profonde des estuaires" },
        ],
        correctOptionId: "nature-012-b",
        explanation:
            "Bien qu’elles vivent en mer, les tortues marines reviennent à terre pour creuser un nid dans le sable et y pondre.",
    },
    {
        id: "nature-013",
        prompt:
            "Quel type de vol permet à un colibri de rester presque immobile devant une fleur ?",
        options: [
            { id: "nature-013-a", label: "Le vol stationnaire" },
            { id: "nature-013-b", label: "Le vol plané" },
            { id: "nature-013-c", label: "Le vol ascendant thermique" },
            {
                id: "nature-013-d",
                label: "Le vol battu interrompu par de longues phases de glisse",
            },
        ],
        correctOptionId: "nature-013-a",
        explanation:
            "Le mouvement rapide et particulier de ses ailes permet au colibri de produire de la portance pendant les deux phases du battement.",
    },
    {
        id: "nature-014",
        prompt: "De quelle matière est principalement constitué le squelette des requins ?",
        options: [
            { id: "nature-014-a", label: "D’os fortement calcifié" },
            { id: "nature-014-b", label: "De chitine" },
            { id: "nature-014-c", label: "De cartilage" },
            { id: "nature-014-d", label: "De tissu fibreux riche en kératine" },
        ],
        correctOptionId: "nature-014-c",
        explanation:
            "Les requins appartiennent aux poissons cartilagineux : leur squelette est formé de cartilage, parfois renforcé par des dépôts minéraux.",
    },
    {
        id: "nature-015",
        prompt:
            "Pourquoi de nombreux amphibiens sont-ils particulièrement sensibles à l’assèchement de leur habitat ?",
        options: [
            { id: "nature-015-a", label: "Leur peau épaisse empêche toute absorption d’eau" },
            { id: "nature-015-b", label: "Leurs œufs possèdent toujours une coquille imperméable" },
            {
                id: "nature-015-c",
                label: "Leur peau perméable participe aux échanges et perd facilement de l’eau",
            },
            {
                id: "nature-015-d",
                label: "Leur respiration dépend exclusivement de branchies adultes",
            },
        ],
        correctOptionId: "nature-015-c",
        explanation:
            "La peau fine et perméable de nombreux amphibiens contribue à la respiration et à l’équilibre hydrique, ce qui les rend dépendants de milieux humides.",
    },
    {
        id: "nature-016",
        prompt:
            "Quel petit crustacé constitue une ressource alimentaire majeure pour de nombreux animaux de l’océan Austral ?",
        options: [
            { id: "nature-016-a", label: "Un copépode côtier" },
            { id: "nature-016-b", label: "Un calmar juvénile" },
            { id: "nature-016-c", label: "Le krill antarctique" },
            { id: "nature-016-d", label: "Un poisson-lanterne" },
        ],
        correctOptionId: "nature-016-c",
        explanation:
            "Le krill antarctique forme d’immenses essaims consommés notamment par des baleines, des phoques, des manchots et de nombreux poissons.",
    },
    {
        id: "nature-017",
        prompt:
            "Quel rôle les vautours remplissent-ils principalement dans de nombreux écosystèmes ?",
        options: [
            { id: "nature-017-a", label: "Ils capturent surtout des insectes pollinisateurs" },
            { id: "nature-017-b", label: "Ils dispersent exclusivement du pollen" },
            {
                id: "nature-017-c",
                label: "Ils consomment des carcasses et accélèrent leur élimination",
            },
            { id: "nature-017-d", label: "Ils régulent les plantes aquatiques en les broutant" },
        ],
        correctOptionId: "nature-017-c",
        explanation:
            "En se nourrissant de charognes, les vautours participent au recyclage de la matière et limitent la persistance de carcasses dans le milieu.",
    },
    {
        id: "nature-018",
        prompt: "Pourquoi le castor est-il souvent qualifié d’ingénieur de l’écosystème ?",
        options: [
            { id: "nature-018-a", label: "Il creuse seulement des terriers sans modifier l’eau" },
            { id: "nature-018-b", label: "Il disperse principalement les graines par son pelage" },
            {
                id: "nature-018-c",
                label: "Il élimine la végétation des berges sans créer de nouveaux habitats",
            },
            {
                id: "nature-018-d",
                label: "Ses barrages modifient les cours d’eau et créent des zones humides",
            },
        ],
        correctOptionId: "nature-018-d",
        explanation:
            "Les barrages ralentissent l’écoulement, inondent certaines zones et créent une mosaïque d’habitats utilisable par de nombreuses espèces.",
    },
    {
        id: "nature-019",
        prompt:
            "Quel avantage un arbre caduc peut-il tirer de la chute de ses feuilles avant une saison froide ou sèche ?",
        options: [
            { id: "nature-019-a", label: "Réduire ses pertes d’eau et les dommages aux feuilles" },
            {
                id: "nature-019-b",
                label: "Augmenter la photosynthèse pendant toute la saison défavorable",
            },
            { id: "nature-019-c", label: "Conserver davantage d’eau dans les feuilles exposées" },
            {
                id: "nature-019-d",
                label: "Protéger les feuilles contre le gel sans les renouveler",
            },
        ],
        correctOptionId: "nature-019-a",
        explanation:
            "Abandonner les feuilles durant une période défavorable limite la transpiration et évite d’entretenir des organes fragiles lorsque les ressources sont rares.",
    },
    {
        id: "nature-020",
        prompt: "Chez de nombreux cactus, que sont les épines du point de vue botanique ?",
        options: [
            { id: "nature-020-a", label: "Des rameaux modifiés" },
            { id: "nature-020-b", label: "Des feuilles modifiées" },
            { id: "nature-020-c", label: "Des racines aériennes" },
            { id: "nature-020-d", label: "Des stipules charnues" },
        ],
        correctOptionId: "nature-020-b",
        explanation:
            "Les épines réduisent la surface exposée à la transpiration et protègent la plante, tandis que la tige verte assure l’essentiel de la photosynthèse.",
    },
    {
        id: "nature-021",
        prompt: "À quoi servent principalement les pneumatophores de certains palétuviers ?",
        options: [
            { id: "nature-021-a", label: "À stabiliser seules le tronc contre les vagues" },
            { id: "nature-021-b", label: "À rejeter tout le sel absorbé" },
            { id: "nature-021-c", label: "À stocker l’eau douce pendant la saison sèche" },
            {
                id: "nature-021-d",
                label: "À faciliter les échanges gazeux dans un sol pauvre en oxygène",
            },
        ],
        correctOptionId: "nature-021-d",
        explanation:
            "Ces racines émergent de la vase ou de l’eau et permettent à la plante d’accéder à l’oxygène dans des sédiments souvent saturés.",
    },
    {
        id: "nature-022",
        prompt:
            "Comment une plante épiphyte utilise-t-elle généralement l’arbre sur lequel elle pousse ?",
        options: [
            { id: "nature-022-a", label: "Comme source de sève prélevée par des suçoirs" },
            { id: "nature-022-b", label: "Comme partenaire fournissant directement des sucres" },
            { id: "nature-022-c", label: "Comme matière morte qu’elle décompose" },
            { id: "nature-022-d", label: "Comme support, sans prélever directement sa sève" },
        ],
        correctOptionId: "nature-022-d",
        explanation:
            "Les épiphytes s’installent sur d’autres plantes pour atteindre la lumière, mais récupèrent eau et nutriments dans l’air, la pluie ou les débris accumulés.",
    },
    {
        id: "nature-023",
        prompt:
            "Qu’est-ce qui déclenche normalement la fermeture du piège d’une dionée attrape-mouche ?",
        options: [
            { id: "nature-023-a", label: "Une forte baisse de température" },
            { id: "nature-023-b", label: "La stimulation répétée de poils sensitifs" },
            { id: "nature-023-c", label: "Une variation brutale de lumière" },
            { id: "nature-023-d", label: "La détection d’une odeur d’insecte" },
        ],
        correctOptionId: "nature-023-b",
        explanation:
            "Des poils déclencheurs détectent les mouvements d’une proie ; plusieurs stimulations rapprochées évitent que le piège se ferme au moindre contact.",
    },
    {
        id: "nature-024",
        prompt:
            "Quel rôle de nombreux champignons saprotrophes jouent-ils dans un écosystème forestier ?",
        options: [
            { id: "nature-024-a", label: "Ils réalisent la photosynthèse du sous-bois" },
            { id: "nature-024-b", label: "Ils pollinisent la majorité des arbres" },
            { id: "nature-024-c", label: "Ils décomposent la matière organique morte" },
            { id: "nature-024-d", label: "Ils produisent les graines des plantes" },
        ],
        correctOptionId: "nature-024-c",
        explanation:
            "En dégradant bois mort, feuilles et autres débris, ces champignons libèrent des éléments nutritifs qui redeviennent disponibles dans le sol.",
    },
    {
        id: "nature-025",
        prompt: "De quels partenaires un lichen est-il principalement constitué ?",
        options: [
            { id: "nature-025-a", label: "D’une mousse associée à une bactérie" },
            {
                id: "nature-025-b",
                label: "D’un champignon associé à une algue ou à une cyanobactérie",
            },
            { id: "nature-025-c", label: "D’une racine associée à un insecte" },
            {
                id: "nature-025-d",
                label: "De deux espèces de champignons sans partenaire photosynthétique",
            },
        ],
        correctOptionId: "nature-025-b",
        explanation:
            "Le champignon fournit une structure protectrice tandis que le partenaire photosynthétique produit des composés organiques grâce à la lumière.",
    },
];
