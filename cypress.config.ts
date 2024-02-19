import { defineConfig } from "cypress";
import { devServer } from "@cypress/webpack-dev-server";

export default defineConfig({
  component: {
    devServer(devServerConfig) {
      return devServer({
        ...devServerConfig,
        framework: "react",
        webpackConfig: require("./scripts/webpack.dev.js"),
      });
    },
  },
});
