const webpack = require("webpack");
const path = require("path");

module.exports = (env, argv) => {
  return {
    mode: "production",
    entry: "./lib/index.ts",
    output: {
      path: path.resolve(__dirname, "../dist"),
      filename: "index.js",
      library: "ReactResize",
      libraryTarget: "umd",
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
    externals: {
      "react": {
        "commonjs": "react",
        "commonjs2": "react",
        "amd": "react",
        "root": "React",
      },
      "react-dom": {
        "commonjs": "react-dom",
        "commonjs2": "react-dom",
        "amd": "react-dom",
        "root": "ReactDOM",
      },
    },
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
          test: /\.css/g,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    performance: {
      hints: false,
    },
  };
};
