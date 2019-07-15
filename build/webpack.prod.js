const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  // devtool: "source-map",
  // optimization: {
  //   splitChunks: {
  //     // chunks: "all", // async
  //     // minSize: 30000, // 要生成的块的最小大小（以字节为单位）
  //     // maxSize: 0,
  //     // minChunks: 1, // 分割前必须共享模块的最小块数
  //     // maxAsyncRequests: 5, // 按需加载时的最大并行请求数
  //     // maxInitialRequests: 3, // 入口点处的最大并行请求数
  //     // automaticNameDelimiter: "~",
  //     // name: true,
  //     // cacheGroups: {
  //     //   vendors: {
  //     //     test: /[\\/]node_modules[\\/]/,
  //     //     priority: -10,
  //     //   },
  //     //   default: {
  //     //     minChunks: 2,
  //     //     priority: -20,
  //     //     reuseExistingChunk: true,
  //     //   },
  //     // },

  //     chunks: "all",
  //     minSize: 10000, // 提高缓存利用率，这需要在http2/spdy
  //     maxSize: 0, //没有限制
  //     minChunks: 3, // 共享最少的chunk数，使用次数超过这个值才会被提取
  //     maxAsyncRequests: 5, //最多的异步chunk数
  //     maxInitialRequests: 5, // 最多的同步chunks数
  //     automaticNameDelimiter: "~", // 多页面共用chunk命名分隔符
  //     name: true,

  //     cacheGroups: {
  //       // 声明的公共chunk
  //       vendor: {
  //         // 过滤需要打入的模块
  //         test: module => {
  //           if (module.resource) {
  //             const include = [/[\\/]node_modules[\\/]/].every(reg => {
  //               return reg.test(module.resource);
  //             });
  //             const exclude = [/[\\/]node_modules[\\/](react|redux|antd)/].some(reg => {
  //               return reg.test(module.resource);
  //             });
  //             return include && !exclude;
  //           }
  //           return false;
  //         },
  //         name: "vendor",
  //         priority: 50, // 确定模块打入的优先级
  //         reuseExistingChunk: true, // 使用复用已经存在的模块
  //       },
  //       react: {
  //         test({ resource }) {
  //           return /[\\/]node_modules[\\/](react|redux)/.test(resource);
  //         },
  //         name: "react",
  //         priority: 20,
  //         reuseExistingChunk: true,
  //       },
  //       antd: {
  //         test: /[\\/]node_modules[\\/]antd/,
  //         name: "antd",
  //         priority: 15,
  //         reuseExistingChunk: true,
  //       },
  //     },
  //   },
  // },
});
