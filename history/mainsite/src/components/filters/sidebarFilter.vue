<!--
 * @FileDescription: Banner 侧栏筛选组件
 * @Author: Websoft9
 * @Date: 2021/10/20
 * @LastEditors: wuhong
 * @LastEditTime: 021/10/20
-->

<template>
  <div class="filterPaneContainer rounded">
    <div class="filterPane p-24">
      <div>
        <a href="#" @click="allOnClick"><h3 class="font-weight-bold mb-4">All</h3></a>
      </div>
      <div>
        <div v-for="(item, index) in sidebarMenus" :key="index">
          <a @click="menuOnclicked(item, index)" href="#"
            ><h6 :class="isActiveIndex == index ? 'mb-24 textStrong': 'mb-24'">
              {{ item.title }}
              <b v-show="isActiveIndex == index">></b>
            </h6></a
          >
          <b-container class="mb-24" v-show="isActiveIndex == index">
            <b-row v-for="(child, k) in item.childMenus" :key="k" class="ml-8"
              ><a href="#" @click="childMenuOnclicked(child,k)" ><h6 :class="childActiveIndex == k ? 'textStrong': ''">{{ child.node.title }}</h6></a></b-row
            >
          </b-container>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sidebarFilter",
  props: {
    sidebarMenus: Array,
  },
  data() {
    return {
      isActiveIndex: -1, // 激活索引
      childActiveIndex: -1, // 子菜单激活索引
    };
  },
  methods: {
    // 单击二级菜单
    menuOnclicked(e, index) {
      this.isActiveIndex = index;
      this.childActiveIndex = -1;
      let params = {
        "title": e.title,
        "level": 2
      }
      this.$emit('onClicked',params);
    },
    // 单击三级菜单
    childMenuOnclicked(e,index) {
      console.log(e.node.title);
      this.childActiveIndex = index;
      let params = {
        "title": e.node.title,
        "level": 3
      }
      this.$emit('onClicked',params);
    },
    // 查询所有
    allOnClick() {
      this.childActiveIndex = -1;
      this.isActiveIndex = -1;
      let params = {
        "title": 'All',
        "level": 1
      }
      this.$emit('onClicked',params);
    }
  },
};
</script>

<style scoped>
.filterPaneContainer {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  background-color: #faf9f8;
  width: 100%;
}
.filterPaneContainer .filterPane {
  padding: 0 16px;
  height: 100%;
}
.textStrong {
    font-weight: 600;
}
</style>
