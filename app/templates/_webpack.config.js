'use strict';

var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var config = {
  context: __dirname + '/src',
  entry: "./app.js",
		output: {
      path: __dirname + '/build',
      filename: "assets/js/bundle.js"
		},
  plugins: [
    new webpack.DefinePlugin({
      ON_TEST: process.env.NODE_ENV === 'test'
    }),

    new HtmlWebpackPlugin({ template: 'index.html' }),

    new CopyWebpackPlugin([
      { from: 'favicon.ico' },
      { from: 'robots.txt' }
    ])
  ],
  babel: {
    // https://github.com/babel/babel-loader#options
    cacheDirectory: true,
    presets: ['es2015']
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: "raw",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.styl$/,
        loader: "style!css!postcss!stylus",
        exclude: /node_modules/
      },
      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: "url-loader",
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: "ng-annotate!babel",
        exclude: /node_modules/
      }
    ]
  },
  postcss: function () {
    return [autoprefixer];
  }
};

if (process.env.NODE_ENV === 'production') {
  config.output.path = __dirname + '/dist';
  config.output.filename = "assets/js/[hash].bundle.js";
  config.plugins.push(new webpack.optimize.UglifyJsPlugin());
  config.devtool = 'source-map';
}

module.exports = config;
