import axios from 'axios'
import { Loading, Message } from 'element-ui'
/* 请求封装 */
var request = axios.create({
    timeout: 30000//超时时间 单位（毫秒）
})



/* 
* 请求拦截
*/

let loading;

request.interceptors.request.use(
    config => {
        // loading效果
        loading = Loading.service({
            fullscreen: true,
            lock: true,
            text: "正在加载，请稍等……",
        })
        return config
    },
    error => {
        loading.close();
        // 对错误请求的处理
        // 弹出错误请求消息
        Message({
            showClose: true,
            message: error.message,
            type: "error"
        })
        return Promise.reject(error)
    }
)

/* 
* response拦截器 请求之后的操作
*/
request.interceptors.response.use(
    config => {
        loading.close();
        return config
    },
    error => {
        return Promise.reject(error)
    }
)
export default request