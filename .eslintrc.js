module.exports = {
  extends: "airbnb",
  plugins: ["react", "prettier"],
  // 全局变量 true:将允许变量被重写; false:将不允许被重写
  globals: {
    window: false
  },
  rules: {
    "prettier/prettier": "error",
    quotes: [1, "double"], // 引号类型
    "react/prefer-stateless-function": 0
  }
};
