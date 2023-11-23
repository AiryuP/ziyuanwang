<template>
    <div class="revealBox">
        <div class="revealImg" @mouseenter.capture="showIcon" @mouseout.capture="noShowIcon" >
            <img src="" class="lazyImg" :data-src="reveal.imgUrl" :datasrc="reveal.imgUrl" alt="">
            <!-- v-show="isShowIcon" -->
            <div class="img_icon"  ref="img_icon" >
                <el-icon>
                   <Mouse />
                </el-icon>
            </div>
        </div>
        <div class="revealTitle">
            {{ reveal.title }}
        </div>
        <div class="revealSubText">{{ reveal.detailed }}</div>
        <div class="revealFooter">
            <div class="see">
                <el-icon>
                    <View />
                </el-icon>
                <span style="display: inline-block;margin-left: 4px;">{{ reveal.seeNum }}</span>
            </div>
            <div class="creatTime">{{ reveal.createTime }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue"
const html = document.documentElement;
const props = defineProps({
    reveal: {
      type: Object,
      required: true
    }
})

const isShowIcon = ref(false)
const img_icon = ref(null)

const showIcon = ()=>{
    if(img_icon.value){
        // img_icon.value.style.opacity = 1;
    }
}
const noShowIcon = ()=>{
    if(img_icon.value){
        // img_icon.value.style.opacity = 0;
    }
}
const lazyload = () => {
    // 获取所有的图片
    // let imgs = document.querySelectorAll("img");
    // let imgs = document.getElementsByClassName('lazy')
    // let imgs = document.querySelectorAll("img[class=lazyImg]")
    let imgs = document.querySelectorAll('img');
    for (let i = 0; i < imgs.length; i++) {
        //当前图片距离顶部高度 <= 当前视图 进行src替换
        // console.log(imgs[i].getAttribute("datasrc"))
        if( imgs[i].getAttribute("datasrc") == "null" ){

        }else{
            if (imgs[i].offsetTop <= html.clientHeight + html.scrollTop) {
                setTimeout(() => {
                    imgs[i].src = imgs[i].getAttribute("datasrc") || imgs[i].src;
                }, 300);
            }
        }
    }
}

onMounted(()=>{
    lazyload();
})


</script>

<style lang="scss" scoped>
    .revealBox {
        background-color: #fff;
        padding: 10px;
        margin-bottom: 6px;
        
        .revealImg{
            width: 270px;
            height: 200px;
            margin-bottom: 4px;
            position: relative;
            img{
                width: 100%;
                height: 100%;
            }
            &:hover{
                cursor: pointer;
            }
            .img_icon{
                position: absolute;
                width: 100px;
                height: 100px;
                top: 40px;
                left: 50%;
                margin-left: -50px;
                border-radius: 0%;
                color: #ffff;
                line-height: 100px;
                text-align: center;
                font-size: 30px;
                opacity: 0;
                pointer-events: none;
                // display: none;
                transition: all 0.4s;
            }
            &:hover .img_icon {
                // width: 50px;
                // height: 50px;
                background-color: #00000050;
                opacity: 1;
                border-radius: 50%;
            }
        }
        .revealTitle{
            height: 40px;
            line-height: 40px;
            font-size: 18px;
            width: 268px;
            overflow:hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            -o-text-overflow:ellipsis;
            &:hover{
                cursor: pointer;
            }
        }
        .revealSubText{
            height: 40px;
            line-height: 20px;
            font-size: 12px;
            width: 268px;
            word-break: break-all;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2; /* 这里是超出几行省略 */
            overflow: hidden;
            color: #666;
        }
        .revealFooter{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 10px 0 0;
            padding-top: 10px;
            border-top: 1px dotted #eee;
            .see{
                display: flex;
                align-items: center; 
            }
        }
    }
</style>
  