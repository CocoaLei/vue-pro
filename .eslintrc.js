// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  // parser: 'babel-eslint',
  // parserOptions: {
  //   sourceType: 'module'
  // },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    allowImportExportEverywhere: false
  },
  env: {
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
  ],
  plugins: [
    'vue'
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'class-methods-use-this': ['warn'],
    'no-console': 'warn',
    'valid-jsdoc': 'warn',
    'require-jsdoc': 0,
    'indent': 'off',
    'vue/script-indent': ['error', 2, {'baseIndent': 1}],
    'no-return-assign': 0,
    'comma-dangle': ['error', 'only-multiline'],
    'no-unused-expressions': ['error', { 'allowShortCircuit': true, 'allowTernary': true }],
    'no-param-reassign': 0,
    'no-underscore-dangle': ['error', { 'allow': ['_inactive','__wxjs_environment'] }],
    'max-len': 0,
    'no-dupe-keys': 0,
  },
  globals: {
    StatusBar: true,
    wx: true,
  }
};
