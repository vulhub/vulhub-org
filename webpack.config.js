const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  entry: [
      './src/index.js',
      './src/scss/index.scss'  
  ],
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'docs')
  },
  module: {
    rules: [
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                'es2015',
              ],
              plugins: [],
            }
          },
          include: [
            path.resolve(__dirname, 'src'),
          ],
        },
        {
            test: /\.json$/,
            use: {
                loader: 'json-loader'
            }
        },
        {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                use: ['css-loader', 'sass-loader'],
                fallback: 'style-loader'
            })
        }
      ]
  },
  plugins: [
    new ExtractTextPlugin('css/bundle.css'),
    new UglifyJSPlugin(),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: {removeAll: true } },
      canPrint: true
    })
  ]
}