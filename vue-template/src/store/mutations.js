import {
    HAS_ISLOGIN
} from './mutation-types'

export default {
    [HAS_ISLOGIN] (state, loginInfo) {
        if (loginInfo.isLogin) {
            state.userinfo = loginInfo.LoginEntity
        } else {
            state.userinfo = {}
        }
        if (loginInfo) {
            state.haslogin = loginInfo.isLogin
        } else {
            state.haslogin = false
        }
    }
}
