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
          {
            path: '/advert',
            name: 'advert',
            component: ()=> import('@/views/advert/index.vue')
          }
        ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/login.vue')
    }
    
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router