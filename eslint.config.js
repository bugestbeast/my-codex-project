import eslintPluginReact from 'eslint-plugin-react';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  {
    files: ['**/*.{ts,tsx}'],
    ignores: ['node_modules/**'],
    languageOptions: {
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    },
    plugins: {
      react: eslintPluginReact
    },
    rules: {
      ...eslintConfigPrettier.rules
    },
    settings: {
      react: {
        version: '18.0'
      }
    }
  }
];
