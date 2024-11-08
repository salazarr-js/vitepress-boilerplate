import markdown from '@eslint/markdown'
import js from '@eslint/js';
import ts from 'typescript-eslint';
import vue from 'eslint-plugin-vue'

/** @type {import('eslint').Linter.Config[]} */
export default [
  { ignores: ['**/.vitepress'] },

  // ...markdown.configs.recommended, // this throws an error https://github.com/eslint/markdown/issues/289#issuecomment-2405914917
  // ...markdown.configs.processor,
  // {
  //   files: ["**/*.md"],
  //   plugins: { markdown },
  //   language: "markdown/gfm",
  //   rules: {
  //       // "markdown/no-html": "error"
  //   }
  // },

  js.configs.recommended,
  ...ts.configs.recommended,
  ...vue.configs['flat/recommended'],
  {
    files: ['*.vue', '**/*.vue', '*.md', '**/*.md'],
    languageOptions: {
      parserOptions: {
        parser: '@typescript-eslint/parser'
      }
    }
  }
];
