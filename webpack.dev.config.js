const path = require('path');
const webpack =require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')
module.exports={
    entry:"./src/index.js",
    output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve:{
    extensions:['.js','.css','.jsx','.json']
  },
  devServer: {
      compress: true,
      port: 3000,
      hot: true
    },
  devtool:'source-map',
  module: {
      rules: [
        { test: /\.js$/, exclude: /node_modules/, use: "babel-loader" },
        {
        test: /\.css$/,use: ['style-loader','css-loader','postcss-loader']
        },
        {test: /\.(jpg?g|png)$/,use:'file-loader'}
      ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:'public/index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new OpenBrowserPlugin({
            url: 'http://localhost:3000'
        })
    ]
}