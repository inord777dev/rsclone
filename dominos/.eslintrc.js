module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "airbnb",
        "airbnb-typescript",
        "airbnb/hooks",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:import/errors", 
        "plugin:import/warnings",
        "plugin:import/typescript"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
      "ecmaVersion": 2018,
      "sourceType": "module",
      "project": "tsconfig.json",
      "tsconfigRootDir": __dirname
    },
    ignorePatterns: ['.eslintrc.js'],
    "plugins": [
        "react",
        "@typescript-eslint",
        "@typescript-eslint/eslint-plugin"
    ],
    "rules": {
        "react/jsx-filename-extension": [0, { "extensions": [".ts", ".tsx"] }]
    }
}
