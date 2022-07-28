const {resolve} = require('path')
let webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    target: 'web',
    entry: "./src/index.js",
    output: {
        filename: 'build.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            //打包其他资源
            {
                exclude: /\.(css|js|html)$/,
                type: "asset/resource",
                //指定目录 输出文件名
                generator: {
                    filename: 'static/[hash:10][ext][query]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    mode: "development",


    //开发服务器 devServer:自动化(代码编译，浏览器刷新)
    //特点：只会在内存中编译打包
    devServer: {
        //启动gzip压缩
        compress: true,
        port: 3000,
        open: true,
        watchFiles: ['src/index.html'],
    }
}