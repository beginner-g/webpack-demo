const path = require('path');
const webpack =require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports={
    entry:"./src/index.js",
    output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.[hash:5].js'
  },
  resolve:{
    extensions:['.js','.css','.jsx','.json']
  },
  devtool:'source-map',
  module: {
      rules: [
        { test: /\.js$/, exclude: /node_modules/, use: "babel-loader" },
        // {
        //     test: /\.css$/,
        //     use: [
        //       'style-loader',
        //       'css-loader',
        //       'postcss-loader'
        //     ]
        // },
        {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader",'postcss-loader']
        })
      },
        {test: /\.(jpg?g|png)$/,use:'file-loader?name=[name]-[hash:5].[ext]&outputPath=images/'}
      ]
    },
    plugins: [
         new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
          drop_console: false,
        }
      }),
        new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"'
        }),
        new ExtractTextPlugin({
            filename: 'style/bundle.min.css'
        }),
        new HtmlWebpackPlugin({
            template:'public/index.html'
        })
    ]
}