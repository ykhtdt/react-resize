const webpack = require("webpack");
const path = require("path");

module.exports = (env, argv) => {
  return {
    entry: "./lib/index.ts",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "index.js",
      clean: true,
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.ts|tsx/,
          use: {
            loader: "ts-loader",
            options: {
              configFile: path.resolve(__dirname, "tsconfig.json"),
            },
          },
          exclude: /node_modules/,
        },
        {
          test: /\.css/g,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    performance: {
      hints: false,
    },
  }
}