import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import cypress from 'eslint-plugin-cypress';
import prettier from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  cypress.configs.recommended,
  prettier,
  {
    files: ['**/*.ts'],
    ignores: [
      'allure-report/',
      'allure-results/',
      'cypress/screenshots/',
      'cypress/videos/',
      'node_modules/',
      'cypress.config.ts',
      '*.config.ts',
    ],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
    },
  },
];
