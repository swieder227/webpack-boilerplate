const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = {
    // The starting point(s) of the app
    entry: path.join(__dirname, "src", "js", "main.js"),

    // Where to put bundles
    output: {
      filename: '[name]-[hash].min.js',
      path: path.join(__dirname, 'public', 'build'),
      publicPath: '/public/'
    },

    // Debug bundle using .maps
    devtool: "source-map",

    // Transformations to files via loaders
    module: {
      loaders: [
        {
          test: /\.scss$/,
          /* loaders: ['style', 'css?sourceMap', 'sass'] */
          loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss!sass')
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel',
          query: {
            presets: ['es2015']
          }
        },
        {
          test: /\.png$/,
          loader: 'url-loader?limit=10000?name=[name]-[hash:6]'
        }
      ]
    },

    // Additional plugins
    plugins: [
      // separates CSS from .js into .css file
      new ExtractTextPlugin('[name]-[hash].min.css'),
      // creates an HTML file that references webpack bundles
      new HtmlWebpackPlugin({
        template: 'src/index.tpl.html',
        inject: 'body',
        filename: 'index.html'
      })
    ],

    // Set how require() finds base path
    resolve: {
      extensions: ['', '.js', '.scss'],
      root: [path.join(__dirname, 'src')]
    },

    // Configs for sass
    sassLoader: {
      includePaths: [path.resolve(__dirname, "src")]
    },

    // Apply post css processes
    postcss: [
      require('autoprefixer')
    ],

    // Allow external script tags i.e. CDN links
    externals: {
      jquery: "jQuery"
    }
};

module.exports = config
