/**
 * 全局服务配置信息
 * */
interface ConfInfo {
    ser: string // 服务地址
    file: string // 资源地址
}
// 本地环境（根据实际需要改动）
const DEV: ConfInfo = {
    ser: 'http://ucapi.ciip.com/uc/api/v1',
    file: ''
}
// 生产环境（勿动）
const PRO: ConfInfo = {
    ser: '',
    file: ''
}
// 测试环境（勿动）
const TST: ConfInfo = {
    ser: '',
    file: ''
}
const confInfoGroup: any = {
    DEV,
    PRO,
    TST
}

const model: string = process.env.NODE_ENVS || 'DEV'

export const serBaseUrl: string = confInfoGroup[model].ser
export const serFileUrl: string = confInfoGroup[model].file
