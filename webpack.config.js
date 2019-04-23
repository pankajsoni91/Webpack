const path = require("path");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: "./src/index.js",
  devServer: {
    contentBase: "./dist"
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  }
};
