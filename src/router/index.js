import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import border from '@/pages/css/css-border'
import background from '@/pages/css/css-background'
import stripes from '@/pages/css/css-stripes'
import shape from '@/pages/css/css-shape'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '*', redirect: '/' },
    { path: '/', name: 'home', component: home },
    { path: '/css/border', component: border },
    { path: '/css/background', component: background },
    { path: '/css/stripes', component: stripes },
    { path: '/css/shape', component: shape },
  ]
})
