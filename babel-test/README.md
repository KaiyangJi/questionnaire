# Q1
```
ie >= 9
[Array.prototype.lforEach ](https://caniuse.com/#search=Array.prototype.forEach) 
babel 编译后却打包引入了 forEach 的 polyfill
https://github.com/mdn/browser-compat-data

导致打包后的文件体积变大，不符合期望；没有按浏览器进行打包；
```