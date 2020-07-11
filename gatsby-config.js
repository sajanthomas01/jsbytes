'use strict';

const path = require('path');

// eslint-disable-next-line import/no-unresolved
const pluginConfigFactory = require('@brainhubeu/gatsby-docs-kit/plugins');

module.exports = {
  siteMetadata: {
    title: 'jsbytes.netlify.app',
    description: 'JS snippets and hacks ',
    image: 'https://cdn-images-1.medium.com/max/1200/1*CLUFZFaXF6NG27NA3d_JkQ.jpeg',
    url: 'https://github.com/sajanthomas01/jsbytes.git',
    type: 'article',
    siteName: 'jsbytes.netlify.app',
    githubUrl: 'https://github.com/sajanthomas01/jsbytes.git',
  },

  // URL prefix on production environment. For more info see https://www.gatsbyjs.org/docs/path-prefix/
  pathPrefix: process.env.PATH_PREFIX || '',

  plugins: pluginConfigFactory({
    config: `${__dirname}/gatsby-docs-kit.yml`,
    resources: path.resolve(__dirname, './docs'),
  }),
};
