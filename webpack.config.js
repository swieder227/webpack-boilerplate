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

        // Compile Sass
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss!sass')
        },

        // Compile JS with Babel
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel',
          query: {
            presets: ['es2015']
          }
        },

        // Image URL config. Generate data URI's for images smaller than 10,000 bytes
        {
          test: /\.(png|gif|jpe?g|svg)$/i,
          loader: 'url?limit=10000'
        },

        // Image file config. Generate hashed file names to make them easy to cache.
        {
         test: /\.(png|gif|jpe?g|svg)$/i,
         loader: 'file?hash=sha512&digest=hex&name=[path][name]-[hash].[ext]'
        },

        // Inline font files smaller than 10000 bytes
        { test: /\.(woff2?|ttf|eot|svg)$/, loader: 'url?limit=10000' },

        // File loader for fonts larger than 10000 bytes.
        { test: /\.(woff2?|ttf|eot|svg)$/, loader: 'file?name=[name].[ext]' }
      ]
    },

    // Set how require() finds base path
    resolve: {
      // Search for files w/ extension starting from root directory
      extensions: ['', '.js', '.scss'],
      root: [path.join(__dirname, 'src')]
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

    // Configs for sass
    sassLoader: {
      // Allow @imports to start from src
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
