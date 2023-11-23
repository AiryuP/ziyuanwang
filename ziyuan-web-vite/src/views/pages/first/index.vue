<template>
   <div class="firstBox">
      <div class="banner"></div>
      <div class="head">
         <div class="main topBnn">
            <Head></Head>
         </div>
      </div>
      <div class="advert main boxCard">
         <div class="advert_list" :data-bgClolr="rgb()" v-for="(item,index) in topAdvert" @mouseenter="enterAdvert($event)" @mouseleave="leaveAdvert($event)" :key="index" >{{ item.tit }}</div>
      </div>
      <div class="main boxCard advert">
         <div class="advert_list_img"><img src="" alt=""><div class="adTip">AD</div></div>
         <div class="advert_list_img"><img src="" alt=""><div class="adTip">AD</div></div>
      </div>
      <div class="main neir">
         <headline :left-title="'最新发布'" :icon-name="'new'" >
            <template #someTit>
               <div class="smallMenu">
                  <div class="smallMenulist">网站源码</div>
                  <div class="smallMenulist">软件工具</div>
                  <div class="smallMenulist">高清壁纸</div>
                  <div class="smallMenulist">综合资源</div>
               </div>
            </template>
         </headline>
         <div class="cardBox">
            <revealBox v-for="(itemx,index) in newest" :key="index" :reveal="itemx"  @click="toDeatil(itemx)" ></revealBox>
         </div>
         
         <headline :left-title="'外链'" :icon-name="'outer'" ></headline>

      </div>
   </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue"
import { useRouter } from 'vue-router'
import revealBox from '../../../components/revealBox.vue'
import headline from '../../../components/headline.vue'


import Head from '../../../components/Header.vue'


const router=useRouter()


