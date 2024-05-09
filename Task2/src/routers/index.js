// Import your components and createRouter function from vue-router
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import Register from '@/components/Register.vue';
import WishList from '@/components/WishList.vue';

// Define your routes
const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/wishList',
        component: WishList
    },
    {
        path: '/register',
        component: Register
    },
];

// Create the router instance using createRouter function
const router = createRouter({
    history: createWebHistory(),
    routes:routes
});

// Export the router instance for use in your Vue application
export default router;
