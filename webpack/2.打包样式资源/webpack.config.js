//所有构建工具都是基于node.js平台运行的，模块化默认使用Common.js
const {resolve} = require("path")

//配置
module.exports = {
    //入口
    entry: "./src/index.js",
    //输出
    output: {
        //输出文件名
        filename: "build.js",
        //输出路径
        path: resolve(__dirname, "build")
    },
    //loader配置
    module: {
        rules: [
            {
                //文件匹配
                test: /\.css$/,
                //使用那些loader
                use: [
                    //use中loader的执行顺序是倒叙的
                    //创建style标签，将js中的样式资源插入，添加到head中生效
                    'style-loader',
                    //将css文件变成common.js模块加载到js中，内容是样式字符串
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    //将less文件编译成css文件
                    'less-loader'
                ]
            }
        ]
    },
    //plugins配置
    plugins: [],
    mode: "development"
}