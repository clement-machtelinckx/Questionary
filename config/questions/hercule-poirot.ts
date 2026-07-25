import type { Question, QuestionCategory } from "./types";

type CorrectOption = "a" | "b" | "c" | "d";

type PoirotQuestionData = [
    prompt: string,
    labels: [string, string, string, string],
    correctOption: CorrectOption,
    explanation: string,
];

const poirotQuestionData = JSON.parse(
    `[
    ["Dans quel roman Hercule Poirot apparaît-il pour la première fois ?",["La Mystérieuse Affaire de Styles","Le Meurtre de Roger Ackroyd","Le Crime de l’Orient-Express","Mort sur le Nil"],"a","Publié en 1920, La Mystérieuse Affaire de Styles inaugure les enquêtes de Poirot et met déjà en scène le capitaine Hastings."],
    ["Dans Le Crime du golf, dans quel pays l’appel au secours reçu par Poirot le conduit-il ?",["En France","En Belgique","En Suisse","En Égypte"],"a","Poirot et Hastings se rendent en France après le message urgent d’un riche homme d’affaires, puis découvrent un crime près d’un terrain de golf."],
    ["Au début du Meurtre de Roger Ackroyd, à quelle activité Poirot souhaite-t-il consacrer sa retraite ?",["L’élevage d’abeilles","La collection de timbres","La restauration de tableaux","La culture des courges"],"d","Retiré dans un village anglais, Poirot ambitionne de cultiver des « vegetable marrows », généralement rendues en français par des courges."],
    ["Dans Les Quatre, à quel type d’adversaire Poirot est-il confronté ?",["Une société d’archéologues rivaux","Une famille de faussaires provinciaux","Un réseau de contrebandiers maritimes uniquement","Une organisation criminelle internationale"],"d","Le roman oppose Poirot à quatre figures liées à une organisation internationale, dans une intrigue plus proche du thriller d’espionnage que ses enquêtes habituelles."],
    ["Quelle destination est au cœur du voyage dans Le Train bleu ?",["Les Highlands écossais","La côte dalmate","La Côte d’Azur","Les Alpes autrichiennes"],"c","Le train relie Londres à la Riviera française, cadre mondain dans lequel survient le meurtre étudié par Poirot."],
    ["Dans La Maison du péril, quelle jeune femme semble échapper à plusieurs accidents suspects ?",["Nick Buckley","Norma Restarick","Linnet Ridgeway","Elinor Carlisle"],"a","Nick Buckley, propriétaire d’End House, attire l’attention de Poirot après une série d’incidents qui paraissent viser sa vie."],
    ["Quel événement immobilise l’Orient-Express pendant l’enquête de Poirot ?",["Une congère bloque la voie","Une grève ferme la frontière","Un pont s’effondre devant le train","Une panne de charbon arrête la locomotive"],"a","Le train est bloqué par la neige, ce qui isole les voyageurs et délimite le cercle des personnes présentes lors du crime."],
    ["Dans La Mort dans les nuages, où la victime est-elle découverte ?",["À bord d’un avion","Dans une cabine de paquebot","Dans un compartiment de train","Dans une montgolfière"],"a","Le meurtre survient pendant un vol entre Paris et Croydon, alors que Poirot se trouve parmi les passagers."],
    ["Quel principe relie les premières étapes de l’enquête dans A.B.C. contre Poirot ?",["Les phases de la Lune","Les signes du zodiaque","Un ordre alphabétique","Les numéros d’un jeu de cartes"],"c","Les lieux et les victimes semblent suivre l’alphabet, tandis qu’un indicateur ferroviaire ABC accompagne les crimes."],
    ["Quel milieu professionnel sert de cadre principal à Meurtre en Mésopotamie ?",["Une compagnie de théâtre","Un laboratoire pharmaceutique","Une mission archéologique","Une école militaire"],"c","L’intrigue se déroule sur un chantier de fouilles au Moyen-Orient, au sein d’une équipe d’archéologues."],
    ["Quel jeu structure la soirée décisive de Cartes sur table ?",["Le poker","Le bridge","Le mah-jong","Le backgammon"],"b","Deux tables de bridge réunissent les invités, tandis que l’hôte observe des personnes qu’il soupçonne d’avoir déjà commis un meurtre."],
    ["Quel voyage forme le cadre principal de Mort sur le Nil ?",["Une traversée de la Manche","Une croisière sur le Nil","Une expédition dans l’Atlas","Un trajet sur le Danube"],"b","Poirot se trouve en Égypte et poursuit son enquête parmi les passagers d’un bateau naviguant sur le Nil."],
    ["Dans Le Noël d’Hercule Poirot, qui réunit sa famille pour les fêtes avant le crime ?",["Simeon Lee","Roger Ackroyd","Gordon Cloade","Richard Abernethie"],"a","Le riche patriarche Simeon Lee convoque ses proches à Gorston Hall, où les tensions familiales éclatent avant sa mort."],
    ["Quel décor accueille Poirot dans Les Vacances d’Hercule Poirot ?",["Un sanatorium dans les Alpes","Un palais vénitien","Un hôtel sur une île au large du Devon","Un ranch en Argentine"],"c","L’action se déroule au Jolly Roger Hotel, sur une île de villégiature au large du Devon."],
    ["Combien d’années environ séparent le crime initial de la nouvelle enquête menée dans Cinq Petits Cochons ?",["Trois ans","Huit ans","Seize ans","Trente ans"],"c","Poirot reconstitue une affaire vieille de seize ans à partir des souvenirs et récits des cinq personnes présentes."],
    ["Près de quel élément du domaine un corps est-il découvert dans Le Vallon ?",["La serre","Le court de tennis","La piscine","La bibliothèque"],"c","La scène près de la piscine paraît d’abord presque théâtrale, avant que Poirot comprenne qu’il se trouve devant un véritable meurtre."],
    ["Qui demande à Poirot de réexaminer la condamnation prononcée dans Mrs McGinty est morte ?",["Le capitaine Hastings","Miss Lemon","Le superintendant Spence","L’inspecteur Battle"],"c","Spence estime que le condamné ne correspond pas au profil d’un meurtrier et sollicite Poirot avant l’exécution."],
    ["Quelle remarque relance les soupçons après les funérailles dans Les Indiscrétions d’Hercule Poirot ?",["L’avocat annonce la disparition du testament","Le médecin reconnaît avoir falsifié l’heure du décès","Le majordome révèle un cambriolage nocturne","Cora affirme que le défunt a été assassiné"],"d","La déclaration apparemment maladroite de Cora Lansquenet transforme une mort jugée naturelle en possible affaire criminelle."],
    ["Quel divertissement Ariadne Oliver organise-t-elle dans Poirot joue le jeu ?",["Une chasse au meurtrier fictive","Un concours de romans policiers","Une vente aux enchères costumée","Une séance publique d’hypnose"],"a","Pour une fête de village, Ariadne Oliver imagine un jeu de meurtre ; l’exercice prend une tournure réelle et dangereuse."],
    ["Quel établissement sert de cadre principal à Un chat dans les pigeons ?",["Un pensionnat naval","Une école de jeunes filles","Une université de médecine","Un conservatoire de musique"],"b","L’intrigue se concentre sur Meadowbank, une prestigieuse école anglaise pour jeunes filles."],
    ["Quels objets insolites entourent la scène du crime dans Les Pendules ?",["Des masques de théâtre","Des bouteilles miniatures","Des cartes postales déchirées","Plusieurs horloges"],"d","Un homme est retrouvé dans une pièce où plusieurs horloges ont été disposées de façon énigmatique."],
    ["À quoi renvoie le titre La Troisième Fille dans le cadre initial du roman ?",["À la troisième fille d’un aristocrate","À la troisième élève disparue d’un collège","À la troisième actrice d’une troupe","À la troisième occupante d’un appartement partagé"],"d","Norma Restarick est la « troisième fille » venue partager un appartement londonien déjà occupé par deux jeunes femmes."],
    ["Lors de quelle fête une adolescente affirme avoir assisté autrefois à un meurtre dans Le Crime d’Halloween ?",["Une fête de Noël","Une fête d’Halloween","Une garden-party estivale","Un bal du Nouvel An"],"b","Cette déclaration est faite pendant une soirée d’Halloween organisée pour des enfants, en présence d’Ariadne Oliver."],
    ["Dans quel lieu déjà associé à sa première enquête Poirot revient-il dans Poirot quitte la scène ?",["End House","Meadowbank","Styles Court","Le Jolly Roger Hotel"],"c","La dernière affaire publiée de Poirot le ramène à Styles, le domaine où débute sa carrière littéraire."],
    ["Combien de nouvelles contient l’édition britannique originale de Poirot Investigates publiée en 1924 ?",["Huit","Onze","Douze","Quinze"],"b","Le recueil britannique original rassemble onze enquêtes courtes ; certaines éditions étrangères ont adopté un contenu différent."],
    ["Combien de récits composent le recueil britannique Murder in the Mews ?",["Trois","Quatre","Six","Dix"],"b","Publié en 1937 au Royaume-Uni, le volume réunit quatre récits mettant en scène Poirot."],
    ["Combien d’enquêtes composent le cycle des Travaux d’Hercule ?",["Sept","Douze","Dix","Treize"],"b","Poirot choisit douze affaires dont les thèmes font écho aux douze travaux du héros de la mythologie grecque."],
    ["Quelle menace supposée plane sur les personnages dans L’Aventure du tombeau égyptien ?",["Une épidémie inconnue","Un sabotage ferroviaire","Une société secrète italienne","La malédiction d’un tombeau"],"d","Plusieurs morts survenues après l’ouverture d’un tombeau alimentent la croyance en une malédiction que Poirot examine rationnellement."],
    ["Dans quel récit Poirot raconte-t-il une affaire de sa carrière belge qu’il considère comme un échec ?",["Le Double Indice","Le Bal de la Victoire","Le Mystère de Hunter’s Lodge","La Boîte de chocolats"],"d","La Boîte de chocolats revient sur une enquête menée à Bruxelles avant la carrière anglaise de Poirot, qu’il présente comme son rare échec."],
    ["Quelle disparition Hastings juge-t-il d’abord trop banale dans L’Aventure de la cuisinière de Clapham ?",["Celle d’un joaillier","Celle d’une cuisinière","Celle d’un diplomate","Celle d’un jockey"],"b","Poirot accepte de rechercher une domestique disparue, convaincu qu’une affaire ordinaire peut cacher un problème plus grave."],
    ["Quelle personnalité est enlevée dans L’Enlèvement du Premier ministre ?",["Le Premier ministre britannique","Le président français","Le roi des Belges","L’ambassadeur des États-Unis"],"a","Poirot doit retrouver le chef du gouvernement britannique à temps pour une conférence internationale majeure."],
    ["Quel récit ouvre le cycle des Travaux d’Hercule ?",["Les Oiseaux du lac Stymphale","Le Lion de Némée","La Ceinture d’Hippolyte","Les Écuries d’Augias"],"b","Le Lion de Némée est la première des douze affaires que Poirot associe aux travaux de son homonyme mythologique."],
    ["Quelle est la nationalité d’Hercule Poirot ?",["Française","Belge","Suisse","Néerlandaise"],"b","Poirot est un Belge installé en Angleterre, détail essentiel que les autres personnages confondent parfois à tort avec une origine française."],
    ["Quel métier Poirot exerçait-il en Belgique avant de devenir détective privé ?",["Avocat","Médecin légiste","Policier","Journaliste"],"c","Avant ses enquêtes privées, Poirot a servi dans la police belge, notamment à Bruxelles."],
    ["Que désigne l’expression « petites cellules grises » souvent employée par Poirot ?",["Ses facultés de raisonnement","Une brigade secrète de la police","Des dossiers classés par couleur","Une méthode d’analyse chimique"],"a","Poirot insiste sur l’observation, la psychologie et la réflexion méthodique plutôt que sur la seule recherche d’indices matériels."],
    ["Quelle préférence personnelle caractérise fortement Poirot dans son quotidien ?",["Le désordre créatif","Les sports à risque","L’ordre et la symétrie","Les voyages improvisés"],"c","Sa recherche d’ordre, de précision et de symétrie se manifeste dans son apparence, son logement et sa manière de raisonner."],
    ["Quel est le nom de l’immeuble londonien où Poirot habite dans de nombreuses histoires ?",["Baker Street Chambers","Bertram’s Court","Styles Apartments","Whitehaven Mansions"],"d","Whitehaven Mansions est la résidence moderne et géométrique de Poirot dans plusieurs romans et adaptations."],
    ["Quel détail de son apparence Poirot entretient-il avec une fierté particulière ?",["Sa barbe carrée","Sa moustache","Ses favoris","Son monocle"],"b","Sa moustache soigneusement entretenue est l’un des signes distinctifs les plus célèbres du personnage."],
    ["Quel rôle le capitaine Arthur Hastings tient-il fréquemment auprès de Poirot ?",["Ami, compagnon et parfois narrateur","Médecin légiste officiel","Procureur chargé des poursuites","Rival à la tête d’une agence concurrente"],"a","Hastings accompagne Poirot dans de nombreuses premières enquêtes et raconte plusieurs aventures à la première personne."],
    ["À quelle institution l’inspecteur-chef Japp est-il associé ?",["La Sûreté belge","Interpol","Le MI6","Scotland Yard"],"d","Japp est un policier de Scotland Yard qui collabore régulièrement avec Poirot, malgré leurs méthodes différentes."],
    ["Quelle fonction Miss Felicity Lemon exerce-t-elle auprès de Poirot ?",["Secrétaire","Gouvernante","Avocate","Photographe judiciaire"],"a","Miss Lemon est une secrétaire remarquablement efficace, connue pour son organisation et sa précision."],
    ["Quelle profession exerce Ariadne Oliver ?",["Archéologue","Directrice d’école","Cantatrice","Autrice de romans policiers"],"d","Ariadne Oliver est une romancière policière à succès et une amie de Poirot, souvent présentée comme un reflet humoristique d’Agatha Christie."],
    ["Comment la comtesse Vera Rossakoff est-elle généralement présentée dans l’univers de Poirot ?",["Comme sa sœur installée à Londres","Comme une inspectrice de Scotland Yard","Comme une aristocrate russe fascinante et récurrente","Comme la secrétaire d’Ariadne Oliver"],"c","Vera Rossakoff est une comtesse russe flamboyante, parfois adversaire et toujours source d’une admiration particulière chez Poirot."],
    ["En quelle année le premier roman mettant en scène Hercule Poirot a-t-il été publié ?",["1914","1920","1926","1934"],"b","La Mystérieuse Affaire de Styles paraît en 1920 et lance la longue carrière littéraire du détective."],
    ["Combien de romans originaux d’Agatha Christie mettent en scène Hercule Poirot ?",["Vingt-quatre","Trente","Trente-trois","Quarante-deux"],"c","Le canon original de Christie compte trente-trois romans de Poirot, auxquels s’ajoutent de nombreuses nouvelles."],
    ["Quel roman de Poirot, rédigé pendant la Seconde Guerre mondiale, a été conservé avant sa publication en 1975 ?",["Poirot quitte la scène","Les Pendules","Une mémoire d’éléphant","La Troisième Fille"],"a","Agatha Christie écrivit Poirot quitte la scène pendant la guerre et en conserva le manuscrit pour une publication bien plus tardive."],
    ["Quelle présence à Torquay pendant la Première Guerre mondiale a contribué à inspirer à Agatha Christie un détective belge ?",["Des réfugiés belges","Des diplomates suisses","Des marins norvégiens","Des étudiants canadiens"],"a","La présence de réfugiés belges dans la région a aidé Christie à imaginer l’origine de son nouveau détective."],
    ["Quel acteur incarne Poirot dans la série télévisée britannique commencée en 1989 ?",["Peter Ustinov","John Malkovich","Alfred Molina","David Suchet"],"d","David Suchet interprète Poirot pendant treize séries, de 1989 à 2013, dans l’adaptation télévisée produite pour ITV."],
    ["Quel acteur joue Poirot dans le film Le Crime de l’Orient-Express réalisé par Sidney Lumet en 1974 ?",["Peter Sellers","Albert Finney","Alec Guinness","Laurence Olivier"],"b","Albert Finney tient le rôle de Poirot dans le film de 1974 et reçoit une nomination à l’Oscar pour cette interprétation."],
    ["Qui réalise le film Le Crime de l’Orient-Express de 2017 et y interprète également Poirot ?",["Ridley Scott","Tom Hooper","Sam Mendes","Kenneth Branagh"],"d","Kenneth Branagh assure à la fois la réalisation du film de 2017 et le rôle du détective belge."]
]`,
) as PoirotQuestionData[];

const poirotQuestions: Question[] = poirotQuestionData.map(
    ([prompt, labels, correctOption, explanation], index) => {
        const id = `hercule-poirot-${String(index + 1).padStart(3, "0")}`;

        return {
            id,
            prompt,
            options: [
                { id: `${id}-a`, label: labels[0] },
                { id: `${id}-b`, label: labels[1] },
                { id: `${id}-c`, label: labels[2] },
                { id: `${id}-d`, label: labels[3] },
            ],
            correctOptionId: `${id}-${correctOption}`,
            explanation,
        };
    },
);

export const herculePoirotCategory: QuestionCategory = {
    id: "category-hercule-poirot",
    slug: "hercule-poirot",
    title: "Hercule Poirot",
    description:
        "Explorez les enquêtes, les proches et les adaptations du célèbre détective belge créé par Agatha Christie.",
    questions: poirotQuestions,
};
