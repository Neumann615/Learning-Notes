const {resolve} = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
//提取css成单独文件
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
//设置node环境变量
//process.env.NODE_ENV = "development"

module.exports = {
    entry: "./src/js/index.js",
    output: {
        filename: "js/build.js",
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    //css兼容性处理:postcss ==> postcss-loader postcss-preset-env
                    //帮助postcss找到package.json中的
                    // "browserslist": {
                    //      默认是生产环境
                    //      修改开发环境 ==> 设置node环境变量：process.env.NODE_ENV = development
                    //     "development": [
                    //       "last 1 chrome version",
                    //       "last 1 firefox version",
                    //       "last 1 safari version"
                    //     ],
                    //     "production": [
                    //       ">0.2%",
                    //       "not dead",
                    //       "not op_mini all"
                    //     ]
                    //   }
                    //默认配置
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    "postcss-preset-env"
                                ]
                            }
                        }
                    }
                    //修改配置
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new MiniCssExtractPlugin({
            //修改输出文件名
            filename: "css/index.css",
        }),
    ],
    mode: 'production'
}