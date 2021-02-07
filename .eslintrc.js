// @js-ignore
module.exports = {
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:prettier/recommended',
      'react-app',
      'prettier/react',
      'plugin:react-hooks/recommended',
    ],
    rules: {
      'react/prop-types': 'off',
      'import/prefer-default-export': 'off',
      'react/react-in-jsx-scope': 'off', 
    },
    settings: {},
    plugins: ['import'],
  }