const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

require('@babel/register')({
  extensions: ['.tsx', '.ts', '.jsx', '.js'],
});
exports.createPages = require('./tools/createPages').createPages;

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};
