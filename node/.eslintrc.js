require('@rushstack/eslint-config/patch/modern-module-resolution');

module.exports = {
  env: {
    node: true,
  },
  extends: ['../base/.eslintrc', '@rushstack/eslint-config/profile/node'],
};
