const {resolve} = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "build.js",
        path: resolve(__dirname, "build")
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                //处理图片资源
                test: /\.(jpg|png|gif)$/,
                //url-loader依赖file-loader
                type: "asset/resource",
                //指定目录 输出文件名
                generator: {
                    filename: 'static/[hash][ext][query]'
                }
            },
            {
                test: /\.html$/,
                //处理html文件中直接引入的图片
                loader: "html-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    mode: "development"
}