const { watch, series, parallel } = require("gulp");
const browserSync = require("browser-sync").create();

const path = require("./config/path.js");
const app = require("./config/app.js");
//Задачи
const clear = require("./task/clear.js");
const pug = require("./task/pug.js");
const scss = require("./task/scss.js");
const js = require("./task/js.js");
const img = require("./task/img.js");


//Сервер
const server = () => {
  browserSync.init({
    server: {
      baseDir: path.root,
    },
    notify:false,
  });
};

//Наблюдатель
const watcher = () => {
  watch(path.pug.watch, pug).on("all", browserSync.reload);
  watch(path.scss.watch, scss).on("all", browserSync.reload);
  watch(path.js.watch, js).on("all", browserSync.reload);
  watch(path.img.watch, img).on("all", browserSync.reload);
};
//
const build = series(
  clear,
  parallel(pug, scss, js,img)
);
const dev = series(
  build, 
  parallel(watcher, server)
);
// Задачи
exports.pug = pug;
exports.scss = scss;
exports.js = js;
exports.img = img;

//Сборка
exports.default = app.isProd
? build
: dev;