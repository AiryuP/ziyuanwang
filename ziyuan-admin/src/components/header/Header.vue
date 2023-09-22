<template>
  <div class="headBox">
    <div class="Tit">Z-资源网</div>

    <div class="userinfo">
      <!-- <div class="welcome">欢迎您：</div> -->
      <div class="userName">admin</div>
      <div class="userScul">
        <img src="" alt="">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">


</script>

<style lang="scss" scoped>
 .headBox {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #064d69;
  .Tit{
    color: #fff;
    margin-left: 20px;
  }
  .userinfo{
    color: #fff;
    display: flex;
    padding-right: 20px;
    align-items: center;
    .userScul{
      width: 50px;
      height: 50px;
      margin: 0 6px;
      img: {
        width: 100%;
        height: 100%;
      };
    }
  }
 }
</style>
