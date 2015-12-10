var webpack = require('webpack');
var AssetsWebpackPlugin = require('assets-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
  entry: {
    home: [
      'webpack-hot-middleware/client?path=http://localhost:4001/__webpack_hmr',
      './client/entries/Home',
    ],
    vendor: [
      './client/styles/core.scss',
      'react',
      'react-dom',
      'history',
      'react-redux',
      'react-router',
      'redux',
      'redux-router'
    ]
  },
  output: {
    publicPath: '/static/build/',
    path: path.join(__dirname, 'static/build'),
    filename: '[name].[hash].js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel']
      },
      {
        test: /\.scss$/,
        loader:  ExtractTextPlugin.extract('css!sass')
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin(
      'vendor', '[name].[hash].js'
    ),
    new ExtractTextPlugin("[name].[hash].css"),
    new AssetsWebpackPlugin({
        filename: 'webpack-assets.json',
        prettyPrint: true
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html'
    })
  ],
  assets: {
    stats: {
      colors: true
    }
  }
};
