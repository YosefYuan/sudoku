const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  entry: {
    index: path.resolve(__dirname, './js/index')
  },
  output: {
    filename: "[name].js"
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts"]
  },
  module: {
    rules: [{
      test: /\.ts$/,
      use: [{
          loader: "babel-loader",
          options: {
            presets: ["es2015"]
          }
        },
        "ts-loader"
      ],
      exclude: /node_modules/
    }]
  }
}