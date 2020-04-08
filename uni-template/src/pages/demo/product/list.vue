<!-- 建筑产品列表 -->
<template>
    <view>
        <uni-grid :column="2" @change="jumpLink">
            <uni-grid-item v-for="(item, index) in list" :key="index">
                <image class="pro-img" :src="getImageUrl(item.imgResourcesList)" mode="aspectFill"/>
                <text>{{item.productName}}</text>
                <text class="text">{{item.productSummary}}</text>
            </uni-grid-item>
        </uni-grid>
        <uni-load-more :status="loadMoreStatus"></uni-load-more>
    </view>
</template>

<script>
import {uniGrid, uniGridItem, uniLoadMore} from '@dcloudio/uni-ui'
import {getProductList} from '../../../api/demo'

export default {
    components: {
        uniGrid,
        uniGridItem,
        uniLoadMore
    },
    data () {
        return {
            query: {
                productFirstClassId: '',
                productSecondClassId: '',
                provinceId: '',
                cityId: '',
                singlePrice: '',
                searchText: '',
                sortType: '',
                sortBy: '',
                pageNumber: 1,
                pageSize: 10,
                constructionArea: ''
            },
            list: [],
            serFileUrl: this.$store.state.serFileUrl,
            loadMoreStatus: 'loading'
        }
    },
    onLoad (option) {
        this.getList()
    },
    // 上拉加载更多
    async onReachBottom () {
        if (this.loadMoreStatus === 'noMore') return false
        this.query.pageNumber++
        this.getList()
    },
    methods: {
        async getList () {
            this.loadMoreStatus = 'loading'
            let status = 'more'
            let {data} = await getProductList(this.query)
            if (data.flag && data.data.rows && data.data.rows.length > 0) this.list = [...this.list, ...data.data.rows]
            else status = 'noMore'
            this.loadMoreStatus = status
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
        jumpLink (obj) {
            let index = obj.detail.index
            let id = this.list[index].id
            uni.navigateTo({
                url: '/pages/demo/product/detail?id=' + id
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .pro-img {
        width: 100%;
        height: 200rpx;
    }

    .text {
        font-size: 28rpx;
        color: $gray;
    }
</style>
