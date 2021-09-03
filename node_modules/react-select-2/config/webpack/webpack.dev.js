const webpack = require('webpack');
const path = require('path');
const pathApp = require('./paths');
const Manifest = require('manifest-revision-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const jsonPresent = require('./json-presenter');
const HtmlPlugin = require('html-webpack-plugin');

const stats = {
  colors      : true,
  hash        : false,
  version     : false,
  timings     : false,
  assets      : false,
  chunks      : false,
  modules     : false,
  reasons     : false,
  children    : false,
  source      : false,
  errors      : true,
  errorDetails: true,
  warnings    : true,
  publicPath  : false
};

const STATIC_VERSION = process.env.STATIC_VERSION || ''; // STATIC_VERSION='$(VERSION)' npm run build

module.exports = {
  context  : process.cwd(),
  devtool  : 'eval',
  entry  : {
    app: path.join(process.cwd(), 'app.js')
  },
  output : {
    path         : path.join(process.cwd(), 'dist'),
    publicPath   : path.join('/', STATIC_VERSION, '/'),
    filename     : 'js/[name].bundle.[hash:8].js',
    chunkFilename: '[name].[chunkhash].chunk.js'
  },
  devServer: {
    contentBase       : pathApp.appPath,
    stats,
    hot               : true,
    inline            : true,
    historyApiFallback: true,
  },
  plugins  : [
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin({
      filename : 'css/[name].[hash].css',
      disable  : false,
      allChunks: true
    }),
    new Manifest(path.join(process.cwd(), 'manifest.json'), {
      rootAssetPath: pathApp.relAssetsPath,
      ignorePaths  : [
        '.DS_Store',
        '/index.html'
      ],
      format       : jsonPresent
    }),
    new HtmlPlugin({
      title   : 'React Select 2',
      inject  : true,
      cache   : false,
      filename: 'index.html',
      template: path.join(process.cwd(), 'index.html')
    }),

    new webpack.DefinePlugin({
      BROWSER               : JSON.stringify(true),
      'process.env.NODE_ENV': JSON.stringify(pathApp.processEnv),
      BROWSER_SUPPORTS_HTML5: true
    })
  ]
};
