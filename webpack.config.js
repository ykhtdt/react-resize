const webpack = require("webpack");
const path = require("path");

module.exports = () => {
  const isProduction = process.env.NODE_ENV === "production";

  return {
    mode: isProduction ? "production" : "development",
    entry: {
      test: "./example/example.tsx"
    },
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "build"),
      clean: true,
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    devServer: {
      static: path.join(__dirname, 'example'),
      port: 3000,
      hot: true,
    },
    devtool: !isProduction ? 'eval-source-map' : 'source-map',
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
      ],
    },
  }
}