require('@rushstack/eslint-config/patch/modern-module-resolution');

module.exports = {
  env: {
    browser: true,
  },
  extends: [
    '@rushstack/eslint-config/profile/web-app',
    '@rushstack/eslint-config/mixins/react',
    '../base/.eslintrc',
  ],
  rules: {
    '@rushstack/typedef-var': 0,
    '@typescript-eslint/typedef': 0,
  },
};
