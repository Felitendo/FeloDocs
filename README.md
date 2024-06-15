Willkommen bei Felo Docs. Hier kannst du die Seiten bearbeiten und ein Pull Request erstellen, damit ich deine Änderungen implementieren kann. Hier ein kleines Tutorial:

1. Lade dir Github Desktop [hier](https://central.github.com/deployments/desktop/desktop/latest/win32) herunter.
2. Lade dir Visual Studio Code [hier](https://code.visualstudio.com/sha/download?build=stable&os=win32-x64-user) herunter.
3. Lade dir Node.js [hier](https://nodejs.org/dist/v18.18.2/node-v18.18.2-x64.msi) herunter.
3. Lade dir Git [hier](https://github.com/git-for-windows/git/releases/download/v2.42.0.windows.2/Git-2.42.0.2-64-bit.exe) herunter.
4. Öffne Github Desktop und melde dich mit deinem Github Account an.
5. Klicke auf "File -> Clone Repository" und Klicke auf "URL". Gib dort "https://github.com/Felitendo/Docs" ein.
6. Klicke auf "clone" und warte bis es fertig mit clonen ist.
7. Klicke auf "Open in VSCode"
8. Klicke auf "Terminal -> new Terminal" und gib dort "npm i" ein.
9. Warte bis alles installiert ist und gib dann "npm i react-player" ein.
10. Gib dann entweder "npm start" oder "node ./index.js" ein.
11. Öffne diese Website in deinem Browser: http://localhost:25561
12. Ändere die Seite die du ändern willst. Die Docs findest du in "/docs/".
13. Speichere deine Änderungen mit STRG + S
14. Gehe wieder in Github Desktop und klicke auf "Commit to main" oder "Open pull request".
15. Beschreibe was genau du geändert hast und schicke deine Pull Request ab.
16. Warte, bis deine Pull Request bearbeitet wurde. Dies sollte normalerweise nicht länger als 3 Tage dauern. Wenn doch, kannst du mir gerne auf Discord schreiben (@felitendo).





# Von Docusaurus:
## Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
