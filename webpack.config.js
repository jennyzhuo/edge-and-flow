const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:9000',
    'webpack/hot/only-dev-server',
    "./src/Index.js", 
    "./src/styles/main.scss"
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./public/dist")
  },
  module: {
    rules: [
      // {
      //   test: /\.scss/,
      //   loader: ExtractTextPlugin.extract(["css-loader", "sass-loader"])
      // },
      // {
      //   test: /\.scss$/, // files ending with .scss
      //   use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
      //     fallback: 'style-loader',
      //     use: ['css-loader', 'sass-loader'],
      //   })),
      // },
      
      {
          test: /\.scss$/,
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
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   loaders: "eslint-loader",
      // },
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   loaders: "react-hot-loader",      
      // },
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
    contentBase: "./public/",
    watchContentBase: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new ExtractTextPlugin("bundle.css"),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]
};
