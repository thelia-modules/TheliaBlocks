# Création d'un plugin pour Thelia Blocks

## Exemple : Création d'un plugin de citation

### Introduction

Ce plugin devra pouvoir afficher un champ pour indiquer le nom de l'auteur, et un second champ permettant d'insérer la citation en question.

Dans cet exemple, nous allons créer le plugin depuis un module Thelia.
Si vous ne connaissez pas encore le fonctionnement des modules Thelia, nous vous conseillons vivement d'aller lire la [documentation officielle sur les modules Thelia](https://doc.thelia.net/en/documentation/modules/index.html).

### Architecture du module

Lors de cet exemple, nous utiliserons une architecture bien spécifique.
Vous êtes évidemment libre de structurer votre module comme vous le souhaitez.

```
.
├── ...
├── local/modules/ModuleCitation
│   ├── Config/
│   │	├── module.xml
│   │   └── config.xml
│   ├── Hook/
│   │   └── BackHook.php
│   └── templates/
│   │	├── frontOffice/default/blocks/
│   │	│	├── blockCitation.html
│   │   │	└── ...
│   │   └── backOffice/default/
│   │   │	├── src/
│   │   │	│   └── Citation.jsx
│   │   │	├── tsup.config.js
│   │   │	└── index.js
│   ├── package.json
│   └── ModuleCitation.php
└── ...
```

### Installation des dépendances :

```bash
npm install react tsup @openstudio/blocks-editor
```

### 1 - Création du composant

Commençons par créer un fichier `Citation.jsx` et par définir les données initiales du plugin :

```js
// ./templates/backOffice/default/src/Citation.jsx

const initialData = {
  author: "",
  quote: "",
};
```

Ensuite, nous allons pouvoir écrire le composant React permettant de visualiser le plugin dans l'éditeur de Thelia Blocks.

:warning: Attention : un plugin Thelia Blocks prends toujours deux `props` :

| Prop       | Type       | Description                                                |
| :--------- | :--------- | :--------------------------------------------------------- |
| `data`     | `any`      | Objet contenant les données du plugin                      |
| `onUpdate` | `Function` | Fonction permettant de mettre à jour les données du plugin |

Exemple :

```jsx
// ./templates/backOffice/default/src/Citation.jsx

const BlockQuoteComponent = ({ data, onUpdate }) => {
  return (
    <div className="BlockQuote">
      <div className="BlockQuote-field">
        <label htmlFor="author-field">Auteur</label>
        <input
          type="text"
          className="Input__Text"
          id="author-field"
          placeholder="Nom de l'auteur"
          value={data.author}
          onChange={(e) => onUpdate({ ...data, author: e.target.value })}
        />
      </div>
      <div className="BlockQuote-field">
        <label htmlFor="quote-field">Citation</label>
        <textarea
          className="Input__TextArea"
          id="quote-field"
          placeholder="Entrez la citation"
          value={data.quote}
          onChange={(e) => onUpdate({ ...data, quote: e.target.value })}
        />
      </div>
    </div>
  );
};
```

### 2 - Combinez vos plugins

Notre plugin `citation` utilise un élément `<textarea />` pour permettre à l'utilisateur d'insérer une citation.
Cependant, il est tout à fait possible d'imbriquer certains plugins pour réutiliser des fonctionnalités déjà existantes.

Dans notre cas, le plugin `Text` est parfait :
Celui ci embarque déjà un système rich-text et d'autres fonctionnalités qui peuvent être utiles.

Voyons comment l'utiliser dans notre plugin de citations :

```js
// ./templates/backOffice/default/src/Citation.jsx

import { blocks } from "@openstudio/blocks-editor";

const { Text } = blocks; // Récupération du plugin Text dans la liste des plugins
```

Nous pouvons désormais nous servir de `Text` dans le plugin Citation :

```jsx
// ./templates/backOffice/default/src/Citation.jsx

import { generateId } from "@openstudio/blocks-editor";

const BlockQuoteComponent = ({ data, onUpdate }) => {
  return (
    <div className="BlockQuote">
      <div className="BlockQuote-field">
        <label htmlFor="author-field">Auteur</label>
        <input
          type="text"
          className="Input__Text"
          id="author-field"
          placeholder="Nom de l'auteur"
          value={author}
          onChange={(e) => onUpdate({ ...data, author: e.target.value })}
        />
      </div>
      <div className="BlockQuote-field">
        <Text.component
          data={{ value: data.quote }}
          onUpdate={(value) => onUpdate({ ...data, quote: value })}
          id={generateId()}
        />
      </div>
    </div>
  );
};
```

Notre plugin Citation utilise désormais `Text` pour fonctionner.

:warning: Attention : un plugin doit obligatoirement avoir un composant React ou hériter d'un autre plugin

### 3 - Structure et export du plugin

Chaque plugin est représenté par un objet. Celui ci regroupe toutes les informations nécessaires à son bon fonctionnement.

