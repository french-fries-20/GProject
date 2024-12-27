<template>
  <div class="layout">
    <el-container>
      <el-header class="header">
        <div class="logo">
        logo
        </div>
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
          <el-menu>
            <el-sub-menu index="1">
              <template #title>
                <el-icon>
                  <location />
                </el-icon>
                <span>Navigator One</span>
              </template>
              <el-menu-item-group title="Group One">
                <el-menu-item index="1-1">item one</el-menu-item>
                <el-menu-item index="1-2">item two</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group Two">
                <el-menu-item index="1-3">item three</el-menu-item>
              </el-menu-item-group>
              <el-sub-menu index="1-4">
                <template #title>item four</template>
                <el-menu-item index="1-4-1">item one</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="2">
              <el-icon><icon-menu /></el-icon>
              <span>Navigator Two</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <el-icon>
                <document />
              </el-icon>
              <span>Navigator Three</span>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon>
                <setting />
              </el-icon>
              <span>Navigator Four</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <!-- <router-view></router-view> -->
          页面内容
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
</script>
<style scoped>
.layout{
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
