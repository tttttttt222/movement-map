import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index'
import User from './views/user'
import Login from './views/login'
import AddInfo from './views/addInfo'
import AddPosition from './views/addposition'

Vue.use(Router)

const router = new Router({
  routes: [
    {path: '/', redirect: '/index'},
    {path: '/addInfo', name: 'AddInfo',  meta: {title: '新增地点'},component: AddInfo},
    {path: '/addposition', name: 'AddPosition',  meta: {title: '新增项目'},component: AddPosition},
    {
      path: '/index', name: 'Index', meta: {title: '首页'}, component: Index,
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
