import globals from "globals";
import js from "@eslint/js";

export default [
    js.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "commonjs",
            globals: {
                ...globals.node,
                ...globals.es2021,
            }
        },
        rules: {
            "semi": ["error", "always"],
            "quotes": ["error", "single"],
            "no-unused-vars": ["warn", {
                "argsIgnorePattern": "^_",
                "varsIgnorePattern": "^_"
            }],
            "no-console": "off",
            "indent": ["error", 4],
            "linebreak-style": ["error", "unix"],
            "no-trailing-spaces": "error",
            "eol-last": ["error", "always"]
        }
    },
    {
        ignores: [
            "node_modules/**",
            "*.vsix",
            ".vscode-test/**",
            "out/**",
            "dist/**"
        ]
    }
];
