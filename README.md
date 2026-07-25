# Questionary

Application de quiz fonctionnant entièrement dans le navigateur.

## Fonctionnalités

- plusieurs catégories thématiques et un quiz réunissant toutes les questions ;
- parties limitées à vingt questions avec rotation persistante du catalogue ;
- ordre aléatoire des questions et des réponses ;
- correction immédiate après chaque réponse ;
- résultat final et pourcentage ;
- meilleur score conservé localement par catégorie ;
- consultation, suppression et rejeu des scores.

## Démarrage

```bash
npm install
npm run dev
```

Le projet utilise Next.js, React, TypeScript, Tailwind CSS et shadcn/ui. Il ne
contient ni base de données, ni authentification, ni route API.

## Tests

```bash
npm test
npm run test:unit
npm run test:unit:watch
npm run test:coverage
npm run test:e2e
```

Les tests unitaires et d’intégration utilisent Vitest. Les parcours navigateur
utilisent Playwright avec Chromium. Avant leur première exécution locale,
installer le navigateur :

```bash
npx playwright install chromium
```
