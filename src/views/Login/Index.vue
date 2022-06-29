<template>
  <div class="login-container">
    <div class="wapper">
      <h1 class="login-title">用户登录</h1>
      <el-form
        ref="loginformRef"
        :model="loginform"
        class="demo-loginform"
        status-icon
      >
      <el-form-item>
        <el-input v-model="loginform.name" placeholder="请输入账号">
          <template #prefix>
            <el-icon class="el-input__icon" :size="20"><User /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="loginform.pwd" type="password" placeholder="请输入密码">
          <template #prefix>
            <el-icon class="el-input__icon"><Lock /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm()">登录</el-button>
      </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const loginform = ref({ name: null, pwd: null })
</script>

<style lang="scss" scoped>
.login-container{
  height: 100vh;
  background-color: $menuBg;
  position: relative;
  .wapper{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  .login-title{
    color: #fff;
    text-align: center;
    margin: 20px 0;
  }
  .demo-loginform{
    width: 500px;
    margin: auto;
  }
  .el-button {
    width: 100%;
  }
}
</style>
