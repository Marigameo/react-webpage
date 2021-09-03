/* eslint-disable global-require */
const path = require('path');
const webpack = require('webpack');
const pathApp = require('./paths');
const loaders = require('./loaders');

module.exports = {
  target : 'web',
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.less'],
    modules   : [
      './src',
      './node_modules/'
    ].map(p => path.resolve(p)),
    alias     : pathApp.aliases
  },
  module : {
    noParse: /\.DS_Store/,
    rules  : loaders
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: false,
      debug   : true,
      options : {
        postcss: [
          require('postcss-import')({
            addModulesDirectories: [
              'node_modules',
              pathApp.assetsPath
            ]
          }),
          require('postcss-url')(),
          require('postcss-cssnext')({
            browsers: ['last 2 versions', '> 5%'] // https://github.com/ai/browserslist
          }),
          require('postcss-mixins')(),
          require('postcss-assets')({
            loadPaths: [
              `${pathApp.relAssetsPath}/`,
            ]
          }),
          require('postcss-browser-reporter')(),
          require('postcss-reporter')(),
        ],
        eslint : {
          configFile: '.eslintrc'
        }
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      minChunks: 3,
      children : true,
      async    : true
    })
  ]
};
