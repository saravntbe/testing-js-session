module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    // 'plugin:react/recommended',
    // 'standard-with-typescript',
    // 'eslint:recommended'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    /*
    'guard-for-in': 'error',
    'no-prototype-builtins': 'error'
    */
  }
}
