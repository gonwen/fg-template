// 使用@别名 如需编译器定位文件需编译器设置关联该文件
const resolve = dir => require('path').join(__dirname, dir)
module.exports = {
    resolve: {
        alias: {
            '@': resolve('src')
        }
    }
}
