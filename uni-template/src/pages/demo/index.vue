<template>
    <view class="content">
        <view>
            <swiper class="swiper"
                :indicator-dots="indicatorDots"
                :autoplay="autoplay"
                :interval="interval"
                :duration="duration">
                <swiper-item v-for="(sitem, sindex) in 4" :key="sindex">
                    <image class="swiper-image" :src="`/static/img/temp/et_0${sindex + 1}.jpg`" mode="aspectFill"/>
                </swiper-item>
            </swiper>
        </view>
        <navigator url="/pages/demo/product/list" hover-class="navigator-hover">
            <button type="default">建筑产品列表</button>
        </navigator>
        <navigator url="/pages/demo/view?index=0" hover-class="navigator-hover">
            <button type="default">文档 view</button>
        </navigator>
        <navigator url="/pages/demo/view?index=1" hover-class="navigator-hover">
            <button type="default">视频 view</button>
        </navigator>
        <navigator url="/pages/demo/view?index=2" hover-class="navigator-hover">
            <button type="default">模型 view</button>
        </navigator>
        <navigator url="/pages/demo/view?index=3" hover-class="navigator-hover">
            <button type="default">图片 view</button>
        </navigator>
        <view>
            <view>
                <uni-calendar
                        ref="calendar"
                        :insert="false"
                        @confirm="confirm"
                ></uni-calendar>
                <button @click="open">打开日历</button>
            </view>
        </view>
        <view>
            <uni-list>
                <uni-list-item
                    :title="item.subject"
                    :thumb="item.thumbpath"
                    :note="item.summary"
                    v-for="(item, index) in newsList"
                    :key="index"></uni-list-item>
            </uni-list>
        </view>
        <view>
            <uni-list>
                <uni-list-item
                        :title="item.shopTitle"
                        :thumb="`http://resource.ciip.com/${item.shopLogoUrl}`"
                        :note="item.brandPropagandaTitle"
                        v-for="(item, index) in companyList"
                        :key="index"></uni-list-item>
            </uni-list>
        </view>

        <button open-type="share">share</button>
        <view>
            <editor></editor>
        </view>
    </view>
</template>

<script>
import {uniBadge, uniCalendar, uniList, uniListItem} from '@dcloudio/uni-ui'
import {getCompanyList, getNewsList} from '../../api/demo'

export default {
    data () {
        return {
            indicatorDots: true,
            autoplay: true,
            interval: 2000,
            duration: 500,
            companyList: [],
            newsList: []
        }
    },
    components: {
        uniBadge,
        uniCalendar,
        uniList,
        uniListItem
    },
    async onLoad () {
        uni.showLoading({
            title: '加载中'
        })
        // #ifdef H5
        let fRes = await getCompanyList()
        if (
            fRes.data &&
            fRes.data.data &&
            fRes.data.data.constructor === Array
        ) this.companyList = fRes.data.data
        // #endif
        // #ifdef MP-WEIXIN
        let nRes = await getNewsList()
        if (
            nRes.data &&
            nRes.data.forumInfo &&
            nRes.data.forumInfo.constructor === Array
        ) this.newsList = nRes.data.forumInfo
        // #endif
        uni.hideLoading()
    },
    methods: {
        open () {
            let calendar = this.$refs.calendar
            calendar.open()
        },
        confirm (e) {
            console.log(e)
        }
    }
}
</script>

<style lang="scss">
    .content {
        text-align: center;

        .title {
            color: $blue;
            font-size: $uni-font-size-lg;
        }
    }

    .logo {
        height: 62rpx;
        width: 120rpx;
        margin-top: 20rpx;
    }

    .title {
        font-size: 36rpx;
        color: #8f8f94;
    }

    .swiper {
        height: 400rpx;
    }

    .swiper-image {
        width: 100%;
        height: 100%;
    }
</style>