| Attribut      | Type                                      |       Requis       | Description                                                            |
| :------------ | :---------------------------------------- | :----------------: | :--------------------------------------------------------------------- |
| `type`        | `{ id: string; }`                         | :white_check_mark: | ID du plugin, celui ci sera utilisé par Thelia pour effectuer le rendu |
| `component`   | `ReactElement`                            | :white_check_mark: | Composant du plugin                                                    |
| `initialData` | `any`                                     | :white_check_mark: | Données par défaut du plugin                                           |
| `icon`        | `FunctionComponent<SVGProps<SVGElement>>` |                    | Icone du plugin                                                        |
| `title`       | `{ [key: string]: string; }`              | :white_check_mark: | Titre du plugin                                                        |
| `description` | `{ [key: string]: string; }`              | :white_check_mark: | Description du plugin                                                  |

Exemple :

```js
// ./templates/backOffice/default/src/Citation.jsx

const blockQuote = {
  type: { id: "blockQuote" },
  component: BlockQuoteComponent,
  initialData,
  icon: Icon,
  title: {
    default: "Quote",
    fr: "Citation",
    en: "Quote",
  },
  description: {
    default: "Display a quote",
    fr: "Affiche une citation",
    en: "Display a quote",
  },
};

export default blockQuote;
```

### 4 - Configuration du plugin avec Thelia

#### 4.1 - Ajout du plugin dans Thelia Blocks

Votre plugin doit maintenant être ajouté à Thelia Blocks pour être disponible lors de la création d'un nouveau Block.

La fonction `"registerPlugin"` se charge de l'ajout de la liste des plugins dans Thelia Blocks.

Celle ci est exportée par le package `@openstudio/blocks-editor`

Exemple :

```js
// ./templates/backOffice/default/index.js

import { registerPlugin } from "@openstudio/blocks-editor";
import Citation from "./Citation";

registerPlugin(Citation);
```

#### 4.2 - Génération du bundle

:warning: L'exemple ci-dessous décrit une utilisation avec le bundler [tsup](https://github.com/egoist/tsup), vous pouvez évidemment utiliser n'importe quel autre bundler.

```js
// ./templates/backOffice/default/tsup.config.js

import { defineConfig } from "tsup";

export default defineConfig([
  {
    entry: ["./src/index.js"],
    clean: false,
    dts: {
      entry: ["./src/index.js"],
    },
    sourcemap: true,
    platform: "browser",
    globalName: "MonModule",
    target: "es2020",
  },
]);
```

#### 4.3 - Création des template Smarty

```smarty
<!-- ./templates/backOffice/default/import-plugin.html -->

<script src="{encore_module_asset file='dist/index.global.js' module="ModuleCitation"}"></script>
```

#### 4.4 - Rendu des templates avec les hooks Thelia

Thelia Blocks utilise deux principaux event pour fonctionner :

- `thelia.blocks.plugins` : permet d'ajouter des plugins à Thelia Blocks
- `thelia.blocks.plugincss` : permet d'injecter du CSS dans les plugins

```xml
<!-- ./Config/config.xml -->

<hooks>
  <hook id="modulecitation.hook">
    <tag name="hook.event_listener" event="thelia.blocks.plugins" type="back" render="import-plugin.html" />
  </hook>
</hooks>
```

### 5 - Création du rendu Smarty

Votre plugin est désormais disponible dans Thelia Blocks, la dernière étape consiste à définir la structure HTML qu'il doit générer une fois que Thelia l'affichera sur votre site.

#### 5.1 - Création de votre rendu

Pour commencer, créez un fichier nommé `"[id_du_plugin].html"` dans le dossier `./templates/frontOffice/default/blocks`

L'ID a été défini dans la structure du plugin, il est important que votre fichier ai exactement le même nom que l'id, sinon Thelia ne trouvera pas votre plugin et rien ne sera affiché.

Exemple :

```smarty
<!-- ./templates/frontOffice/default/blocks/blockQuote.html -->

<figure class="tb-{$type["id"]}">
  <blockquote>{$data["quote"]}</blockquote>
  <figcaption>-{$data["author"]}</figcaption>
</figure>
```

### 6 - Aller plus loin

#### Traductions

Vous pouvez également traduire vos plugins, Thelia Blocks utilise `react-intl` pour les traductions.
Plus d'informations sur la [documentation](https://formatjs.io/docs/getting-started/installation/) de `react-intl`

La traduction du titre et de la description du plugin se fait directement dans sa définition.

[Exemple d'un plugin avec traductions](https://github.com/thelia-modules/TheliaBlocks-plugins-examples/tree/main/Citation-with-intl)

#### Styling

Il est également possible de styliser vos plugins comme vous le souhaitez.
L'event `thelia.blocks.plugincss` permet d'injecter du CSS dans vos plugins.

[Exemple d'un plugin avec styling](https://github.com/thelia-modules/TheliaBlocks-plugins-examples/tree/main/Citation-with-css)

#### TypeScript

Les plugins de base de Thelia Blocks sont rédigés avec TypeScript, cependant, rien ne vous empêche de les rédiger en JavaScript classique.
