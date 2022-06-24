<template>
  <ChineseLayout>
    <Banner></Banner>
    <Feature></Feature>
    <Clouds></Clouds>
  </ChineseLayout>
</template>

<script>
import ChineseLayout from '~/layouts/Chinese.vue'
import Banner from '~/components/cn/Banner.vue'
import Feature from '~/components/en/Feature.vue'
import Clouds from '~/components/cn/Clouds.vue'

export default {

  metaInfo: {
    title: '首页'
  },

  components: {
    ChineseLayout,
    Banner,
    Clouds

  }
}
</script>