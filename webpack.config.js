const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:9000',
    'webpack/hot/only-dev-server',
    "./src/index.js",
    "./src/main.scss"
  ],
  output: {
    filename: "index.bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: '/'
  },
  module: {
    rules: [
      {
          test: /\.(css|scss)$/,
          include: /(src|assets)/,
          use: [
              {
                  loader: 'style-loader'
              },
              {
                  loader: 'css-loader?sourceMap'
              },
              {
                  loader: 'sass-loader?sourceMap'
              }
          ]
      },
      {
        test: /\.(pdf|jpg|png|gif|svg|ico)$/,
        use: [
          {
            loader: 'url-loader'
          },
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders:"babel-loader",
        options: {
          presets: ["react", "stage-0", "es2015"],
          plugins: ["transform-class-properties", "transform-decorators-legacy", "react-hot-loader/babel"]
        }
      },
    ]
  },
  devServer: {
    contentBase: "./dist",
    watchContentBase: true,
    historyApiFallback: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]
};
