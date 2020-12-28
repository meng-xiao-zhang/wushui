import  {request} from './core'
import  {Method,Path} from './config'

const HRC = {
    // 首页
    
    HcrLogin(params){
      return request(Method.Post,Path.HcrLogin,String(params))
    },
  }
  
  // 抛出netClient
  export default HRC;