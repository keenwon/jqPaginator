const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const getAbsolutePath = p => path.resolve(__dirname, p)

module.exports = {
  entry: {
    app: getAbsolutePath('./src/jq-paginator.js')
  },
  output: {
    filename: '[name].js'
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: getAbsolutePath('./index.html'),
      inject: 'head'
    })
  ]
}
