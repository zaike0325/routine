import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'layoutsIndex',
    component: () => import(/* webpackChunkName: "layouts" */ '../views/layouts/index'),
    redirect: '/info-overview',
    children: [
      {
        path: '/info-overview',
        name: 'info-overview',
        component: () => import(/* webpackChunkName: "info-overview" */ '../views/info-overview/index')
      },
      {
        path: '/hot-news',
        name: 'hot-news',
        component: () => import(/* webpackChunkName: "hot-news" */ '../views/hot-news/index')
      },
      {
        path: '/monitor-target',
        name: 'monitor-targets',
        component: () => import(/* webpackChunkName: "monitor-target" */ '../views/monitor-target/index')
      },
      {
        path: '/search-texts',
        name: 'search-texts',
        component: () => import(/* webpackChunkName: "search-texts" */ '../views/search-texts/index')
      },
      {
        path: '/user',
        name: 'user',
        component: () => import(/* webpackChunkName: "info-overview" */ '../views/user/index'),
        children: [
          {
            path: '/detail:id',
            name: 'detail',
            component: () => import(/* webpackChunkName: "info-overview" */ '../views/user/components/detail')
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
