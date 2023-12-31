const path = require("path");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

const common = require("./webpack.common.config");

module.exports = merge(common, {
  node: {
    fs: 'empty'
  },
  // production mode makes it uglyfied/minified
  mode: "production",
  // no weird "eval" stuff, shows code relatively clear in dist/main.js
  devtool: "none",
  entry: {
    vr: "./src/index.js",
  },
  output: {
    // the filename is the name of the bundled file
    filename: "[name].[contentHash].bundle.js",
    // dist is the folder name it gets exported to
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    overlay: {
      warnings: false,
      errors: true
    }
  },
  optimization: {
    minimizer: [new TerserPlugin()]
  },
  // Deletes the dist folder, so the new .js files wont stack and pollute the folder
  plugins: [new HtmlWebpackPlugin({
    favicon: "./src/images/favicon.png",
    chunks: ['vr'],
    template: "./src/index.html",
    filename: "index.html",
    // Injects file in the head of the html
    inject: 'head'
    })]
});