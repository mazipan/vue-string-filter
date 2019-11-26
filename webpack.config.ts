import webpack from "webpack";
import CompressionPlugin from "compression-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";
import { getAbsolutePath } from "./utils/index";

import npm from "./package.json";

const config: webpack.Configuration = {
  entry: {
    "vue-string-filter": "./lib/vue-string-filter.ts"
  },
  output: {
    path: getAbsolutePath("dist"),
    publicPath: "/dist",
    filename: "vue-string-filter.bundle.js",
    library: "VueStringFilter",
    libraryTarget: "umd",
    umdNamedDefine: true,
    jsonpFunction: "WebpackJsonp"
  },
  mode: "production",
  optimization: {
    minimize: true,
    usedExports: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        sourceMap: true
      })
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts"],
    alias: {
      vue$: "vue/dist/vue.common.js"
    }
  },
  devtool: "#source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  externals: {
    vue: "Vue"
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.BannerPlugin({
      banner: `VueStringFilter v.${npm.version}`
    }),
    new CompressionPlugin({
      algorithm: "gzip"
    })
  ]
};

module.exports = config;
