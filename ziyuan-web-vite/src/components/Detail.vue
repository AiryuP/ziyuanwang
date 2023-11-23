<template>
    <div class="detailBox">
        <slot></slot>
    </div>
  </template>
  
  <script setup lang="ts">
  import {ref} from "vue"
  const a = ref(0)
  </script>
  
  <style lang="scss" scoped>
   .detailBox {
    

   }
  </style>
  