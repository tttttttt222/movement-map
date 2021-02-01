import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index'
import User from './views/user'

Vue.use(Router)

const router = new Router({
  routes: [
    {path: '/', redirect: '/index'},
    {
      path: '/index', name: 'Index', component: Index,
      children: [
        {path: '/user', name: 'User', component: User}
      ]
    },
  ],
  mode: "history"
})


export default router
