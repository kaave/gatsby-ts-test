const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const postcssCustomProperties = require('postcss-custom-properties');
const postcssColorHexAlpha = require('postcss-color-hex-alpha');
const postcssInitial = require('postcss-initial');
const postcssImageSetFunction = require('postcss-image-set-function');
const postcssCalc = require('postcss-calc');
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes');
const postcssUrl = require('postcss-url');
const autoprefixer = require('autoprefixer');

module.exports = ({ config }) => {
  config.module.rules.push(
    {
      test: /\.[jt]sx?$/,
      use: [{ loader: require.resolve('babel-loader') }, { loader: require.resolve('react-docgen-typescript-loader') }],
    },
    {
      test: /\.scss?$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 2,
            // localIdentName: '[name]--[local]___[hash:base64:5]',
            localIdentName: '[name]--[local]',
            modules: true,
            sourceMap: true,
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
            plugins: [
              postcssCustomProperties(),
              postcssColorHexAlpha(),
              postcssInitial(),
              postcssImageSetFunction(),
              postcssCalc(),
              postcssFlexbugsFixes(),
              postcssUrl(),
              // autoprefixer({ grid: 'no-autoplace' }),
              autoprefixer(),
            ],
          },
        },
        {
          loader: 'sass-loader',
          options: { sourceMap: true },
        },
      ],
    },
  );
  config.resolve.extensions.push('.ts', '.tsx');
  if (!(config.resolve.plugins instanceof Array)) config.resolve.plugins = [];
  config.resolve.plugins.push(new TsconfigPathsPlugin());

  return config;
};
