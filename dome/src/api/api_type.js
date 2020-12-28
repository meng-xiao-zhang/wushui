/* 引入封装的request文件 */
import request from './request'
/* 用到的接口请求方式 */
const POST = "post",GET="get";
/* 某某页面请求某某接口 */
var BASE_API = process.env.VUE_APP_DEV_SERVER_API/* 跨域请求 vue.config中封装 */
export const getJSON = function (params) {
    return request({
        method:GET,//请求类型
        url: BASE_API + "/list.json",//请求地址
        params
    })
}