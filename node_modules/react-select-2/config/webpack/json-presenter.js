/**
 * Проходим по данным manifest.json и создаем новый объект вида
 *
 *  actPrint.svg: './images/action-icons/actPrint.svg'
 *
 * @param publicPath
 * @param assetsByChunkName
 * @param parsedAssets
 * @returns {
 *   publicPath,
 *   assetsByChunkName,
 *   assets
 * }
 */
module.exports = ({ publicPath,  assetsByChunkName }, parsedAssets) => {
  const assets = {};
  const key = Object.keys(parsedAssets);
  key.forEach((index) => {
    const newkey = index.split('/').pop();
    assets[newkey] = parsedAssets[index]; // actPrint.svg: './images/action-icons/actPrint.svg'
  });
  
  return {
    publicPath,
    assetsByChunkName,
    assets
  };
};
