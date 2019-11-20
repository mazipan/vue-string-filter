import webpack from "webpack";
import TerserPlugin from "terser-webpack-plugin";
import { getAbsolutePath } from "./utils/index";
import { sync } from "glob";

import npm from "./package.json";

const config: webpack.Configuration = {
  entry: sync("./lib/filters/**/!(index).ts").reduce(
    (acc, curr) =>
      (acc = {
        ...acc,
        [curr.split(".")[1].replace("/lib/filters/", "")]: curr
      }),
    {}
  ),
  output: {
    path: getAbsolutePath("dist/filters"),
    filename: "[name].js",
    jsonpFunction: "WebpackJsonp",
    libraryTarget: "commonjs2"
  },
  mode: "production",
  optimization: {
    minimize: true,
    usedExports: true,
    minimizer: [
      new TerserPlugin({
        parallel: true
      })
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.BannerPlugin({
      banner: `VueStringFilter v.${npm.version}`
    })
  ]
};

module.exports = config;
