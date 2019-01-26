const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// __dirname： 获得当前执行文件所在目录的完整目录名
// process.cwd() ：获得当前执行node命令时候的文件夹目录名
const rootPath = process.cwd();

module.exports = {
  entry: {
    app: path.resolve(rootPath, "src/index.js")
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  plugins: [
    new CleanWebpackPlugin(["dist"], { root: rootPath }),
    new HtmlWebpackPlugin({
      title: "My App",
      meta: {
        viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
        // Will generate: <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        "theme-color": "#4285f4"
        // Will generate: <meta name="theme-color" content="#4285f4">
      },
      template: path.resolve(__dirname, "template/index.template.html")
    })
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(rootPath, "dist")
  }
};
