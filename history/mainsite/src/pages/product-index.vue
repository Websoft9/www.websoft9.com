<!--
 * @FileDescription: 产品首页
 * @Author: Websoft9
 * @Date: 2021/10/2
 * @LastEditors: bobi
 * @LastEditTime: 2021/11/2
 -->

<template>
  <div class="">
    <dx-header></dx-header>
    <dx-product
      :title="productsTitle"
      :describe="productsDescribe"
    ></dx-product>
    <section class="product_wrap p-t-b-60">
      <b-container>
        <b-row>
          <b-col md="3" class="section-header mb-4">
            <dx-sidebar-filter
              :sidebarMenus="sliderMenus"
              @onClicked="filterMenuOnClick"
            ></dx-sidebar-filter>
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
                            <label for=""> {{ contentfulCloud.title }} </label>
                            <div class="drop-select">
                              <b-form-select
                                v-model="cloudSelected"
                                :options="cloudOptions"
                                class="form-control"
                              ></b-form-select>
                              <div
                                class="drop-select-clear"
                                v-if="cloudSelected"
                                @click="selectClearOnClick(0)"
                              >
                                <b-icon-x-circle-fill
                                  class="icon-clear"
                                ></b-icon-x-circle-fill>
                              </div>
                            </div>
                          </div>
                        </b-col>
                        <b-col md="6" lg="3" sm="6">
                          <div class="form-group mb-4">
                            <label for="">
                              {{ contentfulDelivery.title }}
                            </label>
                            <div class="drop-select">
                              <b-form-select
                                v-model="deliverySelected"
                                :options="deliveryOptions"
                                class="form-control"
                              ></b-form-select>
                              <div
                                class="drop-select-clear"
                                v-if="deliverySelected"
                                @click="selectClearOnClick(1)"
                              >
                                <b-icon-x-circle-fill
                                  class="icon-clear"
                                ></b-icon-x-circle-fill>
                              </div>
                            </div>
                          </div>
                        </b-col>
                        <b-col md="6" lg="3" sm="6">
                          <div class="form-group mb-4">
                            <label for=""> OS </label>
                            <div class="drop-select">
                              <b-form-select
                                v-model="osSelected"
                                :options="osModelOptions"
                                class="form-control"
                              ></b-form-select>
                              <div
                                class="drop-select-clear"
                                v-if="osSelected"
                                @click="selectClearOnClick(2)"
                              >
                                <b-icon-x-circle-fill
                                  class="icon-clear"
                                ></b-icon-x-circle-fill>
                              </div>
                            </div>
                          </div>
                        </b-col>
                        <b-col md="6" lg="3" sm="6">
                          <div class="form-group mb-4">
                            <label> {{ contentfulPrice.title }} </label>
                            <div class="drop-select">
                              <b-form-select
                                v-model="priceSelected"
                                :options="priceOptions"
                                class="form-control"
                              ></b-form-select>
                              <div
                                class="drop-select-clear"
                                v-if="priceSelected"
                                @click="selectClearOnClick(3)"
                              >
                                <b-icon-x-circle-fill
                                  class="icon-clear"
                                ></b-icon-x-circle-fill>
                              </div>
                            </div>
                          </div>
                        </b-col>
                      </b-row>
                    </b-container>
                  </form>
                </b-col>
              </b-row>
              <b-row>
                <b-col md="6" lg="3" sm="6" class="mb-4" align-self="end">
                  <b-button
                    variant="primary"
                    block
                    class="btn-gradient"
                    @click="searchOnClick"
                    >搜索</b-button
                  >
                </b-col>
                <b-col md="6" lg="3" sm="6" class="mb-4" align-self="end">
                  <b-button variant="outline-light" @click="resetOnclick" block
                    >重置</b-button
                  >
                </b-col>
              </b-row>
              <div v-if="!isSearched">
                <b-row>
                  <b-col class="mb-4"><h4>Featured</h4></b-col>
                </b-row>
                <b-row>
                  <b-col
                    md="6"
                    lg="4"
                    sm="6"
                    class="mb-4"
                    v-for="(item, index) in featuredProductList"
                    :key="index"
                  >
                    <dx-product-card
                      v-if="index < 6"
                      :title="item.node.title"
                      :summary="item.node.summary"
                      :imgName="item.node.key + '-aws-websoft9.png'"
                    >
                    </dx-product-card>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col class="mb-4"><h4>Hot</h4></b-col>
                </b-row>
                <b-row>
                  <b-col
                    md="6"
                    lg="4"
                    sm="6"
                    class="mb-4"
                    v-for="(item, index) in hotPruductList"
                    :key="index"
                  >
                    <dx-product-card
                      v-if="index < 6"
                      :title="item.node.title"
                      :summary="item.node.summary"
                      :imgName="item.node.key + '-aws-websoft9.png'"
                    >
                    </dx-product-card>
                  </b-col>
                </b-row>
              </div>
              <div v-if="isSearched && searchLoading">
                <b-spinner variant="primary" label="Spinning"></b-spinner>
              </div>
              <div v-if="isSearched && !searchLoading">
                <b-row>
                  <b-col class="mb-4"
                    ><h4>
                      {{ catLogTitle }} 搜索结果({{
                        searchAllResultList.length
                      }})
                    </h4></b-col
                  >
                </b-row>
                <b-row v-if="searchResultList.length == 0">
                  <b-col class="text-center mb-4"><h5>暂无数据</h5></b-col>
                </b-row>
                <b-row>
                  <b-col
                    md="6"
                    lg="4"
                    sm="6"
                    class="mb-4"
                    v-for="(item, index) in searchResultList"
                    :key="index"
                  >
                    <dx-product-card
                      :title="item.node.title"
                      :summary="item.node.summary"
                      :imgName="item.node.key + '-aws-websoft9.png'"
                    >
                    </dx-product-card>
                  </b-col>
                </b-row>
              </div>
              <b-row v-if="searchResultList.length > 0">
                <b-col>
                  <div>
                    <b-pagination
                      v-model="currentPage"
                      :total-rows="totalPage"
                      per-page="1"
                      first-number
                      align="center"
                      @change="pageOnChange"
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
import Header from "@/components/common/Header.vue"; // 头部
import productCard from "@/components/cards/productCard.vue"; // 产品卡
export default {
  metaInfo: {
    title: "网久产品官网",
    bodyAttrs: {
      //class: ["landing-teal"], // 官网主题控制
    },
  },
  components: {
    dxProduct: introProduct,
    dxBannerHorizontalScreen: bannerHorizontalScreen,
    dxSidebarFilter: sidebarFilter,
    dxHeader: Header,
    dxProductCard: productCard,
  },
  // 页面创建
  created() {
    this.initData();
  },
  computed: {
    // 过滤器数据源二级数据
    sidebarFilterDataSourceLeve2() {
      return this.$page.allContentfulBaseCatalog.edges.filter((post) => {
        return (
          post.node.catalog.length > 0 && post.node.catalog[0].key == "product"
        );
      });
    },
    // 过滤器数据源三级数据
    sidebarFilterDataSourceLeve3(parentKey) {
      consoel.log("父级key=>", parentKey);
    },
  },
  // 数据
  data() {
    return {
      productsTitle: "浏览应用",
      productsDescribe: "对优惠进行筛选和排序，优化结果。",
      sliderMenus: [], // 菜单数据
      bannerTitle: "立即获取适合的应用",
      bannerDescription:
        "使用针对各种行业和业务需求度身定制的应用解决挑战 — 立即开始推动创新和生产力。",
      selected: null,
      isSearched: false, // 是否搜索状态
      options: [
        { value: null, text: "全部" },
        { value: "a", text: "your value，for DB" },
        { value: "b", text: "your value，for DB" },
        { value: { C: "3PO" }, text: "your value，for DB" },
        { value: "d", text: "This one is disabled", disabled: true },
      ],
      cloudOptions: [], // Cloud选项值
      contentfulCloud: {}, // Cloud实体
      cloudSelected: null, // Cloud选择值
      contentfulDelivery: {}, // Delivery实体
      deliveryOptions: [], // Delivery选项值
      deliverySelected: null, // Delivery选择值
      contentfulPrice: {}, // Price实体
      priceOptions: [], // Price选项值
      priceSelected: null, // Price选择值
      featuredProductList: [], // Feature实体数据
      hotPruductList: [], // Hot产品实体数据
      searchResultList: [], // 搜索结果
      searchAllResultList: [], // 所有的搜索结果
      searchLoading: false, // 搜索加载
      osModelOptions: [
        { value: "Windows", text: "Windows" },
        { value: "Linux", text: "Linux" },
      ],
      osSelected: null,
      totalPage: 1, // 总页数
      currentPage: 0, // 当前页码
      catLogTitle: "All", // 分类标题
      catLogLevel: 1, // 分类级别
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
      ],
    };
  },
  // 方法
  methods: {
    // 初始数据
    initData() {
      if (this.$page) {
        this.getSidebarMenus("product");
        // 获取Cloud实体
        if (this.$page.allContentfulCloud) {
          this.contentfulCloud = this.$page.allContentfulCloud.edges[0].node;
          this.contentfulCloud.platform.map((item, index) => {
            this.cloudOptions.push({ value: item, text: item });
          });
        }
        // 获取ContentfulDelivery
        if (this.$page.allContentfulBaseDelivery) {
          this.contentfulDelivery =
            this.$page.allContentfulBaseDelivery &&
            this.$page.allContentfulBaseDelivery.edges[0].node;
          this.contentfulDelivery.productType.map((item, index) => {
            this.deliveryOptions.push({ value: item, text: item });
          });
        }
        // 获取ContentfulPrice
        if (this.$page.allContentfulBasePrice) {
          this.contentfulPrice = this.$page.allContentfulBasePrice.edges[0].node;
          this.contentfulPrice.priceModel.map((item, index) => {
            this.priceOptions.push({ value: item, text: item });
          });
        }
        // 获取Featured Product
        if (this.$page.allContentfulProduct) {
          this.featuredProductList =
            this.$page.allContentfulProduct.edges.filter((item) => {
              return item.node.featured == true;
            });
          console.log(this.featuredProductList);
        }
        // 获取Hot Product
        if (this.$page.allContentfulProduct) {
          this.hotPruductList = this.$page.allContentfulProduct.edges;
        }
      }
    },
    // 查询侧栏菜单数据
    getSidebarMenus(levelKey) {
      let resultList = this.getCataLog(levelKey);
      for (var i = 0; i < resultList.length; i++) {
        let item = {
          title: resultList[i].node.title,
          childMenus: this.getCataLog(resultList[i].node.key),
        };
        this.sliderMenus.push(item);
      }
      console.log(this.sliderMenus);
    },
    // 查询cataLog 数据
    getCataLog(levelKey) {
      let resultList = [];
      if (this.$page.allContentfulBaseCatalog) {
        resultList = this.$page.allContentfulBaseCatalog.edges.filter((post) => {
          return (
            post.node.catalog.length > 0 && post.node.catalog[0].key == levelKey
          );
        });
      }
      return resultList;
    },
    // 重置
    resetOnclick() {
      this.cloudSelected = null;
      this.deliverySelected = null;
      this.osSelected = null;
      this.priceSelected = null;
      this.isSearched = false;
    },
    // 清空
    selectClearOnClick(i) {
      if (i == 0) {
        this.cloudSelected = null;
      }
      if (i == 1) {
        this.deliverySelected = null;
      }
      if (i == 2) {
        this.osSelected = null;
      }
      if (i == 3) {
        this.priceSelected = null;
      }
    },
    // 搜索
    searchOnClick() {
      this.search();
    },
    // 判断是否符合查询条件
    meetConditions(filterList, item) {
      let reslut = true;
      for (var i = 0; i < filterList.length; i++) {
        if (item) {
          if (item[filterList[i].name].indexOf(filterList[i].value) == -1) {
            reslut = false;
            break;
          }
        }
      }
      return reslut;
    },
    // 获取分页数据
    getPaginationList() {
      this.currentPage = this.currentPage + 1;
      this.searchResultList = this.pagination(
        12,
        this.currentPage,
        this.searchAllResultList
      );
    },
    // js数组分页
    pagination(pageSize, currentPage, arr) {
      var skipNum = (currentPage - 1) * pageSize;
      var newArr =
        skipNum + pageSize >= arr.length
          ? arr.slice(skipNum, arr.length)
          : arr.slice(skipNum, skipNum + pageSize);
      return newArr;
    },
    // 切换分页
    pageOnChange(i) {
      this.searchResultList = this.pagination(12, i, this.searchAllResultList);
      console.log(i);
    },
    // 菜单单击
    filterMenuOnClick(e) {
      this.catLogTitle = e.title;
      this.catLogLevel = e.level;
      this.search();
    },
    // 查询
    search(){
      this.isSearched = true;
      this.searchAllResultList = [];
      this.searchLoading = true;
      let filterList = [];
      if (this.cloudSelected) {
        filterList.push({
          name: "cloud",
          value: this.cloudSelected,
        });
      }
      if (this.deliverySelected) {
        filterList.push({
          name: "delivery",
          value: this.deliverySelected,
        });
      }
      if (this.osSelected) {
        filterList.push({
          name: "os",
          value: this.osSelected,
        });
      }
      this.meetConditions(filterList);
      let edgesList = [];
      if (this.$page.allContentfulProduct) {
        for (let i in this.$page.allContentfulProduct.edges) {
          let node = this.$page.allContentfulProduct.edges[i].node;
          let catLog = node.catalog;
          let threeCatLogTitle = null;
          if (catLog) {
            // 查询3级分类
            if (this.catLogLevel == 3) {
              if (catLog.length > 0) {
                threeCatLogTitle = catLog[0].title;
                if (threeCatLogTitle == this.catLogTitle) {
                  edgesList.push(this.$page.allContentfulProduct.edges[i]);
                }
              }
            }
            // 查询2级分类
            if (this.catLogLevel == 2) {
              if (catLog.length > 0) {
                let twoCatLog = catLog[0].catalog;
                if (twoCatLog) {
                  if (twoCatLog.length > 0) {
                    let towCatLogTitle = twoCatLog[0].title;
                    if (towCatLogTitle == this.catLogTitle) {
                      edgesList.push(this.$page.allContentfulProduct.edges[i]);
                    }
                  }
                }
              }
            }
            // 查询1级分类
            if(this.catLogLevel == 1) {
               edgesList.push(this.$page.allContentfulProduct.edges[i]);
            }
          }
        }
      }
      let res = false;
      for (let i in edgesList) {
        res = this.meetConditions(filterList, edgesList[i].node);
        if (res == true) {
          this.searchAllResultList.push(edgesList[i]);
        }
      }
      this.searchLoading = false;
      this.currentPage = 0;
      this.getPaginationList();
      this.totalPage = Math.ceil(this.searchAllResultList.length / 12);
    }
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
.drop-select {
  position: relative;
}
.drop-select-clear {
  position: absolute;
  top: 5px;
  right: 5px;
}
.icon-clear {
  color: #bbb;
  cursor: pointer;
}
</style>

<page-query>
query {
  allContentfulBaseCatalog {
    edges {
      node {
        id
        title,
        date,
        createdAt,
        updatedAt,
        locale,
        key,
        overview,
        top,
        description,
        catalog{
          key
          title
          description
        }
      }
    }
  }
  allContentfulCloud {
    edges {
      node {
        id,
        title,
        platform
      }
    }
  }
  allContentfulBaseDelivery {
    edges {
      node {
        id,
        title,
        productType,
        key
      }
    }
  }
  allContentfulBasePrice {
    edges {
      node {
        id,
        title,
        priceModel
      }
    }
  }
  allContentfulProduct(sortBy:"hot",order: DESC){
    edges {
      node {
        id,
        title,
        key,
        summary,
        review,
        featured,
        hot,
        delivery,
        description,
        cloud,
        delivery,
        os,
        catalog {
          id,
          title,
          catalog {
            id,
            title,
            catalog {
              id,
              title
            }
          }
        }
      }
    }
  }
}
</page-query>
