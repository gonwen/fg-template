<!-- 云盘预览 -->
<template>
    <view>
        <web-view :src="`http://uc.ciip.com/view/${base64Str}`"></web-view>
    </view>
</template>

<script>
export default {
    data () {
        return {
            files: [
                'aHR0cDovL3Rlc3RyZXNvdXJjZS5qaW55b3VqaWEubmV0L3RlbXAvanlqL29ubHlPZmZpY2V0ZXN0LmRvY3g', // 文档
                'aHR0cDovL2p6bS5hYy1tYWxsLm5ldC9tYWxsUmVzb3VyY2UvMjAxOTA1MjIvZDI2YzViYTBkMzMwOGNiYTZjOGY2YmMzZmYxNzAxM2EubXA0', // 视频
                'aHR0cHM6Ly9teHpoLXByb2Qub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL21vZGVsRm9sZGVyXzhmMDY1M2U3LTg4MzMtNDlmZS1hNTM3LTU3NWE2NzcxYWVmYS9vdXRwdXQvM2Quc3Zm', // 模型
                'aHR0cDovL2p6bS5hYy1tYWxsLm5ldC9tYWxsUmVzb3VyY2UvY2Fyb3VzZWwvMjAxOTA1MjcvMDJiMDU2ZmUyZjA4MzU2YjE0ZjQxMTY0ZDJiMzQxNzgucG5n' // 图片
            ],
            base64Str: ''
        }
    },
    async onLoad (option) {
        let index = option.index || 3
        let u = option.u || ''
        if (u) this.base64Str = u
        else this.base64Str = this.files[index]
    }
}
</script>
