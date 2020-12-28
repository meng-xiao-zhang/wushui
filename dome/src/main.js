import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  setStorage,
  getStorage,
  removeStorage,
  clearStorage
} from './storage/localStorage'
/* localStorage 封装 */
Vue.prototype.$setstorage = setStorage
Vue.prototype.$getstorage = getStorage
Vue.prototype.$removestorage = removeStorage
Vue.prototype.$clearstorage = clearStorage
/* localStorage 封装 */
Vue.config.productionTip = false
/*引入ant-design组件*/
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.config.productionTip = false;
Vue.use(Antd);
/*axios*/
import axios from 'axios'
Vue.prototype.$axios = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
