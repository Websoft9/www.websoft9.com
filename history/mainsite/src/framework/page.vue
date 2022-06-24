<template>
  <ChineseLayout>
  <Banner></Banner>
  </ChineseLayout>
</template>

<script>
import BackToTop from 'vue-backtotop'
import ChineseLayout from '~/layouts/Chinese.vue'
import Banner from '~/components/cn/Banner.vue'

export default {

  metaInfo: {
    title: '关于'
  },

  components: {
    ChineseLayout,
    Banner
  }
}
</script>