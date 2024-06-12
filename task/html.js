const { src, dest, watch, series, parallel } = require("gulp");

const path = require("../config/path.js");
const app = require("../config/app.js");
//Плагины
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const fileInclude = require("gulp-file-include");
const htmlmin = require("gulp-htmlmin");
const webpHtml = require("gulp-webp-html");

//Html
const html = () => {
  return src(path.html.src)
    .pipe(plumber({
        errorHandler: notify.onError()
    }))
    .pipe(fileInclude())
    .pipe(webpHtml())
    .pipe(
      htmlmin(app.htmlmin)
    )
    .pipe(dest(path.html.dest));
};

module.exports = html;