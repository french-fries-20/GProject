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
        component: () => import('@/views/home.vue'),
        meta: { title: '个人中心' }
      },
      {
        path: '/userManage',
        name: 'userManage',
        component: () => import('@/views/userManage.vue'),
        meta: { title: '用户管理' }
      },
      {
        path: '/attraction',
        name: 'attraction',
        component: () => import('@/views/attraction.vue'),
        meta: { title: '景点管理' }
      },
      {
        path: '/postManage',
        name: 'postManage',
        component: () => import('@/views/postManage.vue'),
        meta: { title: '帖子管理' }
      },
      {
        path: '/order',
        name: '订单管理',
        component: routerView,
        meta: { title: '页面' },
        children: [
          {
            path: '/order/pending',
            name: '未完成订单',
            component: () => import('@/views/order/pending.vue'),
            meta: { title: '页面1' }
          },
          {
            path: '/order/completed',
            name: '已完成订单',
            component: () => import('@/views/order/completed.vue'),
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