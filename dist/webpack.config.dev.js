"use strict";

var path = require('path');

var MiniCssExtractPlugin = require('mini-css-extract-plugin');

var CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

var HtmlWebpackPlugin = require('html-webpack-plugin');

var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  mode: 'development',
  plugins: [new MiniCssExtractPlugin(), new HtmlWebpackPlugin({
    template: 'index.html'
  }), new CopyWebpackPlugin({
    patterns: [{
      from: path.resolve(__dirname, './src/images'),
      to: path.resolve(__dirname, './dist/img')
    }]
  })],
  devServer: {
    "static": {
      directory: path.join(__dirname, "dist")
    },
    hot: true
  },
  module: {
    rules: [{
      test: /\.scss$/i,
      use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
    }, {
      test: /\.(png|jpe?g|gif|svg)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'img/[name][ext]'
      }
    }, {
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'fonts/[name][ext]'
      }
    }]
  },
  optimization: {
    minimizer: ['...', new CssMinimizerPlugin()]
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
};