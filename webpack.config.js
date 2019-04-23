const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: "./src/index.js",
  devServer: {
    hot: true,
    contentBase: "./dist"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Hot Module Replacement"
    }),
    new webpack.HotModuleReplacementPlugin()
  ],

  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  }
};
