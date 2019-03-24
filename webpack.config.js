const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  devtool: 'inline-source-map',
  devServer: process.env.NODE_ENV === 'development' ? {
    contentBase: './dist',
    port: 3000
  } : undefined,
  entry: './src/renderer/index.js',
  output: {
    filename: 'bundle.[hash].js',
    path: path.join(__dirname, '/dist/renderer')
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
      template: './src/renderer/index.html'
    }),
  ]
};
