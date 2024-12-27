import { createRouter, createWebHistory, Router, RouteRecordRaw } from "vue-router";

import Layout from '@/layout/index.vue'
import routerView from '@/components/routerView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: '/',
    redirect: '/home', // 重定向
    component: Layout,
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/Home.vue'),
        meta: { title: '首页' }
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('@/views/About.vue'),
        meta: { title: '关于' }
      },
      {
        path: '/test',
        name: 'test',
        component: () => import('@/views/Test.vue'),
        meta: { title: '测试' }
      },
      {
        path: '/pages',
        name: 'pages',
        component: routerView,
        meta: { title: '页面' },
        children: [
          {
            path: '/pages/page1',
            name: 'page1',
            component: () => import('@/views/pages/Page1.vue'),
            meta: { title: '页面1' }
          },
          {
            path: '/pages/page2',
            name: 'page2',
            component: () => import('@/views/pages/Page2.vue'),
            meta: { title: '页面2' }
          }
        ]
      }
    ]
  }
]

const router: Router = createRouter({
  history: createWebHistory(), // createMemoryHistory
  routes
})

export default router