<!--
 * @FileDescription: Banner 横屏组件
 * @Author: Websoft9
 * @Date: 2021/10/20
 * @LastEditors: wuhong
 * @LastEditTime: 021/10/20
-->

<template>
    <div class="banner-content rounded">
        <div class="bannerText">
            <div class="textContinar">
                <div class="bannerTitle">{{title}}</div>
                <div class="bannerDescription">{{description}}
                </div>
                <div class="bannerLinks"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: String,
            description: String
        }
    }
</script>

<style scoped>
    .banner-content {
        width: 100%;
        position: relative;
        height: 200px;
        background-repeat: no-repeat;
        background-position: right;
        background-size: cover;
        background-image: url("../../assets/images/banner_background.png");
        padding: 0;
    }
    .bannerText {
        width: 70%;
        height: 100%;
        padding: 20px;
        background-image: url(../../assets/images/banner_cover.svg);
        position: absolute;
        z-index: 2;
        background-repeat: no-repeat;
        background-position: right;
        background-size: cover;
        overflow: hidden;
    }
    .textContinar {
        max-width: 70%;
        height: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
    }
    .bannerTitle {
        font-size: 18px;
        color: #106ebe;
        margin-bottom: 18px;
        font-weight: 600;
    }
    .bannerDescription {
        line-height: 20px;
        font-size: 16px;
        color: #323130;
    }
</style>
