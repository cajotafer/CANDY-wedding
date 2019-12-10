const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const ResourceHintWebpackPlugin = require("resource-hints-webpack-plugin");
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  entry: {
    index: "./src/index.js",
    comments: "./src/js/pages/comments.js",
    story: "./src/js/pages/story.js",
    gallery: "./src/js/pages/gallery.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js"
  },
  module: {
    rules: [
      {
        test: /\.svelte$/,
        loader: "svelte-loader",
        options: {
          emitCss: true,
          preprocess: require("svelte-preprocess")({})
        }
      },
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          "postcss-loader",
          /* {
                        loader: 'resolve-url-loader',
                        options: {
                            keepQuery: true,
                        },
                    }, */
          {
            loader: "sass-loader",
            options: {
              // implementation: require('sass'),
              sourceMap: true
              // outputStyle: 'expanded',
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: "file-loader"
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: "url-loader",
            options: {
              mimetype: "image/png"
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".mjs", ".js", ".svelte"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // require('html-webpack-template'),
      excludeChunks: ["comments", "story", "gallery"],
      title: "La boda de Carlos y Dyah",
      minify: true
      // inject: false,
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html", // require('html-webpack-template'),
      filename: "comentarios.html",
      excludeChunks: ["index", "story", "gallery"],
      title: "Libro de visitas",
      minify: true
      // inject: false,
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html", // require('html-webpack-template'),
      filename: "historia.html",
      excludeChunks: ["index", "comments", "gallery"],
      title: "Historia",
      minify: true
      // inject: false,
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html", // require('html-webpack-template'),
      filename: "galeria.html",
      excludeChunks: ["index", "comments", "story"],
      title: "Galería",
      minify: true
      // inject: false,
    }),
    new ResourceHintWebpackPlugin(),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: "async"
    }),
    new FaviconsWebpackPlugin({
      logo: "./src/images/logo.png", // svg works too!
      mode: "webapp", // optional can be 'webapp' or 'light' - 'webapp' by default
      devMode: "webapp", // optional can be 'webapp' or 'light' - 'light' by default
      cache: true,
      inject: true,
      favicons: {
        appName: "CANDY-wedding",
        appDescription: "La boda de Carlos y Dyah",
        developerName: "Cajotafer",
        developerURL: null, // prevent retrieving from the nearest package.json
        background: "#ccc",
        theme_color: "#ccc",
        icons: {
          coast: false,
          yandex: false
        }
      }
    }),
    new MiniCssExtractPlugin({
      filename: `[name].css`
    })
  ],
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  }
};

module.exports = config;
