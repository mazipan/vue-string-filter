import webpack from "webpack";
import { VueLoaderPlugin } from "vue-loader";
import { getAbsolutePath } from "./utils";
import TerserPlugin from "terser-webpack-plugin";

const config: webpack.Configuration = {
  entry: {
    app: "./src/index.ts"
  },
  output: {
    path: getAbsolutePath("dist"),
    publicPath: "/dist",
    filename: "bundle.js",
    jsonpFunction: "WebpackJsonp"
  },
  mode: process.env.NODE_ENV as "development" | "production" | "none",
  resolve: {
    extensions: [".ts", ".vue", ".js"],
    alias: {
      vue$: "vue/dist/vue.common.js",
      src: getAbsolutePath("dist")
    }
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "html-loader"
      },
      {
        test: /\.vue$/,
        use: "vue-loader"
      },
      {
        test: /\.ts$/,
        loader: "ts-loader",
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.scss$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  performance: {
    hints: false
  },
  plugins: [new VueLoaderPlugin()]
};

if (process.env.NODE_ENV === "production") {
  config.devtool = "#source-map";

  config.plugins = (config.plugins || []).concat([
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: '"production"'
      }
    })
  ]);

  config.optimization = {
    minimize: true,
    usedExports: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        sourceMap: true
      })
    ]
  };
}

module.exports = config;
