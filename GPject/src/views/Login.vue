<template>
  <div class="login">
    <div class="login-box"> <!-- 登录盒子 -->
      <div class="head"> <!-- 头部 -->
        <img src="@/assets/login-header.png" alt="" />
      </div>
      <div class="form"> <!-- 表单 -->
        <img class="profile-avatar" src="@/static/image/avatar.png" alt="" /> <!-- 头像 -->
        <div class="content"> <!-- 内容 -->
          <el-form ref="formRef" size="large" :rules="rules" :model="form">
            <el-form-item prop="username"> <!-- 用户名 -->
              <el-input
                v-model="form.username"
                type="text"
                placeholder="请输入账号"
                clearable
              >
                <template #prefix>
                  <el-icon><Avatar /></el-icon>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item prop="password"> <!-- 密码 -->
              <el-input
                v-model="form.password"
                type="password"
                placeholder="请输入密码"
                show-password
              >
                <template #prefix>
                  <el-icon><Unlock /></el-icon>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button
                class="submit-button"
                round
                type="primary"
                size="large"
                @click="onLogin"
              >
                登录
              </el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import router from "@/router";
import type { FormInstance, FormRules } from "element-plus"; 
import { UserStore } from "@/store/user.ts";
interface RuleForm {
  username: string;
  password: string;
}
// 表单验证规则,初始化数据,form：使用 reactive 创建一个响应式的表单对象，默认值为空字符串。
const form = reactive<RuleForm>({
  username: "",
  password: "",
});
const userStore = UserStore(); // 获取用户模块实例
const rules = reactive<FormRules<RuleForm>>({ // 定义表单验证规则，确保为必填项
  username: [{ required: true, message: "请输入账号", trigger: "blur" }],
  password: [
    {
      required: true,
      message: "请输入密码",
      trigger: "change",
    },
  ],
});
// 登录
const formRef = ref<FormInstance>();
const onLogin = async () => { // onLogin：异步函数，处理登录逻辑。首先检查表单是否有效，如果有效则调用userStore.userLogin 进行登录，并跳转到 /home 页面；否则输出错误信息。
  if (!formRef.value) return;
  await formRef.value.validate((valid, fields) => {
    if (valid) {
      console.log("submit!");
      userStore.userLogin(form);
      //登录成功，跳转路由
      router.replace({ path: "/home" });
    } else {
      console.log("error submit!", fields);
    }
  });
};
</script>

<style scoped lang="scss">
.login { /* 设置为绝对定位，占满整个视口，居中对齐，背景图重复铺满 */
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: url(@/assets/bg.jpg) center;

  .login-box { /* 登录盒子设置固定宽度和高度，白色背景，底部留出一定间距 */
    overflow: hidden;
    width: 430px;
    padding: 0;
    background: #ffffff;
    margin-bottom: 80px;
    background-color: white;
  }
  .head { /* 头部设置背景色，头部区域背景色为浅紫色，包含一个居中的图片 */
    background: #ccccff;
    img {
      display: block;
      width: 430px;
      margin: 0 auto;
      user-select: none;
    }
  }
  .form { /* 表单区域，包含一个绝对定位的圆形头像和表单内容 */
    position: relative;
    .profile-avatar { /* 圆形头像设置绝对定位，大小为100px，边框和背景色，位于表单上方中央，带白色边框 */
      display: block;
      position: absolute;
      height: 100px;
      width: 100px;
      border-radius: 50%;
      border: 4px solid #ffffff;
      top: -50px;
      right: calc(50% - 50px);
      z-index: 2;
      user-select: none;
    }
    .content { /* 表单内容区域，设置内边距 */
      padding: 100px 40px 40px 40px;
    }
    .submit-button { /* 登录按钮设置宽度为100%，字体大小和行高，边框圆角，背景色，字体加粗，边框和背景色 */
      width: 100%;
      letter-spacing: 2px;
      font-weight: 300;
      margin-top: 15px;
    }
  }
}
</style>
