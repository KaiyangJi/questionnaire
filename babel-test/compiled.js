"use strict";

// index.js
// https://juejin.im/post/5efdaa8ff265da22b6493339?utm_source=gold_browser_extension#comment
var fn = function fn() {
  console.log("wens");
};

var p = new Promise(function (resolve, reject) {
  resolve("wens");
});
var list = [1, 2, 3, 4].map(function (item) {
  return item * 2;
});
