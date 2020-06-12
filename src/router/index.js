import Vue from 'vue'
import Router from 'vue-router'
import Principal from '@/components/Principal'
import Login from '@/components/Login'
import Admin from '@/components/Admin'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { // Aqui va a ir la pagina principal de bianca
      path: '/',
      name: 'index',
      component: Principal
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    }
  ]
})
