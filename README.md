# electron-bloc-note-test

Rendu de Ryan Amsellem--Bousignac pour le TP Bloc-note

## Fonctionalités

- Zone de texte éditable (textarea HTML) avec fond sombre et police
monospace

- Bouton 'Ouvrir' : ouvre dialog.showOpenDialog() et affiche le contenu dans
l'éditeur

- Bouton 'Sauvegarder' : sauvegarde le contenu avec
dialog.showSaveDialog() si nouveau fichier

- Menu natif 'Fichier' : Nouveau (Ctrl+N), Ouvrir (Ctrl+O), Sauvegarder
(Ctrl+S), Quitter

- Titre de fenêtre dynamique : affiche le nom du fichier ouvert (ex :
'Bloc-Notes — notes.txt')

- Compteur de caractères mis à jour en temps réel dans la toolbar

- Notification native après chaque sauvegarde réussie

- Sécurité respectée : contextIsolation: true, nodeIntegration: false, preload +
contextBridge

- Bouton de bascule thème clair / sombre avec mémorisation via
electron-store

## Installation

```bash
npm install
```

## Lancer en développement

```bash
npm start
```