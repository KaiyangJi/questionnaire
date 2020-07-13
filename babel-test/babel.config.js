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
// module.exports = {
//     presets: [
//       [
//         "@babel/env",
//         {
//           useBuiltIns: "usage",
//           corejs: { version: 3, proposals: true }
//         }
//       ]
//     ],
//     plugins: ["@babel/plugin-transform-runtime"]
//   };
  
// webpack.config.js
// module.exports = {
//     presets: ["@babel/env"],
//     plugins: [
//       [
//         "@babel/plugin-transform-runtime",
//         {
//           corejs: { version: 3 }
//         }
//       ]
//     ]
//   };

  module.exports = {
    presets: [
      [
        "@babel/env",
        {
          useBuiltIns: "usage",
          corejs: { version: 3, proposals: true },
        //   "targets": {
        //     "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
        //   }
        // "targets": "> 0.25%, not dead"
        "targets": {
            // "chrome": "43"
            // firefox: 77
            // firefox: 30
            ie: 11
          }
        }
        
      ]
    ],
    plugins: [
        // [
        //   "@babel/plugin-transform-runtime",
        //   {
        //     corejs: { version: 3 }
        //   }
        // ]
      ]
  };
  