module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    allowImportExportEverywhere: true,
    sourceType: "module"
  },
  plugins: ["meteor", 'react', 'import', 'react-hooks', 'jest'],
  extends: [
    "airbnb",
    "plugin:meteor/recommended",
    "prettier",
    'prettier/react',
    'react-app',
    'plugin:import/errors',
    "@meteorjs/eslint-config-meteor",
  ],
  rules: {
    //using prettier
    indent: "off",
    //using prettier
    "react/jsx-indent": "off",
    //using prettier
    "react/jsx-indent-props": "off",
    "react/prop-types": "off",
    "no-confusing-arrow": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "react/jsx-space-before-closing": "off",
    "react/jsx-tag-spacing": "off",
    "max-len": "off",
    //it is not working correctly with ternary operator
    "react/jsx-closing-bracket-location": "off",
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export": "off",
    "import/no-named-default": "off",
    "no-underscore-dangle": "off",
    "meteor/audit-argument-checks": "off",
    "no-plusplus": "off",
    "arrow-parens": "off",
    "react/jsx-wrap-multilines": "off",
    "react/no-unescaped-entities": "off",
    "no-restricted-properties": "off",
    "no-mixed-operators": "off",
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
    "react/jsx-no-target-blank": "off"
  },
  settings: {
    "import/resolver": "meteor"
  },
  env: {
    "jest/globals": true
  }
};
