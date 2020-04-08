// this is sign handle middleware
// import * as md5 from 'md5'
const md5 = require('md5')
const signKey = 'ahr0cdovl3rlc3ryzxnvdxjjzs5qaw55b3vqaweubmv0l3r'
export default (json: any) => {
    let signpass = signKey
    let data = json || {}
    let sign = ''
    let str = ''
    let newKey = Object.keys(data).sort()
    for (let j = 0; j < newKey.length; j++) {
        if (data[newKey[j]] !== '') str += newKey[j] + data[newKey[j]]
    }
    sign = signpass + str + signpass
    sign = md5(sign)
    return sign.toUpperCase()
}
