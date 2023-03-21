import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/article',
      name: 'article',
      component: () => import('../views/Article.vue'),
      meta: {
        backgroundColor: '#f5f5f7'
      }
    },
    {
      path: '/articleDetail',
      name: 'ArticleDetail',
      component: () => import('../views/ArticleDetail.vue')
    }
  ]
})

export default router
