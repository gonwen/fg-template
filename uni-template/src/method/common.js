/**
 * 重置富文本 img 、p 标签内联样式
 * */
export const formatRichText = html => {
    if (!html) return ''
    let nhtml = html.replace(/<img[^>]*>/gi, m => {
        m = m.replace(/style="[^"]+"/gi, '').replace(/style='[^']+'/gi, '')
        m = m.replace(/width="[^"]+"/gi, '').replace(/width='[^']+'/gi, '')
        m = m.replace(/height="[^"]+"/gi, '').replace(/height='[^']+'/gi, '')
        return m
    })
    nhtml = nhtml.replace(/<p[^>]*>/gi, m => {
        m = m.replace(/style="[^"]+"/gi, '').replace(/style='[^']+'/gi, '')
        return m
    })
    nhtml = nhtml.replace(/style="[^"]+"/gi, m => {
        m = m.replace(/width:[^;]+;/gi, 'max-width:100%;').replace(/width:[^;]+;/gi, 'max-width:100%;')
        return m
    })
    nhtml = nhtml.replace(/<br[^>]*\/>/gi, '')
    nhtml = nhtml.replace(/<img/gi, '<img style="max-width:100%;height:auto;display:block;margin-top:0;margin-bottom:0;"')
    return nhtml
}

/**
 * 金额数据格式化
 * @params      val  => 原始金额
 *              type  =>  true 万元单位  false  元单位
 *              notUitl => 是否显示单位 true  不显示单位
 * @return    string
 * */
export const formatPrice = (val, type, notUitl) => {
    if (!val || isNaN(Number(val))) {
        if (!notUitl) return type ? '0万元' : '0.00元'
        else return '0.00'
    } else {
        let numb = type ? parseFloat((Number(val) / 10000).toFixed(2)) : Number(val).toFixed(2)
        let str = numb.toString()
        let arr = str.split('.')
        let num0 = ''
        let re = /(?=(?!\b)(\d{3})+$)/g
        num0 = arr[0]
        if (num0.length > 3) {
            num0 = num0.replace(re, ',')
        }
        if (!notUitl) return num0 + (arr[1] ? '.' + arr[1] : '') + (type ? '万元' : '元')
        else return num0 + (arr[1] ? '.' + arr[1] : '')
    }
}

/**
 * 字符长度截取带省略符
 * @params      val  => 字符
 *              num   => 字符最大长度
 * @return    string
 * */
export const sliceWord = (val, num) => {
    var str = val || ''
    if (
        val &&
        num &&
        !isNaN(Number(num)) &&
        val.length > num
    ) {
        num = Number(num)
        str = val.substring(0, num) + '...'
    }
    return str
}
