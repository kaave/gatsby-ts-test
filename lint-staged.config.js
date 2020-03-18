module.exports = {
  '*.{js,ts,tsx}': ['eslint --fix', 'cspell'],
  '*.scss': ['stylelint --fix', 'cspell'],
  '*.json': ['prettier --write'],
  'package.json': ['sort-package-json'],
};
