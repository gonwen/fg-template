<!--前端错误页面模板-->
<template>
    <div class="error-box">
        <h1>{{error.statusCode}}</h1>
        <p>{{error.message}}</p>
    </div>
</template>
<script lang="ts">
import {
    Prop,
    Component,
    Vue
} from 'nuxt-property-decorator'

@Component({
    // layout: 'default',
    // prop: {
    //     error: {
    //         type: Object
    //     }
    // },
    head () {
        return {
            title: '404'
        }
    }
})
export default class LayoutsError extends Vue {
    @Prop()
    private error: any
    create () {
        //
    }
}
</script>

<style lang="scss" scoped>
    .error-box{
        text-align: center;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
</style>
