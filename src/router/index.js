import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/premierLeague',
    name: 'PremierLeague',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "PremierLeague" */ '../views/PremierLeague.vue')
  },
  {
    path: '/teamPL/:id',
    name: 'TeamPL',
    props: true,
    component: () => import(/* webpackChunkName: "TeamPL" */ '../views/TeamPL.vue')
  },
  {
    path: '/team/:id',
    name: 'Team',
    props: true,
    component: () => import(/* webpackChunkName: "Teams" */ '../views/Team.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
