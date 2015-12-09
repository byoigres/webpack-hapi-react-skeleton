var webpack = require('webpack');
var AssetsWebpackPlugin = require('assets-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'webpack-hot-middleware/client?path=http://localhost:4001/__webpack_hmr',
    './src'
  ],
  output: {
    publicPath: '/static/build/',
    path: '/static/build',
    filename: '[name].[hash].js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel']
      }
    ]
  },
  //devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
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
  },
  devServer: {
    proxy: {
      '/__webpack_hmr': {
        target: 'http://localhost:4001',
        secure: false,
      },
    },
  },
};
