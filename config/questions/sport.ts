import type { QuestionCategory } from "./types";

export const sportCategory: QuestionCategory = {
    id: "category-sport",
    slug: "sport",
    title: "Sport",
    description:
        "Testez vos connaissances sur les règles, les disciplines, les compétitions et les grandes figures du sport.",
    questions: [
        {
            id: "sport-001",
            prompt: "Combien de joueurs une équipe de football aligne-t-elle au coup d’envoi ?",
            options: [
                { id: "sport-001-a", label: "10 joueurs" },
                { id: "sport-001-b", label: "11 joueurs" },
                { id: "sport-001-c", label: "12 joueurs" },
                { id: "sport-001-d", label: "9 joueurs" },
            ],
            correctOptionId: "sport-001-b",
            explanation:
                "Une équipe commence avec onze joueurs sur le terrain, dont un gardien de but.",
        },
        {
            id: "sport-002",
            prompt: "Combien d’anneaux composent le symbole olympique ?",
            options: [
                { id: "sport-002-a", label: "4 anneaux" },
                { id: "sport-002-b", label: "6 anneaux" },
                { id: "sport-002-c", label: "7 anneaux" },
                { id: "sport-002-d", label: "5 anneaux" },
            ],
            correctOptionId: "sport-002-d",
            explanation:
                "Les cinq anneaux entrelacés symbolisent l’universalité du mouvement olympique et la rencontre des athlètes.",
        },
        {
            id: "sport-003",
            prompt: "Combien de tournois composent le Grand Chelem de tennis ?",
            options: [
                { id: "sport-003-a", label: "4 tournois" },
                { id: "sport-003-b", label: "3 tournois" },
                { id: "sport-003-c", label: "5 tournois" },
                { id: "sport-003-d", label: "6 tournois" },
            ],
            correctOptionId: "sport-003-a",
            explanation:
                "Le Grand Chelem réunit l’Open d’Australie, Roland-Garros, Wimbledon et l’US Open.",
        },
        {
            id: "sport-004",
            prompt: "Combien de points vaut un lancer franc réussi au basketball ?",
            options: [
                { id: "sport-004-a", label: "3 points" },
                { id: "sport-004-b", label: "2 points" },
                { id: "sport-004-c", label: "1 point" },
                { id: "sport-004-d", label: "4 points" },
            ],
            correctOptionId: "sport-004-c",
            explanation:
                "Chaque lancer franc réussi rapporte un point et se tire depuis la ligne prévue à cet effet.",
        },
        {
            id: "sport-005",
            prompt: "Quelle est la distance officielle d’un marathon ?",
            options: [
                { id: "sport-005-a", label: "40 km" },
                { id: "sport-005-b", label: "42,195 km" },
                { id: "sport-005-c", label: "45 km" },
                { id: "sport-005-d", label: "50 km" },
            ],
            correctOptionId: "sport-005-b",
            explanation: "La distance officielle du marathon est de 42 kilomètres et 195 mètres.",
        },
        {
            id: "sport-006",
            prompt: "Combien de points rapporte un essai au rugby à XV ?",
            options: [
                { id: "sport-006-a", label: "5 points" },
                { id: "sport-006-b", label: "3 points" },
                { id: "sport-006-c", label: "4 points" },
                { id: "sport-006-d", label: "7 points" },
            ],
            correctOptionId: "sport-006-a",
            explanation:
                "Un essai vaut cinq points et peut être suivi d’une transformation valant deux points.",
        },
        {
            id: "sport-007",
            prompt: "Dans quelle discipline se dispute le Tour de France ?",
            options: [
                { id: "sport-007-a", label: "La course à pied" },
                { id: "sport-007-b", label: "Le sport automobile" },
                { id: "sport-007-c", label: "L’aviron" },
                { id: "sport-007-d", label: "Le cyclisme sur route" },
            ],
            correctOptionId: "sport-007-d",
            explanation:
                "Le Tour de France est une course cycliste par étapes organisée principalement sur les routes françaises.",
        },
        {
            id: "sport-008",
            prompt: "Combien de joueurs d’une équipe de volleyball sont présents sur le terrain ?",
            options: [
                { id: "sport-008-a", label: "5 joueurs" },
                { id: "sport-008-b", label: "7 joueurs" },
                { id: "sport-008-c", label: "6 joueurs" },
                { id: "sport-008-d", label: "8 joueurs" },
            ],
            correctOptionId: "sport-008-c",
            explanation:
                "Une équipe de volleyball aligne six joueurs, qui changent de position selon un ordre de rotation.",
        },
        {
            id: "sport-009",
            prompt: "Combien de joueurs une équipe de handball aligne-t-elle sur le terrain, gardien compris ?",
            options: [
                { id: "sport-009-a", label: "7 joueurs" },
                { id: "sport-009-b", label: "6 joueurs" },
                { id: "sport-009-c", label: "8 joueurs" },
                { id: "sport-009-d", label: "9 joueurs" },
            ],
            correctOptionId: "sport-009-a",
            explanation:
                "Une formation de handball à effectif complet comprend six joueurs de champ et un gardien.",
        },
        {
            id: "sport-010",
            prompt: "Combien de manches réglementaires compte un match de baseball, hors prolongation ?",
            options: [
                { id: "sport-010-a", label: "7 manches" },
                { id: "sport-010-b", label: "9 manches" },
                { id: "sport-010-c", label: "10 manches" },
                { id: "sport-010-d", label: "12 manches" },
            ],
            correctOptionId: "sport-010-b",
            explanation:
                "Un match standard se joue en neuf manches ; des manches supplémentaires départagent les équipes en cas d’égalité.",
        },
        {
            id: "sport-011",
            prompt: "Au cricket, comment appelle-t-on l’ensemble de trois piquets défendu par le batteur ?",
            options: [
                { id: "sport-011-a", label: "Le crease" },
                { id: "sport-011-b", label: "Le pitch" },
                { id: "sport-011-c", label: "Le wicket" },
                { id: "sport-011-d", label: "Le boundary" },
            ],
            correctOptionId: "sport-011-c",
            explanation:
                "Le wicket est formé de trois piquets surmontés de deux témoins que le lanceur cherche notamment à faire tomber.",
        },
        {
            id: "sport-012",
            prompt: "Que représente le par d’un trou de golf ?",
            options: [
                { id: "sport-012-a", label: "La longueur du trou en mètres" },
                { id: "sport-012-b", label: "Le nombre maximal de joueurs" },
                { id: "sport-012-c", label: "La valeur du prix remporté" },
                { id: "sport-012-d", label: "Le nombre de coups de référence" },
            ],
            correctOptionId: "sport-012-d",
            explanation:
                "Le par indique le nombre de coups qu’un joueur expérimenté est censé utiliser pour terminer le trou.",
        },
        {
            id: "sport-013",
            prompt: "Quelle est la longueur d’un bassin olympique de natation ?",
            options: [
                { id: "sport-013-a", label: "25 mètres" },
                { id: "sport-013-b", label: "50 mètres" },
                { id: "sport-013-c", label: "75 mètres" },
                { id: "sport-013-d", label: "100 mètres" },
            ],
            correctOptionId: "sport-013-b",
            explanation:
                "Les compétitions olympiques se déroulent dans un bassin long de 50 mètres, appelé grand bassin.",
        },
        {
            id: "sport-014",
            prompt: "Dans quelle nage les deux bras reviennent-ils simultanément au-dessus de l’eau ?",
            options: [
                { id: "sport-014-a", label: "Le dos crawlé" },
                { id: "sport-014-b", label: "La brasse" },
                { id: "sport-014-c", label: "Le papillon" },
                { id: "sport-014-d", label: "Le crawl" },
            ],
            correctOptionId: "sport-014-c",
            explanation:
                "Le papillon combine un retour simultané des bras et une ondulation des jambes inspirée du dauphin.",
        },
        {
            id: "sport-015",
            prompt: "Combien d’épreuves composent un décathlon d’athlétisme ?",
            options: [
                { id: "sport-015-a", label: "10 épreuves" },
                { id: "sport-015-b", label: "8 épreuves" },
                { id: "sport-015-c", label: "12 épreuves" },
                { id: "sport-015-d", label: "15 épreuves" },
            ],
            correctOptionId: "sport-015-a",
            explanation:
                "Le décathlon associe dix épreuves de course, de saut et de lancer réparties sur deux jours.",
        },
        {
            id: "sport-016",
            prompt: "Dans quelle discipline Dick Fosbury a-t-il popularisé une technique de franchissement dos à la barre ?",
            options: [
                { id: "sport-016-a", label: "Le saut à la perche" },
                { id: "sport-016-b", label: "Le saut en longueur" },
                { id: "sport-016-c", label: "Le triple saut" },
                { id: "sport-016-d", label: "Le saut en hauteur" },
            ],
            correctOptionId: "sport-016-d",
            explanation:
                "Dick Fosbury a remporté les Jeux de 1968 avec le Fosbury flop, devenu la technique dominante du saut en hauteur.",
        },
        {
            id: "sport-017",
            prompt: "Quel agrès est réservé aux femmes en gymnastique artistique olympique ?",
            options: [
                { id: "sport-017-a", label: "Les anneaux" },
                { id: "sport-017-b", label: "Le cheval d’arçons" },
                { id: "sport-017-c", label: "La poutre" },
                { id: "sport-017-d", label: "La barre fixe" },
            ],
            correctOptionId: "sport-017-c",
            explanation:
                "La poutre fait partie des quatre agrès féminins ; les trois autres propositions appartiennent au programme masculin.",
        },
        {
            id: "sport-018",
            prompt: "Quel score met normalement fin immédiatement à un combat de judo ?",
            options: [
                { id: "sport-018-a", label: "Un shido" },
                { id: "sport-018-b", label: "Un ippon" },
                { id: "sport-018-c", label: "Un yuko" },
                { id: "sport-018-d", label: "Un avantage" },
            ],
            correctOptionId: "sport-018-b",
            explanation:
                "Un ippon récompense une action décisive, comme une projection parfaitement maîtrisée, et clôt le combat.",
        },
        {
            id: "sport-019",
            prompt: "Comment appelle-t-on l’enceinte carrée où se déroule un combat de boxe ?",
            options: [
                { id: "sport-019-a", label: "Le tatami" },
                { id: "sport-019-b", label: "La piste" },
                { id: "sport-019-c", label: "Le court" },
                { id: "sport-019-d", label: "Le ring" },
            ],
            correctOptionId: "sport-019-d",
            explanation:
                "Le ring est une surface surélevée entourée de cordes, avec un coin attribué à chaque boxeur.",
        },
        {
            id: "sport-020",
            prompt: "Quelles sont les trois armes de l’escrime sportive ?",
            options: [
                { id: "sport-020-a", label: "Le fleuret, l’épée et le sabre" },
                { id: "sport-020-b", label: "Le sabre, la lance et l’épée" },
                { id: "sport-020-c", label: "Le fleuret, le bâton et la rapière" },
                { id: "sport-020-d", label: "L’épée, le kendo et le sabre" },
            ],
            correctOptionId: "sport-020-a",
            explanation:
                "Le fleuret, l’épée et le sabre possèdent chacun une surface valable et des règles de priorité propres.",
        },
        {
            id: "sport-021",
            prompt: "Dans quel pays le taekwondo moderne a-t-il été codifié ?",
            options: [
                { id: "sport-021-a", label: "La Thaïlande" },
                { id: "sport-021-b", label: "La Corée du Sud" },
                { id: "sport-021-c", label: "Le Japon" },
                { id: "sport-021-d", label: "La Chine" },
            ],
            correctOptionId: "sport-021-b",
            explanation:
                "Le taekwondo a été codifié en Corée après la Seconde Guerre mondiale et accorde une grande place aux techniques de jambes.",
        },
        {
            id: "sport-022",
            prompt: "Quelles disciplines le biathlon combine-t-il ?",
            options: [
                { id: "sport-022-a", label: "Le ski de fond et le tir à la carabine" },
                { id: "sport-022-b", label: "Le ski alpin et le saut à ski" },
                { id: "sport-022-c", label: "Le snowboard et le patinage" },
                { id: "sport-022-d", label: "Le bobsleigh et le tir à l’arc" },
            ],
            correctOptionId: "sport-022-a",
            explanation:
                "Les biathlètes alternent des boucles de ski de fond et des séances de tir couché ou debout.",
        },
        {
            id: "sport-023",
            prompt: "De quel matériau sont traditionnellement fabriquées les pierres de curling de compétition ?",
            options: [
                { id: "sport-023-a", label: "Du marbre" },
                { id: "sport-023-b", label: "De l’acier" },
                { id: "sport-023-c", label: "Du granite" },
                { id: "sport-023-d", label: "Du béton" },
            ],
            correctOptionId: "sport-023-c",
            explanation:
                "Les pierres de curling sont taillées dans un granite très résistant, notamment extrait de l’île écossaise d’Ailsa Craig.",
        },
        {
            id: "sport-024",
            prompt: "À effectif complet, combien de joueurs d’une équipe de hockey sur glace sont présents sur la glace ?",
            options: [
                { id: "sport-024-a", label: "4 joueurs" },
                { id: "sport-024-b", label: "5 joueurs" },
                { id: "sport-024-c", label: "7 joueurs" },
                { id: "sport-024-d", label: "6 joueurs" },
            ],
            correctOptionId: "sport-024-d",
            explanation:
                "Une équipe aligne normalement cinq patineurs et un gardien, soit six joueurs sur la glace.",
        },
        {
            id: "sport-025",
            prompt: "Que signale le drapeau à damier dans une course automobile ?",
            options: [
                { id: "sport-025-a", label: "La fin de la course ou de la séance" },
                { id: "sport-025-b", label: "Un danger sur la piste" },
                { id: "sport-025-c", label: "Une disqualification immédiate" },
                { id: "sport-025-d", label: "Le retour de la pluie" },
            ],
            correctOptionId: "sport-025-a",
            explanation:
                "Le drapeau à damier est présenté sur la ligne pour indiquer aux concurrents que la course est terminée.",
        },
        {
            id: "sport-026",
            prompt: "Quel est l’un des rôles essentiels du copilote en rallye automobile ?",
            options: [
                { id: "sport-026-a", label: "Changer les pneus pendant la spéciale" },
                { id: "sport-026-b", label: "Chronométrer les autres équipages" },
                { id: "sport-026-c", label: "Annoncer les notes décrivant la route" },
                { id: "sport-026-d", label: "Piloter à distance le véhicule" },
            ],
            correctOptionId: "sport-026-c",
            explanation:
                "Le copilote lit des notes qui préviennent le pilote des virages, distances et dangers à venir.",
        },
        {
            id: "sport-027",
            prompt: "Avec quel type de véhicule se dispute le championnat MotoGP ?",
            options: [
                { id: "sport-027-a", label: "Des monoplaces" },
                { id: "sport-027-b", label: "Des motos de vitesse" },
                { id: "sport-027-c", label: "Des motoneiges" },
                { id: "sport-027-d", label: "Des karts" },
            ],
            correctOptionId: "sport-027-b",
            explanation:
                "MotoGP est la catégorie reine des Grands Prix de vitesse motocycliste sur circuit.",
        },
        {
            id: "sport-028",
            prompt: "Combien de formes colorées, appelées Agitos, composent le symbole paralympique ?",
            options: [
                { id: "sport-028-a", label: "2 formes" },
                { id: "sport-028-b", label: "4 formes" },
                { id: "sport-028-c", label: "5 formes" },
                { id: "sport-028-d", label: "3 formes" },
            ],
            correctOptionId: "sport-028-d",
            explanation:
                "Le symbole paralympique réunit trois Agitos rouges, bleus et verts autour d’un point central.",
        },
        {
            id: "sport-029",
            prompt: "Quelle ville a accueilli les premiers Jeux olympiques modernes en 1896 ?",
            options: [
                { id: "sport-029-a", label: "Paris" },
                { id: "sport-029-b", label: "Londres" },
                { id: "sport-029-c", label: "Athènes" },
                { id: "sport-029-d", label: "Rome" },
            ],
            correctOptionId: "sport-029-c",
            explanation:
                "Athènes a accueilli en 1896 la première édition des Jeux organisés par le mouvement olympique moderne.",
        },
        {
            id: "sport-030",
            prompt: "Dans quelle ville s’est déroulé le premier marathon olympique moderne en 1896 ?",
            options: [
                { id: "sport-030-a", label: "Athènes" },
                { id: "sport-030-b", label: "Boston" },
                { id: "sport-030-c", label: "Paris" },
                { id: "sport-030-d", label: "Londres" },
            ],
            correctOptionId: "sport-030-a",
            explanation:
                "La course de 1896 reliait Marathon au stade panathénaïque d’Athènes et fut remportée par Spyrídon Loúis.",
        },
        {
            id: "sport-031",
            prompt: "Lors de quels Jeux Nadia Comăneci a-t-elle obtenu le premier 10 olympique en gymnastique ?",
            options: [
                { id: "sport-031-a", label: "Tokyo 1964" },
                { id: "sport-031-b", label: "Munich 1972" },
                { id: "sport-031-c", label: "Los Angeles 1984" },
                { id: "sport-031-d", label: "Montréal 1976" },
            ],
            correctOptionId: "sport-031-d",
            explanation:
                "À Montréal en 1976, Nadia Comăneci a obtenu un 10 aux barres asymétriques, note alors inédite aux Jeux.",
        },
        {
            id: "sport-032",
            prompt: "Dans quelle ville Jesse Owens a-t-il remporté quatre titres olympiques en 1936 ?",
            options: [
                { id: "sport-032-a", label: "Los Angeles" },
                { id: "sport-032-b", label: "Berlin" },
                { id: "sport-032-c", label: "Amsterdam" },
                { id: "sport-032-d", label: "Helsinki" },
            ],
            correctOptionId: "sport-032-b",
            explanation:
                "À Berlin, Jesse Owens s’est imposé sur 100 m, 200 m, relais 4 × 100 m et saut en longueur.",
        },
        {
            id: "sport-033",
            prompt: "Sur quelle distance Marie-José Pérec a-t-elle été championne olympique en 1992 et 1996 ?",
            options: [
                { id: "sport-033-a", label: "400 mètres" },
                { id: "sport-033-b", label: "100 mètres" },
                { id: "sport-033-c", label: "800 mètres" },
                { id: "sport-033-d", label: "1 500 mètres" },
            ],
            correctOptionId: "sport-033-a",
            explanation:
                "Marie-José Pérec a conservé son titre du 400 m à Atlanta en 1996, où elle a aussi gagné le 200 m.",
        },
        {
            id: "sport-034",
            prompt: "Dans quel sport Serena Williams a-t-elle remporté des titres du Grand Chelem ?",
            options: [
                { id: "sport-034-a", label: "Le golf" },
                { id: "sport-034-b", label: "Le tennis" },
                { id: "sport-034-c", label: "L’athlétisme" },
                { id: "sport-034-d", label: "La natation" },
            ],
            correctOptionId: "sport-034-b",
            explanation:
                "Serena Williams a marqué le tennis par sa puissance, son service et ses succès en simple comme en double.",
        },
        {
            id: "sport-035",
            prompt: "À quel sport associe-t-on principalement Michael Jordan ?",
            options: [
                { id: "sport-035-a", label: "Le baseball" },
                { id: "sport-035-b", label: "Le football américain" },
                { id: "sport-035-c", label: "Le hockey sur glace" },
                { id: "sport-035-d", label: "Le basketball" },
            ],
            correctOptionId: "sport-035-d",
            explanation:
                "Michael Jordan a remporté six championnats NBA avec les Chicago Bulls dans les années 1990.",
        },
        {
            id: "sport-036",
            prompt: "Quelle sélection nationale Pelé représentait-il en football ?",
            options: [
                { id: "sport-036-a", label: "L’Argentine" },
                { id: "sport-036-b", label: "L’Uruguay" },
                { id: "sport-036-c", label: "Le Brésil" },
                { id: "sport-036-d", label: "Le Portugal" },
            ],
            correctOptionId: "sport-036-c",
            explanation:
                "Pelé a remporté avec le Brésil les Coupes du monde de 1958, 1962 et 1970.",
        },
        {
            id: "sport-037",
            prompt: "Quelle nation le joueur de rugby Jonah Lomu représentait-il ?",
            options: [
                { id: "sport-037-a", label: "L’Australie" },
                { id: "sport-037-b", label: "La Nouvelle-Zélande" },
                { id: "sport-037-c", label: "L’Afrique du Sud" },
                { id: "sport-037-d", label: "Les Fidji" },
            ],
            correctOptionId: "sport-037-b",
            explanation:
                "Jonah Lomu jouait ailier avec les All Blacks et a marqué la Coupe du monde de rugby 1995.",
        },
        {
            id: "sport-038",
            prompt: "Dans quelle discipline Eddy Merckx a-t-il construit son palmarès ?",
            options: [
                { id: "sport-038-a", label: "Le patinage de vitesse" },
                { id: "sport-038-b", label: "La course automobile" },
                { id: "sport-038-c", label: "Le ski de fond" },
                { id: "sport-038-d", label: "Le cyclisme sur route" },
            ],
            correctOptionId: "sport-038-d",
            explanation:
                "Le Belge Eddy Merckx a remporté les trois grands tours et de nombreuses classiques cyclistes.",
        },
        {
            id: "sport-039",
            prompt: "Quel pays le sprinteur Usain Bolt représentait-il ?",
            options: [
                { id: "sport-039-a", label: "La Jamaïque" },
                { id: "sport-039-b", label: "Trinité-et-Tobago" },
                { id: "sport-039-c", label: "Les Bahamas" },
                { id: "sport-039-d", label: "La Barbade" },
            ],
            correctOptionId: "sport-039-a",
            explanation:
                "Usain Bolt a remporté pour la Jamaïque plusieurs titres olympiques sur 100 m, 200 m et relais.",
        },
        {
            id: "sport-040",
            prompt: "Dans quelle discipline Simone Biles s’est-elle illustrée ?",
            options: [
                { id: "sport-040-a", label: "Le plongeon" },
                { id: "sport-040-b", label: "Le patinage artistique" },
                { id: "sport-040-c", label: "La gymnastique artistique" },
                { id: "sport-040-d", label: "Le trampoline uniquement" },
            ],
            correctOptionId: "sport-040-c",
            explanation:
                "Simone Biles a remporté de nombreux titres mondiaux et olympiques en gymnastique artistique.",
        },
        {
            id: "sport-041",
            prompt: "Quelle compétition oppose des équipes nationales masculines de tennis ?",
            options: [
                { id: "sport-041-a", label: "La Ryder Cup" },
                { id: "sport-041-b", label: "La Coupe de l’America" },
                { id: "sport-041-c", label: "La Coupe Hopman" },
                { id: "sport-041-d", label: "La Coupe Davis" },
            ],
            correctOptionId: "sport-041-d",
            explanation:
                "La Coupe Davis est une compétition internationale par équipes nationales masculines organisée depuis 1900.",
        },
        {
            id: "sport-042",
            prompt: "Quelle compétition par équipes nationales féminines de tennis portait autrefois le nom Fed Cup ?",
            options: [
                { id: "sport-042-a", label: "La United Cup" },
                { id: "sport-042-b", label: "La Billie Jean King Cup" },
                { id: "sport-042-c", label: "La Laver Cup" },
                { id: "sport-042-d", label: "La Wightman Cup" },
            ],
            correctOptionId: "sport-042-b",
            explanation:
                "La Fed Cup a été renommée Billie Jean King Cup en 2020 en hommage à la championne et militante américaine.",
        },
        {
            id: "sport-043",
            prompt: "Dans quel sport l’Europe et les États-Unis s’affrontent-ils lors de la Ryder Cup ?",
            options: [
                { id: "sport-043-a", label: "Le tennis" },
                { id: "sport-043-b", label: "Le polo" },
                { id: "sport-043-c", label: "Le golf" },
                { id: "sport-043-d", label: "Le cricket" },
            ],
            correctOptionId: "sport-043-c",
            explanation:
                "La Ryder Cup est une compétition de golf par équipes disputée alternativement en Europe et aux États-Unis.",
        },
        {
            id: "sport-044",
            prompt: "Dans quelle discipline se dispute la Coupe de l’America ?",
            options: [
                { id: "sport-044-a", label: "La voile" },
                { id: "sport-044-b", label: "Le baseball" },
                { id: "sport-044-c", label: "Le surf" },
                { id: "sport-044-d", label: "L’aviron" },
            ],
            correctOptionId: "sport-044-a",
            explanation:
                "La Coupe de l’America est une compétition de voile opposant un détenteur du trophée à un challenger.",
        },
        {
            id: "sport-045",
            prompt: "À quel sport appartient le Tournoi des Six Nations ?",
            options: [
                { id: "sport-045-a", label: "Le football" },
                { id: "sport-045-b", label: "Le rugby à XV" },
                { id: "sport-045-c", label: "Le cricket" },
                { id: "sport-045-d", label: "Le hockey sur gazon" },
            ],
            correctOptionId: "sport-045-b",
            explanation:
                "Le tournoi réunit chaque année l’Angleterre, l’Écosse, la France, le pays de Galles, l’Irlande et l’Italie.",
        },
        {
            id: "sport-046",
            prompt: "Sur quelle surface se joue traditionnellement Roland-Garros ?",
            options: [
                { id: "sport-046-a", label: "Le gazon" },
                { id: "sport-046-b", label: "Le parquet" },
                { id: "sport-046-c", label: "La terre battue" },
                { id: "sport-046-d", label: "La moquette" },
            ],
            correctOptionId: "sport-046-c",
            explanation:
                "Roland-Garros est le tournoi du Grand Chelem disputé à Paris sur des courts en terre battue.",
        },
        {
            id: "sport-047",
            prompt: "Quel projectile les joueurs frappent-ils au badminton ?",
            options: [
                { id: "sport-047-a", label: "Un volant" },
                { id: "sport-047-b", label: "Une balle creuse" },
                { id: "sport-047-c", label: "Un palet" },
                { id: "sport-047-d", label: "Un disque" },
            ],
            correctOptionId: "sport-047-a",
            explanation:
                "Le volant possède une base arrondie et une jupe qui le freine et stabilise sa trajectoire.",
        },
        {
            id: "sport-048",
            prompt: "Combien de points faut-il normalement atteindre pour gagner une manche de tennis de table ?",
            options: [
                { id: "sport-048-a", label: "15 points" },
                { id: "sport-048-b", label: "21 points" },
                { id: "sport-048-c", label: "25 points" },
                { id: "sport-048-d", label: "11 points" },
            ],
            correctOptionId: "sport-048-d",
            explanation:
                "Une manche se gagne à onze points avec deux points d’écart ; le jeu continue donc en cas d’égalité à 10-10.",
        },
        {
            id: "sport-049",
            prompt: "Combien vaut la zone centrale d’une cible olympique de tir à l’arc ?",
            options: [
                { id: "sport-049-a", label: "10 points" },
                { id: "sport-049-b", label: "8 points" },
                { id: "sport-049-c", label: "9 points" },
                { id: "sport-049-d", label: "12 points" },
            ],
            correctOptionId: "sport-049-a",
            explanation:
                "La cible comporte dix zones concentriques numérotées de 1 à 10, le centre jaune valant dix points.",
        },
        {
            id: "sport-050",
            prompt: "Dans quel ordre enchaîne-t-on les disciplines d’un triathlon standard ?",
            options: [
                { id: "sport-050-a", label: "Course, cyclisme, natation" },
                { id: "sport-050-b", label: "Natation, cyclisme, course" },
                { id: "sport-050-c", label: "Cyclisme, natation, course" },
                { id: "sport-050-d", label: "Natation, course, cyclisme" },
            ],
            correctOptionId: "sport-050-b",
            explanation:
                "Le triathlon commence par la natation, se poursuit à vélo et se termine par la course à pied.",
        },
    ],
};
