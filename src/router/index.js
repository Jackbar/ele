import Vue from 'vue'
import Router from 'vue-router'
// import index from '@/pages/index'
// import shop from '@/pages/shop'
import app from '@/App'
// const app = r => require.ensure([], () => r(require('@/App')), 'app')
const msite = r => require.ensure([], () => r(require('@/pages/msite/msite')), 'msite')
const shop = r => require.ensure([], () => r(require('@/pages/shop/shop')), 'shop')


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: app,
      children: [{
        path:'/msite',
        component: msite,
      },{
        path:'/shop',
        component: shop,
      }]
    }
  ]
})
