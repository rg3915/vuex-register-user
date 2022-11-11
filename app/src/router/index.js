import { createRouter, createWebHistory } from 'vue-router'
import RegisterView from '../views/RegisterView.vue'

const routes = [
  {
    path: '/',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/email',
    name: 'email',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "email" */ '../views/EmailView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
