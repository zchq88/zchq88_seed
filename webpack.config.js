/**
 * @file webpack配置
 * @author zchq88
 */
module.exports = {
    devtool: 'false',
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
    }
};
