const {resolve} = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: "./src/js/index.js",
    output: {
        filename: "js/build.js",
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            //js兼容性处理:babel-loader @babel/core @babel/preset-env
            //基本js兼容性处理 ==> @babel/preset-env  问题:只能转化基本语法，promise不能转换
            //全部js兼容性处理==>@babel/polyfill
            //问题:只用解决部分兼容性问题，但是会将所有兼容性代码引入，体积过大
            //按需加载解决兼容性问题==>core.js
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    //预设:指示babel做什么样的兼容性处理
                    presets: [["@babel/preset-env", {
                        //按需下载
                        useBuiltIns: "usage",
                        //指定core-js版本
                        corejs: {
                            version: 3
                        },
                        //指定兼容性做到哪个版本的浏览器
                        targets: {
                            chrome: '60',
                            firefox: '60',
                            ie: '9',
                            edge: '17'
                        }
                    }]]
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    mode: 'production'
}