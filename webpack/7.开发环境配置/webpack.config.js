const {resolve} = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "index.js",
        path: resolve(__dirname, "build")
    },
    module: {
        rules: [
            //处理less
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            //处理css
            {
                test: /\.css$/,
                use: ['style-loader', "css-loader"]
            },
            //处理图片
            {
                test: /\.(jpg|png|gif)$/,
                type: "asset/resource",
                generator: {
                    filename: 'static/img/[hash][ext][query]'
                }
            },
            //处理html中包含的资源
            {
                test: /\.html$/,
                loader: "html-loader"
            },
            //处理其他资源
            {
                exclude: /\.(css|js|html|less|jpg|png|gif)$/,
                type: "asset/resource",
                //指定目录 输出文件名
                generator: {
                    filename: 'static/other/[hash:10][ext][query]'
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
        watchFiles: ['./src/index.html'],
    }
}