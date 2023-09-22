<template>
  <div class="menuBox">
    <el-menu>
        <template v-for="(item, index) in menus" :key="item.path">
            <el-menu-item v-if="!item.children" :index="item.path" @click="onMenuItemClick(item.path)">
                <template #title>
                    <el-icon><component :is="item.icon"></component></el-icon>
                    {{ item.label }}
                </template>
            </el-menu-item>
            <el-sub-menu v-if="item.children" :index="item.path">
                <template #title>
                    <el-icon><component :is="item.icon"></component></el-icon>
                    {{ item.label }}
                </template>
                <template v-for="(itx, idx) in item.children" :key="itx.path">
                    <el-menu-item v-if="!itx.children" :index="itx.path"  @click="onMenuItemClick(itx.path)">
                        <template #title>
                            {{ itx.label }}
                        </template>
                    </el-menu-item>
                    <el-sub-menu  v-if="itx.children" :index="itx.path" >
                        <template #title>
                            {{ itx.label }}
                        </template> 
                        <el-menu-item :index="itmx.path"  v-for="(itmx, idmx) in itx.children" :key="itmx.path" @click="onMenuItemClick(itx.path)">
                            {{ itmx.label }}
                        </el-menu-item> 
                    </el-sub-menu>
                </template>
            </el-sub-menu>
        </template>
    </el-menu>
    
  </div>
</template>

<script setup lang="ts">
import {ref,defineProps,computed } from "vue"
import { useRouter } from 'vue-router'
interface Props {
  menu: string;
}
const props = defineProps<Props>();
const menus = props.menu;


const router = useRouter()
const onMenuItemClick = (item: string) => {
  router.push(item)
}



 



</script>

<style lang="scss" scoped>
 .menuBox {
    height: 100%;
    width: 100%;
    overflow: auto;
    border-right: 1px solid #ccc;
    .el-menu{
        border-right: none;
    }
 }
</style>
