const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: ['babel-polyfill','./app/index.js'],
  output: {
    path: path.resolve(__dirname, 'app/static'),
    filename: 'index_bundle.js'
  },
    module: {
      rules: [
        { test: /\.(js)$/, use: 'babel-loader'},
        { test: /\.css$/, use: ['style-loader', 'css-loader']}
      ]
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    })
  ]
}
