// index.js
// https://juejin.im/post/5efdaa8ff265da22b6493339?utm_source=gold_browser_extension#comment
// ./node_modules/@babel/cli/bin/babel.js index.js --out-file compiled1.js
// require("@bable/polyfill"); 并不是打包最终结果
// npm uninstall 卸载包 是否也卸载对应得依赖包 - yes
// @babel/runtime 生产环境是否也需要安装? 开发环境何时被添加上得  @babel/preset-env 安装时
// add  github

import "@bable/polyfill";
const fn = () => {
    console.log("wens");
  };
  const p = new Promise((resolve, reject) => {
    resolve("wens");
  });
  const list = [1, 2, 3, 4].map(item => item * 2);
  
  