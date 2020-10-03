import Vue from 'vue'
import Router from 'vue-router'
import Principal from '@/components/Principal'
import Login from '@/components/Login'
import Admin from '@/components/Admin'
import Articulo from '@/components/Articulo'
import NotFound from '@/components/NotFound'

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
    },
    {
      path: '/articulo/:articuloId',
      name: 'articulo',
      component: Articulo
    },
    {
      path: '*',
      name: 'Not Found',
      component: NotFound
    }
  ]
})
