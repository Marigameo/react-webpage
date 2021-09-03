const path = require('path');

const appPath = path.join(process.cwd(), 'src');
const assetsPath = path.join(process.cwd(), 'assets');
const relAssetsPath = path.relative('.', assetsPath);
const processEnv = process.env.NODE_ENV;


const aliases = {
  root              : process.cwd(),
  images            : path.join(assetsPath, 'images'),
  styles            : path.join(assetsPath, 'styles')
};

module.exports = {
  appPath,
  assetsPath,
  relAssetsPath,
  processEnv,
  aliases
};
