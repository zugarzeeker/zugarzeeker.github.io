'use strict'
const path = require('path')

exports.basePathname = '/'

exports.configureWebpack = (config, pancake) => {
  config.module.loaders.push(
    {
      test: /\.js$/,
      include: path.join(__dirname, 'src'),
      loader: 'babel-loader'
    },
    {
      test: /\.css$/,
      loader: pancake.css('css-loader')
    },
    {
      test: /\.scss/,
      loader: pancake.css('css-loader!sass-loader')
    }
  )
  return config
}
