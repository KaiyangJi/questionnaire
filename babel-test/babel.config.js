// babel.config.js
// module.exports = {
//     presets: [
//       [
//         "@babel/env",
//         {
//           useBuiltIns: "usage", // 实现按需加载
//           corejs: { 
//             version: 3, 
//             proposals: true 
//           }
//         }
//       ]
//     ],
//     plugins: []
//   };
  
// webpack.config.js
module.exports = {
    presets: [
      [
        "@babel/env",
        {
          useBuiltIns: "usage",
          corejs: { version: 3, proposals: true }
        }
      ]
    ],
    plugins: ["@babel/plugin-transform-runtime"]
  };
  
  