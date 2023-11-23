<template>
    <div class="izy">
        <div class="header" v-show="isHome" >
            <Header></Header>
        </div>
        <div class="bodyer " ref="scrollContainers">
            <div >
                <!-- <slot /> -->
                <NuxtPage></NuxtPage>
            </div>
            <div>
                <Footer></Footer>
            </div>  
        </div>



        
        <div class="rivet">
            <div class="rivetDom notice" v-show="false">
                <i class="iconfont icon-gonggao1"></i>
            </div>
            <div class="rivetDom upto" v-show="showToup" @click="goTop">
                <i class="iconfont icon-upto"></i>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watchEffect, watch } from 'vue'
import { RouterView,useRoute } from 'vue-router'

const scrollContainers:any = ref(null)
let showToup = ref(false)
const isHome = ref(false)
const handleScroll = () => {
    //  判断是不是首页路由
    const pathName = window.location.pathname
    if( pathName == '/index' || pathName == '/' ){
        console.log(scrollContainers.value)
        if( scrollContainers.value.scrollTop >= 140 ){
            
            isHome.value = true
            showToup.value=true
        }else{
            showToup.value=false
            isHome.value = false
        }
    }else{ 

        if( scrollContainers.value.scrollTop >= 200 ){
            isHome.value = true
            showToup.value=true
        }else{ 
            isHome.value = true
            showToup.value=false
        }
    }
    
}

const goTop = () =>{
    let step = scrollContainers.value.scrollTop / 100;
    let backTopInterval = setInterval(function() {
        if (scrollContainers.value.scrollTop > 0) {
            scrollContainers.value.scrollTop -= step;
        } else {
            clearInterval(backTopInterval);
        }
    }, 1);
}

onMounted(() => {
    
    const pathName = window.location.pathname
    if( pathName == '/index' || pathName == '/' ){
        
        isHome.value = false
    }else{
        isHome.value = true
    }
    
    if (scrollContainers.value) { 
        scrollContainers.value.addEventListener("scroll", handleScroll);
    }
})

onUnmounted(() => {
    if (scrollContainers.value) {
        scrollContainers.value.removeEventListener("scroll", handleScroll);
    }
})


</script>

<style lang="scss" scoped >
.izy{
    width: 100vw;
    height: 100vh; 
    background-color: #f0f8ff;
    position: relative;
    box-sizing: border-box;
    overflow: auto;
    
    &::-webkit-scrollbar { width: 0 !important }
    &::-webkit-scrollbar-thumb {
    background-color: orange;
    }
    &{ -ms-overflow-style: none; }
    &{ overflow: -moz-scrollbars-none; }
    .banner{
        height: 140px;
        width: 100%;
    }
    .header{
        height: 70px;
        width: 100%;
        position: absolute;
        background-color: #1268b9;
        z-index: 60;
        top: 0px;
        left: 0px;
    }
    .bodyer{
        width: 100%;
        // height: calc(100vh - 70px);
        height: 100vh;
        overflow: auto;



        &::-webkit-scrollbar { width: 0 !important }
        &::-webkit-scrollbar-thumb {
        background-color: orange;
        }
        &{ -ms-overflow-style: none; }
        &{ overflow: -moz-scrollbars-none; }
    }
    
    .rivet{
        position: fixed;
        bottom: 150px;
        right: 10px;
        color: #fff;
        .rivetDom{
            width: 50px;
            height: 50px;
            margin-top: 6px;
            text-align: center;
            line-height: 50px;
            border-radius: 4px;
            i{
                
            font-size: 44px !important;
            }
            &:hover{
                cursor: pointer;
            }

        }
        .notice{
            background-color: #1268b9;
        }
        .upto{
            background-color: #07837d;
        }
    }
}
</style>
