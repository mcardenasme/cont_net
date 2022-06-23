import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
        path: '/',
        name: 'MyHome',
        component: () => import('../components/MyHome.vue')
        },
        {
        path: '/data',
        name: 'data',
        component: () => import('../components/PopUpData.vue')
    
        },       
    ]
})

export default router