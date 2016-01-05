'use strict';

var path = require('path');
var webpack = require('webpack');

var config = {
  context: __dirname + '/src',
  entry: "./app.js",
		output: {
    path: __dirname + '/build',
    filename: "bundle.js"
		},
  plugins: [
    new webpack.DefinePlugin({
      ON_TEST: process.env.NODE_ENV === 'test'
    })
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
      // {
      //   test: /\.styl$/,
      //   loader: "style!css!stylus",
      //   exclude: /node_modules/
      // },
      {
        test: /\.js$/,
        // loader: "babel",
        // loader: "ng-annotate!babel?presets[]=es2015",
        loader: "ng-annotate!babel",
        exclude: /node_modules/
        // query: {
        //   // https://github.com/babel/babel-loader#options
        //   cacheDirectory: true,
        //   presets: ['es2015']
        // }
      }
    ]
  }
};

if (process.env.NODE_ENV === 'production') {
  config.output.path = __dirname + '/dist';
  config.plugins.push(new webpack.optimize.UglifyJsPlugin());
  config.devtool = 'source-map';
}

module.exports = config;
