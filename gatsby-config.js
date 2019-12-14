const packageImporter = require('node-sass-package-importer');
const postcssCustomProperties = require('postcss-custom-properties');
const postcssColorHexAlpha = require('postcss-color-hex-alpha');
const postcssInitial = require('postcss-initial');
const postcssImageSetFunction = require('postcss-image-set-function');
const postcssCalc = require('postcss-calc');
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes');
const postcssUrl = require('postcss-url');
const autoprefixer = require('autoprefixer');

require('dotenv').config();

module.exports = {
  siteMetadata: {
    siteUrl: process.env.SITE_URL,
    title: 'Gatsby Typescript Starter',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        importer: packageImporter(),
        postCssPlugins: [
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
    'gatsby-plugin-react-helmet',
    // Add typescript stack into webpack
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: 'types/graphql-types.d.ts',
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: process.env.GA,
      },
    },
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: true,
        yandex: false,
        windows: false,
      },
    },
  ],
};
