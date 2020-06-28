<template>
    <ul>
        <li><b>{{computedTestString}}</b></li>
        <li><b>{{FILTER_FORMATER.price(price)}}</b></li>
        <li>
            <el-button v-loading="loading">
                loading
            </el-button>
        </li>
        <li><i>{{testAsync}}</i></li>
        <li>{{userinfo.id}}</li>
        <li>{{userinfo.name}}</li>
        <li>{{userinfo.token}}</li>
        <li>{{userinfo.time}}</li>
        <li>
            <span class="icon icon-select-red"></span>
        </li>
        <el-form ref="form" :model="form" :rules="formRules">
            <el-form-item prop="name">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-button @click="submitForm">
                提交
            </el-button>
        </el-form>
        <page-index></page-index>
    </ul>
</template>

<script lang="ts">
import {
    Vue,
    Watch,
    Prop,
    Emit,
    Component
} from 'nuxt-property-decorator'
import {
    State,
    Mutation
} from 'vuex-class'
import {getUserInfo, getLinkList, getVdCode} from '~/api'
import pageIndex from '~/pages/index.vue'

@Component({
    name: 'test',
    components: {pageIndex},
    head () {
        return {
            title: 'this is test demo and training'
        }
    },
    async asyncData () {
        await new Promise(resolve => setTimeout(() => resolve(true), 1000))
        return {testAsync: '****testAsync****'}
    },
    validate ({query: {sign}}) {
        return !!(sign && sign === 'show')
    }
})
export default class PageTest extends Vue {
    // init data
    private price: number = 1024
    loading: boolean = true
    testAsync: string = ''
    watchText: string = ''
    watchNum: number = 0
    form: any = {
        name: ''
    }
    formRules: any = {
        name: [
            {required: true, message: '请输入需求名称', trigger: 'blur'}
        ]
    }
    // computed
    get computedTestString () {
        return '**#**' + this.watchNum + '**#**' + this.watchText + '**#**'
    }
    // methods
    submitForm () {
        (this.$refs.form as any).validate((vid: boolean, opt: any) => {
            console.log('***vid***', vid)
            console.log('***vid***', opt)
        })
        console.log((this.$refs.form as any).validate)
    }
    inintPrice () {
        this.price = 1024 * 1024
    }
    async inintView () {
        await new Promise((resolve) => {
            setTimeout(() => {
                this.loading = false
                resolve(true)
            }, 4000)
        })
        this.inintPrice()
        this.setUserInfo({
            name: 'xiao fonts',
            id: 34534534543,
            token: 'gyyuodbgnyulpereregiouiu8u34tht34i',
            time: new Date()
        })
    }
    // mounted
    async mounted () {
        this.changeWatchNum(45345)
        this.changeWatchText('testse')
        this.$on(
            'emit-todo',
            (n?: string) => console.log(n || 'this is two')
        )
        this.emitTodo()
        this.inintView()
        const {data}: any = await getUserInfo()
        console.log(data)
        const res = await getUserInfo()
        console.log('****', res)
        await getLinkList()
        await getVdCode()
    }
    // watch
    @Watch('watchNum')
    changeWatchNum (nv: number, ov?: number) {
        if (!ov) {
            this.watchNum = nv
        }
        console.log(`*******${nv}*******`)
    }
    @Watch('watchText', {immediate: true, deep: true})
    changeWatchText (nv: string, ov?: string) {
        if (!ov) {
            this.watchText = nv
        }
        console.log(`*******${nv}*******`)
    }
    // prope
    @Prop(Number)
    propSignIndex!: number
    @Prop(String)
    propSigns?: string
    @Prop([String, Number])
    propSignOrNum?: string | number
    @Prop({
        type: [String, Number],
        default: 0
    })
    propNum!: number | string
    // emit
    @Emit()
    emitTodo (n?: string) {
        //
        console.log(n || 'this is one')
    }
    // vuex
    @State userinfo: any
    @Mutation setUserInfo: any
}
</script>

<style lang="scss" scoped>
    .icon {
        position: relative;
        z-index: 2;
        display: inline;
        margin-top: 10px;
        padding: 10px;
        padding-right: 20px;
        height: 100%;
        opacity: 0;
        width: 100px;
        float: right;
    }
</style>
