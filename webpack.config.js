const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.js'],
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                inject: true,
                template: './public/index.html',
                filename: './index.html',
            }
        ),
        new CopyWebpackPlugin({
            patterns: [{
                from: './src/styles/styles.css',
                to: ''
            },
            {
                from: './node_modules/croppie/croppie.js',
                to: ''
            },
            {
                from: './node_modules/croppie/croppie.css',
                to: ''
            },
            {
                from: './src/model/model.json',
                to: ''
            },
            {
                from: './src/model/group1-shard1of1.bin',
                to: ''
            }
            ]
        }),
    ]
}