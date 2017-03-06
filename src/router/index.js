import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },{
      path: '/demo',
      name: 'Hello',
      component: Hello
    }
  ]
})
