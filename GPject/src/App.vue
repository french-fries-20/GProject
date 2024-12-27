<template>
  <div class="user-container">
    <el-form ref="loginForm" :model="form" :rules="rules" label-position="left" label-width="100px">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="form.password"
          type="password"
          placeholder="请输入密码"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 20, message: "长度在 6 到 20 个字符", trigger: "blur" },
          { pattern: /^[a-zA-Z0-9]+$/, message: "密码只能包含字母和数字", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    login() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          alert("提交成功！");
          // 在这里处理登录逻辑
        } else {
          console.log("验证失败");
          return false;
        }
      });
    }
  }
};
</script>

<style scoped>
html, body {
  height: 100%;
  margin: 0;
  background-image: url('@/assets/bg-dark.jpg'); /* 设置背景图片 */
  background-size: cover; /* 使背景图片覆盖整个页面 */
  background-position: center; /* 使背景图片居中 */
  background-repeat: no-repeat; /* 防止背景图片重复 */
}

.user-container {
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>