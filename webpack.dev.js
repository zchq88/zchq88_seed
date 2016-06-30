/**
 * @file webpack配置
 * @author zchq88
 */

module.exports = {
  debug: true,
  devtool: 'cheap-module-source-map',
  entry: './app/app.js',
  output: {
    filename: 'app.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'ng-annotate!babel'},
      {test: /\.html$/, loader: 'raw'},
      {test: /\.styl$/, loader: 'style!css!stylus'},
      {test: /\.css$/, loader: 'style!css'}
    ]
  },
  devServer: {
    port: 3003,
    host: 'localhost',
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  },
  node: {
    global: 'window',
    crypto: 'empty',
    process: true,
    module: false,
    clearImmediate: false,
    setImmediate: false
  }
};
