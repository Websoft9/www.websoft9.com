<template>
  <ChineseLayout>
    <Banner></Banner>
    <Feature></Feature>
    <Clouds></Clouds>
  </ChineseLayout>
</template>

<script>
import ChineseLayout from '~/layouts/English.vue'
import Banner from '~/components/en/Banner.vue'
import Feature from '~/components/en/Feature.vue'
import Clouds from '~/components/en/Clouds.vue'

export default {

  metaInfo: {
    title: 'Cloud native application for Open source software'
  },

  components: {
    ChineseLayout,
    Banner,
    Clouds,
    Feature
  }
}
</script>