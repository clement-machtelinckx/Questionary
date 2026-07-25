import type { QuestionCategory } from "./types";

export const cinemaSeriesCategory: QuestionCategory = {
    id: "category-cinema-series",
    slug: "cinema-series",
    title: "Cinéma et séries",
    description:
        "Voyagez parmi les grands films, les séries marquantes, les métiers et les techniques de l’écran.",
    questions: [
        {
            id: "cinema-series-001",
            prompt: "Quels pionniers ont organisé une célèbre projection publique payante à Paris en 1895 ?",
            options: [
                { id: "cinema-series-001-a", label: "Les frères Pathé" },
                { id: "cinema-series-001-b", label: "Les frères Lumière" },
                { id: "cinema-series-001-c", label: "Les frères Coen" },
                { id: "cinema-series-001-d", label: "Les frères Dardenne" },
            ],
            correctOptionId: "cinema-series-001-b",
            explanation:
                "Auguste et Louis Lumière ont présenté dix courts films au Salon indien du Grand Café le 28 décembre 1895.",
        },
        {
            id: "cinema-series-002",
            prompt: "Qui a réalisé et interprété le rôle principal de Citizen Kane, sorti en 1941 ?",
            options: [
                { id: "cinema-series-002-a", label: "John Ford" },
                { id: "cinema-series-002-b", label: "Billy Wilder" },
                { id: "cinema-series-002-c", label: "Howard Hawks" },
                { id: "cinema-series-002-d", label: "Orson Welles" },
            ],
            correctOptionId: "cinema-series-002-d",
            explanation:
                "Orson Welles a réalisé Citizen Kane et y incarne Charles Foster Kane, magnat fictif de la presse.",
        },
        {
            id: "cinema-series-003",
            prompt: "Quel cinéaste japonais a réalisé Les Sept Samouraïs en 1954 ?",
            options: [
                { id: "cinema-series-003-a", label: "Akira Kurosawa" },
                { id: "cinema-series-003-b", label: "Yasujirō Ozu" },
                { id: "cinema-series-003-c", label: "Kenji Mizoguchi" },
                { id: "cinema-series-003-d", label: "Masaki Kobayashi" },
            ],
            correctOptionId: "cinema-series-003-a",
            explanation:
                "Akira Kurosawa met en scène des samouraïs recrutés pour défendre un village, un récit souvent adapté depuis.",
        },
        {
            id: "cinema-series-004",
            prompt: "Qui a réalisé Les Quatre Cents Coups, film majeur de la Nouvelle Vague française ?",
            options: [
                { id: "cinema-series-004-a", label: "Agnès Varda" },
                { id: "cinema-series-004-b", label: "Éric Rohmer" },
                { id: "cinema-series-004-c", label: "François Truffaut" },
                { id: "cinema-series-004-d", label: "Jacques Demy" },
            ],
            correctOptionId: "cinema-series-004-c",
            explanation:
                "Sorti en 1959, le premier long métrage de François Truffaut introduit le personnage d’Antoine Doinel.",
        },
        {
            id: "cinema-series-005",
            prompt: "Quel réalisateur signe À bout de souffle, sorti en 1960 ?",
            options: [
                { id: "cinema-series-005-a", label: "Claude Chabrol" },
                { id: "cinema-series-005-b", label: "Jean-Luc Godard" },
                { id: "cinema-series-005-c", label: "Alain Resnais" },
                { id: "cinema-series-005-d", label: "Louis Malle" },
            ],
            correctOptionId: "cinema-series-005-b",
            explanation:
                "Jean-Luc Godard emploie notamment des coupes franches novatrices dans ce film emblématique de la Nouvelle Vague.",
        },
        {
            id: "cinema-series-006",
            prompt: "Qui a réalisé le film expressionniste allemand Metropolis en 1927 ?",
            options: [
                { id: "cinema-series-006-a", label: "Fritz Lang" },
                { id: "cinema-series-006-b", label: "F. W. Murnau" },
                { id: "cinema-series-006-c", label: "G. W. Pabst" },
                { id: "cinema-series-006-d", label: "Robert Wiene" },
            ],
            correctOptionId: "cinema-series-006-a",
            explanation:
                "Fritz Lang imagine dans Metropolis une ville futuriste divisée entre une élite et des ouvriers souterrains.",
        },
        {
            id: "cinema-series-007",
            prompt: "Quel réalisateur italien a tourné Le Voleur de bicyclette ?",
            options: [
                { id: "cinema-series-007-a", label: "Federico Fellini" },
                { id: "cinema-series-007-b", label: "Luchino Visconti" },
                { id: "cinema-series-007-c", label: "Roberto Rossellini" },
                { id: "cinema-series-007-d", label: "Vittorio De Sica" },
            ],
            correctOptionId: "cinema-series-007-d",
            explanation:
                "Vittorio De Sica réalise en 1948 cette œuvre du néoréalisme italien sur un père cherchant son outil de travail.",
        },
        {
            id: "cinema-series-008",
            prompt: "Quel cinéaste sud-coréen a réalisé Parasite, Palme d’or 2019 ?",
            options: [
                { id: "cinema-series-008-a", label: "Park Chan-wook" },
                { id: "cinema-series-008-b", label: "Lee Chang-dong" },
                { id: "cinema-series-008-c", label: "Bong Joon-ho" },
                { id: "cinema-series-008-d", label: "Kim Jee-woon" },
            ],
            correctOptionId: "cinema-series-008-c",
            explanation:
                "Bong Joon-ho mêle satire sociale et thriller dans Parasite, également récompensé par l’Oscar du meilleur film.",
        },
        {
            id: "cinema-series-009",
            prompt: "Qui a réalisé le film d’animation Le Voyage de Chihiro ?",
            options: [
                { id: "cinema-series-009-a", label: "Hayao Miyazaki" },
                { id: "cinema-series-009-b", label: "Mamoru Hosoda" },
                { id: "cinema-series-009-c", label: "Satoshi Kon" },
                { id: "cinema-series-009-d", label: "Makoto Shinkai" },
            ],
            correctOptionId: "cinema-series-009-a",
            explanation:
                "Hayao Miyazaki a écrit et réalisé ce récit du Studio Ghibli dans lequel Chihiro pénètre le monde des esprits.",
        },
        {
            id: "cinema-series-010",
            prompt: "Quelle réalisatrice a signé Portrait de la jeune fille en feu ?",
            options: [
                { id: "cinema-series-010-a", label: "Mia Hansen-Løve" },
                { id: "cinema-series-010-b", label: "Céline Sciamma" },
                { id: "cinema-series-010-c", label: "Claire Denis" },
                { id: "cinema-series-010-d", label: "Julia Ducournau" },
            ],
            correctOptionId: "cinema-series-010-b",
            explanation:
                "Céline Sciamma situe ce drame amoureux au XVIIIe siècle et construit son récit autour du regard et de la mémoire.",
        },
        {
            id: "cinema-series-011",
            prompt: "Qui a créé la saga cinématographique Star Wars et réalisé le film sorti en 1977 ?",
            options: [
                { id: "cinema-series-011-a", label: "Steven Spielberg" },
                { id: "cinema-series-011-b", label: "Irvin Kershner" },
                { id: "cinema-series-011-c", label: "George Lucas" },
                { id: "cinema-series-011-d", label: "James Cameron" },
            ],
            correctOptionId: "cinema-series-011-c",
            explanation:
                "George Lucas a imaginé Star Wars et réalisé le premier film, renommé ensuite Un nouvel espoir.",
        },
        {
            id: "cinema-series-012",
            prompt: "Qui a réalisé la trilogie Le Seigneur des anneaux sortie de 2001 à 2003 ?",
            options: [
                { id: "cinema-series-012-a", label: "Guillermo del Toro" },
                { id: "cinema-series-012-b", label: "Sam Raimi" },
                { id: "cinema-series-012-c", label: "Chris Columbus" },
                { id: "cinema-series-012-d", label: "Peter Jackson" },
            ],
            correctOptionId: "cinema-series-012-d",
            explanation:
                "Peter Jackson a tourné en Nouvelle-Zélande les trois adaptations des romans de J. R. R. Tolkien.",
        },
        {
            id: "cinema-series-013",
            prompt: "Qui a réalisé Titanic, sorti en 1997 ?",
            options: [
                { id: "cinema-series-013-a", label: "Ron Howard" },
                { id: "cinema-series-013-b", label: "James Cameron" },
                { id: "cinema-series-013-c", label: "Ridley Scott" },
                { id: "cinema-series-013-d", label: "Robert Zemeckis" },
            ],
            correctOptionId: "cinema-series-013-b",
            explanation:
                "James Cameron a écrit et réalisé Titanic, qui mêle une histoire fictive au naufrage historique de 1912.",
        },
        {
            id: "cinema-series-014",
            prompt: "Quel réalisateur a signé Les Dents de la mer en 1975 ?",
            options: [
                { id: "cinema-series-014-a", label: "Brian De Palma" },
                { id: "cinema-series-014-b", label: "William Friedkin" },
                { id: "cinema-series-014-c", label: "Steven Spielberg" },
                { id: "cinema-series-014-d", label: "George Miller" },
            ],
            correctOptionId: "cinema-series-014-c",
            explanation:
                "Le succès du film de Steven Spielberg a contribué à installer le modèle du grand film estival à large diffusion.",
        },
        {
            id: "cinema-series-015",
            prompt: "Qui a réalisé le premier film Alien, sorti en 1979 ?",
            options: [
                { id: "cinema-series-015-a", label: "Ridley Scott" },
                { id: "cinema-series-015-b", label: "James Cameron" },
                { id: "cinema-series-015-c", label: "David Fincher" },
                { id: "cinema-series-015-d", label: "Jean-Pierre Jeunet" },
            ],
            correctOptionId: "cinema-series-015-a",
            explanation:
                "Ridley Scott met en scène le huis clos spatial du Nostromo ; James Cameron réalisera la suite Aliens.",
        },
        {
            id: "cinema-series-016",
            prompt: "Quel réalisateur a signé Le Parrain, sorti en 1972 ?",
            options: [
                { id: "cinema-series-016-a", label: "Martin Scorsese" },
                { id: "cinema-series-016-b", label: "Sergio Leone" },
                { id: "cinema-series-016-c", label: "Sidney Lumet" },
                { id: "cinema-series-016-d", label: "Francis Ford Coppola" },
            ],
            correctOptionId: "cinema-series-016-d",
            explanation:
                "Francis Ford Coppola adapte le roman de Mario Puzo et raconte la succession au sein de la famille Corleone.",
        },
        {
            id: "cinema-series-017",
            prompt: "Qui a écrit et réalisé Pulp Fiction ?",
            options: [
                { id: "cinema-series-017-a", label: "Joel Coen" },
                { id: "cinema-series-017-b", label: "Paul Thomas Anderson" },
                { id: "cinema-series-017-c", label: "Quentin Tarantino" },
                { id: "cinema-series-017-d", label: "David Lynch" },
            ],
            correctOptionId: "cinema-series-017-c",
            explanation:
                "Quentin Tarantino construit le film en récits non chronologiques qui se croisent dans le milieu criminel de Los Angeles.",
        },
        {
            id: "cinema-series-018",
            prompt: "Qui a réalisé Matrix, sorti en 1999 ?",
            options: [
                { id: "cinema-series-018-a", label: "Les frères Russo" },
                { id: "cinema-series-018-b", label: "Lana et Lilly Wachowski" },
                { id: "cinema-series-018-c", label: "Les frères Safdie" },
                { id: "cinema-series-018-d", label: "Jean-Pierre et Luc Dardenne" },
            ],
            correctOptionId: "cinema-series-018-b",
            explanation:
                "Lana et Lilly Wachowski ont mêlé science-fiction, philosophie et effets visuels novateurs dans Matrix.",
        },
        {
            id: "cinema-series-019",
            prompt: "Quel réalisateur a signé Le Fabuleux Destin d’Amélie Poulain ?",
            options: [
                { id: "cinema-series-019-a", label: "Michel Gondry" },
                { id: "cinema-series-019-b", label: "Cédric Klapisch" },
                { id: "cinema-series-019-c", label: "Mathieu Kassovitz" },
                { id: "cinema-series-019-d", label: "Jean-Pierre Jeunet" },
            ],
            correctOptionId: "cinema-series-019-d",
            explanation:
                "Jean-Pierre Jeunet réalise ce conte parisien sorti en 2001, porté par Audrey Tautou dans le rôle d’Amélie.",
        },
        {
            id: "cinema-series-020",
            prompt: "Quel duo a réalisé Intouchables, sorti en 2011 ?",
            options: [
                { id: "cinema-series-020-a", label: "Olivier Nakache et Éric Toledano" },
                { id: "cinema-series-020-b", label: "Jean-Pierre et Luc Dardenne" },
                { id: "cinema-series-020-c", label: "Arnaud et Jean-Marie Larrieu" },
                { id: "cinema-series-020-d", label: "Benoît Delépine et Gustave Kervern" },
            ],
            correctOptionId: "cinema-series-020-a",
            explanation:
                "Olivier Nakache et Éric Toledano ont écrit et réalisé cette comédie dramatique inspirée d’une histoire réelle.",
        },
        {
            id: "cinema-series-021",
            prompt: "Quel studio a produit Toy Story, premier long métrage entièrement créé en images de synthèse ?",
            options: [
                { id: "cinema-series-021-a", label: "DreamWorks Animation" },
                { id: "cinema-series-021-b", label: "Pixar" },
                { id: "cinema-series-021-c", label: "Studio Ghibli" },
                { id: "cinema-series-021-d", label: "Aardman Animations" },
            ],
            correctOptionId: "cinema-series-021-b",
            explanation:
                "Pixar a produit Toy Story, sorti en 1995 et distribué par Walt Disney Pictures.",
        },
        {
            id: "cinema-series-022",
            prompt: "Quel est le premier long métrage d’animation produit par les studios Disney ?",
            options: [
                { id: "cinema-series-022-a", label: "Blanche-Neige et les Sept Nains" },
                { id: "cinema-series-022-b", label: "Pinocchio" },
                { id: "cinema-series-022-c", label: "Fantasia" },
                { id: "cinema-series-022-d", label: "Dumbo" },
            ],
            correctOptionId: "cinema-series-022-a",
            explanation:
                "Blanche-Neige et les Sept Nains est sorti en 1937 et a ouvert la série des longs métrages animés de Disney.",
        },
        {
            id: "cinema-series-023",
            prompt: "Quel studio britannique produit les aventures en pâte à modeler de Wallace et Gromit ?",
            options: [
                { id: "cinema-series-023-a", label: "Laika" },
                { id: "cinema-series-023-b", label: "Cartoon Saloon" },
                { id: "cinema-series-023-c", label: "Aardman Animations" },
                { id: "cinema-series-023-d", label: "Illumination" },
            ],
            correctOptionId: "cinema-series-023-c",
            explanation:
                "Aardman Animations, installé à Bristol, est spécialiste de l’animation image par image en pâte à modeler.",
        },
        {
            id: "cinema-series-024",
            prompt: "Comment fonctionne principalement l’animation en volume, ou stop motion ?",
            options: [
                {
                    id: "cinema-series-024-a",
                    label: "En filmant sans interruption à vitesse accélérée",
                },
                {
                    id: "cinema-series-024-b",
                    label: "En dessinant directement sur la pellicule seulement",
                },
                {
                    id: "cinema-series-024-c",
                    label: "En capturant les mouvements d’un acteur en temps réel",
                },
                {
                    id: "cinema-series-024-d",
                    label: "En photographiant des objets déplacés image par image",
                },
            ],
            correctOptionId: "cinema-series-024-d",
            explanation:
                "La succession rapide de photographies d’objets légèrement déplacés crée l’illusion d’un mouvement continu.",
        },
        {
            id: "cinema-series-025",
            prompt: "Quel métier dirige le travail de lumière et de caméra sous l’autorité du réalisateur ?",
            options: [
                {
                    id: "cinema-series-025-a",
                    label: "La directrice ou le directeur de la photographie",
                },
                { id: "cinema-series-025-b", label: "La régisseuse ou le régisseur général" },
                { id: "cinema-series-025-c", label: "La monteuse ou le monteur son" },
                { id: "cinema-series-025-d", label: "La directrice ou le directeur de casting" },
            ],
            correctOptionId: "cinema-series-025-a",
            explanation:
                "La directrice ou le directeur de la photographie conçoit l’image, l’éclairage et les choix techniques de prise de vues.",
        },
        {
            id: "cinema-series-026",
            prompt: "En quoi consiste principalement le montage d’un film ?",
            options: [
                { id: "cinema-series-026-a", label: "Construire les décors du tournage" },
                { id: "cinema-series-026-b", label: "Choisir les costumes des personnages" },
                { id: "cinema-series-026-c", label: "Sélectionner et ordonner les plans" },
                { id: "cinema-series-026-d", label: "Négocier les droits de diffusion" },
            ],
            correctOptionId: "cinema-series-026-c",
            explanation:
                "Le montage assemble les prises retenues pour créer le rythme, les raccords et la progression narrative.",
        },
        {
            id: "cinema-series-027",
            prompt: "Qu’est-ce qu’une musique diégétique dans un film ?",
            options: [
                {
                    id: "cinema-series-027-a",
                    label: "Une musique ajoutée uniquement à la bande-annonce",
                },
                {
                    id: "cinema-series-027-b",
                    label: "Une musique dont la source existe dans l’univers du récit",
                },
                { id: "cinema-series-027-c", label: "Une musique sans aucun instrument" },
                {
                    id: "cinema-series-027-d",
                    label: "Une musique composée après la sortie du film",
                },
            ],
            correctOptionId: "cinema-series-027-b",
            explanation:
                "Les personnages peuvent en principe entendre une musique diégétique, par exemple celle d’une radio présente à l’écran.",
        },
        {
            id: "cinema-series-028",
            prompt: "Quel document décrit les scènes, les actions et les dialogues avant le tournage ?",
            options: [
                { id: "cinema-series-028-a", label: "Le plan de financement" },
                { id: "cinema-series-028-b", label: "Le générique" },
                { id: "cinema-series-028-c", label: "Le dossier de presse" },
                { id: "cinema-series-028-d", label: "Le scénario" },
            ],
            correctOptionId: "cinema-series-028-d",
            explanation:
                "Le scénario organise le récit en scènes et sert de base commune à la préparation artistique et technique.",
        },
        {
            id: "cinema-series-029",
            prompt: "De quel écrivain le film Dune de Denis Villeneuve adapte-t-il le roman ?",
            options: [
                { id: "cinema-series-029-a", label: "Isaac Asimov" },
                { id: "cinema-series-029-b", label: "Arthur C. Clarke" },
                { id: "cinema-series-029-c", label: "Frank Herbert" },
                { id: "cinema-series-029-d", label: "Philip K. Dick" },
            ],
            correctOptionId: "cinema-series-029-c",
            explanation:
                "Frank Herbert publie Dune en 1965 ; le roman décrit les enjeux politiques et écologiques de la planète Arrakis.",
        },
        {
            id: "cinema-series-030",
            prompt: "Quel compositeur a créé les thèmes musicaux emblématiques de Star Wars ?",
            options: [
                { id: "cinema-series-030-a", label: "John Williams" },
                { id: "cinema-series-030-b", label: "Hans Zimmer" },
                { id: "cinema-series-030-c", label: "Howard Shore" },
                { id: "cinema-series-030-d", label: "James Horner" },
            ],
            correctOptionId: "cinema-series-030-a",
            explanation:
                "John Williams a composé une partition symphonique fondée sur des leitmotivs associés aux personnages et aux idées.",
        },
        {
            id: "cinema-series-031",
            prompt: "Qui a composé la musique du Bon, la Brute et le Truand ?",
            options: [
                { id: "cinema-series-031-a", label: "Nino Rota" },
                { id: "cinema-series-031-b", label: "Alex North" },
                { id: "cinema-series-031-c", label: "Maurice Jarre" },
                { id: "cinema-series-031-d", label: "Ennio Morricone" },
            ],
            correctOptionId: "cinema-series-031-d",
            explanation:
                "Ennio Morricone a créé pour le western de Sergio Leone un thème reconnaissable mêlant sifflements et voix.",
        },
        {
            id: "cinema-series-032",
            prompt: "Quelle institution américaine remet les Oscars du cinéma ?",
            options: [
                { id: "cinema-series-032-a", label: "La Screen Actors Guild uniquement" },
                {
                    id: "cinema-series-032-b",
                    label: "L’Academy of Motion Picture Arts and Sciences",
                },
                { id: "cinema-series-032-c", label: "L’American Film Institute" },
                { id: "cinema-series-032-d", label: "La Hollywood Foreign Press Association" },
            ],
            correctOptionId: "cinema-series-032-b",
            explanation:
                "L’Academy of Motion Picture Arts and Sciences organise chaque année la cérémonie des Academy Awards, appelés Oscars.",
        },
        {
            id: "cinema-series-033",
            prompt: "Dans quel festival la Palme d’or est-elle la récompense principale ?",
            options: [
                { id: "cinema-series-033-a", label: "Le Festival de Cannes" },
                { id: "cinema-series-033-b", label: "La Mostra de Venise" },
                { id: "cinema-series-033-c", label: "La Berlinale" },
                { id: "cinema-series-033-d", label: "Le Festival de Locarno" },
            ],
            correctOptionId: "cinema-series-033-a",
            explanation:
                "La Palme d’or distingue le meilleur film de la compétition officielle du Festival de Cannes.",
        },
        {
            id: "cinema-series-034",
            prompt: "Quel festival international remet l’Ours d’or ?",
            options: [
                { id: "cinema-series-034-a", label: "Le Festival de Toronto" },
                { id: "cinema-series-034-b", label: "La Berlinale" },
                { id: "cinema-series-034-c", label: "Le Festival de Sundance" },
                { id: "cinema-series-034-d", label: "Le Festival de San Sebastián" },
            ],
            correctOptionId: "cinema-series-034-b",
            explanation:
                "L’Ours d’or est le prix suprême du Festival international du film de Berlin, surnommé la Berlinale.",
        },
        {
            id: "cinema-series-035",
            prompt: "Comment s’appellent les principales récompenses nationales du cinéma français ?",
            options: [
                { id: "cinema-series-035-a", label: "Les Molières" },
                { id: "cinema-series-035-b", label: "Les Victoires" },
                { id: "cinema-series-035-c", label: "Les Magritte" },
                { id: "cinema-series-035-d", label: "Les César" },
            ],
            correctOptionId: "cinema-series-035-d",
            explanation:
                "L’Académie des arts et techniques du cinéma remet les César depuis 1976 ; les Molières concernent le théâtre.",
        },
        {
            id: "cinema-series-036",
            prompt: "Comment nomme-t-on un épisode conçu pour présenter le concept d’une série à un diffuseur ?",
            options: [
                { id: "cinema-series-036-a", label: "Un épisode bouteille" },
                { id: "cinema-series-036-b", label: "Un épisode croisé" },
                { id: "cinema-series-036-c", label: "Un pilote" },
                { id: "cinema-series-036-d", label: "Un final" },
            ],
            correctOptionId: "cinema-series-036-c",
            explanation:
                "Le pilote sert de prototype pour évaluer les personnages, le ton et la viabilité d’une série.",
        },
        {
            id: "cinema-series-037",
            prompt: "Comment s’appelle le café fréquenté par les six personnages principaux de Friends ?",
            options: [
                { id: "cinema-series-037-a", label: "Luke’s Diner" },
                { id: "cinema-series-037-b", label: "Central Perk" },
                { id: "cinema-series-037-c", label: "Monk’s Café" },
                { id: "cinema-series-037-d", label: "Café Nervosa" },
            ],
            correctOptionId: "cinema-series-037-b",
            explanation:
                "Central Perk est le café new-yorkais où le groupe se retrouve régulièrement, souvent sur le même canapé.",
        },
        {
            id: "cinema-series-038",
            prompt: "Quel professeur de chimie devient fabricant de méthamphétamine dans Breaking Bad ?",
            options: [
                { id: "cinema-series-038-a", label: "Jesse Pinkman" },
                { id: "cinema-series-038-b", label: "Saul Goodman" },
                { id: "cinema-series-038-c", label: "Hank Schrader" },
                { id: "cinema-series-038-d", label: "Walter White" },
            ],
            correctOptionId: "cinema-series-038-d",
            explanation:
                "Walter White, interprété par Bryan Cranston, adopte progressivement l’identité criminelle d’Heisenberg.",
        },
        {
            id: "cinema-series-039",
            prompt: "Dans quelle ville américaine se déroule principalement la série The Wire ?",
            options: [
                { id: "cinema-series-039-a", label: "Baltimore" },
                { id: "cinema-series-039-b", label: "Boston" },
                { id: "cinema-series-039-c", label: "Chicago" },
                { id: "cinema-series-039-d", label: "Detroit" },
            ],
            correctOptionId: "cinema-series-039-a",
            explanation:
                "The Wire examine différentes institutions de Baltimore, de la police aux écoles en passant par la presse.",
        },
        {
            id: "cinema-series-040",
            prompt: "Sur quel continent fictif se situe Port-Réal dans Game of Thrones ?",
            options: [
                { id: "cinema-series-040-a", label: "Essos" },
                { id: "cinema-series-040-b", label: "Sothoryos" },
                { id: "cinema-series-040-c", label: "Westeros" },
                { id: "cinema-series-040-d", label: "Ulthos" },
            ],
            correctOptionId: "cinema-series-040-c",
            explanation:
                "Port-Réal est la capitale des Sept Couronnes sur Westeros, où se trouve le Trône de Fer.",
        },
        {
            id: "cinema-series-041",
            prompt: "Quel procédé de mise en scène caractérise la version américaine de The Office ?",
            options: [
                { id: "cinema-series-041-a", label: "Le récit entièrement chanté" },
                { id: "cinema-series-041-b", label: "L’animation en volume" },
                { id: "cinema-series-041-c", label: "La caméra subjective permanente" },
                { id: "cinema-series-041-d", label: "Le faux documentaire" },
            ],
            correctOptionId: "cinema-series-041-d",
            explanation:
                "La série imite un documentaire avec regards caméra, entretiens face à l’objectif et équipe de tournage intégrée au récit.",
        },
        {
            id: "cinema-series-042",
            prompt: "De quel pays vient la série de science-fiction Dark ?",
            options: [
                { id: "cinema-series-042-a", label: "La Suède" },
                { id: "cinema-series-042-b", label: "L’Allemagne" },
                { id: "cinema-series-042-c", label: "Le Danemark" },
                { id: "cinema-series-042-d", label: "L’Autriche" },
            ],
            correctOptionId: "cinema-series-042-b",
            explanation:
                "Dark est une production allemande située dans la ville fictive de Winden et construite autour de voyages temporels.",
        },
        {
            id: "cinema-series-043",
            prompt: "Comment s’appelle le personnage principal incarné par Omar Sy dans la série Lupin ?",
            options: [
                { id: "cinema-series-043-a", label: "Hubert Pellegrini" },
                { id: "cinema-series-043-b", label: "Benjamin Ferel" },
                { id: "cinema-series-043-c", label: "Assane Diop" },
                { id: "cinema-series-043-d", label: "Youssef Guedira" },
            ],
            correctOptionId: "cinema-series-043-c",
            explanation:
                "Assane Diop s’inspire des aventures littéraires d’Arsène Lupin pour préparer ses ruses et ses cambriolages.",
        },
        {
            id: "cinema-series-044",
            prompt: "Quelle est la nature du personnage appelé le Docteur dans Doctor Who ?",
            options: [
                { id: "cinema-series-044-a", label: "Un Seigneur du Temps" },
                { id: "cinema-series-044-b", label: "Un androïde de Mars" },
                { id: "cinema-series-044-c", label: "Un humain immortel" },
                { id: "cinema-series-044-d", label: "Un fantôme victorien" },
            ],
            correctOptionId: "cinema-series-044-a",
            explanation:
                "Le Docteur appartient au peuple extraterrestre des Seigneurs du Temps et voyage à bord du TARDIS.",
        },
        {
            id: "cinema-series-045",
            prompt: "Quelle structure narrative caractérise principalement Black Mirror ?",
            options: [
                { id: "cinema-series-045-a", label: "Une intrigue continue avec les mêmes héros" },
                { id: "cinema-series-045-b", label: "Une anthologie d’histoires indépendantes" },
                { id: "cinema-series-045-c", label: "Un feuilleton quotidien improvisé" },
                { id: "cinema-series-045-d", label: "Un documentaire historique chronologique" },
            ],
            correctOptionId: "cinema-series-045-b",
            explanation:
                "Chaque épisode raconte généralement une histoire autonome qui interroge les usages et les effets de la technologie.",
        },
        {
            id: "cinema-series-046",
            prompt: "Quelle institution est au centre de la série historique The Crown ?",
            options: [
                { id: "cinema-series-046-a", label: "La présidence américaine" },
                { id: "cinema-series-046-b", label: "La papauté" },
                { id: "cinema-series-046-c", label: "La monarchie britannique" },
                { id: "cinema-series-046-d", label: "Le Parlement européen" },
            ],
            correctOptionId: "cinema-series-046-c",
            explanation:
                "The Crown dramatise le règne d’Élisabeth II et les relations entre la famille royale et les gouvernements britanniques.",
        },
        {
            id: "cinema-series-047",
            prompt: "Quel personnage au chapeau melon Charlie Chaplin a-t-il rendu célèbre ?",
            options: [
                { id: "cinema-series-047-a", label: "Charlot" },
                { id: "cinema-series-047-b", label: "Monsieur Hulot" },
                { id: "cinema-series-047-c", label: "Buster" },
                { id: "cinema-series-047-d", label: "Harold" },
            ],
            correctOptionId: "cinema-series-047-a",
            explanation:
                "Charlot, avec sa canne et sa démarche reconnaissable, est devenu une figure universelle du cinéma muet.",
        },
        {
            id: "cinema-series-048",
            prompt: "Quel pionnier français a réalisé Le Voyage dans la Lune en 1902 ?",
            options: [
                { id: "cinema-series-048-a", label: "Louis Feuillade" },
                { id: "cinema-series-048-b", label: "Jean Renoir" },
                { id: "cinema-series-048-c", label: "René Clair" },
                { id: "cinema-series-048-d", label: "Georges Méliès" },
            ],
            correctOptionId: "cinema-series-048-d",
            explanation:
                "Georges Méliès, ancien illusionniste, a développé de nombreux trucages par arrêt de caméra et surimpression.",
        },
        {
            id: "cinema-series-049",
            prompt: "Quelle particularité narrative a rendu Rashōmon d’Akira Kurosawa célèbre ?",
            options: [
                {
                    id: "cinema-series-049-a",
                    label: "Un même événement raconté selon plusieurs versions",
                },
                {
                    id: "cinema-series-049-b",
                    label: "Un récit intégralement filmé en un seul plan",
                },
                {
                    id: "cinema-series-049-c",
                    label: "Une histoire racontée sans personnage humain",
                },
                {
                    id: "cinema-series-049-d",
                    label: "Une chronologie qui remonte toujours le temps",
                },
            ],
            correctOptionId: "cinema-series-049-a",
            explanation:
                "Les témoignages contradictoires du film montrent combien le point de vue et l’intérêt personnel façonnent un récit.",
        },
        {
            id: "cinema-series-050",
            prompt: "À quoi le procédé CinemaScope est-il principalement associé ?",
            options: [
                { id: "cinema-series-050-a", label: "À la projection de films sans écran" },
                { id: "cinema-series-050-b", label: "À une image panoramique de grande largeur" },
                { id: "cinema-series-050-c", label: "À l’enregistrement du son sur disque" },
                { id: "cinema-series-050-d", label: "À la colorisation manuelle image par image" },
            ],
            correctOptionId: "cinema-series-050-b",
            explanation:
                "Le CinemaScope utilise historiquement des objectifs anamorphiques pour enregistrer puis projeter une image très large.",
        },
    ],
};
