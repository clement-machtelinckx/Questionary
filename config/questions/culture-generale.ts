import type { QuestionCategory } from "./types";

export const cultureGeneraleCategory: QuestionCategory = {
    id: "category-general-knowledge",
    slug: "culture-generale",
    title: "Culture générale",
    description: "Quelques questions simples pour tester vos connaissances.",
    questions: [
        {
            id: "general-henri-iv-01",
            prompt: "Quelle est la couleur du cheval blanc d’Henri IV ?",
            options: [
                { id: "general-henri-iv-black", label: "Noir" },
                { id: "general-henri-iv-white", label: "Blanc" },
                { id: "general-henri-iv-brown", label: "Marron" },
                { id: "general-henri-iv-grey", label: "Gris" },
            ],
            correctOptionId: "general-henri-iv-white",
            explanation:
                "La formulation donne elle-même l’indice : le célèbre cheval associé à Henri IV est décrit comme blanc.",
        },
        {
            id: "general-france-capital-02",
            prompt: "Quelle est la capitale de la France ?",
            options: [
                { id: "general-france-capital-lyon", label: "Lyon" },
                { id: "general-france-capital-paris", label: "Paris" },
                { id: "general-france-capital-lille", label: "Lille" },
                { id: "general-france-capital-bordeaux", label: "Bordeaux" },
            ],
            correctOptionId: "general-france-capital-paris",
            explanation:
                "Paris accueille notamment la présidence, le Parlement et de nombreuses institutions nationales françaises.",
        },
        {
            id: "general-pacific-ocean-03",
            prompt: "Quel est le plus vaste océan du monde ?",
            options: [
                { id: "general-pacific-ocean-atlantic", label: "L’océan Atlantique" },
                { id: "general-pacific-ocean-indian", label: "L’océan Indien" },
                { id: "general-pacific-ocean-pacific", label: "L’océan Pacifique" },
                { id: "general-pacific-ocean-arctic", label: "L’océan Arctique" },
            ],
            correctOptionId: "general-pacific-ocean-pacific",
            explanation:
                "L’océan Pacifique couvre environ un tiers de la surface de la Terre, ce qui en fait le plus vaste.",
        },
        {
            id: "general-les-miserables-author-04",
            prompt: "Qui a écrit le roman « Les Misérables » ?",
            options: [
                { id: "general-les-miserables-moliere", label: "Molière" },
                { id: "general-les-miserables-hugo", label: "Victor Hugo" },
                { id: "general-les-miserables-verne", label: "Jules Verne" },
                { id: "general-les-miserables-zola", label: "Émile Zola" },
            ],
            correctOptionId: "general-les-miserables-hugo",
            explanation:
                "Victor Hugo a publié Les Misérables en 1862, après de nombreuses années de travail.",
        },
        {
            id: "general-roman-numeral-x-05",
            prompt: "Quelle valeur représente le chiffre romain X ?",
            options: [
                { id: "general-roman-numeral-x-five", label: "5" },
                { id: "general-roman-numeral-x-ten", label: "10" },
                { id: "general-roman-numeral-x-fifty", label: "50" },
                { id: "general-roman-numeral-x-hundred", label: "100" },
            ],
            correctOptionId: "general-roman-numeral-x-ten",
            explanation: "Dans la numération romaine, X vaut 10, tandis que V vaut 5 et L vaut 50.",
        },
        {
            id: "general-japan-currency-06",
            prompt: "Quelle est la monnaie officielle du Japon ?",
            options: [
                { id: "general-japan-currency-won", label: "Le won" },
                { id: "general-japan-currency-yuan", label: "Le yuan" },
                { id: "general-japan-currency-yen", label: "Le yen" },
                { id: "general-japan-currency-rupee", label: "La roupie" },
            ],
            correctOptionId: "general-japan-currency-yen",
            explanation:
                "Le yen est la monnaie japonaise ; son symbole international est ¥ et son code est JPY.",
        },
        {
            id: "general-brazil-language-07",
            prompt: "Quelle est la langue officielle du Brésil ?",
            options: [
                { id: "general-brazil-language-spanish", label: "L’espagnol" },
                { id: "general-brazil-language-portuguese", label: "Le portugais" },
                { id: "general-brazil-language-french", label: "Le français" },
                { id: "general-brazil-language-english", label: "L’anglais" },
            ],
            correctOptionId: "general-brazil-language-portuguese",
            explanation:
                "Le Brésil a été une colonie portugaise, ce qui explique que le portugais y soit la langue officielle.",
        },
        {
            id: "general-mona-lisa-painter-08",
            prompt: "Quel artiste a peint La Joconde ?",
            options: [
                { id: "general-mona-lisa-michelangelo", label: "Michel-Ange" },
                { id: "general-mona-lisa-leonardo", label: "Léonard de Vinci" },
                { id: "general-mona-lisa-raphael", label: "Raphaël" },
                { id: "general-mona-lisa-botticelli", label: "Sandro Botticelli" },
            ],
            correctOptionId: "general-mona-lisa-leonardo",
            explanation:
                "Léonard de Vinci a peint La Joconde au début du XVIe siècle ; elle est aujourd’hui exposée au Louvre.",
        },
        {
            id: "general-chess-pieces-09",
            prompt: "Combien de pièces chaque joueur possède-t-il au début d’une partie d’échecs ?",
            options: [
                { id: "general-chess-pieces-twelve", label: "12" },
                { id: "general-chess-pieces-fourteen", label: "14" },
                { id: "general-chess-pieces-sixteen", label: "16" },
                { id: "general-chess-pieces-eighteen", label: "18" },
            ],
            correctOptionId: "general-chess-pieces-sixteen",
            explanation:
                "Chaque camp commence avec huit pions et huit autres pièces, soit seize pièces au total.",
        },
        {
            id: "general-leap-year-days-10",
            prompt: "Combien de jours compte une année bissextile ?",
            options: [
                { id: "general-leap-year-days-364", label: "364" },
                { id: "general-leap-year-days-365", label: "365" },
                { id: "general-leap-year-days-366", label: "366" },
                { id: "general-leap-year-days-367", label: "367" },
            ],
            correctOptionId: "general-leap-year-days-366",
            explanation:
                "Une année bissextile ajoute un 29 février au calendrier et compte donc 366 jours.",
        },
        {
            id: "general-rosetta-hieroglyphs-11",
            prompt: "Quel système d’écriture la pierre de Rosette a-t-elle notamment aidé à déchiffrer ?",
            options: [
                { id: "general-rosetta-hieroglyphs-11-a", label: "Les hiéroglyphes égyptiens" },
                { id: "general-rosetta-hieroglyphs-11-b", label: "L’écriture cunéiforme" },
                { id: "general-rosetta-hieroglyphs-11-c", label: "L’alphabet phénicien" },
                { id: "general-rosetta-hieroglyphs-11-d", label: "Les quipus incas" },
            ],
            correctOptionId: "general-rosetta-hieroglyphs-11-a",
            explanation:
                "La présence d’un même décret en grec ancien, en démotique et en hiéroglyphes a fourni une clé décisive pour comprendre l’écriture de l’Égypte ancienne.",
        },
        {
            id: "general-mansa-musa-empire-12",
            prompt: "Mansa Moussa a régné au XIVe siècle sur quel empire d’Afrique de l’Ouest ?",
            options: [
                { id: "general-mansa-musa-empire-12-a", label: "L’empire du Mali" },
                { id: "general-mansa-musa-empire-12-b", label: "L’empire du Ghana" },
                { id: "general-mansa-musa-empire-12-c", label: "L’empire songhaï" },
                { id: "general-mansa-musa-empire-12-d", label: "L’empire du Kanem-Bornou" },
            ],
            correctOptionId: "general-mansa-musa-empire-12-a",
            explanation:
                "Le règne de Mansa Moussa correspond à une période de grande prospérité de l’empire du Mali, notamment grâce au commerce de l’or.",
        },
        {
            id: "general-tordesillas-crowns-13",
            prompt: "Le traité de Tordesillas de 1494 partageait des zones d’expansion entre quelles puissances ?",
            options: [
                { id: "general-tordesillas-crowns-13-a", label: "La France et l’Angleterre" },
                { id: "general-tordesillas-crowns-13-b", label: "Venise et Gênes" },
                {
                    id: "general-tordesillas-crowns-13-c",
                    label: "Les Provinces-Unies et le Danemark",
                },
                { id: "general-tordesillas-crowns-13-d", label: "Le Portugal et la Castille" },
            ],
            correctOptionId: "general-tordesillas-crowns-13-d",
            explanation:
                "Le traité a établi une ligne de partage des terres à conquérir entre la couronne portugaise et la couronne de Castille.",
        },
        {
            id: "general-hagia-sophia-city-14",
            prompt: "Dans quelle ville se trouve Sainte-Sophie, monument successivement basilique, mosquée et musée ?",
            options: [
                { id: "general-hagia-sophia-city-14-a", label: "Athènes" },
                { id: "general-hagia-sophia-city-14-b", label: "Alexandrie" },
                { id: "general-hagia-sophia-city-14-c", label: "Tbilissi" },
                { id: "general-hagia-sophia-city-14-d", label: "Istanbul" },
            ],
            correctOptionId: "general-hagia-sophia-city-14-d",
            explanation:
                "Édifiée dans l’ancienne Constantinople, Sainte-Sophie se situe aujourd’hui à Istanbul, sur la rive européenne du Bosphore.",
        },
        {
            id: "general-gilgamesh-uruk-15",
            prompt: "Quel héros mésopotamien est présenté comme roi d’Uruk dans une célèbre épopée antique ?",
            options: [
                { id: "general-gilgamesh-uruk-15-a", label: "Sargon" },
                { id: "general-gilgamesh-uruk-15-b", label: "Hammurabi" },
                { id: "general-gilgamesh-uruk-15-c", label: "Gilgamesh" },
                { id: "general-gilgamesh-uruk-15-d", label: "Assurbanipal" },
            ],
            correctOptionId: "general-gilgamesh-uruk-15-c",
            explanation:
                "L’Épopée de Gilgamesh raconte les exploits et la quête de sens d’un roi légendaire associé à la cité d’Uruk.",
        },
        {
            id: "general-fiji-capital-16",
            prompt: "Quelle est la capitale des Fidji ?",
            options: [
                { id: "general-fiji-capital-16-a", label: "Suva" },
                { id: "general-fiji-capital-16-b", label: "Nadi" },
                { id: "general-fiji-capital-16-c", label: "Lautoka" },
                { id: "general-fiji-capital-16-d", label: "Apia" },
            ],
            correctOptionId: "general-fiji-capital-16-a",
            explanation:
                "Suva se trouve sur l’île de Viti Levu et constitue le principal centre politique et administratif de l’archipel fidjien.",
        },
        {
            id: "general-baghdad-river-17",
            prompt: "Quel fleuve traverse la ville de Bagdad ?",
            options: [
                { id: "general-baghdad-river-17-a", label: "Le Tigre" },
                { id: "general-baghdad-river-17-b", label: "L’Euphrate" },
                { id: "general-baghdad-river-17-c", label: "Le Jourdain" },
                { id: "general-baghdad-river-17-d", label: "L’Oronte" },
            ],
            correctOptionId: "general-baghdad-river-17-a",
            explanation:
                "Bagdad s’est développée sur les rives du Tigre, l’un des deux grands fleuves de la Mésopotamie avec l’Euphrate.",
        },
        {
            id: "general-madagascar-location-18",
            prompt: "Quelle grande île se trouve dans l’océan Indien, à l’est du Mozambique ?",
            options: [
                { id: "general-madagascar-location-18-a", label: "Madagascar" },
                { id: "general-madagascar-location-18-b", label: "Sri Lanka" },
                { id: "general-madagascar-location-18-c", label: "Sumatra" },
                { id: "general-madagascar-location-18-d", label: "La Tasmanie" },
            ],
            correctOptionId: "general-madagascar-location-18-a",
            explanation:
                "Madagascar est séparée du continent africain par le canal du Mozambique et possède une biodiversité très originale.",
        },
        {
            id: "general-titicaca-countries-19",
            prompt: "Le lac Titicaca s’étend à la frontière de quels deux pays ?",
            options: [
                { id: "general-titicaca-countries-19-a", label: "Le Chili et l’Argentine" },
                { id: "general-titicaca-countries-19-b", label: "L’Équateur et la Colombie" },
                { id: "general-titicaca-countries-19-c", label: "Le Pérou et la Bolivie" },
                { id: "general-titicaca-countries-19-d", label: "Le Brésil et le Paraguay" },
            ],
            correctOptionId: "general-titicaca-countries-19-c",
            explanation:
                "Situé dans l’Altiplano andin, le lac Titicaca est partagé entre le sud-est du Pérou et l’ouest de la Bolivie.",
        },
        {
            id: "general-largest-desert-20",
            prompt: "Quel est le plus vaste désert du monde si l’on retient le critère des faibles précipitations ?",
            options: [
                { id: "general-largest-desert-20-a", label: "Le Sahara" },
                { id: "general-largest-desert-20-b", label: "Le désert de Gobi" },
                { id: "general-largest-desert-20-c", label: "L’Antarctique" },
                { id: "general-largest-desert-20-d", label: "Le désert d’Arabie" },
            ],
            correctOptionId: "general-largest-desert-20-c",
            explanation:
                "Un désert se définit par son aridité et non par sa chaleur ; l’Antarctique est donc le plus vaste désert de la planète.",
        },
        {
            id: "general-element-symbol-sn-21",
            prompt: "Quel élément chimique a pour symbole « Sn » ?",
            options: [
                { id: "general-element-symbol-sn-21-a", label: "Le soufre" },
                { id: "general-element-symbol-sn-21-b", label: "L’étain" },
                { id: "general-element-symbol-sn-21-c", label: "Le sodium" },
                { id: "general-element-symbol-sn-21-d", label: "Le silicium" },
            ],
            correctOptionId: "general-element-symbol-sn-21-b",
            explanation:
                "Le symbole Sn vient du latin stannum, nom ancien de l’étain, un métal utilisé notamment dans les alliages.",
        },
        {
            id: "general-shortest-planetary-day-22",
            prompt: "Quelle planète possède le jour le plus court du Système solaire ?",
            options: [
                { id: "general-shortest-planetary-day-22-a", label: "Mars" },
                { id: "general-shortest-planetary-day-22-b", label: "Jupiter" },
                { id: "general-shortest-planetary-day-22-c", label: "Saturne" },
                { id: "general-shortest-planetary-day-22-d", label: "Mercure" },
            ],
            correctOptionId: "general-shortest-planetary-day-22-b",
            explanation:
                "Jupiter effectue une rotation sur elle-même en environ dix heures, plus rapidement que toute autre planète.",
        },
        {
            id: "general-arteries-direction-23",
            prompt: "Dans la circulation sanguine, quelle caractéristique définit une artère ?",
            options: [
                {
                    id: "general-arteries-direction-23-a",
                    label: "Elle conduit le sang en s’éloignant du cœur",
                },
                {
                    id: "general-arteries-direction-23-b",
                    label: "Elle transporte toujours du sang riche en dioxygène",
                },
                {
                    id: "general-arteries-direction-23-c",
                    label: "Elle relie directement deux veines",
                },
                {
                    id: "general-arteries-direction-23-d",
                    label: "Elle ne possède aucune paroi musculaire",
                },
            ],
            correctOptionId: "general-arteries-direction-23-a",
            explanation:
                "Une artère est définie par le sens du flux, du cœur vers les organes ; l’artère pulmonaire transporte ainsi un sang pauvre en dioxygène.",
        },
        {
            id: "general-mohs-hardness-ten-24",
            prompt: "Quel minéral sert de référence au niveau 10, le plus élevé, sur l’échelle de Mohs ?",
            options: [
                { id: "general-mohs-hardness-ten-24-a", label: "Le quartz" },
                { id: "general-mohs-hardness-ten-24-b", label: "Le corindon" },
                { id: "general-mohs-hardness-ten-24-c", label: "Le diamant" },
                { id: "general-mohs-hardness-ten-24-d", label: "La topaze" },
            ],
            correctOptionId: "general-mohs-hardness-ten-24-c",
            explanation:
                "L’échelle de Mohs classe les minéraux selon leur résistance aux rayures ; le diamant y occupe le niveau 10.",
        },
        {
            id: "general-axolotl-origin-25",
            prompt: "De quelle région l’axolotl sauvage est-il originaire ?",
            options: [
                { id: "general-axolotl-origin-25-a", label: "Des marais du bassin du Congo" },
                { id: "general-axolotl-origin-25-b", label: "Des rivières de Tasmanie" },
                {
                    id: "general-axolotl-origin-25-c",
                    label: "Des lacs et canaux de la vallée de Mexico",
                },
                { id: "general-axolotl-origin-25-d", label: "Des mangroves du Bengale" },
            ],
            correctOptionId: "general-axolotl-origin-25-c",
            explanation:
                "L’axolotl est endémique de la vallée de Mexico et subsiste surtout dans le réseau de canaux de Xochimilco.",
        },
        {
            id: "general-monarch-overwintering-26",
            prompt: "Où se regroupent de nombreux papillons monarques d’Amérique du Nord pendant l’hiver ?",
            options: [
                { id: "general-monarch-overwintering-26-a", label: "Dans la forêt amazonienne" },
                { id: "general-monarch-overwintering-26-b", label: "Sur les côtes de Terre-Neuve" },
                {
                    id: "general-monarch-overwintering-26-c",
                    label: "Dans les forêts montagneuses du centre du Mexique",
                },
                {
                    id: "general-monarch-overwintering-26-d",
                    label: "Dans les Everglades de Floride",
                },
            ],
            correctOptionId: "general-monarch-overwintering-26-c",
            explanation:
                "Après une longue migration, des millions de monarques hivernent dans des forêts d’altitude principalement situées au Michoacán et dans l’État de Mexico.",
        },
        {
            id: "general-solitude-author-27",
            prompt: "Qui a écrit le roman « Cent ans de solitude » ?",
            options: [
                { id: "general-solitude-author-27-a", label: "Jorge Luis Borges" },
                { id: "general-solitude-author-27-b", label: "Mario Vargas Llosa" },
                { id: "general-solitude-author-27-c", label: "Gabriel García Márquez" },
                { id: "general-solitude-author-27-d", label: "Pablo Neruda" },
            ],
            correctOptionId: "general-solitude-author-27-c",
            explanation:
                "Publié en 1967, ce roman de Gabriel García Márquez raconte plusieurs générations de la famille Buendía dans la ville fictive de Macondo.",
        },
        {
            id: "general-haiku-origin-28",
            prompt: "Dans quel pays la forme poétique du haïku s’est-elle développée ?",
            options: [
                { id: "general-haiku-origin-28-a", label: "La Chine" },
                { id: "general-haiku-origin-28-b", label: "La Corée" },
                { id: "general-haiku-origin-28-c", label: "Le Vietnam" },
                { id: "general-haiku-origin-28-d", label: "Le Japon" },
            ],
            correctOptionId: "general-haiku-origin-28-d",
            explanation:
                "Le haïku japonais privilégie une expression très concise, souvent liée à une saison ou à une observation de la nature.",
        },
        {
            id: "general-cyrano-playwright-29",
            prompt: "Quel dramaturge a écrit « Cyrano de Bergerac » ?",
            options: [
                { id: "general-cyrano-playwright-29-a", label: "Edmond Rostand" },
                { id: "general-cyrano-playwright-29-b", label: "Alfred de Musset" },
                { id: "general-cyrano-playwright-29-c", label: "Eugène Ionesco" },
                { id: "general-cyrano-playwright-29-d", label: "Jean Giraudoux" },
            ],
            correctOptionId: "general-cyrano-playwright-29-a",
            explanation:
                "Edmond Rostand a fait représenter cette pièce en 1897 ; son héros mêle bravoure, éloquence et amour impossible.",
        },
        {
            id: "general-sumo-country-30",
            prompt: "Dans quel pays le sumo s’est-il développé comme sport traditionnel ?",
            options: [
                { id: "general-sumo-country-30-a", label: "La Mongolie" },
                { id: "general-sumo-country-30-b", label: "Le Japon" },
                { id: "general-sumo-country-30-c", label: "La Corée du Sud" },
                { id: "general-sumo-country-30-d", label: "La Chine" },
            ],
            correctOptionId: "general-sumo-country-30-b",
            explanation:
                "Le sumo est profondément lié à l’histoire et aux rites japonais, même si des lutteurs étrangers participent aujourd’hui aux compétitions.",
        },
        {
            id: "general-great-wave-artist-31",
            prompt: "Quel artiste japonais a créé l’estampe « La Grande Vague de Kanagawa » ?",
            options: [
                { id: "general-great-wave-artist-31-a", label: "Utagawa Hiroshige" },
                { id: "general-great-wave-artist-31-b", label: "Kitagawa Utamaro" },
                { id: "general-great-wave-artist-31-c", label: "Tōshūsai Sharaku" },
                { id: "general-great-wave-artist-31-d", label: "Katsushika Hokusai" },
            ],
            correctOptionId: "general-great-wave-artist-31-d",
            explanation:
                "Cette estampe de Hokusai appartient à la série des Trente-six vues du mont Fuji, réalisée durant l’époque d’Edo.",
        },
        {
            id: "general-guernica-painter-32",
            prompt: "Quel peintre a réalisé « Guernica » en réaction au bombardement de la ville basque en 1937 ?",
            options: [
                { id: "general-guernica-painter-32-a", label: "Joan Miró" },
                { id: "general-guernica-painter-32-b", label: "Salvador Dalí" },
                { id: "general-guernica-painter-32-c", label: "Diego Rivera" },
                { id: "general-guernica-painter-32-d", label: "Pablo Picasso" },
            ],
            correctOptionId: "general-guernica-painter-32-d",
            explanation:
                "Picasso a peint cette vaste toile pour le pavillon espagnol de l’Exposition internationale de Paris de 1937.",
        },
        {
            id: "general-thinker-sculptor-33",
            prompt: "Quel sculpteur est l’auteur du « Penseur » ?",
            options: [
                { id: "general-thinker-sculptor-33-a", label: "Aristide Maillol" },
                { id: "general-thinker-sculptor-33-b", label: "Auguste Rodin" },
                { id: "general-thinker-sculptor-33-c", label: "Antoine Bourdelle" },
                { id: "general-thinker-sculptor-33-d", label: "Constantin Brâncuși" },
            ],
            correctOptionId: "general-thinker-sculptor-33-b",
            explanation:
                "Rodin avait d’abord conçu cette figure pour La Porte de l’Enfer avant qu’elle ne devienne une œuvre autonome.",
        },
        {
            id: "general-bolero-composer-34",
            prompt: "Quel compositeur français a écrit le « Boléro » créé en 1928 ?",
            options: [
                { id: "general-bolero-composer-34-a", label: "Claude Debussy" },
                { id: "general-bolero-composer-34-b", label: "Erik Satie" },
                { id: "general-bolero-composer-34-c", label: "Maurice Ravel" },
                { id: "general-bolero-composer-34-d", label: "Gabriel Fauré" },
            ],
            correctOptionId: "general-bolero-composer-34-c",
            explanation:
                "Le Boléro de Ravel repose sur la répétition d’un thème et une orchestration qui gagne progressivement en intensité.",
        },
        {
            id: "general-gamelan-country-35",
            prompt: "À quel pays associe-t-on principalement les orchestres de gamelan ?",
            options: [
                { id: "general-gamelan-country-35-a", label: "L’Inde" },
                { id: "general-gamelan-country-35-b", label: "L’Indonésie" },
                { id: "general-gamelan-country-35-c", label: "La Thaïlande" },
                { id: "general-gamelan-country-35-d", label: "Les Philippines" },
            ],
            correctOptionId: "general-gamelan-country-35-b",
            explanation:
                "Les ensembles de gamelan, dominés par des métallophones et des gongs, sont particulièrement importants à Java et à Bali.",
        },
        {
            id: "general-jazz-birthplace-36",
            prompt: "Quelle ville américaine est généralement considérée comme le berceau du jazz ?",
            options: [
                { id: "general-jazz-birthplace-36-a", label: "Chicago" },
                { id: "general-jazz-birthplace-36-b", label: "La Nouvelle-Orléans" },
                { id: "general-jazz-birthplace-36-c", label: "New York" },
                { id: "general-jazz-birthplace-36-d", label: "Memphis" },
            ],
            correctOptionId: "general-jazz-birthplace-36-b",
            explanation:
                "Au début du XXe siècle, La Nouvelle-Orléans a favorisé la rencontre de traditions africaines, européennes et caribéennes qui ont nourri le jazz.",
        },
        {
            id: "general-modern-times-film-37",
            prompt: "Dans quel film Charlie Chaplin montre-t-il Charlot pris dans les engrenages d’une usine ?",
            options: [
                { id: "general-modern-times-film-37-a", label: "Le Dictateur" },
                { id: "general-modern-times-film-37-b", label: "Les Temps modernes" },
                { id: "general-modern-times-film-37-c", label: "Les Lumières de la ville" },
                { id: "general-modern-times-film-37-d", label: "La Ruée vers l’or" },
            ],
            correctOptionId: "general-modern-times-film-37-b",
            explanation:
                "Sorti en 1936, Les Temps modernes critique avec humour le travail à la chaîne et la mécanisation de la société industrielle.",
        },
        {
            id: "general-sembene-film-38",
            prompt: "Quel cinéaste sénégalais a réalisé « La Noire de... », sorti en 1966 ?",
            options: [
                { id: "general-sembene-film-38-a", label: "Djibril Diop Mambéty" },
                { id: "general-sembene-film-38-b", label: "Souleymane Cissé" },
                { id: "general-sembene-film-38-c", label: "Med Hondo" },
                { id: "general-sembene-film-38-d", label: "Ousmane Sembène" },
            ],
            correctOptionId: "general-sembene-film-38-d",
            explanation:
                "Ousmane Sembène, également écrivain, est une figure majeure du cinéma africain et a réalisé La Noire de... à partir de sa propre nouvelle.",
        },
        {
            id: "general-godot-playwright-39",
            prompt: "Quel auteur a écrit la pièce « En attendant Godot » ?",
            options: [
                { id: "general-godot-playwright-39-a", label: "Bertolt Brecht" },
                { id: "general-godot-playwright-39-b", label: "Harold Pinter" },
                { id: "general-godot-playwright-39-c", label: "Luigi Pirandello" },
                { id: "general-godot-playwright-39-d", label: "Samuel Beckett" },
            ],
            correctOptionId: "general-godot-playwright-39-d",
            explanation:
                "Samuel Beckett a d’abord rédigé la pièce en français ; elle a été créée à Paris en 1953.",
        },
        {
            id: "general-clio-domain-40",
            prompt: "Dans la mythologie grecque, de quel domaine Clio est-elle la muse ?",
            options: [
                { id: "general-clio-domain-40-a", label: "La danse" },
                { id: "general-clio-domain-40-b", label: "L’histoire" },
                { id: "general-clio-domain-40-c", label: "L’astronomie" },
                { id: "general-clio-domain-40-d", label: "La poésie amoureuse" },
            ],
            correctOptionId: "general-clio-domain-40-b",
            explanation:
                "Clio est traditionnellement la muse de l’histoire, tandis que Terpsichore est associée à la danse et Uranie à l’astronomie.",
        },
        {
            id: "general-yggdrasil-role-41",
            prompt: "Dans la mythologie nordique, qu’est-ce qu’Yggdrasil ?",
            options: [
                { id: "general-yggdrasil-role-41-a", label: "L’arbre cosmique reliant les mondes" },
                { id: "general-yggdrasil-role-41-b", label: "Le marteau de Thor" },
                { id: "general-yggdrasil-role-41-c", label: "Le navire des morts" },
                { id: "general-yggdrasil-role-41-d", label: "Le palais d’Odin" },
            ],
            correctOptionId: "general-yggdrasil-role-41-a",
            explanation:
                "Yggdrasil est un frêne immense autour duquel s’organisent les différents mondes de la cosmologie nordique.",
        },
        {
            id: "general-quetzalcoatl-form-42",
            prompt: "Chez les Aztèques, Quetzalcóatl est souvent représenté sous quelle forme ?",
            options: [
                { id: "general-quetzalcoatl-form-42-a", label: "Un jaguar à deux têtes" },
                { id: "general-quetzalcoatl-form-42-b", label: "Un serpent à plumes" },
                { id: "general-quetzalcoatl-form-42-c", label: "Un aigle de feu" },
                { id: "general-quetzalcoatl-form-42-d", label: "Un cerf ailé" },
            ],
            correctOptionId: "general-quetzalcoatl-form-42-b",
            explanation:
                "Le nom nahuatl Quetzalcóatl associe le quetzal, oiseau aux plumes précieuses, et cóatl, le serpent.",
        },
        {
            id: "general-cave-philosopher-43",
            prompt: "Quel philosophe expose l’allégorie de la caverne dans « La République » ?",
            options: [
                { id: "general-cave-philosopher-43-a", label: "Aristote" },
                { id: "general-cave-philosopher-43-b", label: "Platon" },
                { id: "general-cave-philosopher-43-c", label: "Épicure" },
                { id: "general-cave-philosopher-43-d", label: "Zénon de Kition" },
            ],
            correctOptionId: "general-cave-philosopher-43-b",
            explanation:
                "Platon utilise cette allégorie pour interroger le passage des apparences sensibles à la connaissance intelligible.",
        },
        {
            id: "general-cogito-philosopher-44",
            prompt: "Quel philosophe est associé à la formule latine « Cogito, ergo sum » ?",
            options: [
                { id: "general-cogito-philosopher-44-a", label: "Baruch Spinoza" },
                { id: "general-cogito-philosopher-44-b", label: "Blaise Pascal" },
                { id: "general-cogito-philosopher-44-c", label: "René Descartes" },
                { id: "general-cogito-philosopher-44-d", label: "John Locke" },
            ],
            correctOptionId: "general-cogito-philosopher-44-c",
            explanation:
                "La formule signifie « Je pense, donc je suis » et résume le point de départ de la démarche philosophique de Descartes.",
        },
        {
            id: "general-categorical-imperative-45",
            prompt: "À quel philosophe doit-on la notion d’impératif catégorique ?",
            options: [
                { id: "general-categorical-imperative-45-a", label: "Emmanuel Kant" },
                { id: "general-categorical-imperative-45-b", label: "David Hume" },
                { id: "general-categorical-imperative-45-c", label: "Friedrich Nietzsche" },
                { id: "general-categorical-imperative-45-d", label: "Jean-Jacques Rousseau" },
            ],
            correctOptionId: "general-categorical-imperative-45-a",
            explanation:
                "Kant présente l’impératif catégorique comme un principe moral valable indépendamment des intérêts ou des conséquences particulières.",
        },
        {
            id: "general-zhang-heng-seismoscope-46",
            prompt: "Quel savant chinois du IIe siècle est associé à l’invention d’un ancien sismoscope ?",
            options: [
                { id: "general-zhang-heng-seismoscope-46-a", label: "Shen Kuo" },
                { id: "general-zhang-heng-seismoscope-46-b", label: "Bi Sheng" },
                { id: "general-zhang-heng-seismoscope-46-c", label: "Zhang Heng" },
                { id: "general-zhang-heng-seismoscope-46-d", label: "Zu Chongzhi" },
            ],
            correctOptionId: "general-zhang-heng-seismoscope-46-c",
            explanation:
                "Zhang Heng a décrit un dispositif capable d’indiquer la direction d’un séisme lointain grâce à un mécanisme interne.",
        },
        {
            id: "general-velcro-inspiration-47",
            prompt: "Quelle plante a inspiré le système d’accrochage du Velcro grâce à ses petits crochets ?",
            options: [
                { id: "general-velcro-inspiration-47-a", label: "Le pissenlit" },
                { id: "general-velcro-inspiration-47-b", label: "La fougère" },
                { id: "general-velcro-inspiration-47-c", label: "Le trèfle" },
                { id: "general-velcro-inspiration-47-d", label: "La bardane" },
            ],
            correctOptionId: "general-velcro-inspiration-47-d",
            explanation:
                "George de Mestral observa au microscope les fruits de bardane accrochés aux vêtements et aux poils, puis imita leur structure de crochets.",
        },
        {
            id: "general-sagrada-architect-48",
            prompt: "Quel architecte a consacré une grande partie de sa carrière à la Sagrada Família de Barcelone ?",
            options: [
                { id: "general-sagrada-architect-48-a", label: "Lluís Domènech i Montaner" },
                { id: "general-sagrada-architect-48-b", label: "Antoni Gaudí" },
                { id: "general-sagrada-architect-48-c", label: "Santiago Calatrava" },
                { id: "general-sagrada-architect-48-d", label: "Ricardo Bofill" },
            ],
            correctOptionId: "general-sagrada-architect-48-b",
            explanation:
                "Gaudí a dirigé le projet à partir de 1883 et y a développé une architecture mêlant géométrie, symbolisme et formes inspirées de la nature.",
        },
        {
            id: "general-taj-mahal-material-49",
            prompt: "Quel matériau donne au Taj Mahal son aspect blanc caractéristique ?",
            options: [
                { id: "general-taj-mahal-material-49-a", label: "Le marbre" },
                { id: "general-taj-mahal-material-49-b", label: "Le granit" },
                { id: "general-taj-mahal-material-49-c", label: "Le calcaire" },
                { id: "general-taj-mahal-material-49-d", label: "L’albâtre" },
            ],
            correctOptionId: "general-taj-mahal-material-49-a",
            explanation:
                "Le mausolée principal est revêtu de marbre blanc, décoré d’incrustations de pierres colorées selon la technique du parchin kari.",
        },
        {
            id: "general-sydney-opera-architect-50",
            prompt: "Quel architecte danois a conçu l’Opéra de Sydney ?",
            options: [
                { id: "general-sydney-opera-architect-50-a", label: "Arne Jacobsen" },
                { id: "general-sydney-opera-architect-50-b", label: "Alvar Aalto" },
                { id: "general-sydney-opera-architect-50-c", label: "Eero Saarinen" },
                { id: "general-sydney-opera-architect-50-d", label: "Jørn Utzon" },
            ],
            correctOptionId: "general-sydney-opera-architect-50-d",
            explanation:
                "Jørn Utzon a remporté le concours international lancé pour l’édifice en 1957, grâce à son projet aux célèbres coques.",
        },
        {
            id: "general-miso-base-51",
            prompt: "Quel ingrédient constitue généralement la base du miso japonais ?",
            options: [
                { id: "general-miso-base-51-a", label: "Le soja fermenté" },
                { id: "general-miso-base-51-b", label: "Le riz soufflé" },
                { id: "general-miso-base-51-c", label: "Le poisson séché" },
                { id: "general-miso-base-51-d", label: "Le sarrasin grillé" },
            ],
            correctOptionId: "general-miso-base-51-a",
            explanation:
                "Le miso est une pâte fermentée obtenue le plus souvent à partir de soja, de sel et de kōji, parfois avec du riz ou de l’orge.",
        },
        {
            id: "general-couscous-region-52",
            prompt: "À quelle région le couscous est-il historiquement associé ?",
            options: [
                { id: "general-couscous-region-52-a", label: "La Scandinavie" },
                { id: "general-couscous-region-52-b", label: "L’Asie centrale" },
                { id: "general-couscous-region-52-c", label: "Les Andes" },
                { id: "general-couscous-region-52-d", label: "L’Afrique du Nord" },
            ],
            correctOptionId: "general-couscous-region-52-d",
            explanation:
                "Le couscous appartient aux traditions culinaires du Maghreb et repose sur de la semoule travaillée en petits grains.",
        },
        {
            id: "general-ceviche-acid-53",
            prompt: "Quel ingrédient acide est essentiel à la préparation traditionnelle d’un ceviche ?",
            options: [
                { id: "general-ceviche-acid-53-a", label: "Le vinaigre balsamique" },
                { id: "general-ceviche-acid-53-b", label: "Le yaourt" },
                { id: "general-ceviche-acid-53-c", label: "Le jus d’agrumes" },
                { id: "general-ceviche-acid-53-d", label: "Le bouillon de viande" },
            ],
            correctOptionId: "general-ceviche-acid-53-c",
            explanation:
                "Le poisson ou les fruits de mer sont mis au contact de jus de citron vert ou d’un autre agrume, dont l’acidité modifie les protéines.",
        },
        {
            id: "general-diwali-name-54",
            prompt: "Quelle fête d’Asie du Sud est couramment surnommée « la fête des lumières » ?",
            options: [
                { id: "general-diwali-name-54-a", label: "Holi" },
                { id: "general-diwali-name-54-b", label: "Diwali" },
                { id: "general-diwali-name-54-c", label: "Vesak" },
                { id: "general-diwali-name-54-d", label: "Nowruz" },
            ],
            correctOptionId: "general-diwali-name-54-b",
            explanation:
                "Diwali est célébrée par plusieurs traditions religieuses et se caractérise notamment par l’allumage de lampes appelées diyas.",
        },
        {
            id: "general-tea-ceremony-powder-55",
            prompt: "Quel thé en poudre est traditionnellement utilisé dans la cérémonie japonaise du thé ?",
            options: [
                { id: "general-tea-ceremony-powder-55-a", label: "Le sencha" },
                { id: "general-tea-ceremony-powder-55-b", label: "Le genmaicha" },
                { id: "general-tea-ceremony-powder-55-c", label: "Le matcha" },
                { id: "general-tea-ceremony-powder-55-d", label: "Le hōjicha" },
            ],
            correctOptionId: "general-tea-ceremony-powder-55-c",
            explanation:
                "Le matcha est fouetté avec de l’eau chaude plutôt qu’infusé en feuilles, ce qui produit une boisson verte et mousseuse.",
        },
        {
            id: "general-african-union-headquarters-56",
            prompt: "Dans quelle ville se trouve le siège de l’Union africaine ?",
            options: [
                { id: "general-african-union-headquarters-56-a", label: "Addis-Abeba" },
                { id: "general-african-union-headquarters-56-b", label: "Nairobi" },
                { id: "general-african-union-headquarters-56-c", label: "Dakar" },
                { id: "general-african-union-headquarters-56-d", label: "Pretoria" },
            ],
            correctOptionId: "general-african-union-headquarters-56-a",
            explanation:
                "Le siège de l’Union africaine est établi à Addis-Abeba, capitale de l’Éthiopie, qui accueille de nombreuses réunions continentales.",
        },
        {
            id: "general-icj-seat-57",
            prompt: "Dans quelle ville siège la Cour internationale de Justice ?",
            options: [
                { id: "general-icj-seat-57-a", label: "La Haye" },
                { id: "general-icj-seat-57-b", label: "Genève" },
                { id: "general-icj-seat-57-c", label: "Bruxelles" },
                { id: "general-icj-seat-57-d", label: "Vienne" },
            ],
            correctOptionId: "general-icj-seat-57-a",
            explanation:
                "La Cour internationale de Justice, principal organe judiciaire de l’ONU, siège au Palais de la Paix à La Haye.",
        },
        {
            id: "general-elcano-circumnavigation-58",
            prompt: "Quel navigateur a achevé en 1522 la première circumnavigation après la mort de Magellan ?",
            options: [
                { id: "general-elcano-circumnavigation-58-a", label: "Amerigo Vespucci" },
                { id: "general-elcano-circumnavigation-58-b", label: "Bartolomeu Dias" },
                { id: "general-elcano-circumnavigation-58-c", label: "Pedro Álvares Cabral" },
                { id: "general-elcano-circumnavigation-58-d", label: "Juan Sebastián Elcano" },
            ],
            correctOptionId: "general-elcano-circumnavigation-58-d",
            explanation:
                "Elcano ramena en Espagne le navire Victoria et les survivants de l’expédition commencée sous le commandement de Magellan.",
        },
        {
            id: "general-petra-civilization-59",
            prompt: "Quelle civilisation antique a fait de Pétra sa capitale et y a développé de nombreux monuments rupestres ?",
            options: [
                { id: "general-petra-civilization-59-a", label: "Les Hittites" },
                { id: "general-petra-civilization-59-b", label: "Les Nabatéens" },
                { id: "general-petra-civilization-59-c", label: "Les Phéniciens" },
                { id: "general-petra-civilization-59-d", label: "Les Parthes" },
            ],
            correctOptionId: "general-petra-civilization-59-b",
            explanation:
                "Pétra fut la capitale du royaume nabatéen et un important carrefour caravanier entre l’Arabie, l’Égypte et la Méditerranée.",
        },
        {
            id: "general-moai-people-60",
            prompt: "Quel peuple a sculpté les moaï de l’île de Pâques ?",
            options: [
                { id: "general-moai-people-60-a", label: "Les Maoris" },
                { id: "general-moai-people-60-b", label: "Les Samoans" },
                { id: "general-moai-people-60-c", label: "Les Chamorros" },
                { id: "general-moai-people-60-d", label: "Le peuple Rapa Nui" },
            ],
            correctOptionId: "general-moai-people-60-d",
            explanation:
                "Les moaï ont été sculptés par les habitants polynésiens de Rapa Nui, nom autochtone de l’île de Pâques.",
        },
    ],
};
