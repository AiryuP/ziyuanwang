<template>
  <div class="login">
      <div class="loginbox">

        <div class="">

          <div class="title">Z资源管理平台</div>

        <div class="loginList">
          <div class="loginLabel"><span>用</span><span>户</span><span>名</span></div>
          <div class="loginValue">
            <el-input
              v-model="userName"
              placeholder="请输入用户名"
              :prefix-icon="Search"
            />
          </div>
        </div>
        <div class="loginList">
          <div class="loginLabel"><span>密</span><span>码</span></div>
          <div class="loginValue">
            <el-input
              v-model="userName"
              placeholder="请输入用户名"
              :prefix-icon="Search"
            />
          </div>
        </div>
        <div class="loginList">
          <div class="loginLabel"></div>
          <div class="loginValue">
            <el-button type="primary">登录</el-button>
          </div>
        </div>
        </div>

      </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue"

const userName = ref('')



</script>

<style lang="scss" scoped>
 .login {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
    background: url('../../assets/images/login/login-bg.jfif') no-repeat;
    background-size: cover;
    color: #fff;
  .loginbox{
    width: 600px;
    height: 500px;
    background-color: #00000050;
    border-radius: 6px;
    box-sizing: border-box;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    .title{
      height: 40px;
      font-size: 26px;
      font-weight: 600;
    }
    .loginList{
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      .loginLabel{
        margin-right: 10px;
        width: 80px;
        display: flex;
        justify-content: space-between;
      }
    }
  }
 }
</style>
