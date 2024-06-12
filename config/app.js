const isProd = process.argv.includes("--production");
const isDev = !isProd;
module.exports = {
  isProd: isProd,
  isDev: isDev,
  htmlmin: {
    collapseWhitespace: isProd,
  },
  pug: {
    pretty: true,
  },
  webpack: {
    mode: isProd ? "production" : "development"
  },
  imagemin: {
    verbose: true
  }
};
