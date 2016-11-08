'use strict'
const path = require('path')

exports.basePathname = '/'

exports.configureWebpack = (config, pancake) => {
  // Babel
  config.module.loaders.push({
    test: /\.js$/,
    include: path.join(__dirname, 'src'),
    loader: 'babel-loader'
  })
  return config
}
