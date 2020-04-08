<template>
    <div class="cb-404">
        <div class="cb-404-bg">
            <div class="cb-404-info">
                <h1>对不起，好像出错了~ </h1>
                <div class="com-btn">
                    <el-button type="primary" @click="$router.push({path:'/'})">返回首页</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.cb-404 {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    .cb-404-bg {
        position: absolute;
        width: 100%;
        height: 490px;
        background-image: url(../../../static/img/404.jpg);
        background-position: center center;
        background-repeat: no-repeat;
        top: 50%;
        margin-top: -285px;
        .cb-404-info {
            position: absolute;
            bottom: -50px;
            left: 0;
            right: 0;
            text-align: center;
            h1 {
                font-size: 24px;
                font-weight: normal;
                color: $blue;
                margin-bottom: 50px;
            }
        }
    }
}
</style>
