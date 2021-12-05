/* eslint-disable */
'use strict'
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge({
  mode: 'production',
  output: {
    filename: 'js/[name].[chunkhash:8].min.js',  // 入口和内容hash组成的文件名，也可以是hash
    chunkFilename: 'js/[name].[chunkhash:8].min.js'
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: [  // loader解析的顺序是从下到上，从右到左的顺序
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              filename: '[name].css',
              chunkFilename: '[name].css',
              publicPath: '../'   //****最后打包的时候替换引入文件路径
            },
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2   //该方式可以让@import引入的css文件再次执行一边css打包loader
            }
          },
          'less-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'css/[name]_[hash].css',
      chunkFilename: 'css/[name]_[hash].chunk.css',
    }),
  ]
}, baseWebpackConfig)
