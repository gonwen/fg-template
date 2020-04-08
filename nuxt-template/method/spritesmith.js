// 精灵图初始化配置
const path = require('path')
const SpritesmithPlugin = require('webpack-spritesmith')
const imagePath = '../static/img'
const cssPath = '../assets/sass'

const templateStyle = (data) => {
    if (!data.sprites[0]) return ''
    const shared = '.icon { display:inline-block; background-image: url(I); background-size:WSMrem HSMrem; }'
        .replace('I', data.sprites[0].image)
        .replace('WSM', data.spritesheet.width * 0.005)
        .replace('HSM', data.spritesheet.height * 0.005)

    const perSprite = data.sprites.map(function (sprite) {
        return '.N { width: Wrem; height: Hrem; background-position: Xrem Yrem; }'
            .replace('N', sprite.name)
            .replace('W', sprite.width * 0.005)
            .replace('H', sprite.height * 0.005)
            .replace('X', sprite.offset_x * 0.005)
            .replace('Y', sprite.offset_y * 0.005)
    }).join('\n')
    return shared + '\n' + perSprite
}

module.exports = (config) => {
    config.resolve.modules.push(imagePath) // css在哪里能找到sprite图
    config.plugins.push(
        new SpritesmithPlugin({
            src: {
                cwd: path.resolve(__dirname, `${imagePath}/sprites/`), // 图标根路径
                glob: '**/*.png' // 匹配任意 png 图标
            },
            target: {
                image: path.resolve(__dirname, `${imagePath}/sprites.png`), // 生成雪碧图目标路径与名称
                // 设置生成CSS背景及其定位的文件或方式
                css: [
                    [path.resolve(__dirname, `${cssPath}/sprites.scss`), {
                        format: 'function_based_template'
                    }]
                ]
            },
            customTemplates: {
                function_based_template: templateStyle
            },
            apiOptions: {
                cssImageRef: `../${imagePath}/sprites.png` // css文件中引用雪碧图的相对位置路径配置
            },
            spritesmithOptions: {
                padding: 5
            }
        })
    )
}
