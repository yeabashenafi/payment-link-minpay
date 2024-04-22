import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Link from './views/Link.vue';

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path:'/link/:id',
        component: Link
    }
]


export const router = createRouter({
    history: createWebHistory('/'),
    routes: routes
});
