import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'babel-polyfill'

Vue.use(ElementUI, {size: 'small'})

// 使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
    document.title = to.meta.title
    next()
})
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
})
