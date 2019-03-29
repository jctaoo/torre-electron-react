'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  devtool: process.env.NODE_ENV === 'development' ? 'inline-source-map' : undefined,
  devServer: process.env.NODE_ENV === 'development' ? {
    contentBase: '../dist',
    port: 5000,
    hot: true,
  } : undefined,
  entry: path.join(__dirname, '../src/renderer/index.js'),
  output: {
    filename: 'bundle.[hash].js',
    path: path.join(__dirname, '../dist/renderer')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve:{
    extensions:['.js','.css','.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../src/renderer/index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ]
};
