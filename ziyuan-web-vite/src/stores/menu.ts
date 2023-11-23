import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu',()=>{
    let isActive = ref('home')

    let headShow = ref(false)

    return { isActive, headShow }


})