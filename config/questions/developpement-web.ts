import type { QuestionCategory } from "./types";

export const developpementWebCategory: QuestionCategory = {
    id: "category-developpement-web",
    slug: "developpement-web",
    title: "Développement web",
    description:
        "Révisez les standards du Web, l’accessibilité, JavaScript, HTTP et les bonnes pratiques de développement.",
    questions: [
        {
            id: "developpement-web-001",
            prompt: "Quel langage structure principalement le contenu d’une page web ?",
            options: [
                { id: "developpement-web-001-a", label: "CSS" },
                { id: "developpement-web-001-b", label: "HTML" },
                { id: "developpement-web-001-c", label: "SQL" },
                { id: "developpement-web-001-d", label: "Git" },
            ],
            correctOptionId: "developpement-web-001-b",
            explanation:
                "HTML décrit la structure et le sens du contenu à l’aide d’éléments comme les titres, paragraphes et liens.",
        },
        {
            id: "developpement-web-002",
            prompt: "Quel langage sert principalement à définir la présentation visuelle d’une page web ?",
            options: [
                { id: "developpement-web-002-a", label: "JavaScript" },
                { id: "developpement-web-002-b", label: "HTTP" },
                { id: "developpement-web-002-c", label: "Python" },
                { id: "developpement-web-002-d", label: "CSS" },
            ],
            correctOptionId: "developpement-web-002-d",
            explanation:
                "CSS contrôle notamment les couleurs, les espacements, la typographie et la disposition des éléments HTML.",
        },
        {
            id: "developpement-web-003",
            prompt: "Quel langage est exécuté nativement par les navigateurs pour rendre une page interactive ?",
            options: [
                { id: "developpement-web-003-a", label: "JavaScript" },
                { id: "developpement-web-003-b", label: "PHP" },
                { id: "developpement-web-003-c", label: "Ruby" },
                { id: "developpement-web-003-d", label: "SQL" },
            ],
            correctOptionId: "developpement-web-003-a",
            explanation:
                "JavaScript permet de réagir aux actions de l’utilisateur et de modifier le document chargé dans le navigateur.",
        },
        {
            id: "developpement-web-004",
            prompt: "À quoi sert principalement Git dans un projet web ?",
            options: [
                { id: "developpement-web-004-a", label: "À exécuter les requêtes HTTP" },
                { id: "developpement-web-004-b", label: "À dessiner l’interface" },
                { id: "developpement-web-004-c", label: "À suivre les versions du code" },
                { id: "developpement-web-004-d", label: "À chiffrer une base de données" },
            ],
            correctOptionId: "developpement-web-004-c",
            explanation:
                "Git conserve l’historique des modifications et facilite le travail parallèle sur plusieurs branches.",
        },
        {
            id: "developpement-web-005",
            prompt: "Quel protocole chiffre les échanges entre un navigateur et un serveur web grâce à TLS ?",
            options: [
                { id: "developpement-web-005-a", label: "FTP" },
                { id: "developpement-web-005-b", label: "HTTPS" },
                { id: "developpement-web-005-c", label: "DNS" },
                { id: "developpement-web-005-d", label: "SMTP" },
            ],
            correctOptionId: "developpement-web-005-b",
            explanation:
                "HTTPS combine HTTP avec TLS afin de protéger la confidentialité et l’intégrité des données transportées.",
        },
        {
            id: "developpement-web-006",
            prompt: "Que signifie l’acronyme DOM dans le contexte du Web ?",
            options: [
                { id: "developpement-web-006-a", label: "Document Object Model" },
                { id: "developpement-web-006-b", label: "Data Operation Method" },
                { id: "developpement-web-006-c", label: "Dynamic Output Module" },
                { id: "developpement-web-006-d", label: "Document Order Map" },
            ],
            correctOptionId: "developpement-web-006-a",
            explanation:
                "Le Document Object Model représente le document sous forme d’arbre que des scripts peuvent consulter et modifier.",
        },
        {
            id: "developpement-web-007",
            prompt: "Quel mécanisme CSS permet d’appliquer des styles selon la largeur de l’écran ?",
            options: [
                { id: "developpement-web-007-a", label: "Une pseudo-classe" },
                { id: "developpement-web-007-b", label: "Une animation keyframes" },
                { id: "developpement-web-007-c", label: "Une propriété personnalisée" },
                { id: "developpement-web-007-d", label: "Une media query" },
            ],
            correctOptionId: "developpement-web-007-d",
            explanation:
                "Les media queries adaptent les styles à des caractéristiques du terminal, comme la largeur de la zone d’affichage.",
        },
        {
            id: "developpement-web-008",
            prompt: "Que signifie généralement le code de statut HTTP 404 ?",
            options: [
                { id: "developpement-web-008-a", label: "La requête a réussi" },
                { id: "developpement-web-008-b", label: "Une authentification est requise" },
                { id: "developpement-web-008-c", label: "La ressource est introuvable" },
                { id: "developpement-web-008-d", label: "Le serveur a créé une ressource" },
            ],
            correctOptionId: "developpement-web-008-c",
            explanation:
                "Le statut 404 indique que le serveur a été contacté mais ne trouve pas la ressource demandée.",
        },
        {
            id: "developpement-web-009",
            prompt: "Pour quel type de mise en page CSS Flexbox est-il particulièrement adapté ?",
            options: [
                { id: "developpement-web-009-a", label: "L’alignement d’éléments sur un axe" },
                { id: "developpement-web-009-b", label: "La définition d’un schéma de données" },
                { id: "developpement-web-009-c", label: "Le routage des requêtes HTTP" },
                { id: "developpement-web-009-d", label: "Le stockage de fichiers" },
            ],
            correctOptionId: "developpement-web-009-a",
            explanation:
                "Flexbox organise une suite d’éléments suivant un axe principal, horizontal ou vertical.",
        },
        {
            id: "developpement-web-010",
            prompt: "Quel est le rôle principal de l’attribut alt d’une image HTML informative ?",
            options: [
                { id: "developpement-web-010-a", label: "Fixer la taille de l’image" },
                { id: "developpement-web-010-b", label: "Fournir une alternative textuelle" },
                { id: "developpement-web-010-c", label: "Choisir le format du fichier" },
                { id: "developpement-web-010-d", label: "Ajouter automatiquement une légende" },
            ],
            correctOptionId: "developpement-web-010-b",
            explanation:
                "Un texte alternatif pertinent transmet l’information de l’image lorsqu’elle n’est pas visible, notamment aux lecteurs d’écran.",
        },
        {
            id: "developpement-web-011",
            prompt: "Quel élément HTML délimite le contenu principal unique d’une page ?",
            options: [
                { id: "developpement-web-011-a", label: "<aside>" },
                { id: "developpement-web-011-b", label: "<footer>" },
                { id: "developpement-web-011-c", label: "<main>" },
                { id: "developpement-web-011-d", label: "<nav>" },
            ],
            correctOptionId: "developpement-web-011-c",
            explanation:
                "L’élément <main> identifie le contenu dominant de la page et aide les technologies d’assistance à y accéder.",
        },
        {
            id: "developpement-web-012",
            prompt: "Quel élément associe explicitement un texte descriptif à un champ de formulaire HTML ?",
            options: [
                { id: "developpement-web-012-a", label: "<legend>" },
                { id: "developpement-web-012-b", label: "<caption>" },
                { id: "developpement-web-012-c", label: "<output>" },
                { id: "developpement-web-012-d", label: "<label>" },
            ],
            correctOptionId: "developpement-web-012-d",
            explanation:
                "Un <label> lié au champ par for et id rend son nom accessible et agrandit la zone cliquable.",
        },
        {
            id: "developpement-web-013",
            prompt: "Quelle méthode HTTP est destinée à récupérer la représentation d’une ressource sans la modifier ?",
            options: [
                { id: "developpement-web-013-a", label: "DELETE" },
                { id: "developpement-web-013-b", label: "GET" },
                { id: "developpement-web-013-c", label: "PATCH" },
                { id: "developpement-web-013-d", label: "POST" },
            ],
            correctOptionId: "developpement-web-013-b",
            explanation:
                "GET demande une représentation de la ressource et fait partie des méthodes HTTP dites sûres.",
        },
        {
            id: "developpement-web-014",
            prompt: "Quelle méthode HTTP est couramment utilisée pour soumettre des données et créer une ressource ?",
            options: [
                { id: "developpement-web-014-a", label: "HEAD" },
                { id: "developpement-web-014-b", label: "OPTIONS" },
                { id: "developpement-web-014-c", label: "POST" },
                { id: "developpement-web-014-d", label: "TRACE" },
            ],
            correctOptionId: "developpement-web-014-c",
            explanation:
                "POST transmet une représentation au serveur, souvent pour créer une ressource ou déclencher un traitement.",
        },
        {
            id: "developpement-web-015",
            prompt: "Quel code HTTP indique qu’une nouvelle ressource a été créée avec succès ?",
            options: [
                { id: "developpement-web-015-a", label: "201 Created" },
                { id: "developpement-web-015-b", label: "204 No Content" },
                { id: "developpement-web-015-c", label: "304 Not Modified" },
                { id: "developpement-web-015-d", label: "400 Bad Request" },
            ],
            correctOptionId: "developpement-web-015-a",
            explanation:
                "Le statut 201 confirme la création et peut fournir l’adresse de la nouvelle ressource dans l’en-tête Location.",
        },
        {
            id: "developpement-web-016",
            prompt: "Quel code HTTP signale une redirection permanente ?",
            options: [
                { id: "developpement-web-016-a", label: "200 OK" },
                { id: "developpement-web-016-b", label: "302 Found" },
                { id: "developpement-web-016-c", label: "401 Unauthorized" },
                { id: "developpement-web-016-d", label: "301 Moved Permanently" },
            ],
            correctOptionId: "developpement-web-016-d",
            explanation:
                "Le statut 301 indique que la ressource possède durablement une nouvelle URL que les clients peuvent mémoriser.",
        },
        {
            id: "developpement-web-017",
            prompt: "Quel est le rôle principal du DNS sur Internet ?",
            options: [
                { id: "developpement-web-017-a", label: "Compresser les images" },
                { id: "developpement-web-017-b", label: "Chiffrer les mots de passe" },
                {
                    id: "developpement-web-017-c",
                    label: "Associer des noms de domaine à des adresses IP",
                },
                { id: "developpement-web-017-d", label: "Exécuter le code JavaScript" },
            ],
            correctOptionId: "developpement-web-017-c",
            explanation:
                "Le Domain Name System permet notamment de retrouver l’adresse IP correspondant à un nom lisible comme example.com.",
        },
        {
            id: "developpement-web-018",
            prompt: "Dans une URL, quelle partie commence généralement après le caractère « ? » ?",
            options: [
                { id: "developpement-web-018-a", label: "Le protocole" },
                { id: "developpement-web-018-b", label: "La chaîne de requête" },
                { id: "developpement-web-018-c", label: "Le nom d’hôte" },
                { id: "developpement-web-018-d", label: "Le fragment" },
            ],
            correctOptionId: "developpement-web-018-b",
            explanation:
                "La chaîne de requête contient des paramètres ; le fragment, lui, est introduit par le caractère « # ».",
        },
        {
            id: "developpement-web-019",
            prompt: "Quel format textuel utilise des paires clé-valeur et des tableaux pour échanger des données ?",
            options: [
                { id: "developpement-web-019-a", label: "PNG" },
                { id: "developpement-web-019-b", label: "CSS" },
                { id: "developpement-web-019-c", label: "WAV" },
                { id: "developpement-web-019-d", label: "JSON" },
            ],
            correctOptionId: "developpement-web-019-d",
            explanation:
                "JSON est un format textuel indépendant du langage, très utilisé dans les API web pour sérialiser des données.",
        },
        {
            id: "developpement-web-020",
            prompt: "Quelle donnée le navigateur peut-il envoyer automatiquement au serveur avec des requêtes ultérieures ?",
            options: [
                { id: "developpement-web-020-a", label: "Un cookie correspondant au domaine" },
                { id: "developpement-web-020-b", label: "Toute la base IndexedDB" },
                { id: "developpement-web-020-c", label: "Le contenu complet du presse-papiers" },
                { id: "developpement-web-020-d", label: "Tous les fichiers téléchargés" },
            ],
            correctOptionId: "developpement-web-020-a",
            explanation:
                "Selon ses attributs, un cookie est joint automatiquement aux requêtes visant le domaine et le chemin concernés.",
        },
        {
            id: "developpement-web-021",
            prompt: "Quel stockage du navigateur conserve des chaînes de caractères sans expiration automatique de session ?",
            options: [
                { id: "developpement-web-021-a", label: "sessionStorage" },
                { id: "developpement-web-021-b", label: "localStorage" },
                { id: "developpement-web-021-c", label: "La pile d’appels" },
                { id: "developpement-web-021-d", label: "Le cache DNS" },
            ],
            correctOptionId: "developpement-web-021-b",
            explanation:
                "localStorage persiste après la fermeture de l’onglet, jusqu’à ce que le site ou l’utilisateur efface les données.",
        },
        {
            id: "developpement-web-022",
            prompt: "Quelle politique du navigateur limite par défaut l’accès d’un script aux ressources d’une autre origine ?",
            options: [
                { id: "developpement-web-022-a", label: "La politique de même origine" },
                { id: "developpement-web-022-b", label: "La cascade CSS" },
                { id: "developpement-web-022-c", label: "Le contrôle de version" },
                { id: "developpement-web-022-d", label: "La négociation de contenu" },
            ],
            correctOptionId: "developpement-web-022-a",
            explanation:
                "La politique de même origine isole les documents dont le protocole, l’hôte ou le port diffère afin de réduire les accès indésirables.",
        },
        {
            id: "developpement-web-023",
            prompt: "Quelle attaque injecte du code de script dans une page consultée par d’autres utilisateurs ?",
            options: [
                { id: "developpement-web-023-a", label: "Une attaque par déni de service" },
                { id: "developpement-web-023-b", label: "Une collision de hachage" },
                { id: "developpement-web-023-c", label: "Une attaque XSS" },
                { id: "developpement-web-023-d", label: "Une panne DNS" },
            ],
            correctOptionId: "developpement-web-023-c",
            explanation:
                "Le cross-site scripting exploite un contenu non neutralisé pour exécuter du JavaScript dans le contexte du site ciblé.",
        },
        {
            id: "developpement-web-024",
            prompt: "Quelle attaque pousse un navigateur authentifié à envoyer une requête non souhaitée à un site ?",
            options: [
                { id: "developpement-web-024-a", label: "XSS réfléchi" },
                { id: "developpement-web-024-b", label: "Injection de dépendance" },
                { id: "developpement-web-024-c", label: "Écoute réseau passive" },
                { id: "developpement-web-024-d", label: "CSRF" },
            ],
            correctOptionId: "developpement-web-024-d",
            explanation:
                "Une attaque CSRF profite des informations d’authentification déjà détenues par le navigateur de la victime.",
        },
        {
            id: "developpement-web-025",
            prompt: "Comment faut-il normalement protéger les mots de passe enregistrés côté serveur ?",
            options: [
                {
                    id: "developpement-web-025-a",
                    label: "Avec une fonction de hachage dédiée et un sel",
                },
                { id: "developpement-web-025-b", label: "Avec un simple encodage Base64" },
                { id: "developpement-web-025-c", label: "Dans un commentaire du code source" },
                { id: "developpement-web-025-d", label: "En texte brut dans la base" },
            ],
            correctOptionId: "developpement-web-025-a",
            explanation:
                "Un algorithme lent conçu pour les mots de passe, accompagné d’un sel unique, limite les dégâts en cas de fuite.",
        },
        {
            id: "developpement-web-026",
            prompt: "Quel mécanisme détermine ce qu’un utilisateur authentifié a le droit de faire ?",
            options: [
                { id: "developpement-web-026-a", label: "La minification" },
                { id: "developpement-web-026-b", label: "La sérialisation" },
                { id: "developpement-web-026-c", label: "L’autorisation" },
                { id: "developpement-web-026-d", label: "La résolution DNS" },
            ],
            correctOptionId: "developpement-web-026-c",
            explanation:
                "L’authentification vérifie l’identité ; l’autorisation contrôle ensuite les actions permises à cette identité.",
        },
        {
            id: "developpement-web-027",
            prompt: "Quel objet JavaScript représente l’achèvement futur ou l’échec d’une opération asynchrone ?",
            options: [
                { id: "developpement-web-027-a", label: "Proxy" },
                { id: "developpement-web-027-b", label: "Promise" },
                { id: "developpement-web-027-c", label: "WeakMap" },
                { id: "developpement-web-027-d", label: "Symbol" },
            ],
            correctOptionId: "developpement-web-027-b",
            explanation:
                "Une Promise passe d’un état en attente à un état tenu ou rejeté et permet d’enchaîner les traitements.",
        },
        {
            id: "developpement-web-028",
            prompt: "Quel mot-clé doit généralement précéder la déclaration d’une fonction qui utilise await ?",
            options: [
                { id: "developpement-web-028-a", label: "static" },
                { id: "developpement-web-028-b", label: "yield" },
                { id: "developpement-web-028-c", label: "defer" },
                { id: "developpement-web-028-d", label: "async" },
            ],
            correctOptionId: "developpement-web-028-d",
            explanation:
                "Dans une fonction JavaScript, async permet d’employer await et fait toujours retourner une Promise.",
        },
        {
            id: "developpement-web-029",
            prompt: "Que renvoie la méthode JavaScript Array.prototype.map() ?",
            options: [
                { id: "developpement-web-029-a", label: "Le premier élément du tableau" },
                { id: "developpement-web-029-b", label: "Le tableau source toujours modifié" },
                {
                    id: "developpement-web-029-c",
                    label: "Un nouveau tableau d’éléments transformés",
                },
                { id: "developpement-web-029-d", label: "Uniquement une valeur booléenne" },
            ],
            correctOptionId: "developpement-web-029-c",
            explanation:
                "map appelle une fonction pour chaque élément et rassemble les valeurs produites dans un nouveau tableau.",
        },
        {
            id: "developpement-web-030",
            prompt: "Que fait l’opérateur JavaScript === lors d’une comparaison ?",
            options: [
                {
                    id: "developpement-web-030-a",
                    label: "Il compare sans conversion implicite de type",
                },
                { id: "developpement-web-030-b", label: "Il affecte une nouvelle valeur" },
                { id: "developpement-web-030-c", label: "Il compare uniquement des chaînes" },
                {
                    id: "developpement-web-030-d",
                    label: "Il convertit toujours les valeurs en nombres",
                },
            ],
            correctOptionId: "developpement-web-030-a",
            explanation:
                "L’égalité stricte exige des types compatibles et des valeurs égales, contrairement à l’opérateur == qui peut convertir.",
        },
        {
            id: "developpement-web-031",
            prompt: "Quelle déclaration JavaScript crée une variable limitée au bloc courant et réaffectable ?",
            options: [
                { id: "developpement-web-031-a", label: "class" },
                { id: "developpement-web-031-b", label: "import" },
                { id: "developpement-web-031-c", label: "const" },
                { id: "developpement-web-031-d", label: "let" },
            ],
            correctOptionId: "developpement-web-031-d",
            explanation:
                "let possède une portée de bloc et autorise la réaffectation, contrairement à une liaison déclarée avec const.",
        },
        {
            id: "developpement-web-032",
            prompt: "Que garantit const pour une liaison JavaScript ?",
            options: [
                {
                    id: "developpement-web-032-a",
                    label: "Que l’objet référencé devient profondément immuable",
                },
                {
                    id: "developpement-web-032-b",
                    label: "Que la liaison ne peut pas être réaffectée",
                },
                {
                    id: "developpement-web-032-c",
                    label: "Que la valeur est accessible dans tous les modules",
                },
                {
                    id: "developpement-web-032-d",
                    label: "Que la valeur est supprimée après le bloc",
                },
            ],
            correctOptionId: "developpement-web-032-b",
            explanation:
                "const empêche de réaffecter la liaison, mais les propriétés d’un objet référencé peuvent encore être modifiées.",
        },
        {
            id: "developpement-web-033",
            prompt: "Quelle méthode d’un événement DOM empêche l’action par défaut du navigateur ?",
            options: [
                { id: "developpement-web-033-a", label: "preventDefault()" },
                { id: "developpement-web-033-b", label: "remove()" },
                { id: "developpement-web-033-c", label: "dispatchEvent()" },
                { id: "developpement-web-033-d", label: "cloneNode()" },
            ],
            correctOptionId: "developpement-web-033-a",
            explanation:
                "preventDefault() peut par exemple empêcher un formulaire de déclencher immédiatement sa soumission native.",
        },
        {
            id: "developpement-web-034",
            prompt: "Qu’appelle-t-on la propagation ascendante d’un événement DOM ?",
            options: [
                { id: "developpement-web-034-a", label: "La compilation" },
                { id: "developpement-web-034-b", label: "Le bubbling" },
                { id: "developpement-web-034-c", label: "La sérialisation" },
                { id: "developpement-web-034-d", label: "Le tree shaking" },
            ],
            correctOptionId: "developpement-web-034-b",
            explanation:
                "Pendant le bubbling, l’événement remonte de la cible vers ses ancêtres, qui peuvent aussi l’intercepter.",
        },
        {
            id: "developpement-web-035",
            prompt: "Que renvoie immédiatement la fonction fetch() du navigateur ?",
            options: [
                { id: "developpement-web-035-a", label: "Le corps JSON déjà analysé" },
                { id: "developpement-web-035-b", label: "Un élément DOM" },
                { id: "developpement-web-035-c", label: "Une connexion WebSocket" },
                { id: "developpement-web-035-d", label: "Une Promise de Response" },
            ],
            correctOptionId: "developpement-web-035-d",
            explanation:
                "fetch() est asynchrone : sa Promise fournit un objet Response dont le corps doit ensuite être lu.",
        },
        {
            id: "developpement-web-036",
            prompt: "Quel mécanisme HTTP autorise explicitement certaines requêtes entre origines différentes ?",
            options: [
                { id: "developpement-web-036-a", label: "DOM" },
                { id: "developpement-web-036-b", label: "CSSOM" },
                { id: "developpement-web-036-c", label: "CORS" },
                { id: "developpement-web-036-d", label: "BOM" },
            ],
            correctOptionId: "developpement-web-036-c",
            explanation:
                "CORS utilise des en-têtes de réponse pour indiquer aux navigateurs quelles origines peuvent lire la ressource.",
        },
        {
            id: "developpement-web-037",
            prompt: "Quel en-tête HTTP indique notamment combien de temps une réponse peut rester en cache ?",
            options: [
                { id: "developpement-web-037-a", label: "Accept-Language" },
                { id: "developpement-web-037-b", label: "Cache-Control" },
                { id: "developpement-web-037-c", label: "Content-Disposition" },
                { id: "developpement-web-037-d", label: "User-Agent" },
            ],
            correctOptionId: "developpement-web-037-b",
            explanation:
                "Cache-Control expose des directives comme max-age, public ou no-store pour piloter la mise en cache.",
        },
        {
            id: "developpement-web-038",
            prompt: "Quel attribut HTML peut différer le chargement d’une image située hors de l’écran ?",
            options: [
                { id: "developpement-web-038-a", label: 'decoding="sync"' },
                { id: "developpement-web-038-b", label: 'fetchpriority="high"' },
                { id: "developpement-web-038-c", label: 'draggable="false"' },
                { id: "developpement-web-038-d", label: 'loading="lazy"' },
            ],
            correctOptionId: "developpement-web-038-d",
            explanation:
                'loading="lazy" permet au navigateur de retarder le téléchargement des images éloignées de la zone visible.',
        },
        {
            id: "developpement-web-039",
            prompt: "Quelle action réduit généralement le poids d’une grande photographie affichée sur le Web ?",
            options: [
                {
                    id: "developpement-web-039-a",
                    label: "La redimensionner et la compresser dans un format adapté",
                },
                {
                    id: "developpement-web-039-b",
                    label: "La convertir en texte Base64 dans le HTML",
                },
                { id: "developpement-web-039-c", label: "Augmenter ses dimensions CSS" },
                {
                    id: "developpement-web-039-d",
                    label: "Dupliquer le fichier sur plusieurs pages",
                },
            ],
            correctOptionId: "developpement-web-039-a",
            explanation:
                "Servir des dimensions proches de l’affichage et une compression appropriée réduit le transfert sans dégrader inutilement l’image.",
        },
        {
            id: "developpement-web-040",
            prompt: "Quel élément HTML fournit le titre affiché dans l’onglet et utilisé comme signal par les moteurs de recherche ?",
            options: [
                { id: "developpement-web-040-a", label: "<header>" },
                { id: "developpement-web-040-b", label: "<h1>" },
                { id: "developpement-web-040-c", label: "<title>" },
                { id: "developpement-web-040-d", label: "<summary>" },
            ],
            correctOptionId: "developpement-web-040-c",
            explanation:
                "L’élément <title>, placé dans <head>, nomme le document pour l’onglet, les favoris et les résultats de recherche.",
        },
        {
            id: "developpement-web-041",
            prompt: "Quel élément représente normalement le titre principal de premier niveau d’un document HTML ?",
            options: [
                { id: "developpement-web-041-a", label: "<strong>" },
                { id: "developpement-web-041-b", label: "<legend>" },
                { id: "developpement-web-041-c", label: "<header>" },
                { id: "developpement-web-041-d", label: "<h1>" },
            ],
            correctOptionId: "developpement-web-041-d",
            explanation:
                "Un <h1> exprime le niveau supérieur de la hiérarchie des titres ; son apparence reste contrôlée par CSS.",
        },
        {
            id: "developpement-web-042",
            prompt: "Dans une même couche CSS, à origine et importance égales, quel sélecteur est le plus spécifique ?",
            options: [
                { id: "developpement-web-042-a", label: "Le sélecteur universel *" },
                { id: "developpement-web-042-b", label: "Un sélecteur d’identifiant comme #menu" },
                { id: "developpement-web-042-c", label: "Un sélecteur de type comme nav" },
                { id: "developpement-web-042-d", label: "Une pseudo-classe comme :hover" },
            ],
            correctOptionId: "developpement-web-042-b",
            explanation:
                "Dans le calcul classique de spécificité, un identifiant pèse davantage qu’une classe, une pseudo-classe ou un type.",
        },
        {
            id: "developpement-web-043",
            prompt: "Quel ordre décrit le modèle de boîte CSS de l’intérieur vers l’extérieur ?",
            options: [
                { id: "developpement-web-043-a", label: "Marge, bordure, contenu, remplissage" },
                { id: "developpement-web-043-b", label: "Bordure, contenu, marge, remplissage" },
                { id: "developpement-web-043-c", label: "Contenu, remplissage, bordure, marge" },
                { id: "developpement-web-043-d", label: "Remplissage, marge, contenu, bordure" },
            ],
            correctOptionId: "developpement-web-043-c",
            explanation:
                "Le contenu est entouré par le padding, puis la bordure ; la marge crée enfin l’espace extérieur.",
        },
        {
            id: "developpement-web-044",
            prompt: "Quel module CSS est conçu pour organiser des éléments en lignes et en colonnes ?",
            options: [
                { id: "developpement-web-044-a", label: "CSS Grid" },
                { id: "developpement-web-044-b", label: "CSS Speech" },
                { id: "developpement-web-044-c", label: "CSS Masking" },
                { id: "developpement-web-044-d", label: "CSS Fonts" },
            ],
            correctOptionId: "developpement-web-044-a",
            explanation:
                "CSS Grid est un système bidimensionnel qui contrôle simultanément les rangées et les colonnes.",
        },
        {
            id: "developpement-web-045",
            prompt: "À quelle référence l’unité CSS rem est-elle relative ?",
            options: [
                { id: "developpement-web-045-a", label: "À la largeur de la fenêtre" },
                {
                    id: "developpement-web-045-b",
                    label: "À la taille de police de l’élément racine",
                },
                { id: "developpement-web-045-c", label: "À la hauteur de la ligne courante" },
                { id: "developpement-web-045-d", label: "À la résolution physique de l’écran" },
            ],
            correctOptionId: "developpement-web-045-b",
            explanation:
                "Une valeur en rem dépend de la taille de police de l’élément racine, généralement l’élément html.",
        },
        {
            id: "developpement-web-046",
            prompt: "Quel bénéfice principal TypeScript ajoute-t-il à JavaScript pendant le développement ?",
            options: [
                { id: "developpement-web-046-a", label: "Une base de données intégrée" },
                { id: "developpement-web-046-b", label: "Un nouveau protocole réseau" },
                { id: "developpement-web-046-c", label: "Une vérification statique des types" },
                { id: "developpement-web-046-d", label: "Un chiffrement automatique du code" },
            ],
            correctOptionId: "developpement-web-046-c",
            explanation:
                "TypeScript analyse les types avant l’exécution puis produit du JavaScript utilisable par les environnements ciblés.",
        },
        {
            id: "developpement-web-047",
            prompt: "Quel rôle joue généralement un fichier package-lock.json dans un projet npm ?",
            options: [
                {
                    id: "developpement-web-047-a",
                    label: "Décrire précisément l’arbre de dépendances installé",
                },
                {
                    id: "developpement-web-047-b",
                    label: "Stocker les variables secrètes de production",
                },
                { id: "developpement-web-047-c", label: "Remplacer le code source des paquets" },
                { id: "developpement-web-047-d", label: "Configurer les enregistrements DNS" },
            ],
            correctOptionId: "developpement-web-047-a",
            explanation:
                "Le lockfile fige les versions résolues et leurs métadonnées afin de rendre les installations plus reproductibles.",
        },
        {
            id: "developpement-web-048",
            prompt: "Que vérifie principalement un test unitaire ?",
            options: [
                { id: "developpement-web-048-a", label: "La totalité du système en production" },
                { id: "developpement-web-048-b", label: "Uniquement la vitesse du réseau" },
                { id: "developpement-web-048-c", label: "L’identité réelle d’un utilisateur" },
                { id: "developpement-web-048-d", label: "Une petite unité de comportement isolée" },
            ],
            correctOptionId: "developpement-web-048-d",
            explanation:
                "Un test unitaire cible une fonction ou un composant limité, avec des dépendances contrôlées si nécessaire.",
        },
        {
            id: "developpement-web-049",
            prompt: "Quel est l’objectif d’un test d’intégration ?",
            options: [
                {
                    id: "developpement-web-049-a",
                    label: "Vérifier la collaboration entre plusieurs parties du système",
                },
                { id: "developpement-web-049-b", label: "Choisir la palette graphique du site" },
                { id: "developpement-web-049-c", label: "Remplacer toutes les revues de code" },
                {
                    id: "developpement-web-049-d",
                    label: "Mesurer uniquement la taille des fichiers",
                },
            ],
            correctOptionId: "developpement-web-049-a",
            explanation:
                "Un test d’intégration contrôle que plusieurs modules, services ou couches fonctionnent correctement ensemble.",
        },
        {
            id: "developpement-web-050",
            prompt: "Quelle partie d’une application web s’exécute généralement dans le navigateur et affiche l’interface ?",
            options: [
                { id: "developpement-web-050-a", label: "Le serveur DNS" },
                { id: "developpement-web-050-b", label: "Le frontend" },
                { id: "developpement-web-050-c", label: "Le système de sauvegarde" },
                { id: "developpement-web-050-d", label: "Le proxy de messagerie" },
            ],
            correctOptionId: "developpement-web-050-b",
            explanation:
                "Le frontend présente l’interface et gère les interactions côté navigateur ; le backend traite généralement la logique serveur.",
        },
    ],
};
