import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/header/Hello'
import Header from '@/components/header/Header'
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',    //   name: 'Hello',
    //   component: Hello
    // }
    {
      path: '/',
      name: 'Header',
      component: Header
    }
  ]
})

