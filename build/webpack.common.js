const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const postcssPresetEnv = require("postcss-preset-env");

// __dirname： 获得当前执行文件所在目录的完整目录名
// process.cwd() ：获得当前执行node命令时候的文件夹目录名
const rootPath = process.cwd();

module.exports = {
  entry: {
    app: path.resolve(rootPath, "src/index"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] },
      },
      {
        //antd样式处理
        test: /\.css$/,
        // exclude: /src/,
        include: /node_modules/,
        // include: [/[\\/]node_modules[\\/].*antd/], // 针对 antd不开启CSS Modules处理
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[path][name]__[local]--[hash:base64:5]",
            },
          },
          // "postcss-loader",
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: () => [
                postcssPresetEnv(),
                /* pluginOptions */
                // {
                //   autoprefixer: {
                //     flexbox: "no-2009",
                //   },
                //   // stage: 3,
                // }
              ],
            },
          },
        ],
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          // {
          //   loader: "style-loader", // creates style nodes from JS strings
          // },
          // {
          //   loader: "css-loader", // translates CSS into CommonJS
          // },
          {
            loader: "less-loader", // compiles Less to CSS
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: "url-loader",
        options: {
          limit: 10000,
        },
      },
    ],
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  plugins: [
    new CleanWebpackPlugin(["dist"], { root: rootPath }),
    new HtmlWebpackPlugin({
      title: "My App",
      meta: {
        viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
        // Will generate: <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        "theme-color": "#4285f4",
        // Will generate: <meta name="theme-color" content="#4285f4">
      },
      template: path.resolve(__dirname, "template/index.template.html"),
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(rootPath, "dist"),
  },
};
