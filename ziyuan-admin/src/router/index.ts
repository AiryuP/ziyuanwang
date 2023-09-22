import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'


const routes: Array<RouteRecordRaw> = [
    {  
        path: '/',
        name: 'home',
        // redirect: '/about',
        component: () => import('../views/Home.vue'),
        
        // meta: {
        //     isLogin: true,
        // },
        children: [
        ]
    }
    
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router