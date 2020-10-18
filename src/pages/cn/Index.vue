<template>
  <ChineseLayout>
    <Banner></Banner>
  </ChineseLayout>
</template>

<script>
import ChineseLayout from '~/layouts/Chinese.vue'
import Banner from '~/components/cn/Banner.vue'

export default {

  metaInfo: {
    title: '首页'
  },

  components: {
    ChineseLayout,
    Banner
  }
}
</script>