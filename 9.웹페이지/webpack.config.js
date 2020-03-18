const path = require("path");
const webpack = require("webpack");

module.exports = {
  name: "react-router-setting",
  mode: "development", // 실서비스 : production
  devtool: "eval", // 빠르게, 실서비스: hidden-source-map
  resolve: {
    extensions: [".js", ".jsx"]
  },

  entry: {
    app: ["./client"]
  }, // 입력
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  browsers: ["last 2 chrome versions"] // browserslist
                },
                debug: true
              }
            ],
            "@babel/preset-react"
          ],
          plugins: ["@babel/plugin-proposal-class-properties", "react-hot-loader/babel"]
        }
      }
    ]
  },
  plugins: [new webpack.LoaderOptionsPlugin({ debug: true })],
  output: {
    path: path.join(__dirname, "dist"), // __dirname: 현재폴더
    filename: "app.js",
    publicPath: "/dist/"
  } // 출력
};
