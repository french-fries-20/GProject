import { createRouter, createWebHistory, Router, RouteRecordRaw } from "vue-router";
import Layout from '@/layout/index.vue';
import routerView from '@/components/routerView.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'root',
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
        path: '/userManagement',
        name: 'userManagement',
        component: routerView,
        meta: { title: '用户管理' },
        children: [
          {
            path: 'userManage',
            name: 'userManage',
            component: () => import('@/views/userManagement/userManage.vue'),
            meta: { title: '用户管理' }
          },
          {
            path: 'roleManage',
            name: 'roleManage',
            component: () => import('@/views/userManagement/roleManage.vue'),
            meta: { title: '角色管理' }
          }
        ]
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
        name: 'orderManagement',
        component: routerView,
        meta: { title: '订单管理' },
        children: [
          {
            path: 'pending',
            name: 'pendingOrders',
            component: () => import('@/views/order/pending.vue'),
            meta: { title: '未完成订单' }
          },
          {
            path: 'completed',
            name: 'completedOrders',
            component: () => import('@/views/order/completed.vue'),
            meta: { title: '已完成订单' }
          }
        ]
      }
    ]
  }
];

const router: Router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;