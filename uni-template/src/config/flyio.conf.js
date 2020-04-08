// flyio 初始化 配置和封装
// #ifdef H5
import Flyio from 'flyio/dist/npm/fly'
// #endif
// #ifdef MP-WEIXIN
// eslint-disable-next-line
import Flyio from 'flyio/dist/npm/wx'
// #endif
import qs from 'qs'
import {serBaseUrl} from './server.url.conf'

export const FLYIO = new Flyio()
FLYIO.config.withCredentials = true

// 请求拦截
FLYIO.interceptors.request.use(
    request => {
        // let token = ''
        // let role = ''
        // request.headers['x-ho-token'] = token
        // request.headers['x-ho-role'] = role
        return request
    }
)

// 响应拦截
FLYIO.interceptors.response.use(
    response => {
        if (response.data.constructor === Object) {
            let flag = false
            if (response.data && response.data.code >= 0) flag = true
            // else if (response.data && response.data.code === -9) {
            //     window.location.reload()
            // }
            response.data.flag = flag
        }
        return response
    },
    error => {
        let errorObj = error
        errorObj.data = {}
        errorObj.data.flag = false
        errorObj.data.msg = '服务出错'
        // uni.showToast({
        //     title: '服务出错',
        //     image: '/static/logo.png',
        //     duration: 8000
        // })
        return errorObj
    }
)

/* 封装异步数据请求方法 */
export const requestResponse = (type = 'get', urls, data, urlType) => {
    let url = urls
    if (!urlType) url = serBaseUrl + urls
    if (!type) type = 'GET'
    if (!data) data = null
    type = type.toUpperCase()
    if (type === 'GET') return FLYIO.get(url, data)
    if (type === 'POST') {
        return FLYIO.post(url, qs.stringify(data), {
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            }
        })
    }
}
