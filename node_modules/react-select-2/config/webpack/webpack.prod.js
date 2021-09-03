const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const pathApp = require('./paths');

const stats = {
  colors      : true,
  hash        : false,
  version     : false,
  timings     : false,
  assets      : true,
  chunks      : true,
  modules     : false,
  reasons     : false,
  children    : true,
  source      : false,
  errors      : true,
  errorDetails: true,
  warnings    : true,
  publicPath  : false
};

let conf = {
  context: process.cwd(),
  stats,
  devtool: '#hidden-source-map',
  entry  : {
    app             : path.join(process.cwd(), 'app.js'),
    'react-select-2': path.join(pathApp.appPath, 'index.js')
  },
  output : {
    path      : path.join(process.cwd(), 'dist'),
    publicPath: path.join('/'),
    filename  : 'js/[name].js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      exclude  : /\.html/i,
      minimize : true,
      sourceMap: true,
      compress : {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      BROWSER               : JSON.stringify(true),
      'process.env.NODE_ENV': JSON.stringify(pathApp.processEnv),
      BROWSER_SUPPORTS_HTML5: true
    }),
    new ExtractTextPlugin({
      filename : 'css/[name].css',
      disable  : false,
      allChunks: true
    }),
  ]
};


module.exports = conf;
