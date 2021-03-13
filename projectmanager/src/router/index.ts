import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import Home from '../views/Home.vue'
import HelloWorld from "@/components/HelloWorld.vue";
import Projects from "@/views/Proejcts.vue";
import About from "@/views/About.vue";
import Settings from "@/views/Settings.vue";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        redirect: "/home"
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/projects',
        name: 'Projects',
        component: Projects
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/settings',
        name: 'Settings',
        component: Settings
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
