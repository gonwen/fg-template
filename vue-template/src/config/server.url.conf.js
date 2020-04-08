/**
 * 全局配置信息
 * DEV => npm run dev
 * PRO => npm run build
 * TST => npm run testBuild
 * ciipFile: ciip资源服务地址域
 * ciipWeb: ciip登录退出地址域
 * ciipSer: ciip认证接口验证登录服务地址域
 * */
const configWebpackBaseInfo = {
    // 本地环境（根据实际需要改动）
    DEV: {
        ciipSer: '',
        ciipWeb: '',
        ciipFile: ''
    },
    // 生产环境（勿动）
    PRO: {
        ciipSer: '',
        ciipWeb: '',
        ciipFile: ''
    },
    // 测试环境（勿动）
    TST: {
        ciipSer: '',
        ciipWeb: '',
        ciipFile: ''
    }
}
const PATH_NODE_ENV = process.env.NODE_ENVINGS
const ciipSer = configWebpackBaseInfo[PATH_NODE_ENV].ciipSer
const ciipWebUrl = configWebpackBaseInfo[PATH_NODE_ENV].ciipWeb
const ciipFile = configWebpackBaseInfo[PATH_NODE_ENV].ciipFile

export {ciipSer, ciipWebUrl, ciipFile}
