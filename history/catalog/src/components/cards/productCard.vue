<!--
 * @FileDescription: 产品卡片组件
 * @Author: Websoft9
 * @Date: 2021/10/20
 * @LastEditors: wuhong
 * @LastEditTime: 2021/10/20
-->
<template>
  <div>
    <b-card no-body class="o-hidden spza_tileWrapper">
      <div class="card-header p-0 text-center">
        <!-- <img class="img-responsive" :src="service.serviceImage" /> -->
        <a class="tileLink" href="#" tabindex="-1">
          <div aria-hidden="true">
            <div class="topBackground">
              <svg xmlns="https://www.w3.org/2000/svg" aria-hidden="true">
                <filter id="blurBg">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="50" />
                </filter>
                <image
                  aria-hidden="true"
                  tabindex="-1"
                  width="400"
                  height="400"
                  xmlns:xlink="https://www.w3.org/1999/xlink"
                  :href="imgUrl + imgName"
                  filter="url(#blurBg)"
                ></image>
              </svg>
            </div>
          </div>
          <div class="tileThumbnail">
            <div>
              <img class="thumbnail ready" :src="imgUrl + imgName" alt="MathType icon" />
            </div>
          </div>
        </a>
      </div>
      <b-card-body>
        <h3 class="card-title text-capitalize font-weight-bold h44px text-left">
          {{title}}
        </h3>
        <p class="card-text text-left h150px text-left">
          {{summary}}
        </p>
      </b-card-body>
      <b-card-footer class="text-center">
        <b-button variant="outline-primary ">立即获取</b-button>
      </b-card-footer>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    summary: String,
    imgName: String
  },
  metaInfo: {
    title: "About us",
  },
  data() {
    return {
      imgUrl:
        "https://libs.websoft9.com/Websoft9/awsicon/",
    };
  },
};
</script>
<style scoped>
.spza_tileWrapper {
  height: 100%;
  width: 100%;
  position: relative;
  cursor: pointer;
  color: #a0a0a0;
  -webkit-box-shadow: 0 1.6px 3.6px 0 rgba(0, 0, 0, 0.132),
    0 0.3px 0.9px 0 rgba(0, 0, 0, 0.108);
  box-shadow: 0 1.6px 3.6px 0 rgba(0, 0, 0, 0.132),
    0 0.3px 0.9px 0 rgba(0, 0, 0, 0.108);
  text-align: center;
  -webkit-transition: border 0.5s, -webkit-box-shadow 0.5s;
  transition: border 0.5s, -webkit-box-shadow 0.5s;
  transition: box-shadow 0.5s, border 0.5s;
  transition: box-shadow 0.5s, border 0.5s, -webkit-box-shadow 0.5s;
  display: inline-block;
  line-height: 1.1em;
}
.spza_tileWrapper:hover,
.spza_tileWrapper:focus {
  -webkit-box-shadow: 0 3.2px 7.2px 0 rgba(0, 0, 0, 0.132),
    0 0.6px 1.8px 0 rgba(0, 0, 0, 0.108);
  box-shadow: 0 3.2px 7.2px 0 rgba(0, 0, 0, 0.132),
    0 0.6px 1.8px 0 rgba(0, 0, 0, 0.108);
  text-decoration: none;
  color: #a0a0a0;
}
.spza_tileWrapper:hover .topBackground,
.spza_tileWrapper:focus .topBackground {
  opacity: 0.8;
}
.spza_tileWrapper .topBackground {
  height: 68px;
  width: 100%;
  -webkit-transition: opacity 0.25s;
  transition: opacity 0.25s;
  opacity: 0.1;
  overflow: hidden;
  color: transparent;
}
.spza_tileWrapper .topBackground > svg {
  position: relative;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
}
.spza_tileWrapper .tileThumbnail {
  width: 48px;
  height: 48px;
  z-index: 2;
  left: 10px;
  top: 10px;
  position: absolute;
  background-color: transparent;
  display: table;
}
.spza_tileWrapper .tileThumbnail .thumbnail {
  max-width: 48px;
  max-height: 48px;
  font-size: 1px;
  margin-left: 2px;
}
.h150px {
  height: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.h44px {
  height: 44px;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>