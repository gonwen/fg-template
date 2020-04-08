import Vue from 'vue'
import Vuex from 'vuex'
import {serFileUrl} from '../config/server.url.conf'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        // 用户基础信息
        userInfo: {},
        // 当前用户token
        token: '',
        // 平台文件资源访问地址
        serFileUrl: serFileUrl
    },
    mutations: {
        setUserInfo: (state, obj) => {
            state.userInfo = obj
            state.token = obj.token
        }
    },
    actions: {
        //
    }
})

export default store
