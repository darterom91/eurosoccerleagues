import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/ligue1',
    name: 'Ligue1',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "ligue1" */ '../views/Ligue1.vue'),
  },
  {
    path: '/team/:id',
    name: 'Team',
    props: true,
    component: () =>
      import(/* webpackChunkName: "Teams" */ '../views/Team.vue'),
  },
];

const router = new VueRouter({
  routes
})

export default router
