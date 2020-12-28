/*
 * @Author: your name
 * @Date: 2020-12-26 20:57:39
 * @LastEditTime: 2020-12-26 21:08:03
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \dome - 带自适应布局\vue.config.js
 */
module.exports = {
    publicPath: "./",
    devServer: {
        port: 8888,//端口号
        host: "localhost",//主机名
        https: false,//是否使用https请求协议
        open: false,//启动服务自动打开浏览器
        proxy: {
            //匹配到 /dev-api 开头的请求
            [process.env.VUE_APP_DEV_SERVER_API]: {
                //代理访问到 http://localhost:8080
                target: process.env.VUE_APP_DEV_BASE_URL,//跨域目标地址
                changOrigin: true,//使用代理
                pathRewrite: {
                    ["^" + process.env.VUE_APP_DEV_SERVER_API]: ""//将/dev-api替换为空，也就是会移除/dev-api
                }
            }
        }
    },
    //配置loader
    chainWebpack: (config) => {
        config.module
            .rule('vue')
            .test(/\.vue$/)
            .use('style-vw-loader')
            .loader('style-vw-loader')
            .options({
                viewportWidth: 1536,//传参
            })
    },
    //配置loader
    lintOnSave: false,//格式检查 建议关闭
    productionSourceMap: false//打包时生成 *.map文件，加快打包速度 （false为加速状态）
}