/* eslint-disable import/no-dynamic-require, import/newline-after-import, no-console */

const { merge }   = require('lodash');
const common      = require(`${__dirname}/config/webpack/webpack.common`);
const production  = require(`${__dirname}/config/webpack/webpack.prod`);
const development = require(`${__dirname}/config/webpack/webpack.dev`);

const mock = development;

/**
 * Exported evnironments object
 * @type {Object}
 */

const configs = {
  common, production, development, mock
};

/**
 * Load webpack config via enviroments
 * @param  {[type]} enviroment [description]
 * @return {[type]}            [description]
 */
const load = () => {
  const ENV = process.env.NODE_ENV ? process.env.NODE_ENV : 'production';
  const isPredProd = process.env.PRED_PROD ? 'predProd' : null;
  const ENV_CONF = configs[!isPredProd ? ENV : 'production'];
  const COMMON_CONF = configs.common;
  if (ENV_CONF.plugins) {
    ENV_CONF.plugins = ENV_CONF.plugins.concat(COMMON_CONF.plugins);
  }
  if (ENV_CONF.module && ENV_CONF.module.rules) {
    ENV_CONF.module.rules = ENV_CONF.module.rules.concat(COMMON_CONF.module.rules);
  }
  return merge(COMMON_CONF, ENV_CONF);
};

/**
 * Export WebPack config
 * @type {[type]}
 */
const conf = load();
console.log('/////------------------------------------------------/////');
console.log('NODE_ENV === %s and PRED_PROD === %s', process.env.NODE_ENV,  process.env.PRED_PROD);
console.log('/////------------------------------------------------/////');
module.exports = conf;
