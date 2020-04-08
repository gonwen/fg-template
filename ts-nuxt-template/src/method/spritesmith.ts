// 精灵图初始化配置
const path = require('path')
const SpritesmithPlugin = require('webpack-spritesmith')
const imagePath = '../static/img'
const cssPath = '../assets/sass'

const templateStyle = (data:any) => {
    if (!data.sprites[0]) return ''
    // 转换单位 px rem ...
    const unit = 'px'
    // 倍率
    const px = 1
    const shared = `.icon { display:inline-block; background-image: url(I); background-size:WSM${unit} HSM${unit}; }`
        .replace('I', data.sprites[0].image)
        .replace('WSM', String(data.spritesheet.width * px))
        .replace('HSM', String(data.spritesheet.height * px))

    const perSprite = data.sprites.map(function (sprite:any) {
        return `.N { width: W${unit}; height: H${unit}; background-position: X${unit} Y${unit}; }`
            .replace('N', sprite.name)
            .replace('W', String(sprite.width * px))
            .replace('H', String(sprite.height * px))
            .replace('X', String(sprite.offset_x * px))
            .replace('Y', String(sprite.offset_y * px))
    }).join('\n')
    return shared + '\n' + perSprite
}

module.exports = (config:any) => {
    // css在哪里能找到sprite图
    config.resolve.modules.push(imagePath)
    config.plugins.push(
        new SpritesmithPlugin({
            src: {
                // 图标根路径
                cwd: path.resolve(__dirname, `${imagePath}/sprites/`),
                // 匹配任意 png 图标
                glob: '**/*.png'
            },
            target: {
                // 生成雪碧图目标路径与名称
                image: path.resolve(__dirname, `${imagePath}/sprites.png`),
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
