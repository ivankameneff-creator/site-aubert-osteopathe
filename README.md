# Site Aubert Ostéopathe

Clone local de la page d'accueil de [Charlotte Aubert, ostéopathe à Paris 16](https://www.aubert-osteopatheparis16.com/).

## Lancer le site

Prérequis : Node.js 24 ou supérieur.

```powershell
npm.cmd install
npm.cmd run dev
```

Ouvrir ensuite [http://localhost:3000](http://localhost:3000). Pour arrêter le serveur, utiliser `Ctrl+C` dans le terminal.

## Vérifications

```powershell
npm.cmd run lint
npm.cmd run typecheck
npm.cmd run build
npm.cmd run check
```

## Contenu

- La page d'accueil est disponible sur `/`.
- Les liens de réservation ouvrent Doctolib; les pages de détail non clonées restent des liens vers le site source.
- Les images locales du site sont dans `public/sites/aubert-osteopatheparis16/`.
- Le relevé des sections et interactions est dans `docs/research/aubert-osteopatheparis16/page-brief.md`.
- Le formulaire de contact est une maquette locale : il n'envoie pas de message et l'indique à l'utilisateur.
- La version source déborde horizontalement à 390px; cette reproduction conserve ce comportement.
