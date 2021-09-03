/* eslint-disable global-require */
const paths = require('./config/webpack/paths');

module.exports = {
  plugins: [
    require('postcss-import')({
      addModulesDirectories: [
        paths.assetsPath
      ]
    }),
    require('postcss-url')(),
    require('postcss-cssnext')({
      browsers: ['last 2 versions', '> 5%'] // https://github.com/ai/browserslist
    }),
    require('postcss-mixins')(),
    require('postcss-assets')({
      loadPaths: [
        `${paths.relAssetsPath}/`,
      ]
    }),
    require('postcss-browser-reporter')(),
    require('postcss-reporter')(),
  ]
};
