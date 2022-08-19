# Création d'un plugin pour votre Thelia Blocks

## Exemple : Création d'un plugin de citation

Nous allons donc créer un composant affichant une citation.

Celui ci devra afficher un champ pour indiquer le nom de l'auteur, et un second champs permettant d'insérer la citation en question.

### 1 - Création du composant

Commençons par définir les données initiales du plugin :

```js
const initialData = {
  author: "",
  quote: "",
};
```

Ensuite, nous allons pouvoir écrire le composant React permettant de visualiser le plugin

Un plugin Thelia Blocks prends toujours deux `props` :

| Prop       | Type       | Description                                                |
| :--------- | :--------- | :--------------------------------------------------------- |
| `data`     | `any`      | Objet contenant les données du plugin                      |
| `onUpdate` | `Function` | Fonction permettant de mettre à jour les données du plugin |

Exemple :

```jsx
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

Notre plugin `citation` utilise un élément TextArea pour permettre à l'utilisateur d'insérer une citation, il est cependant possible d'imbriquer certains plugins pour réutiliser des fonctionnalités.

Dans notre cas, le plugin `Text` est parfait :
Celui ci embarque déjà un système rich-text et d'autres fonctionnalités qui peuvent être utiles.

Voyons comment l'utiliser dans notre plugin de citations :

```js
// import de la liste des plugins
import { blocks } from "../..";

const { Text } = blocks; // Récupération du plugin Text
```

Nous pouvons désormais nous servir de `Text` dans le plugin Citation :

```jsx
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
          id={nanoid()} // Thelia Blocks utilise nanoid pour assurer l'unicité des plugins
        />
      </div>
    </div>
  );
};
```

Notre plugin Citation utilise désormais `Text` pour fonctionner.

### 3 - Définition de la structure de votre plugin

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

// N'oubliez pas d'exporter votre plugin :
export default blockQuote;
```

### 4 - Ajout du plugin à Thelia Blocks

Votre plugin doit maintenant être ajouté à Thelia Blocks pour être disponible lors de la création d'un nouveau Block.

Rendez vous dans le fichier `"hooks/usePlugins.tsx"`.

Le hook `"usePlugins"` se charge de l'ajout de la liste des plugins dans Thelia Blocks.

Voyons comment y ajouter notre plugin de citations :

```js
import { Text, ..., Citation } from  "../blocks";

export const TB_DEFAULT_PLUGINS = [
	{ id: nanoid(), ...Text },
	{ id: nanoid(), ...Citation }, // Ajout du block Citation à la liste
];
```

### 5 - Création du rendu Smarty

Votre plugin est disponible dans Thelia Blocks, la dernière étape consiste à définir l'HTML qu'il doit générer une fois que Thelia l'affichera sur votre site.

Rendez vous dans le dossier `"local/modules/TheliaBlocks/templates/[votre_template]/blocks/"` sur votre Thelia.

#### 5.1 - Création de votre rendu :

Pour commencer, créez un fichier nommé `"[id_de_votre_plugin].html"`

L'id a été défini dans la structure du plugin, il est important que votre fichier ai exactement le même nom que l'id, sinon Thelia ne trouvera pas votre plugin et rien ne sera affiché.

Exemple :

```smarty
<figure class="tb-{$type["id"]}">
	<blockquote>{$data["quote"]}</blockquote>
	<figcaption>-{$data["author"]}</figcaption>
</figure>
```

### 6 - Aller plus loin

#### 6.1 - Traductions

Vous pouvez traduire vos plugins sans soucis, Thelia Blocks utilise `react-intl` pour les traductions.
La configuration des traductions sont disponibles dans le fichier `src/utils/intl.ts`.
Plus d'informations sur la [documentation](https://formatjs.io/docs/getting-started/installation/) de `react-intl`

La traduction du titre et de la description du plugin se fait directement dans sa définition.

#### 6.2 - TypeScript

Les plugins de base de Thelia Blocks sont rédigés avec TypeScript, cependant, rien ne vous empêche de les rédiger en JavaScript classique.
Des exemples d'intégration avec TypeScript sont disponibles [ici](https://github.com/thelia-modules/TheliaBlocks/example/)
