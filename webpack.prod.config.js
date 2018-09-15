const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'), //入口文件
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js' //输出文件名
    },
    devtool: false,
    module: {
        rules: [{
            test: /(\.js|\.jsx)$/,
            use: {
                loader: "babel-loader"
            },
            exclude: /node_modules/
        },
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
            })
        },
        {
            test: /.(jpg|png|gif|svg)$/,
            use: ['url-loader?limit=8192&name=./[name].[ext]&outputPath=img/']
        }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '网易云音乐 for React',
            inject: 'body',
            filename: './index.html',
            template: './index.html',
            favicon: './src/favicon.ico'
        }),
        new ExtractTextPlugin('css/style.css'),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.png', '.svg']
    }
    
}