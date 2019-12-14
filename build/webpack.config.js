const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

const ROOT = path.join(__dirname, "../src/");
const SRC = path.join(ROOT, "index.js");
const TARGET = path.join(__dirname, "../dist/");

module.exports = {
  devtool: "source-map",
  entry: SRC,
  output: {
    path: TARGET,
    filename: "bundle.js",
    publicPath: "/",
    library: "Overlook",
    libraryTarget: "umd",
    umdNamedDefine: true,
    globalObject: "this"
  },

  resolve: {
    alias: require("./aliases.config").webpack,
    extensions: ["*", ".js", ".vue"]
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)(\?.*)?$/,
        loader: "url-loader"
      },
      {
        test: /\.s(c|a)ss$/,
        use: [
          "vue-style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            // Requires sass-loader@^7.0.0
            options: {
              implementation: require("sass"),
              fiber: require("fibers"),
              indentedSyntax: true // optional
            },
            // Requires sass-loader@^8.0.0
            options: {
              implementation: require("sass"),
              sassOptions: {
                fiber: require("fibers"),
                indentedSyntax: true // optional
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
    }),
    new HtmlWebpackPlugin({
      title: "OverLook",
      inject: true,
      hash: false,
      template: ROOT + "index.html",
      filename: "index.html"
    }),
    new VueLoaderPlugin()
  ],
  devServer: {
    port: 5000,
    open: false,
    overlay: true,
    watchOptions: {
      aggregateTimeout: 300
    },
    proxy: {
      "/api": {
        target: {
          host: "0.0.0.0",
          protocol: "http:",
          port: 8080
        },
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
