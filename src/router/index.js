import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */'../views/Login/Index.vue')
  }
]
export default createRouter({
  history: createWebHashHistory(),
  routes
})
