"use strict";

require("core-js/modules/es.array.map");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("@bable/polyfill");

// index.js
// https://juejin.im/post/5efdaa8ff265da22b6493339?utm_source=gold_browser_extension#comment
// ./node_modules/@babel/cli/bin/babel.js index.js --out-file compiled1.js
// require("@bable/polyfill"); 并不是打包最终结果
var fn = function fn() {
  console.log("wens");
};

var p = new Promise(function (resolve, reject) {
  resolve("wens");
});
var list = [1, 2, 3, 4].map(function (item) {
  return item * 2;
});
