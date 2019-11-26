module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module'
  },
  extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
  plugins: ['import', 'prettier'],
  "rules": {
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-empty-interface": "off",
    'no-useless-constructor': 'off',
    'no-unused-vars': 'warn',
    'no-undef': 'off',
    'no-new': 'off',
    'eol-last': 'off'
  }
};
