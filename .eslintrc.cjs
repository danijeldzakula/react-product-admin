// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

/** @type {import("eslint").Linter.Config} */
const config = {
  ignorePatterns: ['vite.config.ts'],
  overrides: [
    {
      extends: [
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      files: ['*.ts', '*.tsx', '*.mjs'],
      parserOptions: {
        project: path.join(__dirname, './tsconfig.json'),
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
    project: path.join(__dirname, './tsconfig.json'),
  },
  extends: ['plugin:@typescript-eslint/recommended'],
  rules: {
    'prefer-destructuring': ['error', { object: true, array: false }],
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false,
      },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        prefer: 'type-imports',
        fixStyle: 'inline-type-imports',
      },
    ],
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    project: path.join(__dirname, './tsconfig.json'),
    parser: '@typescript-eslint/parser',
    tsconfigRootDir: __dirname, // import.meta.dirname
  },
};

module.exports = config;
