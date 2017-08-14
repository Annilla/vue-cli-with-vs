/// <binding />
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, './'),
    publicPath: '/',
    filename: 'Scripts/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          // loaders: {
          //   // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
          //   // the "scss" and "sass" values for the lang attribute to the right configs here.
          //   // other preprocessors should work out of the box, no loader config like this necessary.
          //   'scss': 'vue-style-loader!css-loader!sass-loader',
          //   'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          // }

          // other vue-loader options go here
          
          // Extract css/sass to one file (with autoprefixer), but only in vue-loader
          // https://github.com/vuejs/vue-loader/blob/master/docs/en/configurations/extract-css.md
          extractCSS: true
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
          outputPath: 'Content/img/'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'img': path.resolve(__dirname, './src/assets'),
      'sharedSCSS': path.resolve(__dirname, './src/sass/shared.scss')
    }
  },
  devServer: {
    port: 9000,
    historyApiFallback: true,
    noInfo: false
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map',
  plugins: [
    new ExtractTextPlugin('Content/main.css')
  ]
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    // new BundleAnalyzerPlugin({
    //     analyzerMode: 'static'
    // }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    // Decouple vendor code
    // https://vuejsdevelopers.com/2017/06/18/vue-js-boost-your-app-with-webpack/
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        return module.context && module.context.indexOf('node_modules') !== -1;
      }
    })
  ])
}
