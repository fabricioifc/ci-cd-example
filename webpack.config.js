// const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const nodeExternals = require('webpack-node-externals')
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import nodeExternals from 'webpack-node-externals'
// Se estiver em um arquivo módulo ESM
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// module.exports = {
export default {
  // target: 'node',
  target: 'web',
  entry: './src/index.js',
  // output: {
  //   path: path.resolve(__dirname, 'dist'),
  //   filename: 'index.js'
  // },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  externals: [nodeExternals()],
  // externals: [nodeExternals()],
  // resolve: {
  //   extensions: ['.js', '.ts']
  // },
  resolve: {
    extensions: ['.js', '.ts']
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.ts$/,
  //       use: 'ts-loader',
  //       exclude: /node_modules/
  //     }
  //   ]
  // },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: './src/index.html'
  //   })
  // ]
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}



