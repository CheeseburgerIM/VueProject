import VueRouter from 'vue-router'

import index from "../components/index.vue"

export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/index',
        },
        {
            path: '/index',
            component: index
        },
    ]
})