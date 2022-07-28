const {resolve} = require("path")
const MiniCss = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
//css压缩
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
//js压缩
const TerserWebpackPlugin = require('terser-webpack-plugin')
//定义node.js环境变量，决定使用browserList中的哪个环境
//process.env.NODE_ENV = "production"

//公用loader
const commonCssLoader = [
    MiniCss.loader,
    'css-loader',
    {
        loader: "postcss-loader",
        options: {
            postcssOptions: {
                plugins: ["postcss-preset-env"]
            }
        }
    },]

module.exports = {
    entry: "./src/js/index.js",
    output: {
        filename: "js/index.js",
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
                use: [...commonCssLoader]
            },
            {
                test: /\.less$/,
                use: [
                    ...commonCssLoader,
                    'less-loader']
            },
            {
                test: /\.js$/,
                exclude: /node-modules/,
                //优先执行语法校验
                use: [
                    {
                        loader: 'eslint-loader',
                        options: {
                            fix: true
                        }
                    }
                ]
            },
            {
                //处理图片资源
                test: /\.(jpg|png|gif)$/,
                type: "asset/resource",
                //指定目录 输出文件名
                generator: {
                    filename: 'img/[hash:10][ext][query]'
                }
            },
            {
                test: /\.html$/,
                //处理html文件中直接引入的图片
                loader: "html-loader"
            },
            //打包其他资源
            {
                exclude: /\.(css|js|html|less|jpg|png|gif)$/,
                type: "asset/resource",
                //指定目录 输出文件名
                generator: {
                    filename: 'static/[hash:10][ext][query]'
                }
            }
        ]
    },
    plugins: [
        new MiniCss({
            filename: "css/index.css"
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        })
    ],
    mode: 'production'
}