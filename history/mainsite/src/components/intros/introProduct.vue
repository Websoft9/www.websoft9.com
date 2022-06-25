<!--
 * @FileDescription: Banner 产品标题组件
 * @Author: Websoft9
 * @Date: 2021/10/20
 * @LastEditors: wuhong
 * @LastEditTime: 021/10/20
-->

<template>
  <section
    id="intro-wrap"
    class="intro-wrap text-left "
  >
    <b-container>
      <b-row>
        <b-col md="6" class="intro-nine-LeftSection pb-3">
          <h2 class="font-weight-bold  mb-3">
            {{ $t('productIndexTitle') }}
          </h2>
          <p class="mb-4">
            {{ $t('productIndexTitleDescribe')  }}
          </p>
        </b-col>
      </b-row>
    </b-container>
    <!-- <div class="overlay"></div> -->
  </section>
</template>

<script>
export default {
  name: "introProductMenu",
  props: {
    title: String, // 标题
    describe: String, // 描述
  },
};
</script>

<style scoped>
.intro-wrap {
  padding-top: 130px;
}
</style>
