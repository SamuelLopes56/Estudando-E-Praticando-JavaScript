const path = require('path'); // CommonJS - Sistema de módulo utilizado pelo Node.

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(_dirname, 'public', 'assets', 'js'),
        filename: 'bundle.js'
    },
    module: {
        rules:  [{
            exclude: /node_modules/,
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        }]
    },
    devtool: 'source-map'
};