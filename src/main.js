// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';
import "./plugin/aMap";
import "./styles/main.scss";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './plugin/vuexConfig'

Vue.use(ElementUI);
// axios.defaults.baseURL = 'http://127.0.0.1:8788/movement/front/';
// axios.defaults.baseURL = 'http://118.24.103.34:8788/movement/front/';
// let protocol = window.location.protocol; //协议
let host = window.location.host; //主机
let reg = /^localhost+/;
if(reg.test(host)) {
  //动态请求地址             协议               主机
  axios.defaults.baseURL = "http://127.0.0.1:8788/movement/front/";
  // axios.defaults.baseURL = protocol + "//" + host  +":5000";
  //若本地项目调试使用
} else {
  axios.defaults.baseURL = 'http://118.24.103.34:8788/movement/front/';
}



// axios.interceptors.request.use((config)=>{
//   console.log(config);
//   config.headers.Authorization = window.sessionStorage.getItem('token');
//   return config;
// })
Vue.prototype.$http = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
