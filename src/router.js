import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index'
import User from './views/user'
import Login from './views/login'
import AddInfo from './views/addInfo'

Vue.use(Router)

const router = new Router({
  routes: [
    {path: '/', redirect: '/index'},
    {path: '/addInfo', name: 'AddInfo', component: AddInfo},
    {
      path: '/index', name: 'Index', component: Index,
      children: [
        {path: '/user', name: 'User', component: User},
        {path: '/login', name: 'Login', component: Login},
      ]
    },

  ],
  mode: "history"
})

//挂在路由导航守卫
router.beforeEach((to, from, next) => {
  //to将要访问的路径
  //from代表从那个路径跳转而来
  //next 是放行 ,next('/login')代表转到哪个路径
  if (to.path == '/login') return next();
  if (to.path == '/index') return next();
  //获取token
  const tokenStr = window.sessionStorage.getItem('token');
  if (!tokenStr) return next('/login');
  next();
})


export default router
