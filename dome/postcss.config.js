/*
 * @Author: your name
 * @Date: 2020-12-26 21:06:49
 * @LastEditTime: 2020-12-26 21:07:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dome - 带自适应布局\postcss.config.js
 */
module.exports = {
    plugins: {
        '@moohng/postcss-px2vw': {
            // rootValue: 100,  // 可不填写 默认先转为vm 浏览器不支持的话才会为rem (此处为参考html字号)
            viewportWidth: 1536,//填入开发机浏览器屏幕可是宽度就行;
        }
    }
}