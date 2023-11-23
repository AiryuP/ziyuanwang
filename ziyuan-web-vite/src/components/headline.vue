<template>
  <div class="headline">
    <div class="lineLeft">
      <div class="leftIcon" >
          <div class="vdobox">
            <!-- <video src="../assets/video/carLoad.mp4" class="bjimg" autoplay loop muted></video> -->
            <img class="bjimg" :src="'/src/assets/images/'+ iconName +'.png'" alt="">
          </div>
      </div>
      <div class="leftTitle">
        {{ leftTitle }}
      </div>
    </div>
    <div class="lineRight">
        <slot name="someTit"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue"

const props = defineProps ({
  iconName: String,
  leftTitle: String
})


</script>

<style lang="scss" scoped>
  .headline {
      display: flex;
      margin: 6px 0;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #c3c3c3;
      // background-color: #0da19a46;
    .lineLeft{
        display: flex;
        align-items: center;
      .leftIcon{
        display: flex;
        .vdobox{
          width: 40px;
          height: 40px;
          .bjimg{
            width: 100%;
            height: 100%;
          }
        }
      }
      .leftTitle{
        margin-left: 10px;
        font-size: 20px;
        font-weight: 600;
        font-family: 'Courier New', Courier, monospace;
      }
    }
    .lineRight{

    }
  }
</style>
