module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:storybook/recommended",
    "plugin:import/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "import"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "import/order": [
      "error",
      {
        groups: [
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "unknown",
        ],
        pathGroups: [
          {
            pattern: "@/constants/*",
            group: "internal",
            position: "before",
          },
          {
            pattern: "@/utils/*",
            group: "internal",
            position: "before",
          },
          {
            pattern: "@/queries/*",
            group: "internal",
            position: "before",
          },
          {
            pattern: "@/components/*",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@/constants*",
            group: "parent",
            position: "after",
          },
          {
            pattern: "./*",
            group: "sibling",
            position: "after",
          },
        ],

        pathGroupsExcludedImportTypes: ["@tanstack*"],
        alphabetize: {
          order: "asc",
        },
      },
    ],
  },
};
