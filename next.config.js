const path = require("path");

module.exports = {
  env: {
    API_KEY: process.env.API_KEY
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 800,
      aggregateTimeout: 300,
    };
    return config;
  },
};
