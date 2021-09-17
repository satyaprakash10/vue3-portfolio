import { createRouter, createWebHistory } from 'vue-router'

const LayoutBasic = () => import('@/scripts/layouts/LayoutBasic.vue')


const routes = [
   
  
  {
    path: '/admin',
    component: LayoutBasic,
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: Dashboard,
      },


          }
]

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active',
  routes,
})

export default router
