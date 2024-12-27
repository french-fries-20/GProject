<template>
  <div class="layout">
    <el-container>
      <el-header class="header">
        <div class="logo">logo</div>
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
              <span>首页</span>
            </el-menu-item>
            <el-menu-item index="/about">
              <el-icon><icon-menu /></el-icon>
              <span>关于</span>
            </el-menu-item>
            <el-menu-item index="/test">
              <el-icon><icon-menu /></el-icon>
              <span>测试</span>
            </el-menu-item>
            <el-sub-menu index="/pages">
              <template #title> 页面 </template>
              <el-menu-item index="/pages/page1">页面1</el-menu-item>
              <el-menu-item index="/pages/page2">页面2</el-menu-item>
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

  .drop {
    display: flex;
    align-content: center;
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
