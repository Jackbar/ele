import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import shop from '@/pages/shop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },{
      path: '/shop',
      name: 'shop',
      component: shop
    }
  ]
})
