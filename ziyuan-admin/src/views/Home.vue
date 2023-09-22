<template>
  <div class="homeBox">
  <!-- <router-view/> -->
    <el-container>
      <el-header class="el_header">
        <Header></Header>
      </el-header>
      <el-container>
        <el-aside class="el_aside" >
          <Menu :menu="menuarr"></Menu>
        </el-aside>
        <el-main class="el_main">
          
        </el-main>
      </el-container>
    </el-container>


    
  </div>
</template>

<script setup lang="ts">
// import {ref} from "vue"
import Header from '@/components/header/Header.vue'
import Menu from '@/components/menus/elMenu.vue'

const menuarr = [
  {
    label: '首页',
    path: '/',
    icon: 'House'
  },
  {
    label: '系统设置',
    path: '/system',
    icon: 'Setting',
    children: [
      {
        label: '人员管理',
        path: '/system/preson',
        icon: ''
      },
      {
        label: '菜单管理',
        path: '/system/menu',
        icon: ''
      }
    ]
  },
]




</script>

<style lang="scss" scoped>
.homeBox{
  width: 100vw;
  height: 100vh;
  overflow: auto;
  .el_header{
    box-sizing: border-box;
    padding: 0;
  }
  .el_aside{
    width: 200px;
    height: calc(100vh - 60px);
  }
  .el_main{
    box-sizing: border-box;
    padding: 10px;
  }

}
</style>