const a = ref(0)
const isLogin = ref(false)
const newest = ref([
   {imgUrl: 'https://down.hackzt.cn/201908/b07beef140.png',title: 'thinkphp5+layui php后台管理系统-集成第三方短信附件等应用',detailed: '云盘系统安装教程测试环境:PHP7.1 + MYSQL5.6 + Apache1. 上传源码到根目录2. 安装程序:  浏览器数据 http://localhost/CloudreveInstaller	localhost更换成你的网址3. 安装完毕 记住系统默认的账号密码温馨提示:如果默认的伪静态不行就替换一下的,没问题就不用换!伪静态配置RewriteEngine onRewriteCond ...',seeNum: '22',commentNum: '',isPraise: false,createTime: '2023-04-04'},
   {imgUrl: 'https://down.hackzt.cn/201908/9defccde29.png',title: '三方四方聚合支付PHP网站源码-对接支付宝微信接口',detailed: '云盘系统安装教程测试环境:PHP7.1 + MYSQL5.6 + Apache1. 上传源码到根目录2. 安装程序:  浏览器数据 http://localhost/CloudreveInstaller	localhost更换成你的网址3. 安装完毕 记住系统默认的账号密码温馨提示:如果默认的伪静态不行就替换一下的,没问题就不用换!伪静态配置RewriteEngine onRewriteCond ...',seeNum: '3',commentNum: '',isPraise: false,createTime: '2023-04-04'},
   {imgUrl: 'https://down.hackzt.cn/202001/79ed1a501a.png',title: 'PHP虚拟商品自动发货系统网站源码_支持商家入驻_对接支付接口',detailed: '云盘系统安装教程测试环境:PHP7.1 + MYSQL5.6 + Apache1. 上传源码到根目录2. 安装程序:  浏览器数据 http://localhost/CloudreveInstaller	localhost更换成你的网址3. 安装完毕 记住系统默认的账号密码温馨提示:如果默认的伪静态不行就替换一下的,没问题就不用换!伪静态配置RewriteEngine onRewriteCond ...',seeNum: '4',commentNum: '',isPraise: false,createTime: '2023-04-04'},
   {imgUrl: 'https://down.hackzt.cn/201908/281f5667fb.png',title: 'emlog模板-蓝叶博客模板源码-清新大气模板，适合做博客和资源一体！亲测',detailed: '云盘系统安装教程测试环境:PHP7.1 + MYSQL5.6 + Apache1. 上传源码到根目录2. 安装程序:  浏览器数据 http://localhost/CloudreveInstaller	localhost更换成你的网址3. 安装完毕 记住系统默认的账号密码温馨提示:如果默认的伪静态不行就替换一下的,没问题就不用换!伪静态配置RewriteEngine onRewriteCond ...',seeNum: '45',commentNum: '',isPraise: false,createTime: '2023-04-04'},
   {imgUrl: 'https://down.hackzt.cn/201908/8b345e8515.jpg',title: '杰奇V2.2仿磨铁中文网二次开发版原创小说系统完整版网站源码下载',detailed: '云盘系统安装教程测试环境:PHP7.1 + MYSQL5.6 + Apache1. 上传源码到根目录2. 安装程序:  浏览器数据 http://localhost/CloudreveInstaller	localhost更换成你的网址3. 安装完毕 记住系统默认的账号密码温馨提示:如果默认的伪静态不行就替换一下的,没问题就不用换!伪静态配置RewriteEngine onRewriteCond ...',seeNum: '1',commentNum: '',isPraise: false,createTime: '2023-04-04'},
   {imgUrl: 'https://down.hackzt.cn/201908/6ee30b08ad.png',title: 'Cloudreve云盘系统源码，支持本地储存和对接各大对象储存,界面美观',detailed: '云盘系统安装教程测试环境:PHP7.1 + MYSQL5.6 + Apache1. 上传源码到根目录2. 安装程序:  浏览器数据 http://localhost/CloudreveInstaller	localhost更换成你的网址3. 安装完毕 记住系统默认的账号密码温馨提示:如果默认的伪静态不行就替换一下的,没问题就不用换!伪静态配置RewriteEngine onRewriteCond ...',seeNum: '4444',commentNum: '',isPraise: false,createTime: '2023-04-04'},
   {imgUrl: 'https://down.hackzt.cn/201911/99871a09b5.png',title: 'Cloudreve云盘系统源码，支持本地储存和对接各大对象储存,界面美观',detailed: '云盘系统安装教程测试环境:PHP7.1 + MYSQL5.6 + Apache1. 上传源码到根目录2. 安装程序:  浏览器数据 http://localhost/CloudreveInstaller	localhost更换成你的网址3. 安装完毕 记住系统默认的账号密码温馨提示:如果默认的伪静态不行就替换一下的,没问题就不用换!伪静态配置RewriteEngine onRewriteCond ...',seeNum: '5222',commentNum: '',isPraise: false,createTime: '2023-04-04'},
   {imgUrl: 'https://down.hackzt.cn/201909/f57b61aca1.png',title: 'Cloudreve云盘系统源码，支持本地储存和对接各大对象储存,界面美观',detailed: '云盘系统安装教程测试环境:PHP7.1 + MYSQL5.6 + Apache1. 上传源码到根目录2. 安装程序:  浏览器数据 http://localhost/CloudreveInstaller	localhost更换成你的网址3. 安装完毕 记住系统默认的账号密码温馨提示:如果默认的伪静态不行就替换一下的,没问题就不用换!伪静态配置RewriteEngine onRewriteCond ...',seeNum: '147',commentNum: '',isPraise: false,createTime: '2023-04-04'},
   {imgUrl: 'https://down.hackzt.cn/201908/51b77fd6b0.png',title: 'Cloudreve云盘系统源码，支持本地储存和对接各大对象储存,界面美观',detailed: '云盘系统安装教程测试环境:PHP7.1 + MYSQL5.6 + Apache1. 上传源码到根目录2. 安装程序:  浏览器数据 http://localhost/CloudreveInstaller	localhost更换成你的网址3. 安装完毕 记住系统默认的账号密码温馨提示:如果默认的伪静态不行就替换一下的,没问题就不用换!伪静态配置RewriteEngine onRewriteCond ...',seeNum: '7',commentNum: '',isPraise: false,createTime: '2023-04-04'},
])
const topAdvert = ref([
   {id: '1',tit: '这是一条小广告',path: ''},
   {id: '1',tit: '这是一条小广告',path: ''},
   {id: '1',tit: '这是一条小广告',path: ''},
   {id: '1',tit: '这是一条小广告',path: ''},
   {id: '1',tit: '这是一条小广告',path: ''},
   {id: '1',tit: '这是一条小广告',path: ''},
   {id: '1',tit: '这是一条小广告',path: ''},
   {id: '1',tit: '这是一条小广告',path: ''},
   {id: '1',tit: '这是一条小广告',path: ''},
   {id: '1',tit: '这是一条小广告',path: ''},
   {id: '1',tit: '这是一条小广告',path: ''},
   {id: '1',tit: '这是一条小广告',path: ''},
   {id: '1',tit: '这是一条小广告',path: ''},
   {id: '1',tit: '这是一条小广告',path: ''},
   {id: '1',tit: '这是一条小广告',path: ''},
])

