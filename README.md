# @quave/eslint-config-quave

[![npm version](https://badge.fury.io/js/@quave%2Feslint-config-quave.svg)](https://badge.fury.io/js/@quave%2Feslint-config-quave)

`@quave/eslint-config-quave` is a group of eslint and prettier configurations to make your Meteor application organized in a standard way.

## Why
We believe applications should be organized and checked before every commit.

We believe we are not reinventing the wheel in this package but what we are doing is like putting together the wheels in the vehicle :).

## Installation

Install the npm dependency
```sh
npm i -D @quave/eslint-config-quave
```

Add to the root of your package.json

```json
  "eslintConfig": {
    "extends": [
      "@quave/quave"
    ]
  },
```

Create in the root of your project `prettier.config.js` file and paste this

```javascript
module.exports = require('@quave/eslint-config-quave/prettier.config');
```

Create in the root of your project `.prettierignore` file and paste this

`.meteor`

## Usage

Automatic check your changed files before every commit, paste this in your `package.json` root.
```json
  "husky": {
    "hooks": {
      "pre-commit": "meteor npm test && lint-staged",
      "post-commit": "git update-index --again"
    }
  },
  "lint-staged": {
    "*.js": [
      "eslint --fix",
      "prettier --write",
      "git add"
    ]
  },
```
If you don't have tests you can remove `meteor npm test` from the hooks, but it's a good idea to have fast tests that run before every commit.

If you have jsx files as well, you can use:
```json
  "lint-staged": {
    "*.{js|jsx}": [
      "eslint --fix",
      "prettier --write",
      "git add"
    ]
  }
```

### Optional

Set the custom commands if you want to run eslint or prettier manually or both. Add this to your `package.json`
```json
  {
    "scripts": {
      "quave-eslint": "eslint . --fix",
      "quave-prettier": "prettier --write \"**/*.js\"",
      "quave-check": "npm run quave-eslint && npm run quave-prettier"
    }
  }
```

If you have jsx files as well, you can use:
```json
  "quave-prettier": "prettier --write \"**/*.js\" \"**/*.jsx\"",
```

## Limitations

We consider an error `console.log` but in some cases you want to use it, then you should disable for the next line and use it.
```javascript
// eslint-disable-next-line no-console
console.log('Important log...');
```

## Dependencies Notes

- Husky 4.3.8 is working but newer versions are not ([more](https://stackoverflow.com/a/66436591))
- prettier-plugin-tailwindcss is working 0.4.1 but newer versions are not ([more](https://github.com/tailwindlabs/prettier-plugin-tailwindcss/issues/203))

### License

MIT
