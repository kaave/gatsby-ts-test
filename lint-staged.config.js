module.exports = {
  '*.{js,ts,tsx}': ['eslint --fix', 'cspell', 'git add'],
  // '*.scss': ['stylelint --fix', 'cspell', 'git add'],
  '*.json': ['prettier --write', 'git add'],
  'package.json': ['sort-package-json', 'git add'],
};
