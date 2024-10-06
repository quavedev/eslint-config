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

### Script examples

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

## Automatic check before commit

Automatic check your changed files before every commit.

Install lefthook:

```bash
npm i -D lefthook
```

then create a file called `lefthook.yml` in the root of your project and paste this:

```yaml
pre-commit:
  commands:
    quave-check:
      run: npm run quave-check
    update-index:
      run: git update-index --again
 ```

> In the past we used husky but lefthook is much better in terms of dependency and speed.

## Limitations

We consider an error `console.log` but in some cases you want to use it, then you should disable for the next line and use it.
```javascript
// eslint-disable-next-line no-console
console.log('Important log...');
```

### License

MIT
