import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Home from '../views/home/home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'home',
      component: Home,
      children:[
        {
          path: '/index',
          name: 'index',
          component: () => import('../views/pages/first/index.vue')
        },
        //  源码
        {
          path: '/code',
          name: 'code',
          component: () => import('../views/pages/code/index.vue')
        },
        {
          path: '/code/detail',
          name: 'codeDetail',
          component: () => import('../views/pages/code/detail/index.vue')
        },
        //  软件
        {
          path: '/software',
          name: 'software',
          component: () => import('../views/pages/software/index.vue')
        },
        {
          path: '/software/detail',
          name: 'softwareDetail',
          component: () => import('../views/pages/software/detail/index.vue')
        },
        //  壁纸
        {
          path: '/wallpaper',
          name: 'wallpaper',
          component: () => import('../views/pages/wallpaper/index.vue')
        },
        {
          path: '/wallpaper/detail',
          name: 'wallpaperDetail',
          component: () => import('../views/pages/wallpaper/detail/index.vue')
        },
        //  综合资源
        {
          path: '/source',
          name: 'source',
          component: () => import('../views/pages/source/index.vue')
        },
        {
          path: '/source/detail',
          name: 'sourceDetail',
          component: () => import('../views/pages/source/detail/index.vue')
        }
      ],
      redirect: '/index'
    },



    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }



  ]
})

export default router
