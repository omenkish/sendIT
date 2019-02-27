const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");

const outputDirectory = 'dist';
const config = {
 entry: ['./clientReact/index.jsx'],
 output: {
   path: path.resolve(__dirname, outputDirectory),
   publicPath: '/dist/',
   filename: 'bundle.js'
 },
 mode: 'development',
 module: {
   rules: [
     {
       test: /\.(js|jsx)$/,
       include: path.join(__dirname, 'clientReact'),
       exclude: /(node_modules)/,
       loader: 'babel-loader',
       options: { presets: ['@babel/preset-env'] }
     },
     {
       test: /\.css$/,
       include: path.join(__dirname, 'client'),
       use: ['style-loader', 'css-loader']
     },
     {
       test: /\.(jpeg|jpg|png|gif|mp3)$/i,
       include: path.join(__dirname, 'client'),
       loaders: ['file-loader']
     }
   ]
 },
 resolve: { extensions: ['*', '.js', '.jsx'] },
 devServer: {
   contentBase: path.join(__dirname, 'clientReact/public/'),
   historyApiFallback: true,
   port: 8000,
   open: true,
   proxy: {
     '/api': 'http://127.0.0.1:3000',
     secure: false,
     changeOrigin: true
   },
   publicPath: 'http://127.0.0.1:8000/dist/',
   hotOnly: true,
   historyApiFallback: true
 },
 plugins: [
   new CleanWebpackPlugin([outputDirectory]),
   new webpack.HotModuleReplacementPlugin(),
   new webpack.optimize.OccurrenceOrderPlugin(),
   new webpack.NoEmitOnErrorsPlugin(),
   new HtmlWebpackPlugin({
     template: 'clientReact/public/index.html'
   })
 ]
};

module.exports = config;