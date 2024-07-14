/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  rules: {
    // Exemplos de regras adicionais
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn', // Proíbe o uso de console.log em produção
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn', // Proíbe o uso de debugger em produção
    'vue/no-unused-vars': 'error', // Proíbe variáveis não utilizadas em arquivos Vue
    'vue/no-multiple-template-root': 'error', // Permite apenas um elemento raiz em templates Vue
    'vue/valid-v-slot': 'error', // Garante que v-slot seja válido
    'vue/component-definition-name-casing': ['error', 'PascalCase'], // Nome de componentes Vue em PascalCase
    'vue/html-indent': ['error', 2], // Indentação de 2 espaços para templates Vue
    'vue/require-default-prop': 'error', // Exige props padrão em componentes Vue
    'vue/require-explicit-emits': 'error', // Exige que eventos emitidos sejam declarados
    'vue/no-v-html': 'error', // Proíbe o uso de v-html para prevenir XSS
    'vue/no-use-v-if-with-v-for': 'error', // Evita o uso de v-if e v-for juntos para melhor desempenho
    'vue/no-template-shadow': 'error', // Proíbe sombreamento de variáveis em templates Vue
    'vue/prop-name-casing': ['error', 'camelCase'], // Nomes de props em camelCase
    'vue/order-in-components': ['error', {
      'order': [
        'el',
        'name',
        'key',
        'parent',
        'functional',
        ['delimiters', 'comments'],
        ['components', 'directives', 'filters'],
        'extends',
        'mixins',
        ['provide', 'inject'],
        'ROUTER_GUARDS',
        'layout',
        'middleware',
        'validate',
        'scrollToTop',
        'transition',
        'loading',
        'inheritAttrs',
        'model',
        ['props', 'propsData'],
        'emits',
        'setup',
        'fetch',
        'asyncData',
        'data',
        'computed',
        'watch',
        'LIFECYCLE_HOOKS',
        'methods',
        ['template', 'render'],
        'renderError'
      ]
    }],
    'semi': ['error', 'always']
  },
  overrides: [
    {
      files: [
        'cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}',
        'cypress/support/**/*.{js,ts,jsx,tsx}'
      ],
      'extends': [
        'plugin:cypress/recommended'
      ]
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
};
