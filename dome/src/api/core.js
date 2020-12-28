//引入axios
import axios from 'axios'
//引入封装网络接口config
import {Method} from  './config'
//设置配置一个对象返回axios实例
var formData =new FormData()
const  instance  = axios.create({
    // 设置的地址  APi前半部分相同地方
    baseURL:"http://42.159.85.202:12001",
    timeout:10000,//设置的超时时间
    headers:{
        'Content-Type': 'application/x-www-form-urlencoded'
        //'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>',
    },
    data:formData
    
})
export function request(method,url,parasm){
    switch(method){
        case Method.Get:
        return Get(url,parasm)
        case Method.Post:
        return Post(url,parasm)
    }
}
function Get(url,parasm){
    return instance.get(url,parasm)
}

function Post(url,params){
    return instance.post(url,params)
}