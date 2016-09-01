const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    'babel-polyfill',
    './app/app.jsx'],
  output: {
    path: path.join(__dirname, '/app'),
    filename: 'index.js',
  },
  devServer: {
    inline: true,
    port: 3333,
    historyApiFallback: true,
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'app'),
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
      },
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|gif|jpg|svg|woff|woff2|ttf|otf|eot)$/,
        loader: 'url',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
