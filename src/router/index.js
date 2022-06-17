import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
        path: '/',
        name: 'InfoOne',
        component: () => import('../components/InfoOne.vue')
    
        },       
    ]
})

export default router