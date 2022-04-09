import Vue from 'vue'
import VueRouter from 'vue-router'
import ListLi from '../components/ListLi.vue'
import BeerView from '../components/BeerView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ListLi',
    component: ListLi
  },
  {
    path: '/random',
    name: 'random',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/RandomView.vue')
  },
  {
    path: '/beer/:id',
    name: 'BeerView',
    component: BeerView,

  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/chama_test/',
  routes
})

export default router
