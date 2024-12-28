<template>
  <div class="layout">
    <el-container>
      <el-header class="header">
        <div class="logo">畅游无忧旅游服务后台管理系统</div>
        <div class="drop">
          <el-dropdown>
            <el-button type="primary">
              Dropdown List<el-icon class="el-icon--right"><arrow-down /></el-icon>
            </el-button>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>Action 1</el-dropdown-item>
                <el-dropdown-item>Action 2</el-dropdown-item>
                <el-dropdown-item>退出</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu router>
            <el-menu-item index="/home">
              <el-icon><icon-menu /></el-icon>
              <span>个人中心</span>
            </el-menu-item>
            <el-sub-menu index="/userManage">
              <template #title> 用户管理</template>
              <el-menu-item index="/userManagement/userManage">用户管理</el-menu-item>
              <el-menu-item index="/userManagement/roleManage">角色管理</el-menu-item>
            </el-sub-menu>
            <el-menu-item index="/attraction">
              <el-icon><icon-menu /></el-icon>
              <span>景点管理</span>
            </el-menu-item>
            <el-menu-item index="/postManage">
              <el-icon><icon-menu /></el-icon>
              <span>帖子管理</span>
            </el-menu-item>
            <el-sub-menu index="/order">
              <template #title> 订单管理</template>
              <el-menu-item index="/order/pending">未完成订单</el-menu-item>
              <el-menu-item index="/order/completed">已完成订单</el-menu-item>
            </el-sub-menu>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
          页面内容
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts" setup></script>
<style scoped>
.layout {
  width: 100%;
  height: 100%;
}
.header {
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center; /* 确保子元素垂直居中 */;

  .drop {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  img {
    height: 40px;
    width: 40px;
  }
}

.sideBar {
  width: auto !important;
  height: 88vh !important;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  /* width: 200px; */
  min-height: 100%;
}
</style>
