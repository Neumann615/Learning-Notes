const {resolve} = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
//提取css成单独文件
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
//css压缩
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
//js压缩
const TerserWebpackPlugin = require('terser-webpack-plugin')

module.exports = {
    entry: "./src/js/index.js",
    output: {
        filename: "js/build.js",
        path: resolve(__dirname, 'build')
    },
    optimization: {
        minimize: true,
        //如果配置该项，webpack会取消自身的默认压缩,因此需手动配置内置js压缩插件terser-webpack-plugin
        minimizer: [new CssMinimizerPlugin(), new TerserWebpackPlugin()]
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    //创建style标签,放入样式
                    //"style-loader",
                    //将css文件整合到js文件中
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    //创建style标签,放入样式
                    //"style-loader",
                    //将css文件整合到js文件中
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    "less-loader"
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new MiniCssExtractPlugin({
            //修改输出文件名
            filename: "css/index.css",
        })
    ],
    mode: 'production'
}