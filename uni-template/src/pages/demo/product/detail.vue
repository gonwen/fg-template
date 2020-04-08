<!-- 建筑产品详情 -->
<template>
    <view>
        <view class="pro-body">
            <swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="2000" :duration="500">
                <swiper-item v-for="(item, index) in info.jyjProductImageResources" :key="index">
                    <image class="swiper-image" :src="serFileUrl + item.fileShowUrl" mode="aspectFill"/>
                </swiper-item>
            </swiper>
            <view class="pro-title">
                <view>{{info.productName}}</view>
                <view>{{info.productSummary}}</view>
                <view>{{info.singlePrice}}元</view>
            </view>
            <rich-text :nodes="formatRichText(info.productInfo)" class="rich-main"></rich-text>
        </view>
        <uni-goods-nav class="goods-nav" :fill="true" :button-group="buttonGroup"
                       @buttonClick="buttonClick"></uni-goods-nav>
    </view>
</template>

<script>
import {uniGoodsNav} from '@dcloudio/uni-ui'
import {getProductDetail} from '../../../api/demo'
import {formatRichText} from '../../../method'

export default {
    components: {
        uniGoodsNav
    },
    data () {
        return {
            gid: '',
            serFileUrl: this.$store.state.serFileUrl,
            info: {},
            buttonGroup: [
                {
                    text: '加入购物车',
                    backgroundColor: '#ff0000',
                    color: '#fff'
                },
                {
                    text: '立即购买',
                    backgroundColor: '#ffa200',
                    color: '#fff'
                }
            ]
        }
    },
    async onLoad (option) {
        uni.showLoading({
            title: '加载中'
        })
        let id = option.id || ''
        this.gid = id
        let status = await this.getInfo(id)
        if (!status) {
            uni.showToast({
                title: '服务出错',
                image: '/static/temp/warning.png',
                duration: 2000
            })
        }
    },
    // 下拉更新数据
    async onPullDownRefresh () {
        await this.getInfo(this.gid)
        uni.stopPullDownRefresh()
    },
    methods: {
        async getInfo (id) {
            let {data} = await getProductDetail(id)
            uni.hideLoading()
            if (data.flag) {
                this.info = data.data
                uni.setNavigationBarTitle({
                    title: this.info.productName
                })
            }
            return data.flag
        },
        buttonClick (e) {
            console.log(e)
        },
        getImageUrl (arr) {
            let url = ''
            if (arr.constructor === Array && arr.length > 0) {
                let itemStr = arr[0]
                if (itemStr.constructor === String) {
                    url = JSON.parse(itemStr).fileShowUrl
                }
            }
            return url ? this.serFileUrl + url : url
        },
        formatRichText: (html) => formatRichText(html)
    }
}
</script>

<style lang="scss" scoped>
    .swiper {
        width: 100%;
        height: 400rpx;
    }

    .swiper-image {
        width: 100%;
        height: 100%;
    }

    .pro-title {
        padding: 40rpx 20rpx;
        background-color: $grayBg;
    }

    .rich-main {
        padding: 40rpx 20rpx;
        display: block;
    }

    .pro-body {
        padding-bottom: 100rpx;
    }

    .goods-nav {
        width: 100%;
        position: fixed;
        bottom: 0;
    }
</style>
