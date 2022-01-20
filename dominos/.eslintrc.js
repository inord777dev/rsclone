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
    "settings": {
        "import/parsers": {
          "@typescript-eslint/parser": [".ts", ".tsx"]
        },
        "import/resolver": {
          "typescript": {
            "project": __dirname
          }
        }
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
      "ecmaFeatures": {
        "jsx": true,
      },
      "ecmaVersion": 12,
      "sourceType": "module",
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "@typescript-eslint/eslint-plugin"
    ],
    "rules": {
        "react/jsx-filename-extension": [0, { "extensions": [".ts", ".tsx"] }]
    }
}
