import { createRouter, createWebHistory } from 'vue-router';
 
// 导入组件
import HelloWorld from '../components/HelloWorld.vue';
 
// 定义路由
const routes = [
  { path: '/', component: HelloWorld },
 
];
 
// 创建路由器实例
const router = createRouter({
  history: createWebHistory(),
  routes,
});
 
// 导出路由器
export default router;