const toDeatil = (item:object)=>{
   
   router.replace({
      path: '/detail',
   })
}

const enterAdvert = (e:any)=>{
   
   let bg = e.target.dataset.bgclolr
   e.target.style.backgroundColor = bg;
   e.target.style.color = '#fff'
}
const leaveAdvert = (e:any)=>{
   
   e.target.style.backgroundColor = '';
   let icolor = e.target.getAttribute('data-bgClolr')
   e.target.style.color = icolor
}

const rgb = ()=>{//rgb颜色随机
  const r = Math.floor(Math.random()*256);
  const g = Math.floor(Math.random()*256);
  const b = Math.floor(Math.random()*256);
  return `rgb(${r},${g},${b},0.9)`;
}

const changeBorder = () =>{
   let advArr = document.getElementsByClassName('advert_list')
}


const getColor = ()=>{
   let docs = document.querySelectorAll('.advert_list')
   for( let i = 0;i<docs.length;i++ ){
      let el = docs[i] as HTMLElement 
      let icolor = el.getAttribute('data-bgClolr')
      el.style.color = icolor ?? '';
      el.style.borderColor=icolor ?? '';
   }
}

onMounted(()=>{
   getColor();
})




</script>

<style lang="scss" scoped>
 .firstBox {
    width: 100%;
   .banner{
      height: 120px;
   }
   .head{
      width: 100%;
      height: 70px;
      background-color: #393D49;
   }
   .advert{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
      .advert_list{
         font-size: 10px;
         padding: 3px 6px;
         width: 233px;
         height: 23px;
         text-align: center;
         border: 1px dashed rgb(0, 0, 0, 0.2);
         margin: 2px 0;
         &:hover{
            cursor: pointer;
            color: #fff;
            border: none;
         }
      }
      .advert_list_img{
         height: 80px;
         width: 590px;
         position: relative;
         img{
            width: 100%;
            height: 100%;
         }
         .adTip{
            position: absolute;
            width: 24px;
            height: 16px;
            text-align: center;
            border-radius: 3px;
            right: 3px;
            bottom: 3px;
            font-size: 8px;
            color: #fff;
            background-color: #00000050;

         }
      }
   }
   .neir{
      .smallMenu{
         display: flex;
         .smallMenulist{
            height: 40px;
            line-height: 40px;
            padding: 0 16px;
            position: relative;
            &::before{
                  content: "";
                  position: absolute;
                  top: -1px;
                  left: 0;/*靠最左边开始*/
                  border-bottom: 3px solid #05b5bb;/*设置底部边颜色*/
                  width: 0;/*宽度为0，这里的宽度是相对与li的宽度*/
                  height: 100%;/*设置高度使它和li等高*/
            }
            &:hover{
               cursor: pointer;
            }
            &:hover::before{
               width: 100%;
               transition: 0.2s all linear;/*设置过度时间*/
               transition-delay: 0.2s;/*过度延时*/
            }
         }
      }
      .cardBox{
         display: flex;
         flex-wrap: wrap;
         justify-content: space-between;
      }
      
   }
 }
</style>
