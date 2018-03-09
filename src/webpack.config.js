const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  entry: {
    index: path.resolve(__dirname, './js/index.js')
  },
  output: {
    filename: "[name].js"
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js"]
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: "babel-loader",
      exclude: path.resolve(__dirname, 'node_modules'),
      query: {
        presets: ["es2015"]
      }
    }]
  }
}