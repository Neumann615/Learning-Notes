const {resolve} = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "build.js",
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: []
    },
    plugins: [
        //plugins配置
        //html-webpack-plugin
        new HtmlWebpackPlugin({
            //提供一个html模板,并自动引入打包输出的资源
            template: "./src/index.html"
        })
    ],
    mode: 'development'
}
