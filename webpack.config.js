const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'), //入口文件
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js' //输出文件名
    },
    devtool: "eval-source-map",
    devServer: {
        contentBase: './dist', //本地服务器所在目录
        historyApiFallback: true, //不跳转
        inline: true, //实时刷新
        port: 80

    },
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
            use: [
                {
                    loader: "style-loader"
                },
                {
                    loader: "css-loader"
                }
            ]
        },
        {
            test: /.(jpg|png|gif|svg)$/,
            use: ['url-loader?limit=8192&name=./[name].[ext]']
        },
        {
            test: /\.(woff|woff2|eot|ttf|svg)(\?[a-z0-9]+)?$/,
            use: ['url-loader?limit=1000&name=styles/fonts/[name].[hash:6].[ext]']
       
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
        new ExtractTextPlugin('css/style.css')
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.png', '.svg']
    }
}