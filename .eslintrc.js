const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf-8'),
);

module.exports = {
  extends: ['react-app', 'eslint:recommended', 'plugin:react-hooks/recommended', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'import/no-unresolved': 'off',
    'prettier/prettier': ['error', prettierOptions],
    eqeqeq: ['error', 'always', { null: 'never' }],
    // '@typescript-eslint/interface-name-prefix': 'off',
    // '@typescript-eslint/explicit-function-return-type': 'off',
    // '@typescript-eslint/explicit-module-boundary-types': 'off',
    // '@typescript-eslint/no-explicit-any': 'off',
    semi: ['error', 'always'],
    // 'no-unused-vars': ['off', { vars: 'all' }],
    'no-unused-vars': 'off',
    'no-var': 'error',
    'prefer-const': 'error',
    'import/no-duplicates': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        //  pathGroups: [
        //   {
        //     pattern: 'react',
        //     group: 'external',
        //     position: 'before',
        //   },
        //   {
        //     pattern: '*',
        //     group: 'external',
        //     position: 'before',
        //   },
        //   {
        //     pattern: 'components',
        //     group: 'internal',
        //   },
        //   {
        //     pattern: 'common',
        //     group: 'internal',
        //   },
        //   // {
        //   //   pattern: 'routes/**',
        //   //   group: 'internal',
        //   // },
        //   {
        //     pattern: 'assets/**',
        //     group: 'internal',
        //     position: 'after',
        //   },
        //   // {
        //   //   pattern: './*.scss',
        //   //   group: 'sibling',
        //   //   position: 'after',
        //   // },
        //   // {
        //   //   pattern: '**/*.+(css|sass|less|scss|pcss|styl)',
        //   //   patternOptions: { dot: true, nocomment: true },
        //   //   group: 'unknown',
        //   //   position: 'after',
        //   // },
        //   // {
        //   //   pattern: '{.,..}/**/*.+(css|sass|less|scss|pcss|styl)',
        //   //   patternOptions: { dot: true, nocomment: true },
        //   //   group: 'unknown',
        //   //   position: 'after',
        //   // },
        //   {
        //     pattern: '*.+(css|scss)',
        //     group: 'index',
        //     patternOptions: {
        //       matchBase: true,
        //     },
        //     position: 'after',
        //   },
        // ],
        pathGroups: [
          {
            pattern: '~/**',
            group: 'internal',
          },
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        'newlines-between': 'always-and-inside-groups',
        pathGroupsExcludedImportTypes: ['internal'],
        // alphabetize: {
        //   order: 'asc',
        //   caseInsensitive: true,
        // },
      },
    ],
  },
};
