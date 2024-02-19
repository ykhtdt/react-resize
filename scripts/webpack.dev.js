const path = require("path");

module.exports = (env, argv) => {
  return {
    mode: "development",
    entry: "./examples/src/index.tsx",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
      clean: true,
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    devServer: {
      static: path.resolve(__dirname, "../examples/src"),
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
              configFile: path.resolve(__dirname, "../tsconfig.json"),
            },
          },
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    performance: {
      hints: false,
    },
  }
}