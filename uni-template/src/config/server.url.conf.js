/**
 * 全局服务配置信息
 * */
// 本地环境（根据实际需要改动）
const DEV = {
    ser: 'http://jiaapi.ciip.com/jyj',
    file: 'http://resource.ciip.com/'
}
// 生产环境（勿动）
const PRO = {
    ser: 'http://jiaapi.ciip.com/jyj',
    file: 'http://resource.ciip.com/'
}
// 测试环境（勿动）
const TST = {
    ser: 'http://jiaapi.ciip.com/jyj',
    file: 'http://resource.ciip.com/'
}
const confInfoGroup = {DEV, PRO, TST}
const model = process.env.VUE_APP_NODE_ENV || 'DEV'

export const serBaseUrl = confInfoGroup[model].ser
export const serFileUrl = confInfoGroup[model].file
