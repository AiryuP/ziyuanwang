<template>
  <div class="container">
    <!-- <transition name="fade"> -->
    <div class="header" v-show="menuStore.headShow">
        <Head ></Head>
    </div>
    <!-- </transition> -->
    <div class="bodyer " :class="ishome ? 'isHome': ''" ref="scrollContainers">

        <div class="body_content"  >
            <RouterView ref="scrollContainer"></RouterView>
        </div>


        <div class="footer">
            <div class="main foterBox">
                <div class="copyright">
                    <div class="otherMenu">
                        <div class="site">xxxx网</div>
                        <div>|</div>
                        <div class="site">友链申请</div>
                        <div>|</div>
                        <div class="site">广告合作</div>
                        <div>|</div>
                        <div class="site">免责声明</div>
                        <div>|</div>
                        <div class="site">联系我们</div>
                    </div>
                    <div class="">Copyright © 2018-2023 xxxx网 版权所有 <a >京ICP备xxxxxxxxxxx号-1</a></div>
                    <div>本站资源仅供研究学习请勿商用以及产生法律纠纷本站概不负责！如果侵犯了您的权益请与我们联系!</div>
                </div>
                <div class="otherImg">
                    <div class="othimg">
                        <img src="" alt="">
                    </div>
                    <div class="othimg">
                        <img src="" alt="">
                    </div>
                    <div class="othimg">
                        <img src="" alt="">
                    </div>
                </div>
            </div>
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
import {useMenuStore} from "../../stores/menu"

import Head from '../../components/Header.vue'


let menuStore = useMenuStore()
const router = useRoute()

const showHead = ref(false)
const scrollContainer = ref(null);
const scrollContainers:any = ref(null)
let showToup = ref(false)
let ishome = ref(true)
let screenWidth = ref(document.body.clientWidth)
const handleClick = () => {
    
}
const handleScroll = () => {
    //  判断是不是首页路由
    const pathName = window.location.pathname
    if( pathName == '/index'){
        ishome.value = false
        if( scrollContainers.value.scrollTop >= 140 ){
            // showHead.value = true
            menuStore.headShow = true
            showToup.value=true
        }else{
            // showHead.value = false
            menuStore.headShow = false
            showToup.value=false
        }
    }else{
        if( scrollContainers.value.scrollTop >= 200 ){
            showToup.value=true
        }else{
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

watchEffect(()=>{
    if( router.path == '/index' ){
        ishome.value = false
        menuStore.headShow = false
    }else{
        ishome.value = true
        menuStore.headShow = true
        if (scrollContainers.value) {
            scrollContainers.value.scrollTop = 0;
        }
    }
    
})

watch(screenWidth,(screenWidth, prevCount)=>{
    
})


onMounted(() => {
    
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

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
 .container {
    width: 100vw;
    height: 100vh;
    min-width: 1200px;
    // overflow: auto;
    background-color: #f0f8ff;
    position: relative;
    
    

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
        overflow-y: scroll;
        

        &::-webkit-scrollbar { width: 0 !important }
        &::-webkit-scrollbar-thumb {
        background-color: orange;
        }
        &{ -ms-overflow-style: none; }
        &{ overflow: -moz-scrollbars-none; }
        
        .body_content{
            
            // width: 1200px;
            // margin: 0 auto;
            // overflow: hidden;
        }

        .footer{
            width: 100%;
            height: 90px;
            background-color: #393D49;
            .foterBox{
                height: 100%;
                display: flex;
                align-items: center;
                .copyright{
                    color: #ffffffb3;
                    padding: 10px 10px;
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;
                    height: 100%;
                    width: 60%;
                    .otherMenu{
                        display: flex;
                        font-size: 13px;
                        div{
                            padding: 0 6px;
                        }
                        .site{
                            &:hover{
                                cursor: pointer;
                                color: #ffffff;
                            }
                        }
                    }
                }
                .otherImg{
                    width: 40%;
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    .othimg{
                        width: 121px;
                        height: 72px;
                        overflow: hidden;
                        border-radius: 3px;
                        background-color: #12b98fad;
                        &:hover{
                            cursor: pointer;
                        }
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                }

            }
        }
    }
    .isHome{
        padding-top: 70PX;
    }
    .highH{
        height: calc(100vh - 70px);
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
