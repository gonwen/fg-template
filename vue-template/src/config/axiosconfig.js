// axios 初始化 配置和封装
import qs from 'qs'
import axios from 'axios'
const AXIOS = axios
AXIOS.defaults.withCredentials = true

/*  封装ajax方法 */
const requestResponse = (type, urls, data) => {
    let url = urls
    if (!type) type = 'GET'
    if (!data) data = null
    type = type.toUpperCase()
    if (type === 'GET') return AXIOS.get(url, {params: data})
    if (type === 'PUT') return AXIOS.put(url, qs.stringify(data))
    if (type === 'POST') return AXIOS.post(url, qs.stringify(data))
}
export {
    AXIOS
    , requestResponse
}
