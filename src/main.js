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
axios.defaults.baseURL = 'http://127.0.0.1:8788/movement/front/';
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
