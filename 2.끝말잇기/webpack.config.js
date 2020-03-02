const path = require("path");

module.exports = {
  name: "word-relay-setting",
  mode: "development", // 실서비스 : production
  devtool: "eval", // 빠르게
  resolve: {
      extensions: ['.js', '.jsx']
  }

  entry: {
    app: ["./client"]
  }, // 입력
  output: {
    path: path.join(__dirname, "dist"), // __dirname: 현재폴더
    filename: "app.js"
  } // 출력
};
