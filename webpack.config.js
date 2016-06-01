const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');

const config = {
    // The starting point(s) of the app
    entry: path.join(__dirname, "./src/js/main.js"),
    // Where to put bundles
    output: {
        path: "./build",
        publicPath: "/build/",
        filename: "bundle.js",
        souceMapFilename: "bundle.map"
    },
    // Debug bundle using .maps
    devtool: "source-map",
    // Transformations to files via loaders
    module: {
      loaders: [
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
        }
      ]
    },
    // Set how require() finds base path
    resolve: {
      extensions: ['', '.js', '.scss'],
      root: [path.join(__dirname, './src')]
    },
    // ExtractTextPlugin allows css files to strip out of core bundle.js into their own file 
    plugins: [
        new ExtractTextPlugin("styles.css")
    ],
    // Configs for sass
    sassLoader: {
      includePaths: [path.resolve(__dirname, "./src")]
    },
    // Allow external script tags i.e. CDN links
    externals: {
      jquery: "jQuery"
    }
};

module.exports = config