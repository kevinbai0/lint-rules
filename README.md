# Custom ESLint rules

Rules are based on [@rushstack/eslint-config]("https://github.com/microsoft/rushstack/tree/master/stack/eslint-config")

## Installation

```npm i -D @kevinbai/lint-rules```

#### Add `.eslintrc`

Choose the appropriate [profile](#profiles) depending on the project

```json
// .eslintrc
{
  "extends": "./node_modules/@kevinbai/lint-rules/onde/.eslintrc.js"
}
```

#### Add `.prettierrc`

```json
//.prettierrc
"@kevinbai/lint-rules/.prettierrc.json"
```

#### Add .eslintignore

```plaintext
node_modules
...any other files
```

#### Add lint script to `package.json`

```json
{
  "scripts": {
    "lint": "eslint . --fix"
    // or eslint src --fix
  }
}
```

### Profiles

- Node: `@kevinbai/lint-rules/node/.eslintrc.js`
- React: `@kevinbai/lint-rules/react/.eslintrc.js`
