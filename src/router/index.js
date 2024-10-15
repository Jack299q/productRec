import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import( '../views/HomePage.vue')
  },
  {
    path: '/HotPoint',
    name: 'HotPoint',
    component: () => import( '../views/HotPoint.vue')
  },
  {
    path: '/HotCategory',
    name: 'HotCategory',
    component: () => import( '../views/HotCategory.vue')
  },
  {
    path: '/GoodList',
    name: 'GoodList',
    component: () => import( '../views/GoodList.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
