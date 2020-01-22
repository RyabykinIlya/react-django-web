const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./static_src/index.js",
  output: {
    filename: "static/main.js",
    path: path.resolve(__dirname),
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/react",
              {
                plugins: ["@babel/plugin-proposal-class-properties"]
              }
            ]
          }
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  },
  resolve: {
    modules: ["node_modules", "static", "templates"]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "static_src/templates", "index.html"),
      filename: path.resolve(__dirname, "templates", "index.html")
    }),
    new MiniCssExtractPlugin({
      filename: "static/main.css"
    })
  ]
};
