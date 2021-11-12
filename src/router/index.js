import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/info-overview',
    component: () => import(/* webpackChunkName: "group-foo" */ '../views/info-overview/index'),
    children: [
      {
        path: '/info-overview',
        name: 'info-overview',
        component: () => import(/* webpackChunkName: "group-foo" */ '../views/info-overview/index')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
