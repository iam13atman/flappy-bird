const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/MainController.js',
  plugins: [
    new webpack.HotModuleReplacementPlugin() // Enable HMR
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'public'),
        to: path.resolve(__dirname, 'dist')
      }
    ]),
    new webpack.optimize.UglifyJsPlugin({ beautify: false, comments: false })
  ]
};
