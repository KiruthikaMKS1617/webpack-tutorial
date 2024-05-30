const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/dashboard.js",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "http://localhost:9000/",
  },
  mode: "development",
  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    port: 9000,
    index: "dashboard.html",
    historyApiFallback: {
      index: "dashboard.html",
    },
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
          },
        },
      },
      {
        test: /\.hbs$/,
        use: ["handlebars-loader"],
      },
    ],
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        filename: "dashboard.html",
        title: "Dashboard",
        description: "A simple dashboard",
        template: "src/page-template.hbs",
      }),
      new ModuleFederationPlugin({
        name: "App",
        remotes: {
          HelloWorldApp: "HelloWorldApp@http://localhost:9001/remoteEntry.js",
          KiwiApp: "KiwiApp@http://localhost:9002/remoteEntry.js",
        },
      }),
    ],
  },
};
