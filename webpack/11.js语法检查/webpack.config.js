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
            //语法检查 规定语法风格 eslint-loader
            //只检查自己写的源代码
            //设置检查规则
            //package.json中eslintConfig设置
            //airbnb==> eslint-config-airbnb-base eslint eslint-plugin-import
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    //自动修复
                    fix: true
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    mode:'production'
}