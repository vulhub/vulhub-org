const path = require('path')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  entry: [
      './src/index.js',
      './src/scss/index.scss'  
  ],
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'dist')
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
            test: /\.(css|scss)$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        }
      ]
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'docs', to: './' },
      { from: 'src/img', to: './img' }
    ]),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "css/[name].css",
      chunkFilename: "css/[id].css",
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: {removeAll: true } },
      canPrint: true
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: false,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        minifyJS:true, 
        minifyCSS:true
      }
    }),
  ],
}