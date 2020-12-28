import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      app_router: Home
      /* components 接收具名(有name值的)路由页面
        app_router是最大的路由视图 在App.vue文件中，
        其次是home_router在Home.vue文件中,可以用来做局部视图页面的跳转 
      */
    }
  },
]

const router = new VueRouter({
  mode: 'hash',//hash的兼容性要好与history
  base: process.env.BASE_URL,
  routes
})

export default router
