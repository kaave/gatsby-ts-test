const path = require('path');
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
    title: process.env.SITE_TITLE,
    author: process.env.AUTHOR_NAME,
    twitter: process.env.AUTHOR_TWITTER,
    github: process.env.AUTHOR_GITHUB,
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
    ...(process.env.GOOGLE_ANALYTICS
      ? [
          {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
              // The property ID; the tracking code won't be generated without it
              trackingId: process.env.GOOGLE_ANALYTICS,
            },
          },
        ]
      : []),
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, 'src', 'images'),
        name: 'images',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
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
    ...(process.env.ANALYZE
      ? [
          {
            resolve: 'gatsby-plugin-webpack-bundle-analyzer',
            options: {
              production: true,
              disabled: !process.env.ANALYZE,
            },
          },
        ]
      : []),
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
  polyfill: false,
};
