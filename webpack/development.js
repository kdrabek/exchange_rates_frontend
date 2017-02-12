var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var development = Object.assign({}, {
  devtool: 'source-map',
  plugins: [
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      template: 'src/main.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}, require('./config'));

development.entry.app.push('webpack-dev-server/client?http://localhost:8080s');
development.entry.app.push('webpack/hot/only-dev-server');

module.exports = development;
