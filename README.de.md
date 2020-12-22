# [eslint-config-typescript-plus-framework][website] (Noch in Arbeit)

Deutsch / [English](./README.md)

---

Diese ESLint konfiguration ist eine progressive ESLint Konfiguration für deine React/Vue/Angular Projekte mit Typescript. Dieses Repo ist inspiriert von Airbnb und alloy.

## Quick start

Wähle eine der folgenden Konfigurationen aus, passend für deinen Stack:

- [Standard](#built-in)
- [React](#react)
- [Vue](#vue)
- [Angular](#angular)

## Philosophie

- Lass [Prettier][] die style-regelen händeln
- Verwirkliche die [ESLint's Philosophie](https://eslint.org/docs/about/#philosophy) und hilf den anderen beim erstellen ihrer Regeln
- Hoher Anteil an Automatisierung: Fortgeschrittenes Regelmanagement
- Bleib bei der Sache. Aktualisiere immer zum neusten Stand

## Verwendung

### Standard (Typescript)

```bash
npm install --save-dev eslint-config-typescript-plus-framework
npx install-peerdeps --save-dev eslint-config-typescript-plus-framework
```

Erstelle eine `.eslintrc.js` in dem Root-Verzeichnis deines Projektes, dann kopiere den folgenden Inhalt hinein:

```js
module.exports = {
  extends: ['typescript-plus-framework'],
  env: {
    // Deine Umgebung (enthält zahlreiche vorgefertigte Variablen)
    //
    // browser: true,
    // node: true,
    // mocha: true,
    // jest: true,
    // jquery: true
  },
  globals: {
    // Deine globalen Variablen (false bedeutet, dass die Variable nicht verändert werden darf)
    //
    // myGlobal: false
  },
  rules: {
    // Überschreibe regeln und Kreiere neue
  },
};
```

### Vue

```bash
npm install --save-dev eslint-config-typescript-plus-framework
npx install-peerdeps --save-dev eslint-config-typescript-plus-framework
npm install --save-dev eslint-plugin-vue vue-eslint-parser
```

Erstelle eine `.eslintrc.js` in dem Root-Verzeichnis deines Projektes, dann kopiere den folgenden Inhalt hinein:

```js
module.exports = {
  extends: ['typescript-plus-framework', 'typescript-plus-framework/vue'],
  env: {
    // Deine Umgebung (enthält zahlreiche vorgefertigte Variablen)
    //
    // browser: true,
    // node: true,
    // mocha: true,
    // jest: true,
    // jquery: true
  },
  globals: {
    // Deine globalen Variablen (false bedeutet, dass die Variable nicht verändert werden darf)
    //
    // myGlobal: false
  },
  rules: {
    // Überschreibe regeln und Kreiere neue
  },
};
```

### Angular

```bash
npm install --save-dev eslint-config-typescript-plus-framework
npx install-peerdeps --save-dev eslint-config-typescript-plus-framework
npm install --save-dev @angular-eslint/builder @angular-eslint/eslint-plugin
```

Erstelle eine `.eslintrc.js` in dem Root-Verzeichnis deines Projektes, dann kopiere den folgenden Inhalt hinein:

```js
module.exports = {
  extends: ['typescript-plus-framework', 'typescript-plus-framework/angular'],
  env: {
    // Deine Umgebung (enthält zahlreiche vorgefertigte Variablen)
    //
    // browser: true,
    // node: true,
    // mocha: true,
    // jest: true,
    // jquery: true
  },
  globals: {
    // Deine globalen Variablen (false bedeutet, dass die Variable nicht verändert werden darf)
    //
    // myGlobal: false
  },
  rules: {
    // Überschreibe regeln und Kreiere neue
  },
};
```

### React

```bash
npm install --save-dev eslint-config-typescript-plus-framework
npx install-peerdeps --save-dev eslint-config-typescript-plus-framework
npm install --save-dev eslint-plugin-react eslint-plugin-react-hooks eslint-config-airbnb eslint-plugin-jsx-a11y
```

Erstelle eine `.eslintrc.js` in dem Root-Verzeichnis deines Projektes, dann kopiere den folgenden Inhalt hinein:

```js
module.exports = {
  extends: ['typescript-plus-framework', 'typescript-plus-framework/react'],
  env: {
    // Deine Umgebung (enthält zahlreiche vorgefertigte Variablen)
    //
    // browser: true,
    // node: true,
    // mocha: true,
    // jest: true,
    // jquery: true
  },
  globals: {
    // Deine globalen Variablen (false bedeutet, dass die Variable nicht verändert werden darf)
    //
    // myGlobal: false
  },
  rules: {
    // Überschreibe regeln und Kreiere neue
  },
};
```

## Troubleshooting

### Mit VSCode

ESLint lintet `.vue`, `.ts` or `.tsx` Dateien nicht standardmäsig in VSCode, setze sie in der `.vscode/settings.json` wie folgt:

```json
{
  "eslint.validate": ["javascript", "javascriptreact", "vue", "typescript", "typescriptreact"]
}
```

### Autofix ESLint beim speichern

Um Auto-Fix-On-Save zu aktivieren, setze das folgende in der `.vscode/settings.json`:

```json
{
  "eslint.validate": ["javascript", "javascriptreact", "vue", "typescript", "typescriptreact"],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

### Mit Prettier

`eslint-config-typescript-plus-framework` beinhaltet nicht all style-bezogenen regelen. Installiere `prettier` (optional).

Hier ist eine `.prettierrc.js` Konfiguration als anhaltspunkt:

```js
// .prettierrc.js
module.exports = {
  // max 120 characters per line
  printWidth: 120,
  // use 2 spaces for indentation
  tabWidth: 2,
  // use spaces instead of indentations
  useTabs: false,
  // semicolon at the end of the line
  semi: true,
  // use single quotes
  singleQuote: true,
  // object's key is quoted only when necessary
  quoteProps: 'as-needed',
  // use double quotes instead of single quotes in jsx
  jsxSingleQuote: false,
  // no comma at the end
  trailingComma: 'all',
  // spaces are required at the beginning and end of the braces
  bracketSpacing: true,
  // end tag of jsx need to wrap
  jsxBracketSameLine: false,
  // brackets are required for arrow function parameter, even when there is only one parameter
  arrowParens: 'always',
  // format the entire contents of the file
  rangeStart: 0,
  rangeEnd: Infinity,
  // no need to write the beginning @prettier of the file
  requirePragma: false,
  // No need to automatically insert @prettier at the beginning of the file
  insertPragma: false,
  // use default break criteria
  proseWrap: 'preserve',
  // decide whether to break the html according to the display style
  htmlWhitespaceSensitivity: 'css',
  // vue files script and style tags indentation
  vueIndentScriptAndStyle: false,
  // lf for newline
  endOfLine: 'lf',
  // formats quoted code embedded
  embeddedLanguageFormatting: 'auto',
};
```

A best practice for VSCode is to auto format code with Prettier and autofix errors with ESLint by setting `.vscode/settings.json` to this:

```json
{
  "files.eol": "\n",
  "editor.tabSize": 2,
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "eslint.validate": ["javascript", "javascriptreact", "vue", "typescript", "typescriptreact"],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## Scripts

```bash
# install dependencies
npm i
# build eslintrc like index.js, react.js, etc.
npm run build
# run tests
npm test
# autofix ESLint errors
npm run eslint:fix
# autofix prettier errors
npm run prettier:fix
# check if all rules are currently covered
npm run test:rulesCoverage
# publish new version
npm version <major|minor|patch>
git push --follow-tags
npm publish
```

## Q & A

### Why another ESLint config

Our team initially used Airbnb rules, but because it was too strict, some rules still needed to be personalized, which led to more and more changes in the future and finally decided to maintain a new set. After more than two years of polishing, `eslint-config-typescript-plus-framework` is now very mature and progressive and has been welcomed by many teams inside and outside the company.

### Why not standard

The standard specification believes that everyone should not waste time in personalized specifications, but the entire community should unify a specification. This statement makes some sense, but it runs against the ESLint's design philosophy. Don't you remember how ESLint defeated JSHint and became the most popular JS code inspection tool? It is because of the plugin and configuration that ESLint advocates, which meets the individual needs of different technology stacks of different teams.

Therefore, `eslint-config-typescript-plus-framework` also inherits the philosophy of ESLint. It will not force you to use our config. Instead, we help you to _make your config_ by referencing our examples, tests, websites and so on.

## Reference

- [ESlint Code Guide](http://eslint.org/docs/user-guide/configuring)
- [ESlint Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs)

[prettier]: https://prettier.io/
[website]: https://jonas-hoefflin.de/
[eslint's philosophy]: https://eslint.org/docs/about/#philosophy
