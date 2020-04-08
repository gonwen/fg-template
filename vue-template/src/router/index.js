import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    linkActiveClass: 'active',
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: '/index',
            component: resolve => require(['@/components/page/index.vue'], resolve),
            meta: {
                title: 'index-news-vue-template',
                auth: false
            }
        },
        {
            path: '/404',
            component: resolve => require(['@/components/page/404.vue'], resolve),
            meta: {
                title: '404-news-vue-template',
                auth: false
            }
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})
