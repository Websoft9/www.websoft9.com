<template>
  <div class="">
    <dx-product
      :title="productsTitle"
      :describe="productsDescribe"
    ></dx-product>
    <section class="product_wrap p-t-b-80">
      <b-container>
        <b-row>
          <b-col md="3" class="section-header mb-4">
            <dx-sidebar-filter :sidebarMenus="sliderMenus"></dx-sidebar-filter>
          </b-col>
          <b-col md="9" class="section-header">
            <b-container>
              <b-row class="mb-4">
                <dx-banner-horizontal-screen
                  :title="bannerTitle"
                  :description="bannerDescription"
                ></dx-banner-horizontal-screen>
              </b-row>
              <b-row>
                <b-col>
                  <form class="form row">
                    <b-container>
                      <b-row>
                        <b-col md="6" lg="3" sm="6">
                          <div class="form-group mb-4">
                            <label for=""> 试用 </label>
                            <b-form-select
                              v-model="selected"
                              :options="options"
                              class="form-control"
                            ></b-form-select>
                          </div>
                        </b-col>
                        <b-col md="6" lg="3" sm="6">
                          <div class="form-group mb-4">
                            <label for=""> 操作系统 </label>
                            <b-form-select
                              v-model="selected"
                              :options="options"
                              class="form-control"
                            ></b-form-select>
                          </div>
                        </b-col>
                        <b-col md="6" lg="3" sm="6">
                          <div class="form-group mb-4">
                            <label for=""> 未知 </label>
                            <b-form-select
                              v-model="selected"
                              :options="options"
                              class="form-control"
                            ></b-form-select>
                          </div>
                        </b-col>
                        <b-col md="6" lg="3" sm="6">
                          <div class="form-group mb-4">
                            <label for=""> 价格模型 </label>
                            <b-form-select
                              v-model="selected"
                              :options="options"
                              class="form-control"
                            ></b-form-select>
                          </div>
                        </b-col>
                      </b-row>
                    </b-container>
                  </form>
                </b-col>
              </b-row>
              <b-row>
                <b-col md="6" lg="3" sm="6">
                  <div class="form-group mb-4">
                    <label for=""> 产品类型 </label>
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control"
                    ></b-form-select>
                  </div>
                </b-col>
                <b-col md="6" lg="3" sm="6" class="mb-4" align-self="end">
                  <b-button variant="primary" block class="btn-gradient"
                    >搜索</b-button
                  >
                </b-col>
                <b-col md="6" lg="3" sm="6" class="mb-4" align-self="end">
                  <b-button variant="outline-light" block>重置</b-button>
                </b-col>
              </b-row>
              <b-row>
                <b-col class="mb-4"><h4>A+ 机器学习</h4></b-col>
              </b-row>
              <b-row>
                <b-col
                  md="6"
                  lg="4"
                  sm="6"
                  class="mb-4"
                  v-for="(service, index) in services"
                  :key="index"
                >
                  <b-card no-body class="o-hidden">
                    <div class="card-header p-0 text-center">
                      <img class="img-responsive" :src="service.serviceImage" />
                    </div>
                    <b-card-body>
                      <h3 class="card-title text-capitalize font-weight-bold">
                        {{ service.serviceName }}
                      </h3>
                      <p class="card-text">{{ service.serviceText }}</p>
                    </b-card-body>
                    <b-card-footer class="text-center">
                      <b-button
                        variant="outline-primary "
                        class="btn-user-gradient"
                        >立即获取</b-button
                      >
                    </b-card-footer>
                  </b-card>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <div>
                    <b-pagination
                      v-model="currentPage"
                      total-rows="100"
                      per-page="1"
                      first-number
                      align="center"
                    ></b-pagination>
                  </div>
                </b-col>
              </b-row>
            </b-container>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
import introProduct from "@/components/intros/introProduct.vue"; // 介绍标题
import bannerHorizontalScreen from "@/components/banners/bannerHorizontalScreen.vue"; //  横屏banner
import sidebarFilter from "@/components/filters/sidebarFilter.vue"; // 侧栏筛选器


export default {
  metaInfo: {
    title: "网久产品官网",
    bodyAttrs: {
      // class: ["landing-blue"], // 官网主题控制
    },
  },
  components: {
    dxProduct: introProduct,
    dxBannerHorizontalScreen: bannerHorizontalScreen,
    dxSidebarFilter: sidebarFilter,
  },
  data() {
    return {
      productsTitle: "产品应用",
      productsDescribe: "查找与搜索应用",
      sliderMenus: [
        { title: "区块链" },
        { title: "计算" },
        { title: "容器" },
        { title: "数据库" },
        { title: "开发人员工具" },
        { title: "AI 机器学习" },
      ],
      bannerTitle: "立即获取适合的应用",
      bannerDescription:
        "使用针对各种行业和业务需求度身定制的应用解决挑战 — 立即开始推动创新和生产力。",
      currentPage: 2,
      selected: null,
      options: [
        { value: null, text: "全部" },
        { value: "a", text: "your value，for DB" },
        { value: "b", text: "your value，for DB" },
        { value: { C: "3PO" }, text: "your value，for DB" },
        { value: "d", text: "This one is disabled", disabled: true },
      ],
      services: [
        {
          serviceImage: require("@/assets/images/landing/services/services16.svg"),
          serviceName: "产品标题",
          serviceText: "这是产品描述。介绍这个产品的主要功能",
        },
        {
          serviceImage: require("@/assets/images/landing/services/services16.svg"),
          serviceName: "产品标题",
          serviceText: "这是产品描述。介绍这个产品的主要功能",
        },
        {
          serviceImage: require("@/assets/images/landing/services/services16.svg"),
          serviceName: "产品标题",
          serviceText: "这是产品描述。介绍这个产品的主要功能",
        },
        {
          serviceImage: require("@/assets/images/landing/services/services16.svg"),
          serviceName: "产品标题",
          serviceText: "这是产品描述。介绍这个产品的主要功能",
        },
        {
          serviceImage: require("@/assets/images/landing/services/services16.svg"),
          serviceName: "产品标题",
          serviceText: "这是产品描述。介绍这个产品的主要功能",
        },
        {
          serviceImage: require("@/assets/images/landing/services/services16.svg"),
          serviceName: "产品标题",
          serviceText: "这是产品描述。介绍这个产品的主要功能",
        },
        {
          serviceImage: require("@/assets/images/landing/services/services16.svg"),
          serviceName: "产品标题",
          serviceText: "这是产品描述。介绍这个产品的主要功能",
        },
        {
          serviceImage: require("@/assets/images/landing/services/services16.svg"),
          serviceName: "产品标题",
          serviceText: "这是产品描述。介绍这个产品的主要功能",
        },
      ],
    };
  },
};
</script>

<style scoped>
.product_wrap {
  overflow: hidden;
}

.btn-user-gradient {
  border: 0px solid rgba(193, 15, 65, 0.8);
  /*color: #ffffff;*/
  /*background-color: #5252d4;*/
}
</style>
