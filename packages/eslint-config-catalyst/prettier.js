/** @type {import("eslint").Linter.Config} */
const config = {
  extends: ['plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        "endOfLine": "auto"
      }
    ],
  }
};

module.exports = config;
