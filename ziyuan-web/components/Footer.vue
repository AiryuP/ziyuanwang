<template>

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
</template>

<script setup lang="ts">
import {ref} from "vue"
const a = ref(0)
</script>

<style lang="scss" scoped>

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
</style>
