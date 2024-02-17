const webpack = require("webpack");
const path = require("path");

module.exports = (env, argv) => {
  return {
    entry: "./src/index.tsx",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
      clean: true,
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    devServer: {
      static: path.join(__dirname, "src"),
      compress: true,
      port: 3000,
      hot: true,
    },
    devtool: 'source-map',
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
    plugins: [
      new webpack.EnvironmentPlugin({
        NODE_ENV: ['development', 'production'].includes(argv.mode) ? argv.mode : 'production'
      }),
      new webpack.optimize.ModuleConcatenationPlugin(),
    ],
  }
}