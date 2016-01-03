'use strict';

var path = require('path');
var webpack = require('webpack');

var config = {
  context: __dirname + '/src',
  entry: "./index.js",
		output: {
    path: __dirname + '/build',
    filename: "bundle.js"
		},
  plugins: [
    new webpack.DefinePlugin({
      ON_TEST: process.env.NODE_ENV === 'test'
    })
  ],
  isparta: {
    embedSource: true,
    noAutoWrap: true,
    // these babel options will be passed only to isparta and not to babel-loader
    babel: {
      presets: ['es2015']
    }
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
        loader: "babel",
        exclude: /node_modules/,
        query: {
          // https://github.com/babel/babel-loader#options
          cacheDirectory: true,
          presets: ['es2015']
        }
      }
    ],
    preLoaders: [
      // instrument only testing sources with Istanbul
      {
        test: /\.js$/,
        include: path.resolve('src/'),
        loader: 'isparta'
      }
    ]
		}
};

module.exports = config;
