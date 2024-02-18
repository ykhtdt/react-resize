// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "\\.[jt]sx?$": "babel-jest",
    "\\.css$": "jest-transform-stub"
  }
};

export default config;
