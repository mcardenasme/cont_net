import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
        path: '/',
        name: 'App',
        component: () => import('../App.vue')
        },
        {
        path: '/data',
        name: 'data',
        component: () => import('../components/PopUpData.vue')
    
        },       
    ]
})

export default router