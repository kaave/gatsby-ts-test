module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react'],
  plugins: [
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-numeric-separator',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-class-properties',
  ],
};
