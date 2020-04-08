import {requestResponse} from '@/config/flyio.conf'
// import {serBaseUrl} from '@/config/server.url.conf'

export const getCompanyList = (num) => requestResponse('get', `/getCooperativeSupplierList?count=${num || 10}`)

export const getProductDetail = (id) => requestResponse('get', '/api/v1/ProductCenter/product/findId', {id: id})

export const getProductList = (json) => requestResponse('post', '/api/v1/ProductCenter/getProductCombinedQueryPage', json)

export const getNewsList = (json) => requestResponse('get', 'https://jt.chinabim.com/forum/getNewForums', {
    page: 1,
    page_size: 6,
    countForum: 6
}, true)
