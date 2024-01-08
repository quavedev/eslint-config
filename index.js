module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    allowImportExportEverywhere: true,
    sourceType: "module",
    requireConfigFile: false,
    "babelOptions": {
      "presets": ["@babel/preset-react"]
    },
  },
  plugins: ["meteor", "jest", 'react', 'react-hooks', '@quave/meteor-quave'],
  extends: [
    "airbnb",
    "plugin:meteor/recommended",
    "prettier",
    "@meteorjs/eslint-config-meteor",
    "plugin:@quave/meteor-quave/recommended",
  ],
  rules: {
    //using prettier
    indent: "off",
    //using prettier
    "react/jsx-indent": "off",
    //using prettier
    "react/jsx-indent-props": "off",
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "jsx-a11y/label-has-for": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "react/jsx-space-before-closing": "off",
    "react/jsx-tag-spacing": "off",
    "react/jsx-one-expression-per-line": "off",
    "no-confusing-arrow": "off",
    "max-len": "off",
    //it is not working correctly with ternary operator
    "react/jsx-closing-bracket-location": "off",
    "react/button-has-type": "off",
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export": "off",
    "import/no-named-default": "off",
    "import/no-cycle": "off",
    "import/order": "off",
    "no-underscore-dangle": "off",
    "implicit-arrow-linebreak": "off",
    "meteor/audit-argument-checks": "off",
    "no-plusplus": "off",
    "arrow-parens": "off",
    "operator-linebreak": "off",
    "react/jsx-no-target-blank": "off",
    "react/jsx-wrap-multilines": "off",
    "react/no-unescaped-entities": "off",
    "no-restricted-properties": "off",
    "no-mixed-operators": "off",
    "function-paren-newline": "off",
    "object-curly-newline": "off",
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "never"
      }
    ],
    "no-console": [
      "error",
      {
        allow: ["warn", "error", "time", "timeEnd"]
      }
    ],
    "object-shorthand": [
      "error",
      "always",
      {
        avoidQuotes: false
      }
    ],
    "meteor/eventmap-params": [
      "error",
      {
        eventParamName: "event",
        templateInstanceParamName: "instance"
      }
    ],
    "meteor/template-names": ["off"],
    "import/no-default-export": "error",
    "import/first": "off",
    "no-nested-ternary": "off",
    "eqeqeq": "off",
    'global-require': 0,
    'react/function-component-definition': 0,
    quotes: 'off',
    'react/jsx-curly-newline': 'off',
    'no-restricted-syntax': ['off', 'ForOfStatement'],
    'no-continue': 'off',
    'no-unsafe-optional-chaining': 'off',
  },
  settings: {
    "import/resolver": "meteor"
  },
  "env": {
    "jest/globals": true,
    node: true,
    browser: true,
  },
  globals: {
    Assets: true, // currently not possible to import as an ES6 module
    Package: true,
    Cordova: true,
    Npm: true,
  },
};
