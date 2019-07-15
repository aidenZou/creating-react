const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

const rootPath = process.cwd();

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    // contentBase: "./dist",
    contentBase: path.join(rootPath, "dist"),
    // https: true,
    hot: true,
    // port: 3000,
    open: "Chrome", // 告诉 dev-server 在 server 启动后打开浏览器。默认禁用

    // before: function(app, server) {
    //   app.get("/some/path", function(req, res) {
    //     res.json({ custom: "response" });
    //   });
    // },
    proxy: {
      // "/api": "http://localhost:3000",
      "/api": "https://manager.mall.test.sankuai.com",
    },
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
